# Mapa de la Estructura del Workspace

Este documento presenta un mapa jerárquico de la estructura del workspace `/ka0s-klaus/ka0s`, útil para navegación y referencia rápida.

```text
├── .github/
│   └── workflows/
│       ├── add-doc-to-db.yml
│       ├── audit-host.yml
│       ├── delete-runners.yml
│       ├── execution.yml
│       ├── htmllint.yml
│       ├── inspector.yml
│       ├── jsonlint.yml
│       ├── kaos.yml
│       ├── mdlint.yml
│       ├── rerun-failed-inspector.yml
│       ├── scan-and-trigger.yml
│       ├── scan-image.yml
│       ├── status-db.yml
│       ├── test-runners.yml
│       ├── version.yml
│       ├── workflow-stats.yml
│       └── yamllint.yml
├── .gitignore
├── CHANGELOG.md
├── INDEX_VERSION.md
├── LICENSE
├── README.md
├── audit/
│   ├── README.md
│   ├── eresults/
│   │   └── README.md
│   ├── execution/
│   │   └── README.md
│   ├── hosts/
│   │   └── README.md
│   ├── inspector/
│   │   ├── ... (archivos .json y .log)
│   │   └── README.md
│   ├── jsonlint/
│   │   ├── ... (archivos .txt)
│   │   └── README.md
│   ├── kaos/
│   │   ├── ... (archivos .txt y .json)
│   │   └── README.md
│   ├── mdlint/
│   │   ├── ... (archivos .txt)
│   │   └── README.md
│   ├── mongodb/
│   │   ├── ... (archivos .json)
│   │   └── README.md
│   ├── scan/
│   │   ├── ... (archivos .md y .json)
│   │   └── README.md
│   ├── workflows/
│   │   └── ...
│   └── yamllint/
│       └── ...
├── catalog-info.yaml
├── compliance/
│   └── ...
├── core/
│   └── ...
├── dashboard/
│   └── ...
├── devops/
│   └── ...
├── finops/
│   └── ...
├── index.md
├── mkdocs.yml
├── monitoring/
│   └── ...
├── observability/
│   └── ...
├── packages/
│   └── ...
├── secops/
│   └── ...
├── security/
│   └── ...
├── transfer/
│   └── ...
└── version.txt
```

> Los subdirectorios marcados con `...` contienen múltiples archivos y carpetas adicionales que pueden ser explorados según necesidad.

## Consideraciones
- Este mapa se ha generado automáticamente y puede actualizarse conforme evolucione la estructura del proyecto.
- Para detalles de cada módulo, consulta la documentación específica en el directorio correspondiente.

## Historial de Cambios
- [2024-06-10]: Creación inicial del mapa de estructura del workspace.