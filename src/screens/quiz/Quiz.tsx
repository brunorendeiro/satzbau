import { useEffect, useState, type FormEvent } from 'react'
import { useOutletContext } from 'react-router-dom'
import { buildQuestionPool, normalizeAnswer, type QuizQuestion } from './quiz-engine'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './quiz.css'

const DURATIONS = [10, 20, 30]
const LIVES_START = 3
const BEST_KEY = 'satzbau-quiz-best'
const TIME_LIMIT_MS: Record<QuizQuestion['kind'], number> = { choice: 10000, typed: 15000, arrange: 20000 }

type AnsweredState = { correct: boolean; correctAnswer: string; timedOut?: boolean; selectedIndex?: number }

function formatTime(ms: number): string {
  const totalSec = Math.max(0, Math.ceil(ms / 1000))
  const m = Math.floor(totalSec / 60)
  const s = totalSec % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function Quiz() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const t = ui[locale]

  const [phase, setPhase] = useState<'intro' | 'playing' | 'ended'>('intro')
  const [minutes, setMinutes] = useState(10)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [lives, setLives] = useState(LIVES_START)
  const [correctCount, setCorrectCount] = useState(0)
  const [totalAnswered, setTotalAnswered] = useState(0)
  const [endReason, setEndReason] = useState<'time' | 'lives'>('time')
  const [best, setBest] = useState(() => Number(window.localStorage.getItem(BEST_KEY)) || 0)
  const [sessionMsLeft, setSessionMsLeft] = useState(0)
  const [qTimeLeft, setQTimeLeft] = useState(0)
  const [answeredState, setAnsweredState] = useState<AnsweredState | null>(null)
  const [typedValue, setTypedValue] = useState('')
  const [arranged, setArranged] = useState<number[]>([])

  const q = phase === 'playing' && questions.length > 0 ? questions[index % questions.length] : null

  // Session countdown — ends the round when it reaches zero.
  useEffect(() => {
    if (phase !== 'playing') return
    const id = setInterval(() => {
      setSessionMsLeft(prev => {
        const next = prev - 250
        if (next <= 0) {
          setEndReason('time')
          setPhase('ended')
          return 0
        }
        return next
      })
    }, 250)
    return () => clearInterval(id)
  }, [phase])

  // Persist a new best score once a round ends.
  useEffect(() => {
    if (phase !== 'ended') return
    if (score > best) {
      window.localStorage.setItem(BEST_KEY, String(score))
      setBest(score)
    }
  }, [phase])

  // Per-question countdown — frozen while feedback is showing.
  useEffect(() => {
    if (phase !== 'playing' || !q || answeredState !== null) return
    const limit = TIME_LIMIT_MS[q.kind]
    setQTimeLeft(limit)
    const start = Date.now()
    const id = setInterval(() => {
      const remaining = Math.max(0, limit - (Date.now() - start))
      setQTimeLeft(remaining)
      if (remaining <= 0) {
        clearInterval(id)
        onTimeout()
      }
    }, 100)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, phase, answeredState])

  function startGame() {
    setQuestions(buildQuestionPool(locale))
    setIndex(0)
    setScore(0)
    setStreak(0)
    setLives(LIVES_START)
    setCorrectCount(0)
    setTotalAnswered(0)
    setAnsweredState(null)
    setTypedValue('')
    setArranged([])
    setSessionMsLeft(minutes * 60 * 1000)
    setPhase('playing')
  }

  function resolveAnswer(isCorrect: boolean, correctAnswer: string, timedOut = false, selectedIndex?: number) {
    if (answeredState !== null || !q) return
    const newStreak = isCorrect ? streak + 1 : 0
    const bonus = isCorrect && newStreak >= 3 ? 5 : 0
    const newScore = isCorrect ? score + 10 + bonus : score
    const newLives = isCorrect ? lives : lives - 1

    setAnsweredState({ correct: isCorrect, correctAnswer, timedOut, selectedIndex })
    setStreak(newStreak)
    setScore(newScore)
    setLives(newLives)
    setCorrectCount(c => (isCorrect ? c + 1 : c))
    setTotalAnswered(n => n + 1)

    if (newLives <= 0) {
      setTimeout(() => {
        setEndReason('lives')
        setPhase('ended')
      }, 900)
      return
    }
    setTimeout(() => {
      setIndex(i => i + 1)
      setAnsweredState(null)
      setTypedValue('')
      setArranged([])
    }, 900)
  }

  function onTimeout() {
    if (!q) return
    if (q.kind === 'choice') resolveAnswer(false, q.choices[q.correctIndex], true)
    else if (q.kind === 'typed') resolveAnswer(false, q.answer, true)
    else resolveAnswer(false, q.answerTokens.join(' '), true)
  }

  function onChoiceClick(i: number) {
    if (!q || q.kind !== 'choice') return
    resolveAnswer(i === q.correctIndex, q.choices[q.correctIndex], false, i)
  }

  function onTypedSubmit(e: FormEvent) {
    e.preventDefault()
    if (!q || q.kind !== 'typed' || !typedValue.trim()) return
    resolveAnswer(normalizeAnswer(typedValue) === normalizeAnswer(q.answer), q.answer)
  }

  function onArrangeTap(tokenIdx: number) {
    if (!q || q.kind !== 'arrange' || arranged.includes(tokenIdx)) return
    const next = [...arranged, tokenIdx]
    setArranged(next)
    if (next.length === q.tokens.length) {
      const assembled = next.map(idx => q.tokens[idx]).join(' ')
      const correct = q.answerTokens.join(' ')
      resolveAnswer(assembled === correct, correct)
    }
  }

  function choiceClass(i: number, correctIndex: number): string {
    if (!answeredState) return 'quiz-choice'
    if (i === correctIndex) return 'quiz-choice correct'
    if (i === answeredState.selectedIndex) return 'quiz-choice wrong'
    return 'quiz-choice dim'
  }

  return (
    <div className="screen-quiz">
      <header className="screen-header">
        <strong>{t.title}</strong>
      </header>

      {phase === 'intro' && (
        <div className="quiz-intro">
          <p className="intro">{t.intro}</p>
          <p className="quiz-tagline">{t.tagline}</p>
          {best > 0 && <p className="quiz-best">{t.bestScoreLabel(best)}</p>}

          <span className="piece-label">{t.durationLabel}</span>
          <div className="chips">
            {DURATIONS.map(d => (
              <button key={d} className={d === minutes ? 'chip active' : 'chip'} onClick={() => setMinutes(d)}>
                {t.durationMinutes(d)}
              </button>
            ))}
          </div>

          <button className="quiz-start-btn" onClick={startGame}>{t.startButton}</button>
        </div>
      )}

      {phase === 'playing' && q && (
        <div className="quiz-play">
          <div className="quiz-hud">
            <div className="quiz-hearts">
              {Array.from({ length: LIVES_START }).map((_, i) => (
                <span key={i} className={i < lives ? 'quiz-heart' : 'quiz-heart empty'}>♥</span>
              ))}
            </div>
            <div className="quiz-score">{score}</div>
            {streak >= 3 && <div className="quiz-streak">🔥 ×{streak}</div>}
            <div className="quiz-session-time">{formatTime(sessionMsLeft)}</div>
          </div>

          <div className="quiz-qtimer-track">
            <div className="quiz-qtimer-fill" style={{ width: `${(qTimeLeft / TIME_LIMIT_MS[q.kind]) * 100}%` }} />
          </div>

          <span className="quiz-category">{t.categoryLabels[q.category]}</span>

          {q.kind === 'choice' && (
            <>
              {q.hint && <p className="quiz-reading-text">{q.hint}</p>}
              <p className="quiz-prompt">{q.prompt}</p>
              <div className="quiz-choices">
                {q.choices.map((c, i) => (
                  <button key={i} onClick={() => onChoiceClick(i)} disabled={answeredState !== null} className={choiceClass(i, q.correctIndex)}>
                    {c}
                  </button>
                ))}
              </div>
            </>
          )}

          {q.kind === 'typed' && (
            <>
              <p className="quiz-prompt">{q.prompt}</p>
              <p className="quiz-hint-text">{t.typedHint}</p>
              <form onSubmit={onTypedSubmit} className="quiz-typed-form">
                <input
                  value={typedValue}
                  onChange={e => setTypedValue(e.target.value)}
                  disabled={answeredState !== null}
                  placeholder={t.typedPlaceholder}
                  autoFocus
                  autoComplete="off"
                />
                <button type="submit" disabled={answeredState !== null || !typedValue.trim()}>{t.typedSubmit}</button>
              </form>
            </>
          )}

          {q.kind === 'arrange' && (
            <>
              <p className="quiz-prompt">{q.gloss}</p>
              <p className="quiz-hint-text">{t.arrangeHint}</p>
              <div className="quiz-arrange-assembled">
                {arranged.map((tokenIdx, pos) => (
                  <span key={pos} className="quiz-arrange-tile placed">{q.tokens[tokenIdx]}</span>
                ))}
              </div>
              <div className="quiz-arrange-bank">
                {q.tokens.map((word, i) => (
                  <button key={i} disabled={arranged.includes(i) || answeredState !== null} onClick={() => onArrangeTap(i)} className="quiz-arrange-tile">
                    {word}
                  </button>
                ))}
              </div>
            </>
          )}

          {answeredState && (
            <p className={answeredState.correct ? 'quiz-feedback correct' : 'quiz-feedback wrong'}>
              {answeredState.correct
                ? t.correctFeedback
                : `${answeredState.timedOut ? t.timeUpFeedback : t.wrongFeedback} ${answeredState.correctAnswer}`}
            </p>
          )}
        </div>
      )}

      {phase === 'ended' && (
        <div className="quiz-end">
          <h2 className="quiz-end-title">{endReason === 'time' ? t.endTitleTime : t.endTitleLives}</h2>
          <p className="quiz-end-score">{t.scoreSummary(score)}</p>
          <p className="quiz-end-correct">{t.correctSummary(correctCount, totalAnswered)}</p>
          {score > 0 && score >= best && <p className="quiz-end-newbest">{t.newBest}</p>}
          <p className="quiz-end-best">{t.bestScoreEnd(best)}</p>
          <button className="quiz-start-btn" onClick={startGame}>{t.playAgainButton}</button>
        </div>
      )}
    </div>
  )
}
