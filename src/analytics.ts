const GA_MEASUREMENT_ID = 'G-8PWRSDS62T'
const CONSENT_KEY = 'satzbau-analytics-consent'
const AD_CLIENT = 'ca-pub-4561414438757131'

declare global {
  interface Window {
    dataLayer: unknown[]
    adsbygoogle: unknown[]
  }
}

export type Consent = 'granted' | 'denied'

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

  window.dataLayer = window.dataLayer || []
  function gtag(..._args: unknown[]) {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID)
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
  window.localStorage.setItem(CONSENT_KEY, value)
  if (value === 'granted') {
    loadAnalytics()
    loadAds()
  }
}
