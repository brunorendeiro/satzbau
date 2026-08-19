export type WordPiece = { de: string; pt: string; en: string }

export type CompoundWord = {
  id: string
  part1: WordPiece
  part2: WordPiece
  compound: WordPiece
  /** Word-for-word gloss of the two parts, e.g. "a casa do doente" —
   * the literal image, before the real-world meaning clicks into place. */
  literalPt: string
  literalEn: string
}

export const compoundWords: CompoundWord[] = [
  {
    id: 'krankenhaus',
    part1: { de: 'krank', pt: 'doente', en: 'sick' },
    part2: { de: 'Haus', pt: 'casa', en: 'house' },
    compound: { de: 'Krankenhaus', pt: 'hospital', en: 'hospital' },
    literalPt: 'a casa do doente',
    literalEn: "the sick person's house",
  },
  {
    id: 'krankenwagen',
    part1: { de: 'krank', pt: 'doente', en: 'sick' },
    part2: { de: 'Wagen', pt: 'carro', en: 'car' },
    compound: { de: 'Krankenwagen', pt: 'ambulância', en: 'ambulance' },
    literalPt: 'o carro do doente',
    literalEn: "the sick person's car",
  },
  {
    id: 'flugzeug',
    part1: { de: 'Flug', pt: 'voo', en: 'flight' },
    part2: { de: 'Zeug', pt: 'coisa', en: 'thing' },
    compound: { de: 'Flugzeug', pt: 'avião', en: 'airplane' },
    literalPt: 'coisa de voar',
    literalEn: 'thing for flying',
  },
  {
    id: 'feuerzeug',
    part1: { de: 'Feuer', pt: 'fogo', en: 'fire' },
    part2: { de: 'Zeug', pt: 'coisa', en: 'thing' },
    compound: { de: 'Feuerzeug', pt: 'isqueiro', en: 'lighter' },
    literalPt: 'coisa de fogo',
    literalEn: 'thing for fire',
  },
  {
    id: 'volkswagen',
    part1: { de: 'Volk', pt: 'povo', en: 'people' },
    part2: { de: 'Wagen', pt: 'carro', en: 'car' },
    compound: { de: 'Volkswagen', pt: 'carro do povo', en: "people's car" },
    literalPt: 'o carro do povo',
    literalEn: "the people's car",
  },
  {
    id: 'kindergarten',
    part1: { de: 'Kinder', pt: 'crianças', en: 'children' },
    part2: { de: 'Garten', pt: 'jardim', en: 'garden' },
    compound: { de: 'Kindergarten', pt: 'infantário', en: 'kindergarten' },
    literalPt: 'jardim de crianças',
    literalEn: 'garden of children',
  },
  {
    id: 'biergarten',
    part1: { de: 'Bier', pt: 'cerveja', en: 'beer' },
    part2: { de: 'Garten', pt: 'jardim', en: 'garden' },
    compound: { de: 'Biergarten', pt: 'jardim de cerveja', en: 'beer garden' },
    literalPt: 'jardim de cerveja',
    literalEn: 'beer garden',
  },
  {
    id: 'ampelmann',
    part1: { de: 'Ampel', pt: 'semáforo', en: 'traffic light' },
    part2: { de: 'Mann', pt: 'homem', en: 'man' },
    compound: { de: 'Ampelmann', pt: 'homem do semáforo', en: 'traffic light man' },
    literalPt: 'o homem do semáforo',
    literalEn: 'the traffic light man',
  },
]
