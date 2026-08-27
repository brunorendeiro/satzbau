import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { detectLocale, locales, commonUi, type Locale } from '../i18n/common'
import { getStoredConsent, loadAnalytics, loadAds } from '../analytics'
import CookieConsent from './CookieConsent'

type Theme = 'light' | 'dark'

function detectTheme(): Theme {
  const stored = window.localStorage.getItem('satzbau-theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function AppShell() {
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
        <NavLink to="/quiz" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navQuiz}
        </NavLink>
        <NavLink to="/kreuzwortraetsel" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navCrossword}
        </NavLink>
        <NavLink to="/wortsuche" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navWordSearch}
        </NavLink>
        <NavLink to="/buchstabendoku" className={({ isActive }) => isActive ? 'nav-tab active' : 'nav-tab'}>
          {t.navSudoku}
        </NavLink>
      </nav>

      <Outlet context={{ locale }} />

      <footer>
        <a href="https://vibe-portfolio-one.vercel.app/">Created by Bruno Rendeiro</a>
        <span>{t.footerTagline}</span>
        <span className="powered-badge">⚡ Powered by AI</span>
      </footer>

      <CookieConsent locale={locale} />
    </div>
  )
}
