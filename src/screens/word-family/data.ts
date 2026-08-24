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
    descriptionPt: 'Um verbo vira o nome de quem faz essa ação — depois é só juntar "-in" para a versão feminina (mais abaixo).',
    descriptionEn: 'A verb becomes the name of whoever does that action — then just add "-in" for the feminine form (further down).',
    descriptionDe: 'Aus einem Verb wird der Name für die Person, die das tut — dann einfach "-in" für die weibliche Form anhängen (weiter unten).',
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
    id: 'in',
    affix: '-in',
    titlePt: 'De masculino para feminino',
    titleEn: 'From masculine to feminine',
    titleDe: 'Vom Männlichen zum Weiblichen',
    descriptionPt: 'Quase qualquer pessoa ou profissão no masculino ganha a versão feminina só com "-in" — às vezes a vogal também ganha trema pelo caminho.',
    descriptionEn: 'Almost any person or profession in the masculine gets its feminine form just by adding "-in" — sometimes the vowel also picks up an umlaut along the way.',
    descriptionDe: 'Fast jede Person oder jeder Beruf im Maskulinum bekommt die weibliche Form einfach durch "-in" — manchmal bekommt der Vokal dabei auch einen Umlaut.',
    examples: [
      { id: 'lehrerin', base: 'Lehrer', baseMeaningPt: 'professor', baseMeaningEn: 'teacher (m)', result: 'Lehrerin', resultMeaningPt: 'professora', resultMeaningEn: 'teacher (f)' },
      { id: 'arztin', base: 'Arzt', baseMeaningPt: 'médico', baseMeaningEn: 'doctor (m)', result: 'Ärztin', resultMeaningPt: 'médica', resultMeaningEn: 'doctor (f)' },
      { id: 'freundin', base: 'Freund', baseMeaningPt: 'amigo', baseMeaningEn: 'friend (m)', result: 'Freundin', resultMeaningPt: 'amiga', resultMeaningEn: 'friend (f)' },
      { id: 'studentin', base: 'Student', baseMeaningPt: 'estudante (m)', baseMeaningEn: 'student (m)', result: 'Studentin', resultMeaningPt: 'estudante (f)', resultMeaningEn: 'student (f)' },
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
    id: 'heit-keit',
    affix: '-heit/-keit',
    titlePt: 'O adjetivo vira ideia abstrata',
    titleEn: 'The adjective becomes an abstract idea',
    titleDe: 'Das Adjektiv wird zur abstrakten Idee',
    descriptionPt: 'Um adjetivo vira um substantivo abstrato — o nosso "-dade"/"-eza". Depois de "-lich" ou "-ig" usa-se "-keit", nos outros costuma ser "-heit". Repara que "möglich" já apareceu lá atrás — a mesma palavra multiplica-se em direções diferentes.',
    descriptionEn: 'An adjective becomes an abstract noun — our "-ness"/"-ity". After "-lich" or "-ig" it\'s "-keit", elsewhere it\'s usually "-heit". Notice "möglich" showed up earlier too — the same word multiplies in different directions.',
    descriptionDe: 'Aus einem Adjektiv wird ein abstraktes Nomen. Nach "-lich" oder "-ig" steht "-keit", sonst meist "-heit". "möglich" ist dir schon weiter oben begegnet — dasselbe Wort vervielfacht sich in verschiedene Richtungen.',
    examples: [
      { id: 'frei', base: 'frei', baseMeaningPt: 'livre', baseMeaningEn: 'free', result: 'Freiheit', resultMeaningPt: 'liberdade', resultMeaningEn: 'freedom' },
      { id: 'schoen', base: 'schön', baseMeaningPt: 'bonito', baseMeaningEn: 'beautiful', result: 'Schönheit', resultMeaningPt: 'beleza', resultMeaningEn: 'beauty' },
      { id: 'moeglich-keit', base: 'möglich', baseMeaningPt: 'possível', baseMeaningEn: 'possible', result: 'Möglichkeit', resultMeaningPt: 'possibilidade', resultMeaningEn: 'possibility' },
      { id: 'freundlich', base: 'freundlich', baseMeaningPt: 'amável', baseMeaningEn: 'friendly', result: 'Freundlichkeit', resultMeaningPt: 'simpatia', resultMeaningEn: 'friendliness' },
    ],
  },
  {
    id: 'ung',
    affix: '-ung',
    titlePt: 'O verbo vira substantivo',
    titleEn: 'The verb becomes a noun',
    titleDe: 'Das Verb wird zum Nomen',
    descriptionPt: 'Um verbo vira o nome da ação ou do resultado dela — sempre feminino, sempre "die -ung".',
    descriptionEn: 'A verb becomes the name of the action itself or its result — always feminine, always "die -ung".',
    descriptionDe: 'Aus einem Verb wird der Name der Handlung selbst oder ihres Ergebnisses — immer feminin, immer "die -ung".',
    examples: [
      { id: 'wohnen-ung', base: 'wohnen', baseMeaningPt: 'morar', baseMeaningEn: 'to live', result: 'Wohnung', resultMeaningPt: 'apartamento', resultMeaningEn: 'apartment' },
      { id: 'loesen', base: 'lösen', baseMeaningPt: 'resolver', baseMeaningEn: 'to solve', result: 'Lösung', resultMeaningPt: 'solução', resultMeaningEn: 'solution' },
      { id: 'entscheiden', base: 'entscheiden', baseMeaningPt: 'decidir', baseMeaningEn: 'to decide', result: 'Entscheidung', resultMeaningPt: 'decisão', resultMeaningEn: 'decision' },
      { id: 'meinen', base: 'meinen', baseMeaningPt: 'achar, opinar', baseMeaningEn: 'to think, to mean', result: 'Meinung', resultMeaningPt: 'opinião', resultMeaningEn: 'opinion' },
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
  {
    id: 'chen',
    affix: '-chen',
    titlePt: 'O diminutivo — e é sempre neutro',
    titleEn: 'The diminutive — and it\'s always neuter',
    titleDe: 'Die Verkleinerung — und sie ist immer sächlich',
    descriptionPt: 'Torna qualquer coisa pequena ou querida — e o resultado é SEMPRE "das", nunca importa o género da palavra original. Sabias que "Mädchen" (rapariga) já é um diminutivo? É por isso que se diz "das Mädchen", não "die".',
    descriptionEn: 'Makes anything small or endearing — and the result is ALWAYS "das", no matter the original word\'s gender. Did you know "Mädchen" (girl) is already a diminutive? That\'s why it\'s "das Mädchen", not "die".',
    descriptionDe: 'Macht alles klein oder niedlich — und das Ergebnis ist IMMER sächlich ("das"), egal welches Geschlecht das Ursprungswort hatte. Wusstest du, dass "Mädchen" selbst schon eine Verkleinerungsform ist? Deshalb heißt es "das Mädchen", nicht "die".',
    examples: [
      { id: 'haus-chen', base: 'Haus', baseMeaningPt: 'a casa', baseMeaningEn: 'the house', result: 'Häuschen', resultMeaningPt: 'a casinha', resultMeaningEn: 'the little house' },
      { id: 'hund-chen', base: 'Hund', baseMeaningPt: 'o cão', baseMeaningEn: 'the dog', result: 'Hündchen', resultMeaningPt: 'o cãozinho', resultMeaningEn: 'the little dog' },
      { id: 'brot-chen', base: 'Brot', baseMeaningPt: 'o pão', baseMeaningEn: 'the bread', result: 'Brötchen', resultMeaningPt: 'o papo-seco', resultMeaningEn: 'the bread roll' },
    ],
  },
  {
    id: 'infinitiv',
    affix: 'das +',
    titlePt: 'Qualquer verbo vira "a coisa"',
    titleEn: 'Any verb becomes "the thing"',
    titleDe: 'Jedes Verb wird zum "Ding"',
    descriptionPt: 'Qualquer infinitivo pode virar substantivo neutro só com maiúscula e "das" — sempre "das", nunca "der"/"die". O significado costuma desviar-se da ação em si para a coisa/atividade que ela produz.',
    descriptionEn: 'Any infinitive can become a neuter noun just by capitalizing it and adding "das" — always "das", never "der"/"die". The meaning often drifts from the action itself to the thing or activity it produces.',
    descriptionDe: 'Jeder Infinitiv kann durch Großschreibung und "das" zum Neutrum werden — immer "das", nie "der"/"die". Die Bedeutung verschiebt sich oft von der Handlung selbst zum Ding oder zur Tätigkeit, die daraus entsteht.',
    examples: [
      { id: 'essen-das', base: 'essen', baseMeaningPt: 'comer', baseMeaningEn: 'to eat', result: 'das Essen', resultMeaningPt: 'a comida, a refeição', resultMeaningEn: 'the food, the meal' },
      { id: 'leben-das', base: 'leben', baseMeaningPt: 'viver', baseMeaningEn: 'to live', result: 'das Leben', resultMeaningPt: 'a vida', resultMeaningEn: 'the life' },
      { id: 'lesen-das', base: 'lesen', baseMeaningPt: 'ler', baseMeaningEn: 'to read', result: 'das Lesen', resultMeaningPt: 'a leitura', resultMeaningEn: 'the reading' },
      { id: 'rauchen-das', base: 'rauchen', baseMeaningPt: 'fumar', baseMeaningEn: 'to smoke', result: 'das Rauchen', resultMeaningPt: 'o ato de fumar, o tabagismo', resultMeaningEn: 'smoking' },
    ],
  },
]

/** Not a transformation into a new word — a shortcut for guessing the
 * article of a word you've never seen. Many of these endings are Latin in
 * origin, but "Latin words are neuter" is an oversimplification: each
 * ending has ITS OWN reliable gender, and they don't all point to "das". */
export type GenderRule = {
  id: string
  ending: string
  article: 'der' | 'die' | 'das'
  descriptionPt: string
  descriptionEn: string
  descriptionDe: string
  examples: { word: string; meaningPt: string; meaningEn: string }[]
}

export const genderRules: GenderRule[] = [
  {
    id: 'um',
    ending: '-um',
    article: 'das',
    descriptionPt: 'Direto do neutro latino — quase sempre "das".',
    descriptionEn: 'Straight from Latin neuter — almost always "das".',
    descriptionDe: 'Direkt aus dem lateinischen Neutrum — fast immer "das".',
    examples: [
      { word: 'Museum', meaningPt: 'museu', meaningEn: 'museum' },
      { word: 'Zentrum', meaningPt: 'centro', meaningEn: 'center' },
      { word: 'Visum', meaningPt: 'visto', meaningEn: 'visa' },
    ],
  },
  {
    id: 'tion',
    ending: '-tion',
    article: 'die',
    descriptionPt: 'Do latim "-tio" — sempre feminino, nunca neutro.',
    descriptionEn: 'From Latin "-tio" — always feminine, never neuter.',
    descriptionDe: 'Vom lateinischen "-tio" — immer feminin, nie sächlich.',
    examples: [
      { word: 'Situation', meaningPt: 'situação', meaningEn: 'situation' },
      { word: 'Nation', meaningPt: 'nação', meaningEn: 'nation' },
      { word: 'Information', meaningPt: 'informação', meaningEn: 'information' },
    ],
  },
  {
    id: 'taet',
    ending: '-tät',
    article: 'die',
    descriptionPt: 'O equivalente ao nosso "-dade" — sempre feminino.',
    descriptionEn: 'The equivalent of our "-ity" — always feminine.',
    descriptionDe: 'Entspricht unserem "-ität" — immer feminin.',
    examples: [
      { word: 'Universität', meaningPt: 'universidade', meaningEn: 'university' },
      { word: 'Qualität', meaningPt: 'qualidade', meaningEn: 'quality' },
    ],
  },
  {
    id: 'ismus',
    ending: '-ismus',
    article: 'der',
    descriptionPt: 'Movimentos, ideias, "-ismos" — sempre masculino.',
    descriptionEn: 'Movements, ideas, "-isms" — always masculine.',
    descriptionDe: 'Bewegungen, Ideen, "-ismen" — immer maskulin.',
    examples: [
      { word: 'Tourismus', meaningPt: 'turismo', meaningEn: 'tourism' },
      { word: 'Journalismus', meaningPt: 'jornalismo', meaningEn: 'journalism' },
    ],
  },
  {
    id: 'ment',
    ending: '-ment',
    article: 'das',
    descriptionPt: 'Também do latim, quase sempre neutro.',
    descriptionEn: 'Also from Latin, almost always neuter.',
    descriptionDe: 'Ebenfalls aus dem Lateinischen, fast immer sächlich.',
    examples: [
      { word: 'Dokument', meaningPt: 'documento', meaningEn: 'document' },
      { word: 'Instrument', meaningPt: 'instrumento', meaningEn: 'instrument' },
      { word: 'Element', meaningPt: 'elemento', meaningEn: 'element' },
    ],
  },
  {
    id: 'schaft',
    ending: '-schaft',
    article: 'die',
    descriptionPt: 'Uma coletividade ou condição — o nosso "-agem"/"-ção" coletivo.',
    descriptionEn: 'A collective or state of being — our "-ship"/"-hood".',
    descriptionDe: 'Ein Kollektiv oder ein Zustand.',
    examples: [
      { word: 'Freundschaft', meaningPt: 'amizade', meaningEn: 'friendship' },
      { word: 'Mannschaft', meaningPt: 'equipa', meaningEn: 'team' },
      { word: 'Gesellschaft', meaningPt: 'sociedade', meaningEn: 'society' },
    ],
  },
  {
    id: 'ei',
    ending: '-ei',
    article: 'die',
    descriptionPt: 'Muitas vezes um local onde se faz algo — a padaria, a lavandaria...',
    descriptionEn: 'Often a place where something is done — the bakery, the laundry...',
    descriptionDe: 'Oft ein Ort, an dem etwas gemacht wird.',
    examples: [
      { word: 'Bäckerei', meaningPt: 'padaria', meaningEn: 'bakery' },
      { word: 'Metzgerei', meaningPt: 'talho', meaningEn: 'butcher shop' },
    ],
  },
  {
    id: 'or',
    ending: '-or',
    article: 'der',
    descriptionPt: 'Máquinas e pessoas que fazem algo — ainda outro herdeiro do latim.',
    descriptionEn: 'Machines and people that do something — another Latin inheritance.',
    descriptionDe: 'Maschinen und Personen, die etwas tun.',
    examples: [
      { word: 'Motor', meaningPt: 'motor', meaningEn: 'engine' },
      { word: 'Doktor', meaningPt: 'doutor', meaningEn: 'doctor' },
    ],
  },
]

/** Gender predicted by MEANING/category rather than by spelling — a
 * different kind of shortcut, with its own small set of exceptions. */
export type GenderCategory = {
  id: string
  labelPt: string
  labelEn: string
  labelDe: string
  article: 'der' | 'die' | 'das'
  descriptionPt: string
  descriptionEn: string
  descriptionDe: string
  examples: { word: string; meaningPt: string; meaningEn: string }[]
}

export const genderCategories: GenderCategory[] = [
  {
    id: 'days-seasons',
    labelPt: 'Dias, meses, estações',
    labelEn: 'Days, months, seasons',
    labelDe: 'Tage, Monate, Jahreszeiten',
    article: 'der',
    descriptionPt: 'Quase sem exceção — só "die Nacht" foge à regra.',
    descriptionEn: 'Almost no exceptions — only "die Nacht" breaks the rule.',
    descriptionDe: 'Fast ohne Ausnahme — nur "die Nacht" bricht die Regel.',
    examples: [
      { word: 'Montag', meaningPt: 'segunda-feira', meaningEn: 'Monday' },
      { word: 'Sommer', meaningPt: 'verão', meaningEn: 'summer' },
      { word: 'Januar', meaningPt: 'janeiro', meaningEn: 'January' },
    ],
  },
  {
    id: 'compass',
    labelPt: 'Pontos cardeais',
    labelEn: 'Compass directions',
    labelDe: 'Himmelsrichtungen',
    article: 'der',
    descriptionPt: 'Norte, sul, este, oeste — todos masculinos, mesmo combinados.',
    descriptionEn: 'North, south, east, west — all masculine, even combined.',
    descriptionDe: 'Norden, Süden, Osten, Westen — alle maskulin, auch kombiniert.',
    examples: [
      { word: 'Norden', meaningPt: 'norte', meaningEn: 'north' },
      { word: 'Südwesten', meaningPt: 'sudoeste', meaningEn: 'southwest' },
    ],
  },
  {
    id: 'alcohol',
    labelPt: 'Bebidas alcoólicas',
    labelEn: 'Alcoholic drinks',
    labelDe: 'Alkoholische Getränke',
    article: 'der',
    descriptionPt: 'A grande exceção é "das Bier" — a bebida alemã mais famosa foge à própria regra.',
    descriptionEn: 'The big exception is "das Bier" — Germany\'s most famous drink breaks its own rule.',
    descriptionDe: 'Die große Ausnahme ist "das Bier".',
    examples: [
      { word: 'Wein', meaningPt: 'vinho', meaningEn: 'wine' },
      { word: 'Sekt', meaningPt: 'espumante', meaningEn: 'sparkling wine' },
    ],
  },
  {
    id: 'numbers',
    labelPt: 'Números substantivados',
    labelEn: 'Numbers used as nouns',
    labelDe: 'Substantivierte Zahlen',
    article: 'die',
    descriptionPt: 'Quando um número vira um substantivo (a nota, a cifra), é sempre feminino.',
    descriptionEn: 'When a number becomes a noun (the grade, the figure), it\'s always feminine.',
    descriptionDe: 'Wird eine Zahl zum Nomen, ist sie immer feminin.',
    examples: [
      { word: 'Million', meaningPt: 'o milhão', meaningEn: 'the million' },
      { word: 'Eins', meaningPt: 'o número um', meaningEn: 'the number one' },
    ],
  },
  {
    id: 'colors',
    labelPt: 'Cores substantivadas',
    labelEn: 'Colors used as nouns',
    labelDe: 'Substantivierte Farben',
    article: 'das',
    descriptionPt: 'Uma cor tratada como coisa em si — "o azul", "o vermelho" — é sempre neutra.',
    descriptionEn: 'A color treated as a thing in itself — "the blue", "the red" — is always neuter.',
    descriptionDe: 'Eine Farbe als Ding an sich ist immer sächlich.',
    examples: [
      { word: 'Blau', meaningPt: 'o azul', meaningEn: 'the blue' },
      { word: 'Rot', meaningPt: 'o vermelho', meaningEn: 'the red' },
    ],
  },
]
