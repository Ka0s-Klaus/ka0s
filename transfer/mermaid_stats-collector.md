graph TD
    A[GitHub Action Schedule] --> B[Ejecutar Workflow]
    B --> C[Python Script]
    C --> D{API de GitHub}
    D --> E[General Stats]
    D --> F[Traffic Data]
    D --> G[Issues/Pulls]
    D --> H[Contributors]
    C --> I[MongoDB Atlas]
    I --> J[Almacenamiento Seguro]
    J --> K[Dashboards/BI]