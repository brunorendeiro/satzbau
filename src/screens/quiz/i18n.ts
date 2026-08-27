import type { Locale } from '../../i18n/common'
import type { QuizCategory, QuizLevel } from './quiz-engine'

type UiStrings = {
  title: string
  intro: string
  tagline: string
  durationLabel: string
  durationMinutes: (n: number) => string
  levelLabel: string
  levelLabels: Record<QuizLevel, string>
  bestScoreLabel: (best: number) => string
  startButton: string
  categoryLabels: Record<QuizCategory, string>
  correctFeedback: string
  wrongFeedback: string
  timeUpFeedback: string
  typedHint: string
  typedPlaceholder: string
  typedSubmit: string
  arrangeHint: string
  arrangeClear: string
  endTitleTime: string
  endTitleLives: string
  scoreSummary: (score: number) => string
  correctSummary: (correct: number, total: number) => string
  newBest: string
  bestScoreEnd: (best: number) => string
  playAgainButton: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Quiz',
    intro: 'Um jogo relâmpago que mistura tudo o que já aprendeste — vocabulário, números, artigos, verbos, frases e mais.',
    tagline: 'Nem sabes o bem que te fazia praticar 10 minutinhos destes todos os dias.',
    durationLabel: 'Quanto tempo tens?',
    durationMinutes: (n) => `${n} min`,
    levelLabel: 'Nível',
    levelLabels: { easy: 'Fácil', medium: 'Médio', hard: 'Difícil' },
    bestScoreLabel: (best) => `Recorde: ${best} pontos`,
    startButton: 'Começar',
    categoryLabels: {
      vocab: 'Vocabulário',
      numbers: 'Números',
      arithmetic: 'Contas',
      gender: 'Artigo',
      pronoun: 'Pronome',
      compound: 'Palavra composta',
      verbs: 'Verbo',
      'question-word': 'Palavra interrogativa',
      profession: 'Profissão',
      reading: 'Leitura',
      sentence: 'Frase',
    },
    correctFeedback: 'Certo!',
    wrongFeedback: 'Era:',
    timeUpFeedback: 'Tempo esgotado! Era:',
    typedHint: 'Escreve o número por extenso, em alemão.',
    typedPlaceholder: 'em alemão…',
    typedSubmit: 'Confirmar',
    arrangeHint: 'Toca nas palavras pela ordem certa.',
    arrangeClear: 'Limpar',
    endTitleTime: 'Tempo esgotado!',
    endTitleLives: 'Ficaste sem vidas!',
    scoreSummary: (score) => `Pontuação: ${score}`,
    correctSummary: (correct, total) => `${correct} de ${total} corretas`,
    newBest: 'Novo recorde!',
    bestScoreEnd: (best) => `Recorde: ${best}`,
    playAgainButton: 'Jogar outra vez',
  },
  en: {
    title: 'Quiz',
    intro: 'A fast-paced game that mixes everything you have learned so far — vocabulary, numbers, articles, verbs, sentences and more.',
    tagline: "You don't even know how good 10 minutes of this every day would be for you.",
    durationLabel: 'How much time do you have?',
    durationMinutes: (n) => `${n} min`,
    levelLabel: 'Level',
    levelLabels: { easy: 'Easy', medium: 'Medium', hard: 'Hard' },
    bestScoreLabel: (best) => `Best: ${best} points`,
    startButton: 'Start',
    categoryLabels: {
      vocab: 'Vocabulary',
      numbers: 'Numbers',
      arithmetic: 'Arithmetic',
      gender: 'Article',
      pronoun: 'Pronoun',
      compound: 'Compound word',
      verbs: 'Verb',
      'question-word': 'Question word',
      profession: 'Profession',
      reading: 'Reading',
      sentence: 'Sentence',
    },
    correctFeedback: 'Correct!',
    wrongFeedback: 'It was:',
    timeUpFeedback: "Time's up! It was:",
    typedHint: 'Type the number in German, spelled out.',
    typedPlaceholder: 'in German…',
    typedSubmit: 'Submit',
    arrangeHint: 'Tap the words in the right order.',
    arrangeClear: 'Clear',
    endTitleTime: "Time's up!",
    endTitleLives: 'Out of lives!',
    scoreSummary: (score) => `Score: ${score}`,
    correctSummary: (correct, total) => `${correct} of ${total} correct`,
    newBest: 'New best!',
    bestScoreEnd: (best) => `Best: ${best}`,
    playAgainButton: 'Play again',
  },
  de: {
    title: 'Quiz',
    intro: 'Ein schnelles Spiel, das alles mischt, was du bisher gelernt hast — Wortschatz, Zahlen, Artikel, Verben, Sätze und mehr.',
    tagline: 'Du weißt gar nicht, wie gut dir 10 Minuten davon jeden Tag tun würden.',
    durationLabel: 'Wie viel Zeit hast du?',
    durationMinutes: (n) => `${n} Min`,
    levelLabel: 'Level',
    levelLabels: { easy: 'Leicht', medium: 'Mittel', hard: 'Schwer' },
    bestScoreLabel: (best) => `Rekord: ${best} Punkte`,
    startButton: 'Starten',
    categoryLabels: {
      vocab: 'Wortschatz',
      numbers: 'Zahlen',
      arithmetic: 'Rechnen',
      gender: 'Artikel',
      pronoun: 'Pronomen',
      compound: 'Wortbau',
      verbs: 'Verb',
      'question-word': 'Fragewort',
      profession: 'Beruf',
      reading: 'Lesen',
      sentence: 'Satz',
    },
    correctFeedback: 'Richtig!',
    wrongFeedback: 'Es war:',
    timeUpFeedback: 'Zeit ist um! Es war:',
    typedHint: 'Schreib die Zahl auf Deutsch aus.',
    typedPlaceholder: 'auf Deutsch…',
    typedSubmit: 'Bestätigen',
    arrangeHint: 'Tippe die Wörter in der richtigen Reihenfolge.',
    arrangeClear: 'Löschen',
    endTitleTime: 'Zeit ist um!',
    endTitleLives: 'Keine Leben mehr!',
    scoreSummary: (score) => `Punkte: ${score}`,
    correctSummary: (correct, total) => `${correct} von ${total} richtig`,
    newBest: 'Neuer Rekord!',
    bestScoreEnd: (best) => `Rekord: ${best}`,
    playAgainButton: 'Nochmal spielen',
  },
}
