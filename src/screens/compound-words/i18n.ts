import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  part1Label: string
  part2Label: string
  pickPart1Hint: string
  pickPart2Hint: string
  literalLabel: string
  progressLabel: (found: number, total: number) => string
  resetLabel: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Wortbau',
    intro: 'O alemão gosta de usar o mínimo de palavras possível — em vez de inventar uma nova, junta duas (ou mais) já existentes, como peças de Lego, e mistura os significados. Escolhe a primeira peça e depois a segunda para veres que palavra formam.',
    part1Label: '1ª peça',
    part2Label: '2ª peça',
    pickPart1Hint: 'Escolhe a primeira peça.',
    pickPart2Hint: 'Agora escolhe a segunda peça.',
    literalLabel: 'À letra',
    progressLabel: (found, total) => `${found} de ${total} descobertas`,
    resetLabel: 'Recomeçar',
  },
  en: {
    title: 'Wortbau',
    intro: 'German prefers to invent as few new words as possible — instead, it snaps two (or more) existing words together, like Lego, and blends their meanings. Pick the first piece, then the second, to see what word they form.',
    part1Label: '1st piece',
    part2Label: '2nd piece',
    pickPart1Hint: 'Pick the first piece.',
    pickPart2Hint: 'Now pick the second piece.',
    literalLabel: 'Literally',
    progressLabel: (found, total) => `${found} of ${total} discovered`,
    resetLabel: 'Restart',
  },
  de: {
    title: 'Wortbau',
    intro: 'Das Deutsche erfindet möglichst wenige neue Wörter — stattdessen werden zwei (oder mehr) bestehende Wörter wie Legosteine zusammengesetzt und ihre Bedeutungen verschmolzen. Wähle das erste Stück, dann das zweite, um zu sehen, welches Wort entsteht.',
    part1Label: '1. Teil',
    part2Label: '2. Teil',
    pickPart1Hint: 'Wähle das erste Teil.',
    pickPart2Hint: 'Wähle jetzt das zweite Teil.',
    literalLabel: 'Wörtlich',
    progressLabel: (found, total) => `${found} von ${total} entdeckt`,
    resetLabel: 'Neu starten',
  },
}
