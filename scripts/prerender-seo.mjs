import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const distDir = join(projectRoot, 'dist')
const pages = JSON.parse(await readFile(join(projectRoot, 'src', 'seo-pages.json'), 'utf8'))
const template = await readFile(join(distDir, 'index.html'), 'utf8')

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function replaceMeta(html, selector, value) {
  const escaped = escapeHtml(value)
  const pattern = new RegExp(`(<meta ${selector} content=")[^"]*("\\s*/?>)`)
  return html.replace(pattern, `$1${escaped}$2`)
}

function renderPage(pathname, page) {
  const seo = page.pt
  const canonical = `https://satzbau.vercel.app${pathname === '/' ? '/' : pathname}`
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: seo.heading,
    description: seo.description,
    url: canonical,
    inLanguage: ['pt', 'en', 'de'],
    isAccessibleForFree: true,
    educationalLevel: 'Beginner',
    teaches: 'German language',
  }).replaceAll('<', '\\u003c')

  let html = template
    .replace(/<html lang="[^"]*"/, '<html lang="pt"')
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)

  html = replaceMeta(html, 'name="description"', seo.description)
  html = replaceMeta(html, 'property="og:title"', seo.title)
  html = replaceMeta(html, 'property="og:description"', seo.description)
  html = replaceMeta(html, 'property="og:url"', canonical)
  html = replaceMeta(html, 'name="twitter:title"', seo.title)
  html = replaceMeta(html, 'name="twitter:description"', seo.description)

  const shell = `<div id="root"><main class="seo-shell"><div class="seo-mark" aria-hidden="true">🧩</div><p>SATZBAU · DEUTSCH LERNEN</p><h1>${escapeHtml(seo.heading)}</h1><p>${escapeHtml(seo.description)}</p></main></div>`
  html = html
    .replace('<div id="root"></div>', shell)
    .replace('</head>', `<style id="seo-shell-style">.seo-shell{max-width:760px;margin:0 auto;padding:64px 24px;color:#241f19;font-family:system-ui,sans-serif}.seo-shell .seo-mark{font-size:28px}.seo-shell>p:first-of-type{margin-top:24px;color:#a44a2f;font-size:11px;font-weight:700;letter-spacing:.12em}.seo-shell h1{max-width:650px;margin:10px 0;font:600 clamp(32px,7vw,58px) Georgia,serif;line-height:1.05}.seo-shell>p:last-child{max-width:620px;color:#7a7266;font-size:16px;line-height:1.6}</style><script type="application/ld+json" data-page-seo>${structuredData}</script></head>`)

  return html
}

for (const [pathname, page] of Object.entries(pages)) {
  const outputPath = pathname === '/'
    ? join(distDir, 'index.html')
    : join(distDir, `${pathname.slice(1)}.html`)
  await mkdir(dirname(outputPath), { recursive: true })
  await writeFile(outputPath, renderPage(pathname, page), 'utf8')
}

console.log(`Generated ${Object.keys(pages).length} route-specific HTML pages.`)
