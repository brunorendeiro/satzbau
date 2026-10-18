import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import type { Locale } from '../../i18n/common'
import AdSlot from '../../layout/AdSlot'
import { ui, type PronounMode } from './i18n'
import './everyday.css'

export default function Everyday() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]
  const [situationId, setSituationId] = useState(t.situations[0].id)
  const [pronounId, setPronounId] = useState<PronounMode['id']>('sie')
  const [revealed, setRevealed] = useState<Set<number>>(new Set())

  const situation = useMemo(
    () => t.situations.find(item => item.id === situationId) ?? t.situations[0],
    [situationId, t.situations],
  )
  const pronoun = useMemo(
    () => t.pronouns.find(item => item.id === pronounId) ?? t.pronouns[0],
    [pronounId, t.pronouns],
  )

  function toggleAnswer(index: number) {
    setRevealed(current => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="screen-everyday">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <section className="everyday-section" aria-labelledby="situations-title">
        <span className="piece-label" id="situations-title">{t.situationsLabel}</span>
        <div className="everyday-situation-tabs">
          {t.situations.map(item => (
            <button
              key={item.id}
              className={item.id === situation.id ? 'situation-tab active' : 'situation-tab'}
              onClick={() => setSituationId(item.id)}
            >
              <span aria-hidden="true">{item.icon}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        <div className="situation-panel">
          <div className="situation-heading">
            <span className="situation-icon" aria-hidden="true">{situation.icon}</span>
            <div>
              <h2>{situation.title}</h2>
              <p>{situation.goal}</p>
            </div>
          </div>
          <div className="everyday-phrases">
            {situation.phrases.map(phrase => (
              <article className="everyday-phrase" key={phrase.de}>
                <strong lang="de">{phrase.de}</strong>
                <span>{phrase.meaning}</span>
              </article>
            ))}
          </div>
          {situation.swissTip && (
            <p className="swiss-tip"><b>{t.swissTipLabel}:</b> {situation.swissTip}</p>
          )}
        </div>
      </section>

      <section className="pronoun-section" aria-labelledby="pronouns-title">
        <div className="section-copy">
          <span className="section-kicker">DU · IHR · SIE</span>
          <h2 id="pronouns-title">{t.pronounsTitle}</h2>
          <p>{t.pronounsIntro}</p>
        </div>

        <div className="pronoun-tabs">
          {t.pronouns.map(item => (
            <button
              key={item.id}
              className={item.id === pronoun.id ? 'pronoun-tab active' : 'pronoun-tab'}
              onClick={() => setPronounId(item.id)}
            >
              <b>{item.label}</b>
              <span>{item.use}</span>
            </button>
          ))}
        </div>

        <div className="pronoun-panel">
          <div>
            <span className="piece-label">{t.formsLabel}</span>
            <dl className="pronoun-forms">
              {pronoun.forms.map(form => (
                <div key={form.label}>
                  <dt>{form.label}</dt>
                  <dd lang="de">{form.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <span className="piece-label">{t.examplesLabel}</span>
            <div className="pronoun-examples">
              {pronoun.examples.map(example => (
                <p key={example.de}>
                  <strong lang="de">{example.de}</strong>
                  <span>{example.meaning}</span>
                </p>
              ))}
            </div>
            <p className="pronoun-note">{pronoun.note}</p>
          </div>
        </div>

        <p className="capitalisation-note">{t.capitalisationNote}</p>
      </section>

      <section className="practice-section" aria-labelledby="practice-title">
        <div className="section-copy">
          <h2 id="practice-title">{t.practiceTitle}</h2>
          <p>{t.practiceIntro}</p>
        </div>
        <div className="practice-grid">
          {t.practice.map((item, index) => {
            const isRevealed = revealed.has(index)
            return (
              <article className="practice-card" key={item.prompt}>
                <p>{item.prompt}</p>
                {isRevealed && <strong lang="de">{item.answer}</strong>}
                <button onClick={() => toggleAnswer(index)} aria-expanded={isRevealed}>
                  {isRevealed ? t.hide : t.reveal}
                </button>
              </article>
            )
          })}
        </div>
      </section>

      <AdSlot />
    </div>
  )
}
