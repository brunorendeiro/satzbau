import { useOutletContext } from 'react-router-dom'
import { colors, greetings, weekdays, months, seasons, type VocabEntry } from './data'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './vocabulary.css'

function meaning(entry: VocabEntry, locale: Locale): string {
  return locale === 'en' ? entry.en : entry.pt
}

function WordCard({ entry, note, locale }: { entry: VocabEntry; note?: string; locale: Locale }) {
  return (
    <div className="ws-word-card">
      <span className="ws-word-de">{entry.de}</span>
      <span className="ws-word-meaning">{meaning(entry, locale)}</span>
      {note && <span className="ws-word-note">{note}</span>}
    </div>
  )
}

export default function Vocabulary() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  return (
    <div className="screen-vocabulary">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="ws-section">
        <span className="piece-label">{t.sectionColors}</span>
        <div className="ws-color-grid">
          {colors.map(c => (
            <div className="ws-color-card" key={c.id}>
              <span className="ws-swatch" style={{ background: c.hex }} />
              <span className="ws-color-word">{c.de}</span>
              <span className="ws-color-meaning">{meaning(c, locale)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ws-section">
        <span className="piece-label">{t.sectionGreetings}</span>
        <div className="ws-word-grid">
          {greetings.map(g => (
            <WordCard key={g.id} entry={g} note={locale === 'en' ? g.noteEn : g.note} locale={locale} />
          ))}
        </div>
      </div>

      <div className="ws-section">
        <span className="piece-label">{t.sectionWeekdays}</span>
        <p className="ws-section-note">{t.genderHint}</p>
        <div className="ws-word-grid">
          {weekdays.map(w => <WordCard key={w.id} entry={w} locale={locale} />)}
        </div>
      </div>

      <div className="ws-section">
        <span className="piece-label">{t.sectionMonths}</span>
        <div className="ws-word-grid">
          {months.map(m => <WordCard key={m.id} entry={m} locale={locale} />)}
        </div>
      </div>

      <div className="ws-section">
        <span className="piece-label">{t.sectionSeasons}</span>
        <div className="ws-word-grid">
          {seasons.map(s => <WordCard key={s.id} entry={s} locale={locale} />)}
        </div>
      </div>
    </div>
  )
}
