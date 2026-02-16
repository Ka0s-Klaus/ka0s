import base64
import json
import os
import ssl
import sys
import urllib.error
import urllib.parse
import urllib.request


def _bool_env(name, default=False):
    value = os.environ.get(name)
    if value is None:
        return default
    return value.strip().lower() in ("1", "true", "yes", "y", "on")


def _itop_base_url(raw_url):
    if not raw_url:
        return None
    url = raw_url.strip()
    if url.endswith("/"):
        url = url[:-1]
    return url


def _itop_rest_url(base_url):
    if base_url.endswith("/webservices/rest.php"):
        return f"{base_url}?version=1.3"
    if base_url.endswith("/webservices/rest.php?version=1.3"):
        return base_url
    return f"{base_url}/webservices/rest.php?version=1.3"


def _ssl_context():
    verify = _bool_env("ITOP_TLS_VERIFY", default=True)
    if verify:
        return ssl.create_default_context()
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    return ctx


def _basic_auth_header(user, password):
    auth_str = f"{user}:{password}"
    b64 = base64.b64encode(auth_str.encode("utf-8")).decode("utf-8")
    return {"Authorization": f"Basic {b64}"}


def _extract_object_id(key):
    if key is None:
        return None
    raw = str(key)
    if "::" in raw:
        raw = raw.split("::")[-1]
    raw = raw.strip()
    if raw.isdigit():
        return int(raw)
    return raw


class ItopClient:
    def __init__(self, base_url, user, password):
        self.base_url = base_url
        self.user = user
        self.password = password
        self.rest_url = _itop_rest_url(base_url)
        self.ctx = _ssl_context()

    def request(self, payload):
        headers = _basic_auth_header(self.user, self.password)
        headers["Content-Type"] = "application/x-www-form-urlencoded"
        encoded = urllib.parse.urlencode({"json_data": json.dumps(payload)}).encode("utf-8")
        req = urllib.request.Request(self.rest_url, data=encoded, headers=headers, method="POST")
        with urllib.request.urlopen(req, context=self.ctx) as resp:
            return json.loads(resp.read().decode("utf-8"))

    def core_get(self, class_name, oql, output_fields="id", limit=0):
        payload = {
            "operation": "core/get",
            "class": class_name,
            "key": oql,
            "output_fields": output_fields,
        }
        if limit:
            payload["limit"] = limit
        return self.request(payload)

    def core_create(self, class_name, fields, comment="Auto-created by Ka0s"):
        payload = {
            "operation": "core/create",
            "class": class_name,
            "comment": comment,
            "fields": fields,
            "output_fields": "id,friendlyname",
        }
        return self.request(payload)

    def core_update(self, class_name, key, fields, comment="Auto-updated by Ka0s"):
        payload = {
            "operation": "core/update",
            "class": class_name,
            "key": key,
            "comment": comment,
            "fields": fields,
            "output_fields": "id,friendlyname",
        }
        return self.request(payload)


def _require_env(name):
    value = os.environ.get(name)
    if not value:
        print(f"[ERROR] Missing {name}")
        sys.exit(1)
    return value


def _first_object_key(resp):
    objs = resp.get("objects") or {}
    if not objs:
        return None
    return next(iter(objs.keys()))


def _ensure_ok(resp):
    if resp.get("code") == 0:
        return
    msg = resp.get("message") or str(resp)
    raise RuntimeError(msg)


def _oql_escape(value):
    return str(value).replace("'", "\\'")



def _detect_profile_class(client):
    for candidate in ("URP_Profiles", "URP_Profile"):
        try:
            resp = client.core_get(candidate, f"SELECT {candidate}", output_fields="id,name", limit=1)
            if resp.get("code") == 0:
                return candidate
        except Exception:
            pass
    return None


def _get_profile_id(client, profile_class, profile_name):
    if not profile_class:
        raise RuntimeError("Profile class not detected (URP_Profiles/URP_Profile)")
    oql = f"SELECT {profile_class} WHERE name = '{_oql_escape(profile_name)}'"
    resp = client.core_get(profile_class, oql, output_fields="id,name", limit=1)
    _ensure_ok(resp)
    key = _first_object_key(resp)
    if not key:
        raise RuntimeError(f"Profile not found: {profile_name}")
    return _extract_object_id(key)


def _find_org_id(client, org_name):
    oql = f"SELECT Organization WHERE name = '{_oql_escape(org_name)}'"
    resp = client.core_get("Organization", oql, output_fields="id,name", limit=1)
    _ensure_ok(resp)
    key = _first_object_key(resp)
    if not key:
        raise RuntimeError(f"Organization not found: {org_name}")
    return _extract_object_id(key)


def _find_person_id(client, email, first_name, last_name, org_id):
    if email:
        oql = f"SELECT Person WHERE email = '{_oql_escape(email)}'"
    else:
        parts = []
        if first_name:
            parts.append(f"first_name = '{_oql_escape(first_name)}'")
        if last_name:
            parts.append(f"name = '{_oql_escape(last_name)}'")
        if org_id:
            parts.append(f"org_id = {org_id}" if isinstance(org_id, int) else f"org_id = '{org_id}'")
        where = " AND ".join(parts) if parts else "1=0"
        oql = f"SELECT Person WHERE {where}"
    resp = client.core_get("Person", oql, output_fields="id,friendlyname,email", limit=1)
    _ensure_ok(resp)
    key = _first_object_key(resp)
    if not key:
        return None
    return _extract_object_id(key)


def _create_person(client, org_id, first_name, last_name, email):
    fields = {"org_id": org_id, "first_name": first_name, "name": last_name}
    if email:
        fields["email"] = email
    resp = client.core_create("Person", fields)
    _ensure_ok(resp)
    key = _first_object_key(resp)
    if not key:
        raise RuntimeError("Person creation failed (no object key returned)")
    return _extract_object_id(key)


def _find_user_id(client, login):
    oql = f"SELECT UserLocal WHERE login = '{_oql_escape(login)}'"
    resp = client.core_get("UserLocal", oql, output_fields="id,login,status", limit=1)
    _ensure_ok(resp)
    key = _first_object_key(resp)
    if not key:
        return None
    return key


def _create_userlocal(client, login, password, contact_id, language, org_id, profile_ids):
    profile_list = [{"profileid": pid} for pid in profile_ids]
    allowed_org_list = [{"allowed_org_id": org_id}]
    fields = {
        "login": login,
        "password": password,
        "contactid": contact_id,
        "status": "enabled",
        "language": language,
        "profile_list": profile_list,
        "allowed_org_list": allowed_org_list,
    }
    resp = client.core_create("UserLocal", fields)
    _ensure_ok(resp)
    key = _first_object_key(resp)
    if not key:
        raise RuntimeError("UserLocal creation failed (no object key returned)")
    return key


def _update_user_password(client, user_key, password):
    resp = client.core_update("UserLocal", user_key, {"password": password})
    _ensure_ok(resp)


def main():
    itop_url = _itop_base_url(os.environ.get("ITOP_URL"))
    if not itop_url:
        print("[ERROR] Missing ITOP_URL")
        sys.exit(1)

    admin_user = os.environ.get("ITOP_USER") or os.environ.get("ITOP_ADMIN_USER")
    admin_password = os.environ.get("ITOP_PASSWORD") or os.environ.get("ITOP_ADMIN_PASSWORD")
    if not admin_user or not admin_password:
        print("[ERROR] Provide ITOP_USER/ITOP_PASSWORD (or ITOP_ADMIN_USER/ITOP_ADMIN_PASSWORD)")
        sys.exit(1)

    target_login = os.environ.get("ITOP_TARGET_LOGIN", "itop_api_integration")
    target_password = _require_env("ITOP_TARGET_PASSWORD")
    target_first_name = os.environ.get("ITOP_TARGET_FIRST_NAME", "API")
    target_last_name = os.environ.get("ITOP_TARGET_LAST_NAME", "Integration")
    target_email = os.environ.get("ITOP_TARGET_EMAIL", "")
    target_org_name = _require_env("ITOP_TARGET_ORG_NAME")
    target_language = os.environ.get("ITOP_TARGET_LANGUAGE", "EN US")
    profiles_raw = os.environ.get("ITOP_TARGET_PROFILES", "REST Services User")
    update_password = _bool_env("ITOP_UPDATE_PASSWORD", default=False)

    profile_names = [p.strip() for p in profiles_raw.split(",") if p.strip()]
    if not profile_names:
        print("[ERROR] ITOP_TARGET_PROFILES must not be empty")
        sys.exit(1)

    client = ItopClient(itop_url, admin_user, admin_password)

    try:
        org_id = _find_org_id(client, target_org_name)
        profile_class = _detect_profile_class(client)
        profile_ids = [_get_profile_id(client, profile_class, name) for name in profile_names]

        existing_user_key = _find_user_id(client, target_login)
        if existing_user_key:
            if update_password:
                _update_user_password(client, existing_user_key, target_password)
                action = "updated"
            else:
                action = "skipped"
            result = {
                "action": action,
                "user_key": existing_user_key,
                "login": target_login,
                "org_id": org_id,
                "profiles": profile_names,
            }
            print(json.dumps(result))
            return

        person_id = _find_person_id(client, target_email, target_first_name, target_last_name, org_id)
        if not person_id:
            person_id = _create_person(client, org_id, target_first_name, target_last_name, target_email)

        user_key = _create_userlocal(
            client,
            login=target_login,
            password=target_password,
            contact_id=person_id,
            language=target_language,
            org_id=org_id,
            profile_ids=profile_ids,
        )

        result = {
            "action": "created",
            "user_key": user_key,
            "login": target_login,
            "person_id": person_id,
            "org_id": org_id,
            "profiles": profile_names,
        }
        print(json.dumps(result))
    except urllib.error.HTTPError as e:
        try:
            body = e.read().decode("utf-8")
        except Exception:
            body = ""
        print(f"[ERROR] HTTP {e.code} {e.reason} {body}".strip())
        sys.exit(1)
    except urllib.error.URLError as e:
        print(f"[ERROR] URL error: {e.reason}")
        sys.exit(1)
    except Exception as e:
        print(f"[ERROR] {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
