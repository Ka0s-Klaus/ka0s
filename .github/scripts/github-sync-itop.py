import os
import json
import sys
import re
from datetime import datetime

import requests


def env(name, default=None, required=False):
    val = os.environ.get(name, default)
    if required and (val is None or str(val).strip() == ""):
        raise RuntimeError(f"Missing required env: {name}")
    return val


def itop_call(base_url, user, password, payload):
    url = f"{base_url.rstrip('/')}/webservices/rest.php?version=1.3"
    try:
        r = requests.post(
            url,
            auth=(user, password),
            data={"json_data": json.dumps(payload)},
            timeout=15,
            verify=False,  # iTop suele usar TLS autosignado en entornos lab
        )
    except requests.RequestException as e:
        return {"status": "error", "error": f"HTTP error: {str(e)}", "payload": payload}

    try:
        data = r.json()
    except Exception:
        return {"status": "error", "error": f"Non-JSON response: {r.text}", "payload": payload}

    if r.status_code != 200 or data.get("code") not in (0, "0", None):
        return {"status": "error", "http": r.status_code, "response": data, "payload": payload}
    return {"status": "ok", "response": data}


def map_priority(val):
    if not val:
        return None
    v = str(val).strip().lower()
    if v in ("baja", "low"):  # 1
        return 1
    if v in ("media", "medium"):  # 2
        return 2
    if v in ("alta", "high"):  # 3
        return 3
    # fallback
    try:
        return int(v)
    except Exception:
        return None


def map_impact(val):
    if not val:
        return None
    v = str(val).strip().lower()
    if v in ("persona", "person", "user"):
        return 1
    if v in ("servicio", "service"):
        return 2
    if v in ("empresa", "business", "company"):
        return 3
    return map_priority(v)


def map_origin(val):
    if not val:
        return None
    v = str(val).strip().lower()
    if v in ("portal",):
        return "portal"
    if v in ("telefono", "teléfono", "phone"):
        return "phone"
    if v in ("email", "correo", "mail"):
        return "mail"
    return None


def resolve_caller(itop_url, itop_user, itop_pass, raw_requester):
    if not raw_requester:
        return None
    name = raw_requester.lstrip("@").strip()
    if not name:
        return None
    safe_name = name.replace("'", "\\'")
    oql = f"SELECT Person WHERE friendlyname = '{safe_name}'"
    payload = {
        "operation": "core/get",
        "class": "Person",
        "key": oql,
        "output_fields": "id,friendlyname",
    }
    resp = itop_call(itop_url, itop_user, itop_pass, payload)
    if resp.get("status") != "ok":
        return None
    objects = resp.get("response", {}).get("objects", {}) or {}
    if not objects:
        return None
    first = next(iter(objects.values()))
    fields = first.get("fields", {}) or {}
    person_id = fields.get("id")
    if not person_id:
        return None
    return int(person_id) if str(person_id).isdigit() else person_id


def detect_type(labels):
    lset = {l.lower() for l in labels}
    if "itop-incident" in lset:
        return "Incident"
    if "itop-problem" in lset:
        return "Problem"
    if "itop-change" in lset:
        return "Change"
    if "itop-request" in lset:
        return "UserRequest"
    # default to UserRequest
    return "UserRequest"


def build_marker(owner_repo, issue_number):
    return f"[GH:#{issue_number} {owner_repo}]"


def extract_fields_from_body(body_text):
    fields = {}
    if not body_text:
        return fields
    m = re.search(r"(?im)^###\s*Organizaci[óo]n\s*\n+([\s\S]*?)(\n###|$)", body_text)
    if m:
        fields["organization"] = m.group(1).strip()
    m = re.search(r"(?im)^###\s*Solicitante.*\n+([\s\S]*?)(\n###|$)", body_text)
    if m:
        fields["requester"] = m.group(1).strip()
    m = re.search(r"(?im)^###\s*Origen\s*\n+([\s\S]*?)(\n###|$)", body_text)
    if m:
        fields["origin"] = m.group(1).strip()
    m = re.search(r"(?im)^###\s*Impacto\s*\n+([\s\S]*?)(\n###|$)", body_text)
    if m:
        fields["impact"] = m.group(1).strip()
    m = re.search(r"(?im)^###\s*Urgencia\s*\n+([\s\S]*?)(\n###|$)", body_text)
    if m:
        fields["urgency"] = m.group(1).strip()
    m = re.search(r"(?im)^###\s*Prioridad\s*\n+([\s\S]*?)(\n###|$)", body_text)
    if m:
        fields["priority"] = m.group(1).strip()
    m = re.search(r"(?im)^Servicio\s*\/\s*CI\s*.*\n+([\s\S]*?)(\n###|$)", body_text)
    if m:
        fields["service"] = m.group(1).strip()
    return fields


def main():
    itop_url = env("ITOP_URL", required=True)
    itop_user = env("ITOP_API_USER", required=True)
    itop_pass = env("ITOP_API_PASSWORD", required=True)
    itop_origin = env("ITOP_ORIGIN", default=None)

    event_name = env("GITHUB_EVENT_NAME", required=True)
    event_action = env("GITHUB_EVENT_ACTION", required=True)
    issue_payload = env("GITHUB_ISSUE_PAYLOAD")
    comment_payload = env("GITHUB_COMMENT_PAYLOAD")
    repo_full = env("GITHUB_REPO_FULL_NAME", required=True)

    result = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "github_event": event_name,
        "github_action": event_action,
        "github_repo": repo_full,
    }

    issue = None
    if issue_payload:
        try:
            issue = json.loads(issue_payload)
        except Exception:
            pass

    comment = None
    if comment_payload:
        try:
            comment = json.loads(comment_payload)
        except Exception:
            pass

    if event_name not in ("issues", "issue_comment"):
        result.update({"status": "skipped", "reason": "unsupported_event"})
        print(json.dumps(result, indent=2))
        return

    if event_name == "issues" and not issue:
        result.update({"status": "skipped", "reason": "no_issue_payload"})
        print(json.dumps(result, indent=2))
        return

    # Common identifiers
    if issue:
        issue_number = issue.get("number")
        issue_title = issue.get("title") or "(sin título)"
        issue_body = issue.get("body") or ""
        issue_html_url = issue.get("html_url") or f"https://github.com/{repo_full}/issues/{issue_number}"
        labels = [lbl.get("name", "") for lbl in issue.get("labels", [])]
    else:
        # issue_comment events also bring issue
        issue_number = None
        issue_title = None
        issue_body = None
        issue_html_url = None
        labels = []

    itop_class = detect_type(labels)
    marker = build_marker(repo_full, issue_number) if issue_number else None

    parsed = extract_fields_from_body(issue_body or "")
    impact_val = map_impact(parsed.get("impact")) if parsed.get("impact") else None
    urgency_val = map_priority(parsed.get("urgency") or parsed.get("priority")) if (parsed.get("urgency") or parsed.get("priority")) else None
    origin_val = map_origin(parsed.get("origin")) if parsed.get("origin") else None

    summary_parts = []
    if issue_title:
        summary_parts.append(f"Resumen: {issue_title}")
    if parsed.get("organization"):
        summary_parts.append(f"Organizacion: {parsed.get('organization')}")
    if parsed.get("requester"):
        summary_parts.append(f"Solicitante: {parsed.get('requester')}")
    if parsed.get("origin"):
        summary_parts.append(f"Origen: {parsed.get('origin')}")
    if parsed.get("impact"):
        summary_parts.append(f"Impacto: {parsed.get('impact')}")
    if parsed.get("urgency"):
        summary_parts.append(f"Urgencia: {parsed.get('urgency')}")

    summary_block = "\n".join(summary_parts).strip()
    description_extra = (
        "\n\n---\nOrigen: GitHub\n"
        f"Issue: {issue_html_url}\n"
        f"Repo: {repo_full}\n"
    )
    body_block = (issue_body or "").strip()
    final_description = (
        (summary_block + "\n\n---\n" if summary_block else "")
        + "Descripcion original (GitHub):\n\n"
        + body_block
        + description_extra
    )

    # Helper to find existing ticket by marker in description
    def find_existing_by_marker():
        if not marker:
            return None
        oql = f'SELECT {itop_class} WHERE title LIKE "%{marker}%"'
        payload = {
            "operation": "core/get",
            "class": itop_class,
            "key": oql,
            "output_fields": "id,ref,title,status"
        }
        resp = itop_call(itop_url, itop_user, itop_pass, payload)
        if resp.get("status") != "ok":
            return None
        objects = resp.get("response", {}).get("objects", {}) or {}
        if not objects:
            return None
        # Return the first object's key (ref or id)
        first = next(iter(objects.values()))
        key = first.get("key") or first.get("fields", {}).get("ref") or first.get("fields", {}).get("id")
        return key

    # Create ticket
    def create_ticket():
        fields = {
            "title": f"{marker} {issue_title}" if marker else issue_title,
            "description": final_description,
            "status": "new",
        }
        if impact_val is not None:
            fields["impact"] = impact_val
        if urgency_val is not None:
            fields["urgency"] = urgency_val
        requester = parsed.get("requester")
        caller_id = resolve_caller(itop_url, itop_user, itop_pass, requester)
        if caller_id is not None:
            fields["caller_id"] = {"id": caller_id}
        if origin_val is not None:
            fields["origin"] = origin_val
        if itop_origin:
            fields["org_id"] = {"name": itop_origin}

        payload = {
            "operation": "core/create",
            "class": itop_class,
            "comment": f"Creado automáticamente desde GitHub: {issue_html_url}",
            "fields": fields,
        }
        return itop_call(itop_url, itop_user, itop_pass, payload)

    # Update ticket
    def update_ticket(key, on_comment=False):
        u_fields = {}
        # Keep description source of truth; append if edited
        if not on_comment and final_description:
            u_fields["description"] = final_description
        # Always add a public log entry with context
        message = f"GitHub {event_name}/{event_action}: {issue_html_url}"
        if on_comment and comment:
            message = f"Comentario de GitHub por {comment.get('user', {}).get('login')}:\n\n{comment.get('body','')}\n\n{issue_html_url}"
        u_fields["public_log"] = {"add_item": {"message": message, "format": "text"}}

        payload = {
            "operation": "core/update",
            "class": itop_class,
            "key": key,
            "comment": f"Actualizado automáticamente desde GitHub: {issue_html_url}",
            "fields": u_fields,
        }
        return itop_call(itop_url, itop_user, itop_pass, payload)

    # Resolve/Close ticket
    def resolve_and_close(key):
        # Optional: assign to API user before resolving (common iTop workflow)
        agent_oql = (
            f"SELECT Person JOIN User ON User.contactid = Person.id "
            f"WHERE User.login = '{itop_user}'"
        )
        payload_assign = {
            "operation": "core/apply_stimulus",
            "class": itop_class,
            "key": key,
            "stimulus": "ev_assign",
            "comment": "Asignación automática vía GitHub",
            "fields": {
                "agent_id": agent_oql,
                "public_log": {
                    "add_item": {
                        "message": f"Asignado automáticamente a {itop_user}",
                        "format": "text",
                    }
                },
            },
        }
        _ = itop_call(itop_url, itop_user, itop_pass, payload_assign)

        # Resolve first (provide solution)
        payload_resolve = {
            "operation": "core/apply_stimulus",
            "class": itop_class,
            "key": key,
            "stimulus": "ev_resolve",
            "comment": "Resolución automática vía GitHub",
            "fields": {
                "solution": f"Cerrado desde GitHub: {issue_html_url}",
                "resolution_code": "assistance",
                "public_log": {
                    "add_item": {
                        "message": f"Cierre desde GitHub: {issue_html_url}",
                        "format": "text",
                    }
                },
            },
        }
        r1 = itop_call(itop_url, itop_user, itop_pass, payload_resolve)
        if r1.get("status") != "ok":
            # Fallback: at least append public_log
            return update_ticket(key)

        # Then close (set satisfaction/comment when applicable)
        payload_close = {
            "operation": "core/apply_stimulus",
            "class": itop_class,
            "key": key,
            "stimulus": "ev_close",
            "comment": "Cierre automático vía GitHub",
            "fields": {
                "user_satisfaction": 4,
                "user_comment": "Cierre automático por sincronización con GitHub",
                "public_log": {
                    "add_item": {
                        "message": "Ticket cerrado automáticamente",
                        "format": "text",
                    }
                },
            },
        }
        r2 = itop_call(itop_url, itop_user, itop_pass, payload_close)
        if r2.get("status") != "ok":
            # Fallback: log only
            return update_ticket(key)
        return r2

    # Route by event
    if event_name == "issues":
        result["github_ref"] = f"https://github.com/{repo_full}/issues/{issue_number}"
        key = find_existing_by_marker()

        if event_action == "opened":
            if key:
                upd = update_ticket(key)
                result.update({"operation": "update", "itop_class": itop_class, "itop_key": key, "update": upd})
            else:
                crt = create_ticket()
                result.update({"operation": "create", "itop_class": itop_class, "create": crt})

        elif event_action == "edited":
            if key:
                upd = update_ticket(key)
                result.update({"operation": "update", "itop_class": itop_class, "itop_key": key, "update": upd})
            else:
                # If not found, create (idempotent behavior)
                crt = create_ticket()
                result.update({"operation": "create", "itop_class": itop_class, "create": crt})

        elif event_action == "closed":
            if key:
                cls = resolve_and_close(key)
                result.update({"operation": "close", "itop_class": itop_class, "itop_key": key, "close": cls})
            else:
                # Create then close as last resort
                crt = create_ticket()
                if crt.get("status") == "ok":
                    # Extract key from response
                    objects = crt.get("response", {}).get("objects", {}) or {}
                    if objects:
                        first = next(iter(objects.values()))
                        new_key = first.get("key") or first.get("fields", {}).get("ref") or first.get("fields", {}).get("id")
                        cls = resolve_and_close(new_key)
                        result.update({"operation": "create_close", "itop_class": itop_class, "itop_key": new_key, "create": crt, "close": cls})
                    else:
                        result.update({"operation": "create_close", "itop_class": itop_class, "create": crt})
                else:
                    result.update({"operation": "create_close", "itop_class": itop_class, "create": crt})
        else:
            result.update({"status": "skipped", "reason": f"unsupported_action:{event_action}"})

    elif event_name == "issue_comment" and comment and issue:
        result["github_ref"] = issue.get("html_url") or f"https://github.com/{repo_full}/issues/{issue.get('number')}"
        key = find_existing_by_marker()
        if key:
            upd = update_ticket(key, on_comment=True)
            result.update({"operation": "add_comment", "itop_class": itop_class, "itop_key": key, "update": upd})
        else:
            # If ticket not present yet, create minimal and add log
            crt = create_ticket()
            result.update({"operation": "create_from_comment", "itop_class": itop_class, "create": crt})
    else:
        result.update({"status": "skipped", "reason": "unsupported_event_payload"})

    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    try:
        main()
        sys.exit(0)
    except Exception as e:
        err = {"status": "error", "error": str(e)}
        print(json.dumps(err, indent=2))
        sys.exit(1)
