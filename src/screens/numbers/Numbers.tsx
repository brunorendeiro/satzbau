import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { breakdown, highlights, bigNumbers } from './germanNumbers'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './numbers.css'

export default function Numbers() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]
  const [n, setN] = useState(21)

  const current = useMemo(() => breakdown(n), [n])

  return (
    <div className="screen-numbers">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="num-builder">
        <div className="num-display">
          <span className="num-count">{n}</span>
          <div className="num-parts">
            {current.parts.map((p, i) => (
              <span key={i} className={p.isStem ? 'num-part stem' : 'num-part'}>{p.text}</span>
            ))}
          </div>
        </div>

        <input
          className="num-slider"
          type="range"
          min={0}
          max={100}
          value={n}
          onChange={e => setN(Number(e.target.value))}
        />

        <p className="num-explain">{t.ruleExplain[current.rule]}</p>
      </div>

      <div className="num-highlights">
        <span className="piece-label">{t.highlightsLabel}</span>
        <div className="chips">
          {highlights.map(h => (
            <button key={h} className={h === n ? 'chip active' : 'chip'} onClick={() => setN(h)}>
              {h}
            </button>
          ))}
        </div>
      </div>

      <div className="num-beyond">
        <span className="piece-label">{t.beyondTitle}</span>
        <p className="num-beyond-intro">{t.beyondIntro}</p>
        <ul className="num-beyond-list">
          {bigNumbers.map(b => (
            <li key={b.label}><span className="num-beyond-num">{b.label}</span> — <span className="num-beyond-word">{b.word}</span></li>
          ))}
        </ul>
      </div>
    </div>
  )
}
