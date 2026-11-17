# Analytics: X, LinkedIn y búsqueda orgánica

Sitio: https://rochijacob.github.io/portfolio_rj/

La web carga GTM-TW2MSTRV y la etiqueta GA4 directa G-FFMYCXQZFJ. GTM-K79GS3KK es otro contenedor, con una propiedad distinta (G-DV2NR6RG18) en su versión pública; no se carga en esta web. No añadir otra etiqueta GA4 para G-FFMYCXQZFJ dentro de GTM-TW2MSTRV mientras exista la directa, porque duplicaría visitas y eventos.

Verificación del 16/11/2026: el recurso público de GTM-TW2MSTRV devuelve tags:[], predicates:[], rules:[]. Por eso GA4 se carga directamente desde el sitio. El script y los eventos están implementados; la recepción en la cuenta se debe confirmar en Realtime y DebugView.

## Enlaces listos para copiar

Enlaces cortos publicados:

- X: https://rochijacob.github.io/portfolio_rj/x/
- LinkedIn: https://rochijacob.github.io/portfolio_rj/in/

Redirigen a las URLs UTM de abajo. No cargan Analytics durante el salto ni se incluyen en el sitemap. La URL larga se ve en el navegador al llegar. Son redirecciones HTML/JavaScript compatibles con GitHub Pages, no redirects HTTP 301.

Bio de X:
https://rochijacob.github.io/portfolio_rj/?utm_source=x&utm_medium=social&utm_campaign=portfolio&utm_content=bio

Post de X:
https://rochijacob.github.io/portfolio_rj/?utm_source=x&utm_medium=social&utm_campaign=portfolio&utm_content=post

Perfil de LinkedIn:
https://rochijacob.github.io/portfolio_rj/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=profile

Post de LinkedIn:
https://rochijacob.github.io/portfolio_rj/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=post

Para dirigir al español, reemplazar /? por /es.html?. Usar utm_content=post_20261116 para distinguir publicaciones. No incluir nombres de personas, emails ni datos privados en UTMs. No etiquetar enlaces internos ni el sitemap.

El tráfico orgánico no lleva UTM: GA4 usa el referente del buscador. Visitas sin referente pueden aparecer como direct; no es posible recuperar con certeza un origen perdido. X sin UTM también puede aparecer como t.co. Los cambios de idioma conservan UTMs y anclas.

## Eventos que emite el código

| Evento | Significado | Parámetros |
|---|---|---|
| project_view | Caso entra en pantalla, una vez por página | project_code |
| select_content | Clic en proyecto destacado | content_type, content_id |
| case_open | Apertura del caso completo | project_code |
| contact_click | Clic en email o LinkedIn | method, location |
| email_copy | Intento de copia | result: success o failure |

Todos llevan language. Un clic de contacto indica intención: no confirma un mensaje enviado. No se envía el email ni texto libre. No se registran tema, navegación genérica ni scroll personalizado. GA4 puede registrar sus eventos automáticos y de medición mejorada.

case_open está preparado para futuros casos completos: la versión actual de main retiró ese desplegable, por lo que hoy no dispara ese evento. No se restauró contenido retirado para producir métricas.

## Cómo confirmar que funciona

1. En GA4, abrir Informes → Tiempo real. En otra ventana privada abrir la home con `?utm_source=x&utm_medium=social&utm_campaign=portfolio&utm_content=test` y navegar entre proyectos. Comprobar que aparece una visita y eventos `project_view` o `select_content`. Los reportes de adquisición pueden demorar más que Tiempo real.
2. Abrir el enlace corto `/in/` en otra sesión privada y revisar en Tiempo real la fuente `linkedin` y el evento `contact_click` al pulsar el mail. El click no confirma que se haya enviado un mensaje.
3. Para DebugView, habilitar modo debug con Tag Assistant o con `gtag('set','debug_mode',true)` temporalmente en la consola antes de interactuar. Confirmar nombre y parámetros. No dejar debug_mode activado para todos los visitantes.
4. Revisar una sola vista de página por carga. Si aparecen dos, verificar que no haya otra etiqueta G-FFMYCXQZFJ publicada en GTM o instalada por otro medio.

GTM-TW2MSTRV permanece instalado, pero hoy está vacío. Si más adelante se decide administrar GA4 desde GTM, primero preparar en el contenedor la Google tag y las etiquetas de eventos, después retirar la instalación directa de la web en el mismo despliegue y comprobar el conteo. No publicar ambas configuraciones simultáneamente.

## Informe mínimo

GA4 → Adquisición de tráfico: usar Fuente/medio de la sesión. Comparar x / social, linkedin / social y el grupo de canales de la sesión Organic Search. En Exploraciones, cruzar esos segmentos con nombre de evento, sesiones y usuarios. Filtrar el informe, no la recolección desde JavaScript, mantiene la atribución.

Registrar dimensiones de evento para project_code, method, location y result si se necesitan en informes. Marcar contact_click como evento clave opcional; para copias exitosas, crear un evento derivado email_copy_success con condición result=success y marcar solo ese.

Verificación pendiente en la cuenta: una visita por carga, eventos únicos por interacción y fuente/medio correctos. Las pruebas locales bloquean Google y verifican únicamente la emisión del sitio; no prueban recepción en la propiedad.
