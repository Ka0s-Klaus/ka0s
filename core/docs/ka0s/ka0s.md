# Documentación del módulo principal de Ka0s

![Ka0S](/core/imgs/kaos.jpeg)

```shell
- Albert Einstein dijo una vez: "... si tu intención es describir la verdad, hazlo con sencillez, y la elegancia dejasela al sastre."
```

## ka0s.yml

Este es el módulo principal de Ka0s, que se encarga de gestionar y comprobar la seguridad y el cumplimiento que se desean tener antes de que el código sea evaluado y puesto a disposición para su uso.

### Jobs

- Definición: Componentes individuales del sistema que realizan funciones específicas.
- Ejemplo: Módulo de autenticación, módulo de gestión de usuarios.

### Steps

Definición: Cómo interactúan y se comunican los módulos entre sí.
Ejemplo: El módulo de autenticación se comunica con el módulo de gestión de usuarios para verificar credenciales.

### Entorno

Definición: El contexto en el que opera el sistema, incluyendo hardware, software y redes.
Ejemplo: Servidores, bases de datos, APIs externas.

### Principios de diseño y evolución

Definición: Normas y directrices que guían el desarrollo y la mejora del sistema.
Ejemplo: Principio de modularidad, principio de reutilización de código.

### Flujo de GitHub Actions (kaos.yml)

#### Trigger y Contexto

- **Trigger**: Se activa en push para archivos específicos (.html, .js, .yaml, .yml, .json, .md, .py) en ramas H*, F*, RN*
- **Variables de entorno**: Define identificadores únicos y rutas para resultados

#### Proceso Principal (job-core)

1. **Checkout**: Obtiene el código del repositorio
2. **Validación**: Comprueba extensiones de archivos y notifica inicio
3. **Creación JSON**: Genera estructura JSON con metadatos del evento
   - Incluye información de commits para push
   - Incluye información de pull requests si aplica
   - Incluye información de issues si aplica
4. **Subida archivos**: Guarda resultados en el repositorio
5. **Módulos**: Activa módulos específicos según extensión de archivos
   - Verifica si la extensión está permitida
   - Verifica si existe módulo activo para la extensión
   - Notifica errores mediante issues

#### Manejo de Resultados

- **Éxito (handle-success)**: Notifica finalización exitosa
- **Fallo (handle_failure)**: Notifica errores en el proceso
- **Finalización (end-workflow)**: Cierra el workflow y activa inspector

#### Diagrama de Flujo

Y aquí viene lo bueno. Este es el "diagrama básico" del flujo de trabajo de Ka0s, pero fijaros bien en la imagen (ese dibujito de "componentes" nos pueden dar una pequeña pista.
![Diagrama conceptual del proceso completo](/core/imgs/workflow-ka0s.png)

Este diseño nos permite **La capacidad de adaptación es la habilidad de un sistema para ser Ka0s** adaptarnos a cualquier situación.
