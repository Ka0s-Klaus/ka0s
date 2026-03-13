# Guía de Uso: Multimedia y Videos

Este documento explica cómo integrar contenido multimedia, específicamente videos (formato `.mov` o `.mp4`), en la documentación de Ka0s.

## 1. Dónde almacenar los archivos

Para mantener el repositorio organizado, hemos creado una ubicación específica para los recursos multimedia:

- **Ruta del repositorio**: `core/docs/assets/videos/`
- **Referencia en Markdown**: `assets/videos/tu-video.mov`

!!! warning "Consideraciones de Tamaño (Git)"
    Git no está optimizado para almacenar archivos binarios grandes.
    - **Recomendado**: Videos cortos (< 10MB) o demostraciones rápidas.
    - **Alternativa**: Para videos largos o de alta calidad, súbelos a YouTube/Vimeo/S3 y usa un `iframe` o enlace.
    - **Mejor Práctica**: Si vas a subir muchos videos, considera habilitar [Git LFS](https://git-lfs.github.com/).

## 2. Cómo incrustar videos (.mov / .mp4)

MkDocs soporta HTML5 nativo, lo que permite usar la etiqueta `<video>` directamente en tus archivos Markdown.

### Sintaxis Básica

Copia y pega este bloque en tu documento, cambiando la ruta del archivo `src`:

```html
<video width="100%" controls>
  <source src="../assets/videos/ejemplo.mov" type="video/quicktime">
  <source src="../assets/videos/ejemplo.mp4" type="video/mp4">
  Tu navegador no soporta la etiqueta de video.
</video>
```

### Ejemplo en Vivo

A continuación se muestra un reproductor de video (sin archivo cargado actualmente):

<video width="100%" controls style="max-width: 600px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <source src="../assets/videos/demo.mov" type="video/quicktime">
  Tu navegador no soporta la reproducción de videos.
</video>

## 3. Convertir .MOV a .MP4 (Recomendado)

Aunque `.mov` es soportado por muchos navegadores modernos (especialmente en ecosistema Apple), el formato `.mp4` (H.264) es el estándar universal para la web.

Si tienes `ffmpeg` instalado, puedes convertir tus videos fácilmente:

```bash
ffmpeg -i input.mov -vcodec h264 -acodec mp2 output.mp4
```

## 4. Estilos y Atributos

Puedes personalizar la etiqueta `<video>` con atributos HTML estándar:

| Atributo | Descripción |
| :--- | :--- |
| `controls` | Muestra los controles de reproducción (play, volumen, etc). |
| `autoplay` | Inicia el video automáticamente (a veces requiere `muted`). |
| `loop` | Repite el video al finalizar. |
| `muted` | Inicia el video sin sonido. |
| `width` | Ancho del video (ej. `100%`, `640`). |

**Ejemplo de video en bucle sin sonido (ideal para demos de UI):**

```html
<video width="100%" autoplay loop muted playsinline>
  <source src="../assets/videos/ui-demo.mp4" type="video/mp4">
</video>
```
