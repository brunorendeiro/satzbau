import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { scenes, type Scene } from './data'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './conversations.css'

function translate<T extends { pt: string; en: string }>(entry: T, locale: Locale): string | null {
  if (locale === 'de') return null
  return locale === 'en' ? entry.en : entry.pt
}

export default function Conversations() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  const [sceneId, setSceneId] = useState(scenes[0].id)
  const [answered, setAnswered] = useState<number | null>(null)

  const scene: Scene = scenes.find(s => s.id === sceneId) ?? scenes[0]

  function pickScene(next: Scene) {
    setSceneId(next.id)
    setAnswered(null)
  }

  return (
    <div className="screen-conversations">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="cv-scene-picker">
        <div className="chips">
          {scenes.map(s => (
            <button key={s.id} className={s.id === sceneId ? 'chip active' : 'chip'} onClick={() => pickScene(s)}>
              {s.titleDe}
            </button>
          ))}
        </div>
      </div>

      <div className="cv-section">
        <span className="piece-label">{t.dialogueLabel}</span>
        <div className="cv-dialogue">
          {scene.lines.map((line, i) => (
            <div key={i} className={`cv-line cv-line-${line.speaker}`}>
              <span className="cv-avatar">{(line.speaker === 'a' ? scene.speakerA : scene.speakerB)[0]}</span>
              <div className="cv-bubble">
                <span className="cv-speaker-name">{line.speaker === 'a' ? scene.speakerA : scene.speakerB}</span>
                <span className="cv-de">{line.de}</span>
                {translate(line, locale) && <span className="cv-translation">{translate(line, locale)}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cv-section">
        <span className="piece-label">{t.phrasesLabel}</span>
        <div className="cv-phrase-grid">
          {scene.keyPhrases.map((p, i) => (
            <div className="cv-phrase-card" key={i}>
              <span className="cv-phrase-de">{p.de}</span>
              {translate(p, locale) && <span className="cv-phrase-translation">{translate(p, locale)}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="cv-section">
        <span className="piece-label">{t.questionLabel}</span>
        {translate(scene.question, locale) && <p className="cv-gloss">{translate(scene.question, locale)}</p>}
        <p className="cv-prompt">{scene.question.de}</p>
        <div className="cv-choices">
          {scene.question.choices.map((c, i) => {
            const cls = answered === null ? 'cv-choice'
              : i === scene.question.correctIndex ? 'cv-choice correct'
              : i === answered ? 'cv-choice wrong'
              : 'cv-choice dim'
            return (
              <button key={i} className={cls} disabled={answered !== null} onClick={() => setAnswered(i)}>
                {c}
              </button>
            )
          })}
        </div>
        {answered !== null && (
          <div className="cv-feedback-row">
            <p className={answered === scene.question.correctIndex ? 'cv-feedback correct' : 'cv-feedback wrong'}>
              {answered === scene.question.correctIndex ? t.correctFeedback : t.wrongFeedback}
            </p>
            {answered !== scene.question.correctIndex && (
              <button className="chip" onClick={() => setAnswered(null)}>{t.tryAgainButton}</button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
