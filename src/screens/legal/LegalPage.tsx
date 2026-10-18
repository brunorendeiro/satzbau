import { useOutletContext } from 'react-router-dom'
import { openConsentSettings } from '../../analytics'
import type { Locale } from '../../i18n/common'
import { ui, type LegalPageId } from './i18n'
import './legal.css'

const CONTACT_EMAIL = 'brunonrendeiro@gmail.com'

const RESOURCE_URLS = {
  googleData: 'https://policies.google.com/technologies/partner-sites',
  adsSettings: 'https://myadcenter.google.com/',
  analyticsOptOut: 'https://tools.google.com/dlpage/gaoptout',
}

export default function LegalPage({ pageId }: { pageId: LegalPageId }) {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const localeUi = ui[locale]
  const page = localeUi.pages[pageId]

  return (
    <main className="legal-page">
      <header className="screen-header legal-header">
        <span className="section-kicker">{page.kicker}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        {page.updated && <time dateTime="2026-10-18">{page.updated}</time>}
      </header>

      <div className="legal-sections">
        {page.sections.map(section => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && (
              <ul>
                {section.bullets.map(item => <li key={item}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}
      </div>

      {pageId === 'privacy' && (
        <section className="legal-resources" aria-labelledby="legal-resources-title">
          <h2 id="legal-resources-title">{localeUi.resourcesTitle}</h2>
          <a href={RESOURCE_URLS.googleData} target="_blank" rel="noreferrer">{localeUi.googleDataLink}<span aria-hidden="true">↗</span></a>
          <a href={RESOURCE_URLS.adsSettings} target="_blank" rel="noreferrer">{localeUi.adsSettingsLink}<span aria-hidden="true">↗</span></a>
          <a href={RESOURCE_URLS.analyticsOptOut} target="_blank" rel="noreferrer">{localeUi.analyticsOptOutLink}<span aria-hidden="true">↗</span></a>
        </section>
      )}

      {pageId === 'cookies' && (
        <button type="button" className="legal-action" onClick={openConsentSettings}>{localeUi.manageConsentAction}</button>
      )}

      {(pageId === 'privacy' || pageId === 'contact') && (
        <a className="legal-action" href={`mailto:${CONTACT_EMAIL}`}>{localeUi.contactAction}<span aria-hidden="true">→</span></a>
      )}
    </main>
  )
}
