# Analytics: X, LinkedIn y búsqueda orgánica

Sitio: https://rochijacob.github.io/portfolio_rj/

La web carga GTM-TW2MSTRV y la etiqueta GA4 directa G-FFMYCXQZFJ. GTM-K79GS3KK es otro contenedor, con una propiedad distinta (G-DV2NR6RG18) en su versión pública; no se carga en esta web. No añadir otra etiqueta GA4 para G-FFMYCXQZFJ dentro de GTM-TW2MSTRV mientras exista la directa, porque duplicaría visitas y eventos.

Verificación del 16/11/2026: el recurso público de GTM-TW2MSTRV devuelve tags:[], predicates:[], rules:[]. Por eso GA4 se carga directamente desde el sitio. El script y los eventos están implementados; la recepción en la cuenta se debe confirmar en Realtime y DebugView.

## Elegir el idioma del enlace

La portada `https://rochijacob.github.io/portfolio_rj/` abre en **inglés** y `https://rochijacob.github.io/portfolio_rj/es.html` abre en **español**. El idioma no depende del navegador: el enlace que compartís determina la página inicial. Después, la persona puede cambiarlo desde el selector del sitio; el cambio conserva los UTMs.

Enlaces cortos para perfiles y bios (las variantes `/en/` y `/es/` se agregaron el 17/11/2026):

| Canal | Inglés | Español |
|---|---|---|
| LinkedIn | https://rochijacob.github.io/portfolio_rj/in/en/ | https://rochijacob.github.io/portfolio_rj/in/es/ |
| X | https://rochijacob.github.io/portfolio_rj/x/en/ | https://rochijacob.github.io/portfolio_rj/x/es/ |

Los enlaces antiguos `/in/` y `/x/` siguen funcionando y abren en inglés. Cada enlace corto redirige a la página del idioma elegido con `utm_source`, `utm_medium=social`, `utm_campaign=portfolio` y `utm_content=profile` o `bio`. No carga Analytics durante el salto ni se incluye en el sitemap. La URL larga se ve en el navegador al llegar. Son redirecciones HTML/JavaScript compatibles con GitHub Pages, no redirects HTTP 301.

Para **posts de LinkedIn**, compartir la URL final con UTM en lugar de `/in/es/` o `/in/en/`: así LinkedIn lee directamente los metadatos Open Graph y muestra la imagen del hero correspondiente. La página en español usa `og-hero-es.png`; la inglesa, `og-hero-en.png`.

Bio de X:
https://rochijacob.github.io/portfolio_rj/?utm_source=x&utm_medium=social&utm_campaign=portfolio&utm_content=bio

Post de X:
https://rochijacob.github.io/portfolio_rj/?utm_source=x&utm_medium=social&utm_campaign=portfolio&utm_content=post

Perfil de LinkedIn:
https://rochijacob.github.io/portfolio_rj/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=profile

Post de LinkedIn:
https://rochijacob.github.io/portfolio_rj/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=post

Para las cuatro URLs largas de arriba, reemplazar `/?` por `/es.html?` para abrir en español. Por ejemplo, un post de LinkedIn en español:

https://rochijacob.github.io/portfolio_rj/es.html?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=post

Usar `utm_content=post_20261117` para distinguir publicaciones. No incluir nombres de personas, emails ni datos privados en UTMs. No etiquetar enlaces internos ni el sitemap.

El tráfico orgánico no lleva UTM: GA4 usa el referente del buscador. Visitas sin referente pueden aparecer como direct; no es posible recuperar con certeza un origen perdido. X sin UTM también puede aparecer como t.co. Los cambios de idioma conservan UTMs y anclas.

El idioma elegido en el enlace no cambia `utm_source`: LinkedIn sigue siendo `linkedin / social` tanto para EN como para ES. Para comparar interacciones por idioma, los eventos del sitio envían el parámetro `language`; registrarlo como dimensión personalizada de evento si se quiere usar en Exploraciones. El título SEO de cada idioma ahora destaca IA, automatización y productos digitales. Las búsquedas orgánicas pueden entrar a `/` o a `/es.html` según la URL que encuentre y elija el buscador.

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

1. En GA4, abrir Informes → Tiempo real para confirmar visitas y eventos. La tarjeta «Usuarios activos por Primera fuente del usuario» muestra cómo llegó esa persona **por primera vez**; no sirve para probar el origen de una visita posterior. Puede tardar en procesar usuarios nuevos.
2. Abrir `/x/es/` y `/in/en/` en sesiones privadas separadas. Confirmar que la URL final contiene respectivamente `es.html?utm_source=x` o `?utm_source=linkedin` y que el idioma inicial es el correcto. Para comparar fuentes, ir a Informes → Adquisición → Adquisición de tráfico y elegir «Fuente/medio de la sesión» o «Fuente/medio manual de la sesión» como dimensión de la tabla. Buscar `x / social` y `linkedin / social`. El procesamiento de informes puede demorar entre 24 y 48 horas.
3. Para DebugView, habilitar modo debug con Tag Assistant o con `gtag('set','debug_mode',true)` temporalmente en la consola antes de interactuar. Confirmar nombre y parámetros. No dejar debug_mode activado para todos los visitantes.
4. Revisar una sola vista de página por carga. Si aparecen dos, verificar que no haya otra etiqueta G-FFMYCXQZFJ publicada en GTM o instalada por otro medio.

Diagnóstico del 16/11/2026: el navegador llega a la home con los UTMs intactos y los `page_view` de `G-FFMYCXQZFJ` incluyen la URL completa. También sale un `page_view` hacia `G-DV2NR6RG18`, aunque la página solo solicita los scripts `gtag/js?id=G-FFMYCXQZFJ` y `gtm.js?id=GTM-TW2MSTRV`. Es compatible con una segunda destinación vinculada a la etiqueta de Google, pero debe revisarse en Admin → Administrar etiqueta de Google → Destinos de la cuenta. Las dos solicitudes son a IDs distintos; esto por sí solo no demuestra doble conteo dentro de la misma propiedad.

GTM-TW2MSTRV permanece instalado, pero hoy está vacío. Si más adelante se decide administrar GA4 desde GTM, primero preparar en el contenedor la Google tag y las etiquetas de eventos, después retirar la instalación directa de la web en el mismo despliegue y comprobar el conteo. No publicar ambas configuraciones simultáneamente.

## Informe mínimo

GA4 → Adquisición de tráfico: usar Fuente/medio de la sesión. Comparar x / social, linkedin / social y el grupo de canales de la sesión Organic Search. En Exploraciones, cruzar esos segmentos con nombre de evento, sesiones y usuarios. Filtrar el informe, no la recolección desde JavaScript, mantiene la atribución.

Registrar dimensiones de evento para project_code, method, location y result si se necesitan en informes. Marcar contact_click como evento clave opcional; para copias exitosas, crear un evento derivado email_copy_success con condición result=success y marcar solo ese.

Verificación pendiente en la cuenta: una visita por carga, eventos únicos por interacción y fuente/medio correctos. Las pruebas locales bloquean Google y verifican únicamente la emisión del sitio; no prueban recepción en la propiedad.
