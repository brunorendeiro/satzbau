import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import {
  subjects,
  verbs,
  modals,
  timeAdverbs,
  mannerAdverbs,
  NONE_ID,
  buildDeTokens,
  buildDeWerTokens,
  buildDeContentTokens,
  buildDeWannTokens,
  buildDeWieTokens,
  buildPt,
  buildEn,
  buildDeAnswer,
  buildDeOpenAnswer,
  buildPtWer,
  buildPtContent,
  buildPtWann,
  buildPtWie,
  buildEnWer,
  buildEnContent,
  buildEnWann,
  buildEnWie,
  roleLabel,
  type SubjectId,
  type VerbId,
  type ModalId,
  type Form,
  type QuestionMode,
  type Token,
} from './data/grammar'
import { ui } from './i18n'
import type { Locale } from '../../i18n/common'
import './sentence-builder.css'

const FORMS: Form[] = ['affirmative', 'question', 'negative', 'twoVerbs']

const DEFAULT_SUBJECT: SubjectId = 'ich'
const DEFAULT_VERB: VerbId = 'lernen'
const DEFAULT_MODAL: ModalId = 'moechten'

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

export default function SentenceBuilder() {
  const { locale } = useOutletContext<{ locale: Locale }>()
  const [form, setForm] = useState<Form>('affirmative')
  const [questionMode, setQuestionMode] = useState<QuestionMode>('yesno')
  const [subjectId, setSubjectId] = useState<SubjectId>(DEFAULT_SUBJECT)
  const [verbId, setVerbId] = useState<VerbId>(DEFAULT_VERB)
  const [objectId, setObjectId] = useState<string>('deutsch')
  const [modalId, setModalId] = useState<ModalId>(DEFAULT_MODAL)
  const [timeId, setTimeId] = useState<string>(NONE_ID)
  const [mannerId, setMannerId] = useState<string>(NONE_ID)
  const [negatedQuestion, setNegatedQuestion] = useState(false)

  const t = ui[locale]

  const verb = useMemo(() => verbs.find(v => v.id === verbId)!, [verbId])
  const modal = useMemo(() => modals.find(m => m.id === modalId)!, [modalId])
  const object = useMemo(
    () => verb.objects.find(o => o.id === objectId) ?? verb.objects[0],
    [verb, objectId],
  )
  const time = useMemo(() => timeAdverbs.find(t2 => t2.id === timeId)!, [timeId])
  const manner = useMemo(() => mannerAdverbs.find(m => m.id === mannerId)!, [mannerId])

  function changeVerb(next: VerbId) {
    const nextVerb = verbs.find(v => v.id === next)!
    setVerbId(next)
    setObjectId(nextVerb.objects[0].id)
  }

  function changeObject(id: string) {
    setObjectId(id)
    const nextObject = verb.objects.find(o => o.id === id)
    if (nextObject?.kind === 'none' && questionMode === 'content') setQuestionMode('yesno')
  }

  function restart() {
    setForm('affirmative')
    setQuestionMode('yesno')
    setSubjectId(DEFAULT_SUBJECT)
    changeVerb(DEFAULT_VERB)
    setModalId(DEFAULT_MODAL)
    setTimeId(NONE_ID)
    setMannerId(NONE_ID)
    setNegatedQuestion(false)
  }

  const isQuestion = form === 'question'
  const placeLabels = { Wohin: [t.whereToModeLabel, t.whereToExplain], Woher: [t.whereFromModeLabel, t.whereFromExplain], Wo: [t.whereModeLabel, t.whereExplain] } as const
  const [contentLabel, contentExplain] = object.kind === 'place' ? placeLabels[object.whWord] : [t.whatModeLabel, t.whatExplain]

  const isNegatedYesNo = isQuestion && questionMode === 'yesno' && negatedQuestion

  const tokens =
    isQuestion && questionMode === 'wer' ? buildDeWerTokens(verb, object, time, manner) :
    isQuestion && questionMode === 'content' ? buildDeContentTokens(subjectId, verb, object, time, manner) :
    isQuestion && questionMode === 'wann' ? buildDeWannTokens(subjectId, verb, object, manner) :
    isQuestion && questionMode === 'wie' ? buildDeWieTokens(subjectId, verb, object, time) :
    buildDeTokens(form, subjectId, verb, object, modal, time, manner, isNegatedYesNo)

  const sentencePt =
    isQuestion && questionMode === 'wer' ? buildPtWer(verb, object, time, manner) :
    isQuestion && questionMode === 'content' ? buildPtContent(subjectId, verb, object, time, manner) :
    isQuestion && questionMode === 'wann' ? buildPtWann(subjectId, verb, object, manner) :
    isQuestion && questionMode === 'wie' ? buildPtWie(subjectId, verb, object, time) :
    buildPt(form, subjectId, verb, object, modal, time, manner, isNegatedYesNo)

  const sentenceEn =
    isQuestion && questionMode === 'wer' ? buildEnWer(verb, object, time, manner) :
    isQuestion && questionMode === 'content' ? buildEnContent(subjectId, verb, object, time, manner) :
    isQuestion && questionMode === 'wann' ? buildEnWann(subjectId, verb, object, manner) :
    isQuestion && questionMode === 'wie' ? buildEnWie(subjectId, verb, object, time) :
    buildEn(form, subjectId, verb, object, modal, time, manner, isNegatedYesNo)

  const negativeExplain = object.kind === 'noun' ? t.negativeExplainNoun : object.kind === 'place' ? t.negativeExplainPlace : t.formExplain.negative

  const explain = isQuestion
    ? (questionMode === 'wer' ? t.werExplain
      : questionMode === 'content' ? contentExplain
      : questionMode === 'wann' ? t.wannExplain
      : questionMode === 'wie' ? t.wieExplain
      : isNegatedYesNo ? t.dochExplain
      : t.formExplain.question)
    : form === 'negative' ? negativeExplain
    : t.formExplain[form]

  const yesAnswer = buildDeAnswer('yes', subjectId, verb, object, time, manner, isNegatedYesNo)
  const noAnswer = buildDeAnswer('no', subjectId, verb, object, time, manner, isNegatedYesNo)
  const openAnswer = buildDeOpenAnswer(subjectId, verb, object, time, manner)

  return (
    <div className="screen-sentence-builder">
      <header className="screen-header">
        <strong>{t.brandTagline}</strong>
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
          {object.kind !== 'none' && (
            <button className={questionMode === 'content' ? 'qmode active' : 'qmode'} onClick={() => setQuestionMode('content')}>{contentLabel}</button>
          )}
          <button className={questionMode === 'wann' ? 'qmode active' : 'qmode'} onClick={() => setQuestionMode('wann')}>{t.wannModeLabel}</button>
          <button className={questionMode === 'wie' ? 'qmode active' : 'qmode'} onClick={() => setQuestionMode('wie')}>{t.wieModeLabel}</button>
        </div>
      )}

      {isQuestion && questionMode === 'yesno' && (
        <div className="qmode-switch">
          <button className={!negatedQuestion ? 'qmode active' : 'qmode'} onClick={() => setNegatedQuestion(false)}>{t.questionAffirmativeLabel}</button>
          <button className={negatedQuestion ? 'qmode active' : 'qmode'} onClick={() => setNegatedQuestion(true)}>{t.questionNegativeLabel}</button>
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
            <p>{openAnswer}</p>
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
                onClick={() => changeObject(o.id)}
              >
                {o.kind === 'noun' ? o.noun : o.kind === 'place' ? o.phrase : t.noneOption}
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

        <div className="piece-group">
          <span className="piece-label">{t.zeit}</span>
          <div className="chips">
            {timeAdverbs.map(adv => (
              <button key={adv.id} className={adv.id === timeId ? 'chip active' : 'chip'} onClick={() => setTimeId(adv.id)}>
                {adv.id === NONE_ID ? t.noneOption : adv.de}
              </button>
            ))}
          </div>
        </div>

        <div className="piece-group">
          <span className="piece-label">{t.wie}</span>
          <div className="chips">
            {mannerAdverbs.map(adv => (
              <button key={adv.id} className={adv.id === mannerId ? 'chip active' : 'chip'} onClick={() => setMannerId(adv.id)}>
                {adv.id === NONE_ID ? t.noneOption : adv.de}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className="restart" onClick={restart}>{t.restart}</button>
    </div>
  )
}
