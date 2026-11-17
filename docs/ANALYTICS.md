# Analytics del portfolio

La home carga el Google tag de la propiedad GA4 `G-FFMYCXQZFJ`. Las visitas y los eventos personalizados se envían directamente con `gtag.js`; no hace falta publicar un contenedor adicional de Tag Manager para esta web. No se envía el email ni ningún otro dato personal.

## Qué falta configurar en Google Analytics

1. Abrir **Realtime** y **DebugView** en GA4 para confirmar que llegan visitas y eventos desde el dominio publicado.
2. En GA4, registrar como dimensiones personalizadas los parámetros que se quieran usar en informes. No hace falta registrar todos: para empezar alcanzan `section_id`, `project_code`, `location`, `method`, `language` y `result`.
3. Marcar como eventos clave solo las acciones que representen intención real de contacto.

`contact_click` y `email_copy` con `result=success` son los mejores candidatos para marcar como eventos clave. No conviene marcar navegación, vistas o cambios de tema/idioma como conversiones.

## Mapa de eventos

| Evento | Cuándo ocurre | Parámetros principales | Para qué sirve |
|---|---|---|---|
| `section_view` | Una sección importante entra en pantalla por primera vez | `section_id` | Ver hasta dónde llega la lectura |
| `project_view` | Un caso destacado entra en pantalla por primera vez | `project_code` | Comparar interés entre proyectos |
| `select_content` | Se elige un proyecto desde el resumen superior | `content_type`, `content_id` | Medir qué caso llama la atención |
| `case_open` | Se abre un caso completo | `project_code` | Separar lectura superficial de interés real |
| `navigation_click` | Se usa el dock o el nombre del encabezado | `section_id` | Entender cómo se recorre la página |
| `cta_click` | Se usa un CTA del hero | `location`, `target` | Comparar contacto vs. ver proyectos |
| `contact_click` | Se abre email o LinkedIn | `method`, `location` | Medir intención de contacto |
| `email_copy` | Se intenta copiar el email | `result` | Medir intención y detectar fallas del portapapeles |
| `theme_change` | Se cambia claro/oscuro | `selected_theme` | Señal UX opcional |
| `language_change` | Se cambia EN/ES | `selected_language` | Entender preferencia de idioma |

Todos los eventos incluyen también `language` y `theme`.

## URLs personalizadas para saber de dónde llegan

GA4 reconoce los parámetros UTM de la URL. Mantener siempre minúsculas, sin tildes ni espacios y usar nombres consistentes:

```text
https://portfoliorj-beta.vercel.app/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=profile

https://portfoliorj-beta.vercel.app/?utm_source=linkedin&utm_medium=direct_message&utm_campaign=freelance_outreach&utm_content=automation

https://portfoliorj-beta.vercel.app/?utm_source=github&utm_medium=profile&utm_campaign=portfolio&utm_content=readme

https://portfoliorj-beta.vercel.app/?utm_source=cv&utm_medium=document&utm_campaign=job_search&utm_content=english

https://portfoliorj-beta.vercel.app/?utm_source=email&utm_medium=signature&utm_campaign=portfolio&utm_content=signature
```

Convención recomendada:

- `utm_source`: plataforma o lugar exacto (`linkedin`, `github`, `cv`, `email`).
- `utm_medium`: tipo de canal (`social`, `direct_message`, `profile`, `document`, `signature`).
- `utm_campaign`: objetivo estable (`portfolio`, `freelance_outreach`, `job_search`).
- `utm_content`: variante concreta del enlace (`profile`, `automation`, `english`, `signature`).

No usar UTMs en enlaces internos del sitio: iniciarían una campaña nueva y romperían la atribución original de la visita.
