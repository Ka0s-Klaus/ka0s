# OpenClaw (Modelos Locales) - Ka0s Brain

## Resumen

OpenClaw se despliega como **gateway always-on** dentro del clúster Ka0s para actuar como “cerebro” operativo: sesiones persistentes, memoria a largo plazo (Markdown + indexado), políticas de herramientas y una base extensible de skills.

Este despliegue está diseñado para operar con **modelos 100% locales** (sin enviar prompts a proveedores externos). OpenClaw no “es un modelo”: es el control plane; el modelo corre en un runtime local separado.

## Enlaces rápidos

- [Concepto](./01_concept.md)
- [Guía de uso y validación](./02_usage_validation.md)
- [Arquitectura técnica](./03_technical.md)
- [Guía CLI](./04_cli_usage.md)

## Ubicación

- Manifiestos: `core/b2b/core-services/openclaw/`
- Documentación: `core/docs/openclaw/`
