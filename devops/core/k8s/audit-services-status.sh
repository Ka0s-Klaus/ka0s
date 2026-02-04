#!/bin/bash
# =================================================================================================
# [Ka0S] Audit Cluster Services Status (Markdown + HTML Interactive)
# =================================================================================================
# Genera un informe visual del estado del cluster: nodos, componentes críticos, pods con problemas,
# y servicios expuestos. Salida en /tmp/results por defecto y copia al repositorio vía workflow.
# =================================================================================================

set -e

# Configuración
export KUBECONFIG=${KUBECONFIG:-/etc/kubernetes/admin.conf}
RESULTS_DIR=${1:-/tmp/results}
mkdir -p "$RESULTS_DIR"

TS=$(date +'%Y%m%d-%H%M%S')
MD_FILE="$RESULTS_DIR/cluster-report-$TS.md"
HTML_FILE="$RESULTS_DIR/cluster-dashboard-$TS.html"

echo "[INFO] Generando informes en $RESULTS_DIR"

# -----------------------------------------------------------------------------------------------
# Markdown Report (Texto Plano)
# -----------------------------------------------------------------------------------------------
{
  echo "# Ka0s Cluster Status Report"
  echo ""
  echo "Generado: $(date)"
  echo ""

  echo "## 🖥️ Estado de los Nodos"
  echo ""
  kubectl get nodes -o wide | sed '1!s/^/    /' | sed '1s/^/\`\`\`text\n/' | sed '$a\\`\`\`'

  echo ""
  echo "## ⚙️ Infraestructura Crítica"
  echo ""
  echo "### Ingress-NGINX (ingress-nginx)"
  kubectl get pods -n ingress-nginx -l app.kubernetes.io/name=ingress-nginx -o wide | sed '1!s/^/    /' | sed '1s/^/\`\`\`text\n/' | sed '$a\\`\`\`'
  echo ""
  echo "### MetalLB (metallb-system)"
  kubectl get pods -n metallb-system -l app=metallb -o wide | sed '1!s/^/    /' | sed '1s/^/\`\`\`text\n/' | sed '$a\\`\`\`'
  echo ""
  echo "### CoreDNS (kube-system)"
  kubectl get pods -n kube-system -l k8s-app=kube-dns -o wide | sed '1!s/^/    /' | sed '1s/^/\`\`\`text\n/' | sed '$a\\`\`\`'
  echo ""

  echo "## 🚑 Pods con Problemas"
  echo ""
  kubectl get pods -A --field-selector status.phase!=Running,status.phase!=Succeeded -o wide | sed '1!s/^/    /' | sed '1s/^/\`\`\`text\n/' | sed '$a\\`\`\`'
  echo ""

  echo "## 🌐 Servicios Expuestos (LoadBalancer/NodePort/Ingress)"
  echo ""
  echo "### Services"
  kubectl get svc -A -o wide | grep -E "LoadBalancer|NodePort" | sed '1!s/^/    /' | sed '1s/^/\`\`\`text\n/' | sed '$a\\`\`\`' || true
  echo ""
  echo "### Ingress"
  kubectl get ingress -A | sed '1!s/^/    /' | sed '1s/^/\`\`\`text\n/' | sed '$a\\`\`\`' || true
} > "$MD_FILE"

echo "[INFO] Markdown generado: $MD_FILE"

# -----------------------------------------------------------------------------------------------
# HTML Interactive Dashboard (Modern & Navigable)
# -----------------------------------------------------------------------------------------------
# Pre-fetch data into variables to inject into HTML
DATA_NODES=$(kubectl get nodes -o wide)
DATA_PODS_FAIL=$(kubectl get pods -A --field-selector status.phase!=Running,status.phase!=Succeeded -o wide 2>&1 || echo "No se encontraron pods fallidos.")
DATA_SVC=$(kubectl get svc -A -o wide | grep -E "LoadBalancer|NodePort" || echo "No LoadBalancer/NodePort services found")
DATA_ING=$(kubectl get ingress -A 2>&1 || echo "No ingresses found")
DATA_ALL_PODS=$(kubectl get pods -A -o wide --sort-by=.metadata.creationTimestamp | tail -n 50) # Last 50 pods
DATE_GEN=$(date)

# Infra critical check (simple grep for running count vs expected is hard in bash without loops, just dump for now)
DATA_INGRESS_PODS=$(kubectl get pods -n ingress-nginx -l app.kubernetes.io/name=ingress-nginx -o wide 2>&1)
DATA_METALLB_PODS=$(kubectl get pods -n metallb-system -l app=metallb -o wide 2>&1)
DATA_DNS_PODS=$(kubectl get pods -n kube-system -l k8s-app=kube-dns -o wide 2>&1)

cat <<EOF > "$HTML_FILE"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ka0s Cluster Dashboard</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-color: #0d1117;
      --card-bg: #161b22;
      --border-color: #30363d;
      --text-primary: #c9d1d9;
      --text-secondary: #8b949e;
      --accent-color: #58a6ff;
      --success-color: #238636;
      --danger-color: #da3633;
      --warning-color: #d29922;
    }
    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-color);
      color: var(--text-primary);
      margin: 0;
      padding: 0;
      display: flex;
      height: 100vh;
      overflow: hidden;
    }
    /* Sidebar Navigation */
    .sidebar {
      width: 250px;
      background-color: var(--card-bg);
      border-right: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      padding: 20px 0;
    }
    .brand {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--accent-color);
      padding: 0 20px 20px;
      border-bottom: 1px solid var(--border-color);
      margin-bottom: 10px;
    }
    .nav-item {
      padding: 12px 20px;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s;
      text-decoration: none;
      display: block;
    }
    .nav-item:hover, .nav-item.active {
      background-color: rgba(88, 166, 255, 0.1);
      color: var(--text-primary);
      border-left: 3px solid var(--accent-color);
    }
    
    /* Main Content */
    .main-content {
      flex: 1;
      padding: 30px;
      overflow-y: auto;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    .timestamp {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    
    /* Cards & Sections */
    .card {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 20px;
      margin-bottom: 24px;
    }
    .card h2 {
      margin-top: 0;
      font-size: 1.2rem;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 10px;
      margin-bottom: 15px;
      color: var(--text-primary);
    }
    
    /* Code/Pre blocks */
    pre {
      background-color: #0d1117;
      padding: 15px;
      border-radius: 6px;
      overflow-x: auto;
      font-family: 'Consolas', 'Monaco', monospace;
      font-size: 0.85rem;
      color: #e6edf3;
      white-space: pre-wrap;
    }
    
    /* Status Indicators */
    .status-badge {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
    }
    .status-ok { background-color: rgba(35, 134, 54, 0.2); color: #3fb950; }
    .status-err { background-color: rgba(218, 54, 51, 0.2); color: #f85149; }
    
    /* Tabs for Services */
    .tab-container { margin-top: 20px; }
    
  </style>
  <script>
    function showSection(id) {
      // Hide all sections
      document.querySelectorAll('.content-section').forEach(el => el.style.display = 'none');
      // Show target
      document.getElementById(id).style.display = 'block';
      // Update nav
      document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
      document.querySelector('[onclick="showSection(\'' + id + '\')"]').classList.add('active');
    }
  </script>
</head>
<body>

  <!-- Sidebar -->
  <div class="sidebar">
    <div class="brand">Ka0s Monitor</div>
    <a class="nav-item active" onclick="showSection('overview')">📊 Vista General</a>
    <a class="nav-item" onclick="showSection('nodes')">🖥️ Nodos</a>
    <a class="nav-item" onclick="showSection('pods')">🚑 Pods & Salud</a>
    <a class="nav-item" onclick="showSection('network')">🌐 Red & Servicios</a>
    <a class="nav-item" onclick="showSection('infra')">⚙️ Infraestructura</a>
  </div>

  <!-- Content -->
  <div class="main-content">
    <div class="header">
      <h1>Estado del Cluster</h1>
      <div class="timestamp">Actualizado: $DATE_GEN</div>
    </div>

    <!-- Overview Section -->
    <div id="overview" class="content-section">
      <div class="card">
        <h2>Resumen Rápido</h2>
        <p>Bienvenido al panel de control de Ka0s. Usa el menú lateral para navegar por los detalles técnicos.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
          <div style="background: rgba(88, 166, 255, 0.1); padding: 15px; border-radius: 8px; text-align: center;">
            <h3 style="margin:0; color: var(--accent-color);">Nodos</h3>
            <span style="font-size: 2rem; font-weight: bold;">$(echo "$DATA_NODES" | wc -l | awk '{print $1-1}')</span>
          </div>
          <div style="background: rgba(218, 54, 51, 0.1); padding: 15px; border-radius: 8px; text-align: center;">
            <h3 style="margin:0; color: var(--danger-color);">Pods Fallidos</h3>
            <span style="font-size: 2rem; font-weight: bold;">$(echo "$DATA_PODS_FAIL" | grep -v "No se encontraron" | wc -l)</span>
          </div>
          <div style="background: rgba(35, 134, 54, 0.1); padding: 15px; border-radius: 8px; text-align: center;">
            <h3 style="margin:0; color: var(--success-color);">Servicios Expuestos</h3>
            <span style="font-size: 2rem; font-weight: bold;">$(echo "$DATA_SVC" | grep -v "No LoadBalancer" | wc -l)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Nodes Section -->
    <div id="nodes" class="content-section" style="display:none;">
      <div class="card">
        <h2>Estado de Nodos</h2>
        <pre>$DATA_NODES</pre>
      </div>
    </div>

    <!-- Pods Section -->
    <div id="pods" class="content-section" style="display:none;">
      <div class="card">
        <h2>Pods con Problemas (No Running/Succeeded)</h2>
        <pre>$DATA_PODS_FAIL</pre>
      </div>
      <div class="card">
        <h2>Últimos 50 Pods Creados (Actividad Reciente)</h2>
        <pre>$DATA_ALL_PODS</pre>
      </div>
    </div>

    <!-- Network Section -->
    <div id="network" class="content-section" style="display:none;">
      <div class="card">
        <h2>Servicios (LoadBalancer / NodePort)</h2>
        <pre>$DATA_SVC</pre>
      </div>
      <div class="card">
        <h2>Reglas de Ingress</h2>
        <pre>$DATA_ING</pre>
      </div>
    </div>

    <!-- Infra Section -->
    <div id="infra" class="content-section" style="display:none;">
      <div class="card">
        <h2>Ingress Controller</h2>
        <pre>$DATA_INGRESS_PODS</pre>
      </div>
      <div class="card">
        <h2>MetalLB System</h2>
        <pre>$DATA_METALLB_PODS</pre>
      </div>
      <div class="card">
        <h2>CoreDNS System</h2>
        <pre>$DATA_DNS_PODS</pre>
      </div>
    </div>

  </div>

</body>
</html>
EOF

echo "[INFO] HTML generado: $HTML_FILE"
echo "[SUCCESS] Auditoría completada."
