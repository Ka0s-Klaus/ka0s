# Troubleshooting Zabbix API 7.0

## Problemas de Sincronización de Dashboards

Al utilizar la API de Zabbix 7.0 para la creación y actualización de dashboards de forma automatizada (Zabbix as Code), es común encontrarse con errores de validación de parámetros si no se respetan estrictamente los tipos de datos requeridos por la versión 7.0+.

### Error Común: "Invalid parameter: an integer is expected"

**Síntoma:**
El workflow de sincronización (`[Ka0s] Zabbix Dashboard Sync`) falla al intentar crear o actualizar un dashboard, devolviendo un error similar a este en los logs de la API:
\`\`\`json
{
  "code": -32602, 
  "message": "Invalid params.", 
  "data": "Invalid parameter \"/1/pages/1/widgets/1/fields/1/value\": an integer is expected."
}
\`\`\`

**Causa Raíz:**
Zabbix 7.0 ha endurecido la validación de tipos en los campos de los widgets (`widget fields`). Los problemas más frecuentes son:

1. **Campos de Color (Color fields):**
   - En versiones anteriores o en configuraciones erróneas, se solía usar \`"type": 0\` (Integer) para pasar valores de color en formato hexadecimal (ej. \`"00FF00"\`).
   - **Solución:** Los campos que contienen cadenas de texto (como los colores hexadecimales) deben definirse estrictamente con \`"type": 1\` (String).

2. **Identificadores de Items (Item IDs):**
   - Si se inyectan dinámicamente identificadores de ítems (por ejemplo, para asociar una métrica a una gráfica SVG), no se debe usar \`"type": 1\` (String) pasando el ID como texto (ej. \`"value": "12345"\`).
   - **Solución:** Zabbix 7.0 requiere que las referencias a ítems usen \`"type": 4\` (Item) y que el valor suministrado sea un número entero puro (\`integer\`), no una cadena de texto.

### Ejemplo de Corrección en JSON (Colores)

**Incorrecto (Provoca Error):**
\`\`\`json
{
  "type": 0,
  "name": "ds.0.color",
  "value": "00FF00"
}
\`\`\`

**Correcto:**
\`\`\`json
{
  "type": 1,
  "name": "ds.0.color",
  "value": "00FF00"
}
\`\`\`

### Ejemplo de Corrección en Python Script (Inyección de Item IDs)

Al resolver dinámicamente un \`itemid\` usando la API y asignarlo a un campo de widget (ej. en \`create_dashboard.py\`):

**Incorrecto:**
\`\`\`python
new_fields.append({
    "type": 1, # Tipo String incorrecto para Item IDs
    "name": target_name, 
    "value": str(item_id) # Casteo a String incorrecto
})
\`\`\`

**Correcto:**
\`\`\`python
new_fields.append({
    "type": 4, # Tipo 4 es el correcto para Item IDs en Zabbix 6.4+ / 7.0
    "name": target_name, 
    "value": int(item_id) # Debe ser forzado a Integer
})
\`\`\`

### Prevención Adicional
- Asegúrate de que los dashboards de prueba o "samples" (ej. \`k8s_overview_sample.json\`) no contengan \`itemid\` ficticios (como \`0\`), ya que la API también validará la existencia real del ítem y fallará si no lo encuentra. Es recomendable excluir estos archivos de los procesos de sincronización automatizada (por ejemplo, renombrándolos a \`.sample\`).
