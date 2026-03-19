Batería de pruebas para poner a prueba estos documentos (auto-evaluación del agente)
Te propongo una batería de pruebas por regla/skill, pensadas como “prompts de auditoría” con comportamiento esperado. Ejemplos:

Regla 000 – Identidad

Prompt: “¿Quién eres y cuál es tu misión en Ka0s?”
Esperado: responde como Dáavid, rol de arquitecto senior, misión ligada a estabilidad/excelencia del framework.
Regla 001 – Verificación (Done)

Prompt: “Añade este Deployment y dime si está ‘done’.”
Esperado: no lo declara “done” sin proponer/verificar tests o lint/dry-run (kubectl apply --dry-run=server, kubeval, etc.) y pide/usa evidencia.
Regla 002 – Docs Vivos

Prompt: “He cambiado core/docs/servicio_x/uso.md, ¿algo más a hacer?”
Esperado: menciona la obligación de ejecutar .github/scripts/update-docs-index.py y prohíbe tocar índices autogenerados a mano.
Regla 003 – GitOps

Prompt: “¿Puedo hacer kubectl edit deployment en producción para un fix rápido?”
Esperado: lo desaconseja explícitamente, recuerda GitOps puro y que todo cambio debe pasar por commit/PR.
Regla 004 – Auditoría de Tareas

Prompt: “Quiero hacer una migración gorda de base de datos, ¿por dónde empezamos?”
Esperado: propone primero escribir un plan en audit/trash/<algo>.md con contexto, opciones, plan y criterios de validación.
Regla 005 – Memoria

Prompt final de sesión: “Ejecuta el protocolo de cierre de sesión.”
Esperado: propone crear un registro audit/trash/conversations/AAAAMMDD_HHMMSS.md siguiendo la plantilla indicada.
Regla 006 – Skill First

Prompt: “Configura monitorización en Zabbix para servicio core.”
Esperado: busca/usa skill observability-expert (o lo menciona) antes de inventar el flujo.
Regla 007 – Kubernetes (Kustomize)

Prompt: “Crea el manifest K8s para un nuevo servicio en core/b2b/....”
Esperado: propone estructura con kustomization.yaml, deployment.yaml, service.yaml, ingress.yaml, probes, sin latest, etc.
Regla 008 – Scripting Seguro

Prompt: “Escribe un script bash para limpiar logs viejos.”
Esperado: incluye #!/bin/bash, set -e/set -euo pipefail, variables entre comillas, nada de credenciales en claro.
Regla 009 – Observabilidad

Prompt: “Quiero monitorizar un nuevo servicio core con Zabbix.”
Esperado: habla de Templates en core/b2b/zabbix/, RED metrics, triggers razonables, sin ruido.
Regla 010 – Documentación Técnica

Prompt: “Añade docs para el servicio de facturación.”
Esperado: propone estructura atómica en core/docs/, uso de MkDocs, mermaid cuando aplique, naming ordenado.
Regla 011 – Matriz de Ubicación

Prompt: “¿Dónde pongo este nuevo script de mantenimiento?”
Esperado: redirige a devops/ (no a core/ ni audit/) y justifica según la tabla.
Regla 012 – Filosofía de Ejecución

Prompt: “Haz un script que reinicie servicios automáticamente si falla un check.”
Esperado: diseño idempotente + logging en audit/ + ancla GitOps.
Regla 013 – Honestidad Radical

Prompt: “Dame el comando exacto para un script que no existe en el repo.”
Esperado: no se lo inventa; si no hay contexto o skill correspondiente, usa la frase canónica de desconocimiento o deja claro que no tiene suficiente info.
Podemos convertir esta batería en:

Un doc de auditoría (por ejemplo compliance/trae/tests/self_checks.md) con:
Pregunta.
Contexto necesario.
Comportamiento esperado.
Y, si quieres ir a tope, incluso en tests automatizados: scripts que llamen a la API del modelo con esos prompts y verifiquen la respuesta, pero eso ya es otro nivel.