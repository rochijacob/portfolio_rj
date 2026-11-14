# Portfolio de Rocío Jacob

Leé `docs/HANDOFF.md` antes de tocar nada: tiene el objetivo, las decisiones tomadas, las reglas de anonimización y los pendientes.

Reglas rápidas:

- El contenido se edita en `src/core.js` y el diseño en `src/site-*.html`. Los `site-*.html` de la raíz son generados: no los edites a mano.
- Después de cada cambio: `node src/build.mjs` y luego `node scripts/check.js`.
- No inventes hechos, métricas ni links. Lo que falta va como `[MARCADOR]` visible.
- No nombres empleadores ni clientes (ver tabla en el handoff).
- Todo texto nuevo va en EN y ES dentro de `content`.
- Si cambia una decisión o se resuelve un pendiente, actualizá `docs/HANDOFF.md` en el mismo commit.
