# Estructura del Proyecto Ka0s

```text
.
│   ├── CHANGELOG.md
│   ├── INDEX_VERSION.md
│   ├── LICENSE
│   ├── PROJECT_STRUCTURE.md
│   ├── README.md
│   ├── index.md
│   ├── version.txt
├── .github/ #"Utiliza el directorio .github/ para orquestar la ejecución de tareas, definiendo workflows en workflows/ y encapsulando lógica compleja en actions/ , asegurando que toda operación operativa sea automatizada y reproducible mediante código."
│   ├── actions/ 
│   ├── scripts/
│   ├── workflows/
├── audit/ # Utiliza el directorio audit/ como el sistema de memoria persistente del proyecto depositando allí cualquier evidencia estructurada (JSON/Logs) generada por las automatizaciones para garantizar su trazabilidad y posterior ingesta en los sistemas de observabilidad (ELK/MongoDB)."
│   ├── deploy/
│   ├── eresults/ 
│   ├── execution/ 
│   ├── hosts/
│   ├── inspector/  
│   ├── issues/ 
│   ├── itop/  
│   ├── jsonlint/  
│   ├── kaos/
│   ├── kube/ 
│   ├── mdlint/
│   ├── mongodb/
│   ├── scan/
│   ├── trash/
│   ├── workflows/
│   ├── yamllint/
├── compliance/ # "Consulta el directorio compliance/ únicamente para leer las reglas de validación (linters) y definiciones de activación de módulos ( core.json ), tratándolo como la fuente de verdad inmutable para los estándares de calidad del código."
│   ├── core/
│   ├── html/
│   ├── json/
│   ├── markdown/
│   ├── yaml/
├── core/ #"Accede al directorio core/ para recuperar la lógica de negocio, definiciones de infraestructura (IaC en b2b/ ), configuraciones del sistema ( config/ ) y prompts de inteligencia ( ai/ ), ya que es donde reside la definición funcional de la plataforma."
│   ├── ai/
│   ├── b2b/
│   │   ├── core-services/
│   │   │   ├── elk/
│   │   │   ├── ingress-nginx/
│   │   │   ├── itop/
│   │   │   ├── kube/
│   │   │   ├── kubernetes-dashboard/
│   │   │   ├── metrics-server/
│   │   │   ├── mongo/
│   │   │   ├── n8n/
│   │   │   ├── runners/
│   │   │   ├── trivy-operator/
│   │   │   ├── zabbix/
│   ├── config/
│   │   ├── core/  
│   ├── docs/
│  
│   │   │   ├── README.md
│   │   ├── ka0s/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── La Saga de Ka0s.md
│   │   │   │   ├── cap-1.png
│   │   │   │   ├── cap-2.png
│   │   │   │   ├── cap-3.png
│   │   │   │   ├── cap-4.png
│   │   │   │   ├── cap-5.png
│   │   │   │   ├── cap-6.png
│   │   │   │   ├── ka0s.md
│   │   │   │   ├── ka0s_kaizen.md
│   │   │   │   ├── ka0s_metodologia.md
│   │   │   │   ├── legacy_info.md
│   │   │   │   ├── mapa_estructura_workspace.md
│   │   │   │   ├── secrets.md
│   │   │   │   ├── variables.md
│   │   ├── ka0s_ci_cd_k8s/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_ci_cd_k8s.md
│   │   ├── ka0s_cluster_update/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_cluster_update.md
│   │   │   │   ├── legacy_workflow.md
│   │   ├── ka0s_core/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_core.md
│   │   │   │   ├── legacy_info.md
│   │   ├── ka0s_daily_report/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_daily_report.md
│   │   ├── ka0s_dashboard/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_dashboard.md
│   │   │   │   ├── legacy_technical.md
│   │   │   │   ├── legacy_user.md
│   │   ├── ka0s_delete_ns/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_delete_ns.md
│   │   ├── ka0s_docker/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_docker.md
│   │   │   │   ├── legacy_info.md
│   │   ├── ka0s_execution/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_execution.md
│   │   │   │   ├── legacy_info.md
│   │   ├── ka0s_html/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_html.md
│   │   ├── ka0s_init/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_init.md
│   │   │   │   ├── legacy_info.md
│   │   ├── ka0s_inspector/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_inspector.md
│   │   │   │   ├── legacy_workflow.md
│   │   ├── ka0s_itop/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 01_github_workflow.md
│   │   │   │   ├── 02_PAT_creation.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── 03_itop_configuration.md
│   │   │   │   ├── 04_verification.md
│   │   │   │   ├── 05_advanced_workflow.md
│   │   │   │   ├── 06_conditional_trigger_parameters.md
│   │   │   │   ├── 07_workflow_selection_strategy.md
│   │   │   │   ├── ITOP_API_GUIDE.md
│   │   │   │   ├── itop-execute-github.md
│   │   │   │   ├── ka0s_itop.md
│   │   │   │   ├── legacy_readme.md
│   │   ├── ka0s_json/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_json.md
│   │   │   │   ├── legacy_workflow.md
│   │   ├── ka0s_kubectl_tunnel/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_kubectl_tunnel.md
│   │   ├── ka0s_lz/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── Artículo 1_ Introducción a la Landing Zone y su Importancia en la Nube.md
│   │   │   │   ├── Artículo 6_ Monitoreo, Registro y Automatización en el Entorno Cloud.md
│   │   │   │   ├── Artículo 7_ Auditoría y Remediación_ Asegurando el Cumplimiento y la Eficiencia Operacional.md
│   │   │   │   ├── Ka0s_LandingZone_Beneficios_Cuantitativos_y_Retorno_de_Inversión.pptx
│   │   │   │   ├── Ka0s_LandingZone_Fundamentos_para_una_Nube_Segura_y_Eficiente.pptx
│   │   │   │   ├── Resumen de Beneficios y Ventajas de Ka0s LandingZone.md
│   │   │   │   ├── articulo_2_modelo_responsabilidad_compartida.md
│   │   │   │   ├── articulo_3_gobernabilidad_gestion_identidades.md
│   │   │   │   ├── articulo_4_seguridad_en_la_nube.md
│   │   │   │   ├── articulo_5_redes_conectividad.md
│   │   │   │   ├── ka0s_lz.md
│   │   ├── ka0s_md/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_md.md
│   │   │   │   ├── legacy_workflow.md
│   │   ├── ka0s_mongo/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_mongo.md
│   │   │   │   ├── legacy_workflow.md
│   │   ├── ka0s_release/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── fig-1.png
│   │   │   │   ├── fig-2.png
│   │   │   │   ├── fig-3.png
│   │   │   │   ├── fig-4.png
│   │   │   │   ├── fig-5.png
│   │   │   │   ├── fig-6.png
│   │   │   │   ├── fig-7.png
│   │   │   │   ├── ka0s_release.md
│   │   │   │   ├── legacy_release_notes.md
│   │   ├── ka0s_security/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 01_security_checklist.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_security.md
│   │   ├── ka0s_ssh_connect/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_ssh_connect.md
│   │   │   │   ├── legacy_workflow.md
│   │   ├── ka0s_summary/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_summary.md
│   │   │   │   ├── legacy_workflow.md
│   │   ├── ka0s_template/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_template.md
│   │   │   │   ├── legacy_info.md
│   │   ├── ka0s_version/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_version.md
│   │   │   │   ├── legacy_workflow.md
│   │   ├── ka0s_yaml/
│   │   │   │   ├── 01_concept.md
│   │   │   │   ├── 02_usage_validation.md
│   │   │   │   ├── 03_integration.md
│   │   │   │   ├── ka0s_yaml.md
│   │   │   │   ├── legacy_workflow.md
│   │   ├── kaos_cluster_restart/
│   │   │   │   ├── 01_overview.md
│   │   │   │   ├── 02_usage.md
│   │   │   │   ├── kaos_cluster_restart.md
│   ├── templates/
│   │   ├── workflow/
│   │   │   │   ├── basic-template.yaml
│   ├── test/
│   │   │   ├── Index.html
│   │   │   ├── correct-file.html
│   │   │   ├── correct-file.json
│   │   │   ├── correct-file.md
│   │   │   ├── correct-file.yaml
│   │   │   ├── correct-file1.md
│   │   │   ├── correct-file1.yaml
│   │   │   ├── correct-file2.md
│   │   │   ├── correct-file2.yaml
│   │   │   ├── correct-file3.md
│   │   │   ├── correct-file3.yaml
│   │   │   ├── failed-file.html
│   │   │   ├── failed-file.json
│   │   │   ├── failed-file.md
│   │   │   ├── failed-file.yaml
│   │   │   ├── prueba.yaml
├── devops/ #"Ejecuta scripts desde devops/ cuando necesites realizar operaciones imperativas de mantenimiento, auditoría de seguridad o remediación directa sobre los nodos y el clúster Kubernetes, utilizando estos scripts como la capa de ejecución táctica del sistema."
│   ├── core/
│   │   ├── host/
│   │   ├── itop/
│   │   ├── k8s/
│   │   ├── n8n/
│   │   ├── zabbix/
│   ├── k8s/
│   ├── .../
```
