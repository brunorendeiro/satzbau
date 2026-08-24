import { useOutletContext } from 'react-router-dom'
import { emergencyNumbers, phraseGroups, type PhraseGroup, type Phrase } from './data'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './emergency.css'

function groupTitle(group: PhraseGroup, locale: Locale): string {
  return locale === 'de' ? group.titleDe : locale === 'en' ? group.titleEn : group.titlePt
}

function phraseMeaning(phrase: Phrase, locale: Locale): string {
  return locale === 'en' ? phrase.en : phrase.pt
}

export default function Emergency() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  return (
    <div className="screen-emergency">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="em-section">
        <span className="piece-label">{t.sectionNumbers}</span>
        <p className="em-numbers-hint">{t.numbersHint}</p>
        <div className="em-number-grid">
          {emergencyNumbers.map(n => (
            <div className="em-number-card" key={n.id}>
              <span className="em-number-digits">{n.number}</span>
              <span className="em-number-label">{locale === 'de' ? n.labelDe : locale === 'en' ? n.labelEn : n.labelPt}</span>
              <span className="em-number-country">{n.country}</span>
            </div>
          ))}
        </div>
      </div>

      {phraseGroups.map(group => (
        <div className="em-section" key={group.id}>
          <span className="piece-label">{groupTitle(group, locale)}</span>
          <div className="em-phrase-grid">
            {group.phrases.map(p => (
              <div className="em-phrase-card" key={p.id}>
                <span className="em-phrase-de">{p.de}</span>
                <span className="em-phrase-meaning">{phraseMeaning(p, locale)}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
