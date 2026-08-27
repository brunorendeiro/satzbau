import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  dialogueLabel: string
  phrasesLabel: string
  questionLabel: string
  correctFeedback: string
  wrongFeedback: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Gespräche',
    intro: 'Conversas do dia a dia, situação a situação — lê o diálogo, guarda as frases-chave, e testa se percebeste.',
    dialogueLabel: 'Diálogo',
    phrasesLabel: 'Frases-chave',
    questionLabel: 'Percebeste?',
    correctFeedback: 'Certo!',
    wrongFeedback: 'Não é bem isso — tenta outra vez.',
  },
  en: {
    title: 'Gespräche',
    intro: 'Everyday conversations, one situation at a time — read the dialogue, keep the key phrases, and test what you picked up.',
    dialogueLabel: 'Dialogue',
    phrasesLabel: 'Key phrases',
    questionLabel: 'Did you follow?',
    correctFeedback: 'Correct!',
    wrongFeedback: "Not quite — try again.",
  },
  de: {
    title: 'Gespräche',
    intro: 'Alltagsgespräche, eine Situation nach der anderen — lies den Dialog, merk dir die Schlüsselsätze und teste, ob du alles verstanden hast.',
    dialogueLabel: 'Dialog',
    phrasesLabel: 'Schlüsselsätze',
    questionLabel: 'Alles verstanden?',
    correctFeedback: 'Richtig!',
    wrongFeedback: 'Nicht ganz — versuch es nochmal.',
  },
}
