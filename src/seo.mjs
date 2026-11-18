// Render the existing Studio template at build time, without network or dependencies.
import { runInNewContext } from 'node:vm';
export const origin = 'https://rochijacob.github.io/portfolio_rj/';
export function prerender(html, language) {
  const app = { innerHTML: '' }, styles = [];
  const node = { content: '', dataset: {}, setAttribute() {}, getBoundingClientRect: () => ({top: 0, bottom: 0}) };
  const document = {
    documentElement: { dataset: { pageLanguage: language } },
    head: { insertAdjacentHTML: (_, value) => styles.push(value) },
    querySelector: selector => selector === '#app' ? app : node,
    querySelectorAll: () => [], addEventListener() {},
  };
  const sandbox = { document, navigator: { language }, localStorage: { getItem: () => null },
    matchMedia: () => ({matches: false}), window: {}, innerHeight: 900,
    addEventListener() {}, setInterval() {}, gtag() {}, };
  const code = html.match(/<script>\s*\/\* =+[\s\S]*?<\/script>/)[0].replace(/^<script>|<\/script>$/g, '');
  const renderCode = code.slice(0, code.indexOf('/* Loader: shown'));
  runInNewContext(renderCode + '\nspy = () => {}; walk = () => {}; soften = () => {}; render(T()); result = {title:T().meta.title, description:T().meta.desc, links:L};', sandbox);
  const { title, description, links } = sandbox.result;
  const url = origin + (language === 'es' ? 'es.html' : '');
  const shareImage = origin + (language === 'es' ? 'og-hero-es.png' : 'og-hero-en.png');
  const shareImageAlt = language === 'es'
    ? 'Rocío Jacob: desarrollo web y automatizaciones. Croquis del Obelisco de Buenos Aires.'
    : 'Rocío Jacob: web products and automations. Sketch of the Buenos Aires Obelisk.';
  const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Person', '@id': origin + '#person', name: 'Rocío Jacob', url: origin,
      jobTitle: 'Product Engineer', sameAs: [links.linkedin, links.github], knowsLanguage: ['es', 'en'],
      knowsAbout: ['Process automation', 'Web development', 'React Native', 'Business intelligence', 'AI agents'] },
    { '@type': 'ProfilePage', '@id': url + '#page', url, name: title, description,
      inLanguage: language, mainEntity: { '@id': origin + '#person' } }
  ] };
  const metadata = `
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${origin}">
<link rel="alternate" hreflang="es" href="${origin}es.html">
<link rel="alternate" hreflang="x-default" href="${origin}">
<meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${language === 'es' ? 'es_AR' : 'en_US'}">
<meta property="og:site_name" content="Rocío Jacob">
<meta property="og:image" content="${shareImage}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="627">
<meta property="og:image:alt" content="${shareImageAlt}">
<meta name="twitter:title" content="${escape(title)}">
<meta name="twitter:description" content="${escape(description)}">
<meta name="twitter:image" content="${shareImage}">
<meta name="twitter:image:alt" content="${shareImageAlt}">
<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`;
  return html.replace('<html lang="en">', `<html lang="${language}" data-page-language="${language}">`)
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escape(description)}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escape(title)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escape(description)}">`)
    .replace('</head>', metadata + styles.join('') + '</head>')
    .replace('<div id="app"></div>', () => `<div id="app">${app.innerHTML}</div>`);
}
