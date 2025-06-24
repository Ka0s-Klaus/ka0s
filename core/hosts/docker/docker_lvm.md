# Documentación Técnica: Integración LVM-Docker

## Propósito del Script
Automatizar la creación y gestión de volúmenes Docker persistentes basados en:
- Volúmenes LVM existentes en el grupo `kaos-vg`
- Puntos de montaje preconfigurados
- Asignación automática de permisos

## Flujo de Trabajo
1. **Detección de LVs**:
   - Lista todos los volúmenes lógicos en `kaos-vg`
   - Captura: nombre, ruta del dispositivo y tamaño
2. **Verificación de Montaje**:
   - Utiliza `findmnt` para ubicar el punto de montaje
   - Error si no está montado
3. **Gestión de Volúmenes**:
   - Elimina volúmenes existentes antes de recrearlos
   - Crea volumen Docker con opciones `bind mount`
4. **Permisos**:
   - Establece ownership `kaos:kaos` recursivo

## Sistema de Logs