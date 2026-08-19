import type { Locale } from '../../i18n/common'

type UiStrings = {
  title: string
  intro: string
  sectionAlphabet: string
  sectionExtra: string
  sectionCombos: string
  combosIntro: string
  sectionVowelLength: string
  vowelLengthIntro: string
  shortTag: string
  longTag: string
  surnamesLabel: string
  trickyTag: string
  filterAll: string
  filterTricky: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Aussprache',
    intro: 'O alfabeto alemão tem as mesmas 26 letras do português e do inglês — mas nem todas soam como esperarias. As marcadas "diferente" são as que mais costumam confundir quem vem do português ou do inglês.',
    sectionAlphabet: 'O alfabeto',
    sectionExtra: 'Letras especiais',
    sectionCombos: 'Combinações de letras',
    combosIntro: 'Algumas letras juntas formam um som completamente diferente do que teriam sozinhas — vale a pena aprendê-las como se fossem uma letra só.',
    sectionVowelLength: 'Vogais longas e curtas',
    vowelLengthIntro: 'A mesma vogal pode soar longa ou curta — e isso muda o significado da palavra. Há pistas na escrita que ajudam a saber qual é qual.',
    shortTag: 'curta',
    longTag: 'longa',
    surnamesLabel: 'Pratica com apelidos alemães reais',
    trickyTag: 'diferente',
    filterAll: 'Todas',
    filterTricky: 'Só as diferentes',
  },
  en: {
    title: 'Aussprache',
    intro: 'The German alphabet has the same 26 letters as Portuguese and English — but not all of them sound the way you\'d expect. The ones tagged "different" are the sounds that most often trip up Portuguese and English speakers.',
    sectionAlphabet: 'The alphabet',
    sectionExtra: 'Special letters',
    sectionCombos: 'Letter combinations',
    combosIntro: 'Some letters, put together, make a sound completely different from what they\'d have on their own — worth learning as if they were one single letter.',
    sectionVowelLength: 'Long and short vowels',
    vowelLengthIntro: 'The same vowel can sound long or short — and that changes the word\'s meaning. There are spelling clues that hint at which one you\'re looking at.',
    shortTag: 'short',
    longTag: 'long',
    surnamesLabel: 'Practice with real German surnames',
    trickyTag: 'different',
    filterAll: 'All',
    filterTricky: 'Just the different ones',
  },
  de: {
    title: 'Aussprache',
    intro: 'Das deutsche Alphabet hat dieselben 26 Buchstaben wie Portugiesisch und Englisch — aber nicht alle klingen so, wie man erwarten würde. Die mit "anders" markierten Laute verwirren portugiesische und englische Sprecher am häufigsten.',
    sectionAlphabet: 'Das Alphabet',
    sectionExtra: 'Sonderzeichen',
    sectionCombos: 'Buchstabenkombinationen',
    combosIntro: 'Manche Buchstaben ergeben zusammen einen völlig anderen Laut, als sie einzeln hätten — am besten lernst du sie wie einen einzigen Buchstaben.',
    sectionVowelLength: 'Lange und kurze Vokale',
    vowelLengthIntro: 'Derselbe Vokal kann lang oder kurz klingen — und das ändert die Bedeutung des Wortes. Die Schreibweise gibt Hinweise darauf, welcher es ist.',
    shortTag: 'kurz',
    longTag: 'lang',
    surnamesLabel: 'Übe mit echten deutschen Nachnamen',
    trickyTag: 'anders',
    filterAll: 'Alle',
    filterTricky: 'Nur die anderen',
  },
}
