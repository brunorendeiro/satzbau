import { useEffect, useMemo, useState } from 'react'
import {
  subjects,
  verbs,
  modals,
  buildDeTokens,
  buildDeWerTokens,
  buildDeContentTokens,
  buildPt,
  buildEn,
  buildDeAnswer,
  buildPtWer,
  buildPtContent,
  buildEnWer,
  buildEnContent,
  roleLabel,
  type SubjectId,
  type VerbId,
  type ModalId,
  type Form,
  type QuestionMode,
  type Token,
} from './data/grammar'
import { detectLocale, locales, ui, type Locale } from './i18n'
import { getStoredConsent, loadAnalytics } from './analytics'
import CookieConsent from './CookieConsent'

const FORMS: Form[] = ['affirmative', 'question', 'negative', 'twoVerbs']

const DEFAULT_SUBJECT: SubjectId = 'ich'
const DEFAULT_VERB: VerbId = 'lernen'
const DEFAULT_MODAL: ModalId = 'moechten'

type Theme = 'light' | 'dark'

function detectTheme(): Theme {
  const stored = window.localStorage.getItem('satzbau-theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function SentenceTokens({ tokens }: { tokens: Token[] }) {
  return (
    <p className="sentence-de">
      {tokens.map((token, i) => (
        <span className={`tok tok-${token.role}`} key={i}>
          <span className="tok-word">{token.text}</span>
          <span className="tok-label">{roleLabel[token.role]}</span>
        </span>
      ))}
    </p>
  )
}

export default function App() {
  const [locale, setLocale] = useState<Locale>('en')
  const [theme, setTheme] = useState<Theme>('light')
  const [form, setForm] = useState<Form>('affirmative')
  const [questionMode, setQuestionMode] = useState<QuestionMode>('yesno')
  const [subjectId, setSubjectId] = useState<SubjectId>(DEFAULT_SUBJECT)
  const [verbId, setVerbId] = useState<VerbId>(DEFAULT_VERB)
  const [objectId, setObjectId] = useState<string>('deutsch')
  const [modalId, setModalId] = useState<ModalId>(DEFAULT_MODAL)

  useEffect(() => {
    setLocale(detectLocale())
    setTheme(detectTheme())
    if (getStoredConsent() === 'granted') loadAnalytics()
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const t = ui[locale]

  function changeLocale(next: Locale) {
    setLocale(next)
    window.localStorage.setItem('satzbau-locale', next)
  }

  function changeTheme(next: Theme) {
    setTheme(next)
    window.localStorage.setItem('satzbau-theme', next)
  }

  const verb = useMemo(() => verbs.find(v => v.id === verbId)!, [verbId])
  const modal = useMemo(() => modals.find(m => m.id === modalId)!, [modalId])
  const object = useMemo(
    () => verb.objects.find(o => o.id === objectId) ?? verb.objects[0],
    [verb, objectId],
  )

  function changeVerb(next: VerbId) {
    const nextVerb = verbs.find(v => v.id === next)!
    setVerbId(next)
    setObjectId(nextVerb.objects[0].id)
  }

  function restart() {
    setForm('affirmative')
    setQuestionMode('yesno')
    setSubjectId(DEFAULT_SUBJECT)
    changeVerb(DEFAULT_VERB)
    setModalId(DEFAULT_MODAL)
  }

  const isQuestion = form === 'question'
  const isFrom = object.kind === 'place' && object.whWord === 'Woher'
  const contentLabel = object.kind === 'place' ? (isFrom ? t.whereFromModeLabel : t.whereToModeLabel) : t.whatModeLabel
  const contentExplain = object.kind === 'place' ? (isFrom ? t.whereFromExplain : t.whereToExplain) : t.whatExplain

  const tokens = isQuestion && questionMode === 'wer'
    ? buildDeWerTokens(verb, object)
    : isQuestion && questionMode === 'content'
      ? buildDeContentTokens(subjectId, verb, object)
      : buildDeTokens(form, subjectId, verb, object, modal)

  const sentencePt = isQuestion && questionMode === 'wer'
    ? buildPtWer(verb, object)
    : isQuestion && questionMode === 'content'
      ? buildPtContent(subjectId, verb, object)
      : buildPt(form, subjectId, verb, object, modal)

  const sentenceEn = isQuestion && questionMode === 'wer'
    ? buildEnWer(verb, object)
    : isQuestion && questionMode === 'content'
      ? buildEnContent(subjectId, verb, object)
      : buildEn(form, subjectId, verb, object, modal)

  const explain = isQuestion
    ? (questionMode === 'wer' ? t.werExplain : questionMode === 'content' ? contentExplain : t.formExplain.question)
    : t.formExplain[form]

  const yesAnswer = buildDeAnswer('yes', subjectId, verb, object)
  const noAnswer = buildDeAnswer('no', subjectId, verb, object)

  return (
    <div className="app-shell">
      <header>
        <h1 className="brand">
          <div className="brand-mark">🧩</div>
          <div>
            <strong>Satzbau</strong>
            <small>{t.brandTagline}</small>
          </div>
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

      <p className="intro">{t.intro}</p>

      <div className="form-switch">
        {FORMS.map(f => (
          <button
            key={f}
            className={f === form ? 'form-tab active' : 'form-tab'}
            onClick={() => { setForm(f); if (f !== 'question') setQuestionMode('yesno') }}
          >
            {t.forms[f]}
          </button>
        ))}
      </div>

      {isQuestion && (
        <div className="qmode-switch">
          <button className={questionMode === 'yesno' ? 'qmode active' : 'qmode'} onClick={() => setQuestionMode('yesno')}>{t.yesNoModeLabel}</button>
          <button className={questionMode === 'wer' ? 'qmode active' : 'qmode'} onClick={() => setQuestionMode('wer')}>{t.werModeLabel}</button>
          <button className={questionMode === 'content' ? 'qmode active' : 'qmode'} onClick={() => setQuestionMode('content')}>{contentLabel}</button>
        </div>
      )}

      <div className="output-card">
        <span className="schema-tag">SATZ-SCHEMA</span>
        <SentenceTokens tokens={tokens} />
        {locale !== 'pt' && <p className="sentence-translation">{sentenceEn}</p>}
        {locale !== 'en' && <p className="sentence-translation">{sentencePt}</p>}
        <p className="form-explain">{explain}</p>

        {isQuestion && questionMode === 'yesno' && (
          <div className="answers">
            <span className="answers-label">{t.answersLabel}</span>
            <p><strong>{t.yesLabel}:</strong> {yesAnswer}</p>
            <p><strong>{t.noLabel}:</strong> {noAnswer}</p>
          </div>
        )}
        {isQuestion && questionMode !== 'yesno' && (
          <div className="answers">
            <span className="answers-label">{t.answerLabel}</span>
            <p>{yesAnswer}</p>
          </div>
        )}
      </div>

      <div className="pieces">
        <div className="piece-group">
          <span className="piece-label">{t.wer}</span>
          <div className="chips">
            {subjects.map(s => (
              <button key={s.id} className={s.id === subjectId ? 'chip active' : 'chip'} onClick={() => setSubjectId(s.id)}>
                {s.de}
              </button>
            ))}
          </div>
        </div>

        <div className="piece-group">
          <span className="piece-label">{t.aktion}</span>
          <div className="chips">
            {verbs.map(v => (
              <button key={v.id} className={v.id === verbId ? 'chip active' : 'chip'} onClick={() => changeVerb(v.id)}>
                {v.infinitive}
              </button>
            ))}
          </div>
          <p className="verb-note">
            <span className={verb.regular ? 'tag regular' : 'tag irregular'}>
              {verb.regular ? t.regularLabel : t.irregularLabel}
            </span>
            {verb.regular ? t.regularNote : t.irregularNote}
          </p>
        </div>

        <div className="piece-group">
          <span className="piece-label">{t.wasWo}</span>
          <div className="chips">
            {verb.objects.map(o => (
              <button
                key={o.id}
                className={o.id === object.id ? 'chip active' : 'chip'}
                onClick={() => setObjectId(o.id)}
              >
                {o.kind === 'noun' ? o.noun : o.phrase}
              </button>
            ))}
          </div>
        </div>

        <div className="piece-group">
          <span className="piece-label">{t.modal}</span>
          <div className="chips">
            {modals.map(m => (
              <button key={m.id} className={m.id === modalId ? 'chip active' : 'chip'} onClick={() => setModalId(m.id)}>
                {m.de.ich}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className="restart" onClick={restart}>{t.restart}</button>

      <footer>
        <a href="https://vibe-portfolio-one.vercel.app/">Created by Bruno Rendeiro</a>
        <span>{t.footerTagline}</span>
        <span className="powered-badge">⚡ Powered by AI</span>
      </footer>

      <CookieConsent locale={locale} />
    </div>
  )
}
