# Analytics: X, LinkedIn y búsqueda orgánica

Sitio: https://rochijacob.github.io/portfolio_rj/

El código carga únicamente GTM-TW2MSTRV. Tanto GTM-TW2MSTRV como GTM-K79GS3KK son contenedores de Tag Manager. El ID de medición GA4 informado es G-FFMYCXQZFJ. No instalar además el segundo contenedor ni un config directo de GA4.

Verificación del 16/11/2026: el recurso público de GTM-TW2MSTRV devuelve tags:[], predicates:[], rules:[]. Aunque se confirmó publicación en el chat, esa versión pública no tiene etiquetas. Falta publicar la etiqueta Google y la etiqueta de eventos descritas abajo. No se confirmó recepción en GA4.

## Enlaces listos para copiar

Bio de X:
https://rochijacob.github.io/portfolio_rj/?utm_source=x&utm_medium=social&utm_campaign=portfolio&utm_content=bio

Post de X:
https://rochijacob.github.io/portfolio_rj/?utm_source=x&utm_medium=social&utm_campaign=portfolio&utm_content=post

Perfil de LinkedIn:
https://rochijacob.github.io/portfolio_rj/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=profile

Post de LinkedIn:
https://rochijacob.github.io/portfolio_rj/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio&utm_content=post

Para dirigir al español, reemplazar /? por /es.html? después del deploy. Usar utm_content=post_20261116 para distinguir publicaciones. No incluir nombres de personas, emails ni datos privados en UTMs. No etiquetar enlaces internos ni el sitemap.

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

## Configuración necesaria en GTM

La etiqueta Google base registra visitas; NO reenvía automáticamente los eventos propios del sitio.

1. Etiqueta Google con ID G-FFMYCXQZFJ y disparador Initialization / All Pages. Debe estar publicada en GTM-TW2MSTRV.
2. Variable de capa de datos versión 2: nombre portfolio_event_name.
3. Variables de capa de datos versión 2 para portfolio_parameters.language, portfolio_parameters.project_code, portfolio_parameters.content_type, portfolio_parameters.content_id, portfolio_parameters.method, portfolio_parameters.location y portfolio_parameters.result.
4. Disparador: Evento personalizado, nombre exacto portfolio_event.
5. Etiqueta Google Analytics: evento GA4. Measurement ID G-FFMYCXQZFJ. Nombre del evento: variable del paso 2. Parámetros language, project_code, content_type, content_id, method, location, result, cada uno asociado con su variable del paso 3.
6. Asignar el disparador del paso 4. Probar en Preview/Tag Assistant y DebugView, luego publicar. No crear disparadores paralelos para las mismas acciones.

## Informe mínimo

GA4 → Adquisición de tráfico: usar Fuente/medio de la sesión. Comparar x / social, linkedin / social y el grupo de canales de la sesión Organic Search. En Exploraciones, cruzar esos segmentos con nombre de evento, sesiones y usuarios. Filtrar el informe, no la recolección desde JavaScript, mantiene la atribución.

Registrar dimensiones de evento para project_code, method, location y result si se necesitan en informes. Marcar contact_click como evento clave opcional; para copias exitosas, crear un evento derivado email_copy_success con condición result=success y marcar solo ese.

Verificación pendiente en la cuenta: una visita por carga, eventos únicos por interacción y fuente/medio correctos. Las pruebas locales bloquean Google y verifican únicamente la emisión del sitio; no prueban recepción en la propiedad.
