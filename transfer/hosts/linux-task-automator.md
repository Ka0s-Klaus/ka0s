linux-task-automator/  
├── backend/                  # Python + Node.js
│   ├── scripts/              # Scripts de automatización (.sh, .py)
│   ├── server.js             # API REST (Express)
│   └── scheduler.py          # Programador de tareas (Cron integrado)
├── frontend/                 # Interfaz web
│   ├── public/               # HTML/CSS/JS
│   └── react-app/            # Opcional: React para UI dinámica
├── docker/                   
│   ├── Dockerfile            # Configuración Ubuntu + Node + Python
│   └── docker-compose.yml    # Orquestación
├── .github/workflows/        # CI/CD (GitHub Actions)
└── README.md                 # Documentación