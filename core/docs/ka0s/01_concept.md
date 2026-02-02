# Concepto y Arquitectura: Ka0s Core Orchestrator

## 1. Introducción
El módulo `ka0s` (definido en `.github/workflows/kaos.yml`) actúa como el **orquestador central** del ecosistema. Es el punto de entrada que evalúa, clasifica y delega el procesamiento de cambios en el código.

## 2. Filosofía del Caos (Kaizen)
Como indica su nombre, inspirado en la teoría del caos, Ka0s busca encontrar patrones y estructura en sistemas complejos para optimizar su funcionamiento. Se basa en la metodología Kaizen de mejora continua.
> "... si tu intención es describir la verdad, hazlo con sencillez, y la elegancia déjasela al sastre." - Albert Einstein

## 3. Arquitectura del Workflow
El workflow `ka0s.yml` implementa un patrón de "Despachador Inteligente":
1.  **Detección de Cambios**: Identifica qué archivos han sido modificados.
2.  **Validación Inicial**: Comprueba extensiones permitidas (`.html`, `.js`, `.yaml`, `.json`, `.md`, `.py`).
3.  **Generación de Contexto**: Crea un payload JSON con metadatos del evento (commit, PR, issue).
4.  **Delegación Modular**: Invoca módulos específicos (sub-workflows) según el tipo de archivo detectado.
