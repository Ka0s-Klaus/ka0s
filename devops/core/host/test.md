# Guía del Script de Prueba: `test.sh`

## 1. Propósito

El script `test.sh` es una herramienta sencilla diseñada para verificar que el workflow `ssh-connect.yml` y la acción `ssh-exec` funcionan correctamente. Su principal objetivo es confirmar que la conexión SSH, la ejecución de un script remoto y la recolección de resultados se completan con éxito.

## 2. Funcionalidad

Cuando se ejecuta, el script realiza los siguientes pasos en el host remoto:

1.  Define un directorio de resultados, por defecto `/tmp/results`.
2.  Limpia cualquier ejecución anterior eliminando y volviendo a crear este directorio.
3.  Crea dos ficheros de ejemplo dentro del directorio de resultados:
    *   Un fichero de log (`test_log_...log`) con la fecha de la ejecución.
    *   Un fichero JSON (`test_results_...json`) que contiene el `hostname` del servidor remoto y la fecha.
4.  Muestra por pantalla el contenido del directorio de resultados para verificar la creación de los ficheros.

## 3. Cómo Ejecutarlo

Para usar este script, debes lanzar el workflow `Ka0s C0re SSH Host Connect` desde la pestaña "Actions" de GitHub con los siguientes parámetros:

*   **`script-path`**: `devops/core/host/test.sh`
*   **`script-args`**: (Dejar en blanco)
*   **`results-path`**: `audit/eresults/` (o la ruta que prefieras para los resultados de prueba)

Al finalizar la ejecución, los ficheros `test_log...` y `test_results...` aparecerán en la carpeta `audit/eresults/` de tu repositorio.