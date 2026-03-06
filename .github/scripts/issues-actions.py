import argparse
import datetime as dt
import json
import os
import re
import subprocess
import sys


COMMENT_PREFIX = "### Informe de acciones (tácticas/estratégicas) — Ka0s"


def _run(cmd):
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        cmd_str = " ".join(cmd)
        msg = (
            f"Command failed ({res.returncode}): {cmd_str}\n"
            f"{res.stderr.strip()}"
        )
        raise RuntimeError(msg)
    return res.stdout


def _gh_json(cmd):
    raw = _run(cmd)
    try:
        return json.loads(raw)
    except json.JSONDecodeError as e:
        preview = raw[:500]
        msg = (
            f"Failed to parse JSON from gh output: {e}\n"
            f"Output (first 500 chars): {preview}"
        )
        raise RuntimeError(msg)


def _safe_filename(name):
    name = re.sub(r"[^a-zA-Z0-9._-]+", "_", name).strip("_")
    return name or "file"


def _classify_issue(title, labels):
    label_names = {label.get("name", "") for label in labels}
    title_up = title.strip().upper()
    if title_up.startswith("[PROBLEM]"):
        return "problem"
    if title_up.startswith("[REQUEST]"):
        return "request"
    if "itop-incident" in label_names or title.strip().upper().startswith(
        "[INCIDENT]"
    ):
        return "incident"
    if title.strip().startswith("[Ka0S]") and "Error detected" in title:
        return "workflow_error"
    if "bug" in label_names:
        return "bug"
    if "triage" in label_names:
        return "triage"
    return "general"


def _extract_first_url(text):
    if not text:
        return None
    m = re.search(r"https?://\S+", text)
    return m.group(0).rstrip(")].,\"") if m else None


def _render_comment(issue):
    number = issue["number"]
    title = issue.get("title") or ""
    body = issue.get("body") or ""
    url = issue.get("url") or ""
    labels = issue.get("labels") or []
    label_names = [label.get("name") for label in labels if label.get("name")]
    category = _classify_issue(title, labels)
    run_url = _extract_first_url(body)
    title_low = title.lower()
    body_low = body.lower()

    context_lines = [
        f"- Issue: #{number} ({url})",
        f"- Título: {title}",
        f"- Categoría: {category}",
    ]
    if label_names:
        context_lines.append(f"- Labels: {', '.join(sorted(label_names))}")
    if run_url:
        context_lines.append(f"- Evidencia/URL detectada: {run_url}")

    tactical = []
    strategic = []
    done = []

    tactical.append(
        "Completar/validar el triage: impacto, urgencia, owner "
        "y próximo checkpoint."
    )
    done.append(
        "La Issue tiene owner, prioridad y siguiente acción clara "
        "(triage completo)."
    )

    if category == "incident":
        if "actions/runs/" in body_low or "fallo en workflow" in title_low:
            category = "workflow_failure"

        tactical.extend(
            [
                "Confirmar si el evento sigue activo y su impacto real "
                "(usuarios/servicio/cluster).",
                "Añadir evidencias: logs concretos, métricas, ventana temporal "
                "y cualquier enlace a dashboard.",
                "Ejecutar diagnóstico mínimo: estado de pods/nodos, consumo CPU/RAM "
                "y top offenders del periodo.",
                "Si aplica, aplicar mitigación temporal (throttling, scale, limpieza "
                "de jobs, reinicio controlado) y registrar qué se hizo.",
                "Asegurar sincronización con ITSM/iTop "
                "(incidente vinculado, estado actualizado).",
            ]
        )

        if "no endpoints" in title_low:
            tactical.insert(
                1,
                "Validar Service/Endpoints: selector vs labels de pods, readiness, "
                "y endpoints asociados.",
            )
            strategic.insert(
                0,
                "Añadir checks preventivos: alertas por `Endpoints=0` y validación "
                "de selectors en despliegues.",
            )

        if "load average" in title_low:
            tactical.insert(
                1,
                "Identificar el causante del pico: procesos (`top`), pods "
                "(`kubectl top`), y trabajos batch/cron recientes.",
            )
            strategic.insert(
                0,
                "Revisar capacity planning y límites/requests para prevenir saturación "
                "por picos recurrentes.",
            )

        if "high number of open issues" in title_low:
            tactical.insert(
                1,
                "Reducir backlog: agrupar duplicados, cerrar ruido, y etiquetar por "
                "prioridad/SLA (p. ej. P0/P1/P2).",
            )
            strategic.insert(
                0,
                "Establecer política de higiene: auto-triage, límite de creación "
                "automática y reportes periódicos (lead time/backlog).",
            )
        strategic.extend(
            [
                "Definir umbrales/condiciones para reducir ruido (histeresis, ventanas, "
                "severidad por host).",
                "Crear runbook de remediación y automatizar acciones seguras "
                "(solo lectura o mitigaciones idempotentes).",
                "Añadir capacidad/limits/requests y revisar scheduling "
                "para evitar hotspots.",
                "Si es recurrente, abrir Problem Management y plan de corrección "
                "estructural.",
            ]
        )
        done.extend(
            [
                "Se adjuntan evidencias suficientes para reproducir/analisar "
                "(logs + métricas + timestamps).",
                "El incidente queda estabilizado o se define workaround "
                "con rollback.",
                "Existe seguimiento (Problem/RFC si procede) y actualización en CMDB "
                "si hubo cambios.",
            ]
        )

    elif category in {"workflow_error", "workflow_failure"}:
        tactical.extend(
            [
                "Revisar el run enlazado y extraer el step exacto y error raíz "
                "(stacktrace/mensaje).",
                "Identificar si es fallo transitorio (red/rate limit) vs fallo "
                "determinista (cambio de API/dep).",
                "Re-ejecutar el workflow y, si se reproduce, capturar el diff "
                "mínimo que lo causa.",
            ]
        )
        strategic.extend(
            [
                "Fortalecer resiliencia del workflow: retries controlados, timeouts "
                "y mensajes de error accionables.",
                "Añadir verificación previa (lint/dry-run) o tests que prevengan el "
                "mismo fallo.",
                "Reducir acoplamientos: mover lógica compleja a acciones locales "
                "o scripts versionados.",
            ]
        )
        done.extend(
            [
                "El workflow vuelve a pasar y existe evidencia del fix (run verde).",
                "La causa raíz queda documentada en la Issue con enlace al run "
                "y cambios aplicados.",
            ]
        )

    elif category == "problem":
        tactical.extend(
            [
                "Confirmar alcance: qué servicio/namespace está afectado "
                "y desde cuándo.",
                "Vincular incidentes relacionados y reunir timeline con evidencias.",
                "Definir workaround seguro si aún impacta (mitigación controlada).",
            ]
        )
        strategic.extend(
            [
                "Realizar RCA y fijar acciones preventivas medibles "
                "(SLO/alertas/runbook).",
                "Planificar cambio estructural vía RFC "
                "(si requiere tocar producción).",
            ]
        )
        done.extend(
            [
                "Existe RCA con causa raíz y acciones preventivas acordadas.",
                "Hay seguimiento trazable (issues hijas/RFC) hasta cierre.",
            ]
        )

    elif category == "request":
        tactical.extend(
            [
                "Convertir la solicitud en un alcance mínimo (MVP) "
                "y criterios de aceptación.",
                "Identificar dependencias (acciones, scripts, docs) y riesgos.",
            ]
        )
        strategic.extend(
            [
                "Definir roadmap incremental y validación automatizada (CI/lint/tests).",
                "Alinear documentación y entrenamiento/hand-off "
                "si impacta operación.",
            ]
        )
        done.extend(
            [
                "Criterios de aceptación aprobados y demostrables.",
                "Evidencia de verificación (test/lint/dry-run) "
                "adjunta al PR.",
            ]
        )

    elif category == "bug":
        tactical.extend(
            [
                "Definir pasos de reproducción y el resultado esperado vs actual.",
                "Aislar el área afectada y proponer fix mínimo con prueba "
                "de regresión.",
            ]
        )
        strategic.extend(
            [
                "Añadir cobertura (test/lint) y observabilidad para detectar "
                "recaídas.",
                "Revisar si el bug revela deuda técnica y planificar refactor "
                "incremental.",
            ]
        )
        done.extend(
            [
                "Existe reproducción y prueba de regresión automatizada.",
                "El fix se valida con lint/test/dry-run en CI.",
            ]
        )

    else:
        tactical.extend(
            [
                "Reformular el objetivo como criterios de aceptación verificables.",
                "Dividir en subtareas pequeñas y asignar responsable/fecha.",
            ]
        )
        strategic.extend(
            [
                "Si implica cambio en infra/prod: preparar RFC, ventana de cambio "
                "y plan de rollback.",
                "Alinear documentación (docs vivos) y evidencias en audit/.",
            ]
        )
        done.extend(
            [
                "Criterios de aceptación definidos y verificables.",
                "Ejecución trazable (evidencias en audit/ y enlaces relevantes).",
            ]
        )

    governance = [
        "Si alguna acción implica cambios en producción: requiere RFC/ventana "
        "de cambio y plan de rollback.",
        "Si se modifica un CI (nodo/servicio/config): actualizar CMDB (iTop) "
        "y adjuntar evidencia.",
    ]

    lines = []
    lines.append("### Informe de acciones (tácticas/estratégicas) — Ka0s")
    lines.append("")
    lines.append("**Contexto detectado**")
    lines.extend(context_lines)
    lines.append("")
    lines.append("**Acciones tácticas (0–48h)**")
    lines.extend([f"- {x}" for x in tactical])
    lines.append("")
    lines.append("**Acciones estratégicas (1–4 semanas)**")
    lines.extend([f"- {x}" for x in strategic])
    lines.append("")
    lines.append("**Gobernanza (ITIL/CMDB)**")
    lines.extend([f"- {x}" for x in governance])
    lines.append("")
    lines.append("**Criterios de verificación (Done)**")
    lines.extend([f"- {x}" for x in done])
    lines.append("")
    lines.append(
        "_Nota: este comentario es una propuesta de plan accionable; ajusta "
        "impacto/urgencia según el contexto real._"
    )
    lines.append("")
    return "\n".join(lines)


def _last_comment_has_report(repo, number):
    res = subprocess.run(
        [
            "gh",
            "issue",
            "view",
            "-R",
            repo,
            str(number),
            "--json",
            "comments",
            "--jq",
            "(.comments[-1].body // \"\")",
        ],
        capture_output=True,
        text=True,
    )
    if res.returncode != 0:
        return False
    body = (res.stdout or "").lstrip()
    return body.startswith(COMMENT_PREFIX)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", default="Ka0s-Klaus/ka0s")
    parser.add_argument("--limit", type=int, default=200)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--skip-existing", action="store_true")
    parser.add_argument("--only", action="append", type=int)
    args = parser.parse_args()

    ts = dt.datetime.now().strftime("%Y%m%d_%H%M%S")
    out_dir = os.path.join("audit", "issues")
    os.makedirs(out_dir, exist_ok=True)

    issue_fields = (
        "number,title,body,labels,assignees,author,createdAt,updatedAt,url"
    )
    issues = _gh_json(
        [
            "gh",
            "issue",
            "list",
            "-R",
            args.repo,
            "--state",
            "open",
            "--limit",
            str(args.limit),
            "--json",
            issue_fields,
        ]
    )

    if args.only:
        wanted = set(args.only)
        issues = [it for it in issues if it.get("number") in wanted]

    snapshot_path = os.path.join(out_dir, f"{ts}_open-issues.json")
    with open(snapshot_path, "w", encoding="utf-8") as f:
        json.dump(issues, f, ensure_ascii=False, indent=2)

    report_lines = []
    report_lines.append(f"# Informe de acciones por Issue (open) — {ts}")
    report_lines.append("")
    report_lines.append(f"Repositorio: `{args.repo}`")
    report_lines.append(f"Total issues analizadas: {len(issues)}")
    report_lines.append("")

    failures = []
    for issue in issues:
        number = issue["number"]
        title = issue.get("title") or ""
        should_comment = True
        if args.skip_existing and not args.dry_run:
            if _last_comment_has_report(args.repo, number):
                should_comment = False

        report_lines.append(f"- #{number} {title} — {issue.get('url')}")

        if not should_comment:
            report_lines.append("  - Comentario: (omitido; ya existe informe como último comentario)")
            continue

        comment = _render_comment(issue)
        safe_title = _safe_filename(title)[:80]
        comment_filename = f"{ts}_issue-{number}_{safe_title}_comment.md"
        comment_path = os.path.join(out_dir, comment_filename)
        with open(comment_path, "w", encoding="utf-8") as f:
            f.write(comment)
        report_lines.append(f"  - Comentario: `{comment_path}`")

        if not args.dry_run:
            try:
                _run(
                    [
                        "gh",
                        "issue",
                        "comment",
                        str(number),
                        "-R",
                        args.repo,
                        "--body-file",
                        comment_path,
                    ]
                )
            except Exception as e:
                failures.append({"number": number, "url": issue.get("url"), "error": str(e)})

    report_path = os.path.join(out_dir, f"{ts}_issues_actions_report.md")
    with open(report_path, "w", encoding="utf-8") as f:
        f.write("\n".join(report_lines) + "\n")

    if failures:
        failures_path = os.path.join(out_dir, f"{ts}_comment_failures.json")
        with open(failures_path, "w", encoding="utf-8") as f:
            json.dump(failures, f, ensure_ascii=False, indent=2)
        print(f"Completed with failures: {len(failures)}")
        print(f"Failures file: {failures_path}")
        sys.exit(2)

    print(f"Snapshot: {snapshot_path}")
    print(f"Report: {report_path}")
    print("Completed successfully")


if __name__ == "__main__":
    main()
