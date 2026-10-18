import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { detectLocale, locales, commonUi, type Locale } from '../i18n/common'
import { getStoredConsent, loadAnalytics, loadAds, openConsentSettings, trackPageView } from '../analytics'
import CookieConsent from './CookieConsent'
import seoPagesData from '../seo-pages.json'

type Theme = 'light' | 'dark'
type SeoPage = Record<Locale, { title: string; heading: string; description: string }>
const seoPages = seoPagesData as Record<string, SeoPage>

function detectTheme(): Theme {
  const stored = window.localStorage.getItem('satzbau-theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function AppShell() {
  const location = useLocation()
  const [locale, setLocale] = useState<Locale>('en')
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    setLocale(detectLocale())
    setTheme(detectTheme())
    if (getStoredConsent() === 'granted') {
      loadAnalytics()
      loadAds()
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const t = commonUi[locale]

  useEffect(() => {
    const seo = (seoPages[location.pathname] ?? seoPages['/'])[locale]
    const title = seo.title
    const canonicalUrl = `https://satzbau.vercel.app${location.pathname === '/' ? '/' : location.pathname}`

    document.documentElement.lang = locale
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', seo.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', seo.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', locale === 'pt' ? 'pt_PT' : locale === 'de' ? 'de_DE' : 'en_US')
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', seo.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
  }, [locale, location.pathname])

  useEffect(() => {
    const title = (seoPages[location.pathname] ?? seoPages['/'])[detectLocale()].title
    trackPageView(location.pathname, title)
  }, [location.pathname])

  function changeLocale(next: Locale) {
    setLocale(next)
    window.localStorage.setItem('satzbau-locale', next)
  }

  function changeTheme(next: Theme) {
    setTheme(next)
    window.localStorage.setItem('satzbau-theme', next)
  }

  return (
    <div className="app-shell">
      <header>
        <h1 className="brand">
          <div className="brand-mark">🧩</div>
          <strong>Satzbau</strong>
        </h1>
        <div className="header-controls">
          <div className="locale-switch">
            {locales.map(l => (
              <button key={l.id} className={l.id === locale ? 'active' : ''} onClick={() => changeLocale(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
          <div className="locale-switch">
            <button className={theme === 'light' ? 'active' : ''} onClick={() => changeTheme('light')}>{t.themeLight}</button>
            <button className={theme === 'dark' ? 'active' : ''} onClick={() => changeTheme('dark')}>{t.themeDark}</button>
          </div>
        </div>
      </header>

      {location.pathname === '/' && (
        <aside className="beginner-start" aria-labelledby="beginner-start-title">
          <div>
            <strong id="beginner-start-title">{t.beginnerTitle}</strong>
            <span>{t.beginnerBody}</span>
          </div>
          <Link to="/alltag">{t.beginnerAction}<span aria-hidden="true">→</span></Link>
        </aside>
      )}

      <nav className="main-nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navSentenceBuilder}
        </NavLink>
        <NavLink to="/wortbau" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navCompoundWords}
        </NavLink>
        <NavLink to="/wortfamilie" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navWordFamily}
        </NavLink>
        <NavLink to="/zahlen" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navNumbers}
        </NavLink>
        <NavLink to="/aussprache" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navAlphabet}
        </NavLink>
        <NavLink to="/wortschatz" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navVocabulary}
        </NavLink>
        <NavLink to="/notfall" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navEmergency}
        </NavLink>
        <NavLink to="/gespraeche" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navConversations}
        </NavLink>
        <NavLink to="/alltag" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navEveryday}
        </NavLink>
        <NavLink to="/spickzettel" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navCheatSheet}
        </NavLink>
        <NavLink to="/spiele" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navGames}
        </NavLink>
      </nav>

      <Outlet context={{ locale }} />

      <footer>
        <span>{t.footerTagline}</span>
        <nav className="footer-nav" aria-label={t.footerAbout}>
          <Link to="/privacidade">{t.footerPrivacy}</Link>
          <Link to="/cookies">{t.footerCookies}</Link>
          <Link to="/sobre">{t.footerAbout}</Link>
          <Link to="/contacto">{t.footerContact}</Link>
          <button type="button" onClick={openConsentSettings}>{t.footerManageCookies}</button>
        </nav>
        <span>{t.footerOwner}</span>
        <span className="powered-badge">⚡ Powered by AI</span>
      </footer>

      <CookieConsent locale={locale} />
    </div>
  )
}
