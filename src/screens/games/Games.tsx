import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { ui, type GameId } from './i18n'
import type { Locale } from '../../i18n/common'
import Quiz from '../quiz/Quiz'
import Crossword from '../crossword/Crossword'
import WordSearch from '../wordsearch/WordSearch'
import './games.css'

const GAMES: GameId[] = ['quiz', 'crossword', 'wordsearch']

export default function Games() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  const [selected, setSelected] = useState<GameId>('quiz')

  return (
    <div className="screen-games">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      <p className="intro">{t.intro}</p>

      <div className="chips">
        {GAMES.map(g => (
          <button key={g} className={g === selected ? 'chip active' : 'chip'} onClick={() => setSelected(g)}>
            {t.gameLabels[g]}
          </button>
        ))}
      </div>

      <div className="games-active">
        {selected === 'quiz' && <Quiz />}
        {selected === 'crossword' && <Crossword />}
        {selected === 'wordsearch' && <WordSearch />}
      </div>
    </div>
  )
}
