import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CONSENT_OPEN_EVENT, getStoredConsent, setConsent } from '../analytics'
import { commonUi, type Locale } from '../i18n/common'

export default function CookieConsent({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false)
  const [canClose, setCanClose] = useState(false)
  const t = commonUi[locale]

  useEffect(() => {
    setVisible(getStoredConsent() === null)
    const openSettings = () => {
      setCanClose(true)
      setVisible(true)
    }
    window.addEventListener(CONSENT_OPEN_EVENT, openSettings)
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openSettings)
  }, [])

  if (!visible) return null

  const decide = (value: 'granted' | 'denied') => {
    setConsent(value)
    setVisible(false)
  }

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookies">
      <p>{t.cookieBody} <Link to="/cookies">{t.cookieLearnMore}</Link></p>
      <div className="cookie-actions">
        {canClose && <button className="cookie-close" onClick={() => setVisible(false)}>{t.cookieClose}</button>}
        <button className="cookie-reject" onClick={() => decide('denied')}>{t.cookieReject}</button>
        <button className="cookie-accept" onClick={() => decide('granted')}>{t.cookieAccept}</button>
      </div>
    </div>
  )
}
