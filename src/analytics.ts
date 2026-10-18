const GA_MEASUREMENT_ID = 'G-8PWRSDS62T'
const CONSENT_KEY = 'satzbau-analytics-consent'
const AD_CLIENT = 'ca-pub-4561414438757131'
export const CONSENT_EVENT = 'satzbau:consent'
export const CONSENT_OPEN_EVENT = 'satzbau:open-consent'

declare global {
  interface Window {
    dataLayer: unknown[]
    adsbygoogle: unknown[]
  }
}

export type Consent = 'granted' | 'denied'

function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  // gtag.js expects the function's Arguments object, as in Google's official
  // snippet. A normal array is left in the queue without configuring GA4.
  window.dataLayer.push(arguments)
}

export function getStoredConsent(): Consent | null {
  const stored = window.localStorage.getItem(CONSENT_KEY)
  return stored === 'granted' || stored === 'denied' ? stored : null
}

export function loadAnalytics() {
  if (document.getElementById('ga4-script')) return
  const script = document.createElement('script')
  script.id = 'ga4-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })
}

export function trackPageView(pathname: string, title: string) {
  if (getStoredConsent() !== 'granted') return
  loadAnalytics()
  gtag('event', 'page_view', {
    page_title: title,
    page_location: window.location.href,
    page_path: pathname,
  })
}

export function loadAds() {
  if (document.getElementById('adsbygoogle-script')) return
  const script = document.createElement('script')
  script.id = 'adsbygoogle-script'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`
  document.head.appendChild(script)

  // Sem enable_page_level_ads: os anúncios automáticos colocam-se em qualquer ecrã,
  // incluindo os exercícios interativos (que têm pouco texto), o que viola as
  // políticas do AdSense sobre anúncios em ecrãs sem conteúdo do publicador. Usamos
  // apenas um bloco manual (ver layout/AdSlot.tsx), colocado só onde há conteúdo real.
  window.adsbygoogle = window.adsbygoogle || []
}

export function setConsent(value: Consent) {
  const previous = getStoredConsent()
  window.localStorage.setItem(CONSENT_KEY, value)
  window.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: value }))
  if (value === 'granted') {
    loadAnalytics()
    loadAds()
    trackPageView(window.location.pathname, document.title)
  } else if (previous === 'granted') {
    // Scripts already loaded in this document cannot be reliably unloaded. A
    // reload immediately applies the withdrawn choice without loading them again.
    window.location.reload()
  }
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))
}
