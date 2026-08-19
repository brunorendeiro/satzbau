/** One base→result transformation — the same word "slot + slot = result"
 * shape as Wortbau's compound-word equations, but here the second "piece"
 * is a prefix or suffix instead of a whole word. */
export type MultiplierExample = {
  id: string
  base: string
  baseMeaningPt: string
  baseMeaningEn: string
  result: string
  resultMeaningPt: string
  resultMeaningEn: string
}

export type MultiplierGroup = {
  id: string
  affix: string
  titlePt: string
  titleEn: string
  titleDe: string
  descriptionPt: string
  descriptionEn: string
  descriptionDe: string
  examples: MultiplierExample[]
}

export const multiplierGroups: MultiplierGroup[] = [
  {
    id: 'er-profession',
    affix: '-er',
    titlePt: 'O verbo vira profissão',
    titleEn: 'The verb becomes a profession',
    titleDe: 'Das Verb wird zum Beruf',
    descriptionPt: 'Um verbo vira o nome de quem faz essa ação — e junta-se "-in" para a versão feminina (Lehrer → Lehrerin).',
    descriptionEn: 'A verb becomes the name of whoever does that action — add "-in" for the feminine form (Lehrer → Lehrerin).',
    descriptionDe: 'Aus einem Verb wird der Name für die Person, die das tut — mit "-in" für die weibliche Form (Lehrer → Lehrerin).',
    examples: [
      { id: 'lehren', base: 'lehren', baseMeaningPt: 'ensinar', baseMeaningEn: 'to teach', result: 'Lehrer', resultMeaningPt: 'professor', resultMeaningEn: 'teacher' },
      { id: 'arbeiten-er', base: 'arbeiten', baseMeaningPt: 'trabalhar', baseMeaningEn: 'to work', result: 'Arbeiter', resultMeaningPt: 'trabalhador', resultMeaningEn: 'worker' },
      { id: 'backen', base: 'backen', baseMeaningPt: 'assar', baseMeaningEn: 'to bake', result: 'Bäcker', resultMeaningPt: 'padeiro', resultMeaningEn: 'baker' },
    ],
  },
  {
    id: 'er-resident',
    affix: '-er',
    titlePt: 'A cidade vira morador',
    titleEn: 'The city becomes a resident',
    titleDe: 'Die Stadt wird zum Einwohner',
    descriptionPt: 'O mesmo "-er" também transforma o nome de uma cidade em quem mora lá — e às vezes vira outra coisa completamente diferente pelo caminho.',
    descriptionEn: 'The same "-er" also turns a city\'s name into whoever lives there — and sometimes it turns into something else entirely along the way.',
    descriptionDe: 'Dasselbe "-er" macht aus einem Stadtnamen auch die Person, die dort wohnt — und manchmal wird daraus unterwegs etwas ganz anderes.',
    examples: [
      { id: 'hamburg', base: 'Hamburg', baseMeaningPt: 'a cidade', baseMeaningEn: 'the city', result: 'Hamburger', resultMeaningPt: 'morador de Hamburgo (e o lanche!)', resultMeaningEn: 'person from Hamburg (and the sandwich!)' },
      { id: 'wien', base: 'Wien', baseMeaningPt: 'Viena', baseMeaningEn: 'Vienna', result: 'Wiener', resultMeaningPt: 'vienense', resultMeaningEn: 'person from Vienna' },
    ],
  },
  {
    id: 'un',
    affix: 'un-',
    titlePt: 'O contrário, de graça',
    titleEn: 'The opposite, for free',
    titleDe: 'Das Gegenteil, gratis',
    descriptionPt: 'Duas letras à frente de um adjetivo e a palavra vira o seu contrário.',
    descriptionEn: 'Two letters in front of an adjective and the word becomes its opposite.',
    descriptionDe: 'Zwei Buchstaben vor einem Adjektiv, und das Wort wird zu seinem Gegenteil.',
    examples: [
      { id: 'gluecklich', base: 'glücklich', baseMeaningPt: 'feliz', baseMeaningEn: 'happy', result: 'unglücklich', resultMeaningPt: 'infeliz', resultMeaningEn: 'unhappy' },
      { id: 'moeglich', base: 'möglich', baseMeaningPt: 'possível', baseMeaningEn: 'possible', result: 'unmöglich', resultMeaningPt: 'impossível', resultMeaningEn: 'impossible' },
    ],
  },
  {
    id: 'bar',
    affix: '-bar',
    titlePt: 'A capacidade, o nosso "-vel"',
    titleEn: 'The capability, our "-able"',
    titleDe: 'Die Fähigkeit, unser "-bar"',
    descriptionPt: 'Um verbo vira um adjetivo que diz se a coisa pode ser feita — e "-bar" combina com "un-" para negar essa capacidade.',
    descriptionEn: 'A verb becomes an adjective saying whether the thing can be done — and "-bar" combines with "un-" to negate that capability.',
    descriptionDe: 'Aus einem Verb wird ein Adjektiv, das sagt, ob man etwas tun kann — und "-bar" verbindet sich mit "un-", um diese Fähigkeit zu verneinen.',
    examples: [
      { id: 'trinken-bar', base: 'trinken', baseMeaningPt: 'beber', baseMeaningEn: 'to drink', result: 'trinkbar', resultMeaningPt: 'bebível', resultMeaningEn: 'drinkable' },
      { id: 'essen-bar', base: 'essen', baseMeaningPt: 'comer', baseMeaningEn: 'to eat', result: 'essbar', resultMeaningPt: 'comestível', resultMeaningEn: 'edible' },
      { id: 'untrinkbar', base: 'trinkbar', baseMeaningPt: 'bebível', baseMeaningEn: 'drinkable', result: 'untrinkbar', resultMeaningPt: 'imbebível', resultMeaningEn: 'undrinkable' },
    ],
  },
  {
    id: 'los',
    affix: '-los',
    titlePt: '"Los" quer dizer "sem"',
    titleEn: '"Los" means "without"',
    titleDe: '"Los" bedeutet "ohne"',
    descriptionPt: 'Cola-se a um substantivo e o resultado é um adjetivo que descreve a falta dessa coisa.',
    descriptionEn: 'It attaches to a noun, and the result is an adjective describing the lack of that thing.',
    descriptionDe: 'Es hängt sich an ein Nomen, und das Ergebnis ist ein Adjektiv, das das Fehlen dieser Sache beschreibt.',
    examples: [
      { id: 'kosten', base: 'Kosten', baseMeaningPt: 'custos', baseMeaningEn: 'costs', result: 'kostenlos', resultMeaningPt: 'grátis, sem custo', resultMeaningEn: 'free, without cost' },
      { id: 'arbeit', base: 'Arbeit', baseMeaningPt: 'trabalho', baseMeaningEn: 'work', result: 'arbeitslos', resultMeaningPt: 'desempregado, sem trabalho', resultMeaningEn: 'unemployed, without work' },
    ],
  },
]
