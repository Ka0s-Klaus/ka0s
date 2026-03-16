"""
Configuración de logging estructurado para el SDK de iTop.
"""
import logging
import json
import sys
import os

class JsonFormatter(logging.Formatter):
    """Formateador de logs en JSON para ingestión por ELK/Fluentd."""
    def format(self, record):
        log_record = {
            "timestamp": self.formatTime(record, self.datefmt),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
            "module": record.module,
            "line": record.lineno
        }
        if record.exc_info:
            log_record["exception"] = self.formatException(record.exc_info)
        return json.dumps(log_record)

def setup_logger(name: str = "kaos_itop_sdk", level: int = logging.INFO) -> logging.Logger:
    """Configura y devuelve un logger con formato JSON."""
    logger = logging.getLogger(name)
    logger.setLevel(level)

    # Evitar duplicar handlers
    if not logger.handlers:
        handler = logging.StreamHandler(sys.stdout)
        
        # Usar formato JSON si estamos en un entorno productivo/CI, o texto plano para dev local
        if os.getenv("KAOS_LOG_FORMAT", "text").lower() == "json":
            handler.setFormatter(JsonFormatter())
        else:
            handler.setFormatter(logging.Formatter(
                '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
            ))
        
        logger.addHandler(handler)

    return logger
