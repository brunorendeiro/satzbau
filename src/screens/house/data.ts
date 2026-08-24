export type RoomItem = { id: string; de: string; pt: string; en: string }

export type Room = {
  id: string
  labelPt: string
  labelEn: string
  labelDe: string
  /** Grid position within the floor plan — a simple 3-column, 2-row layout. */
  gridArea: string
  items: RoomItem[]
}

export const rooms: Room[] = [
  {
    id: 'wohnzimmer',
    labelPt: 'Sala de estar',
    labelEn: 'Living room',
    labelDe: 'Wohnzimmer',
    gridArea: 'wohnzimmer',
    items: [
      { id: 'sofa', de: 'das Sofa', pt: 'o sofá', en: 'the sofa' },
      { id: 'fernseher', de: 'der Fernseher', pt: 'a televisão', en: 'the TV' },
      { id: 'teppich', de: 'der Teppich', pt: 'o tapete', en: 'the rug' },
      { id: 'regal', de: 'das Regal', pt: 'a estante', en: 'the shelf' },
      { id: 'lampe', de: 'die Lampe', pt: 'o candeeiro', en: 'the lamp' },
    ],
  },
  {
    id: 'kueche',
    labelPt: 'Cozinha',
    labelEn: 'Kitchen',
    labelDe: 'Küche',
    gridArea: 'kueche',
    items: [
      { id: 'kuehlschrank', de: 'der Kühlschrank', pt: 'o frigorífico', en: 'the fridge' },
      { id: 'herd', de: 'der Herd', pt: 'o fogão', en: 'the stove' },
      { id: 'spuele', de: 'die Spüle', pt: 'a pia', en: 'the sink' },
      { id: 'topf', de: 'der Topf', pt: 'a panela', en: 'the pot' },
      { id: 'pfanne', de: 'die Pfanne', pt: 'a frigideira', en: 'the pan' },
    ],
  },
  {
    id: 'esszimmer',
    labelPt: 'Sala de jantar',
    labelEn: 'Dining room',
    labelDe: 'Esszimmer',
    gridArea: 'esszimmer',
    items: [
      { id: 'tisch', de: 'der Tisch', pt: 'a mesa', en: 'the table' },
      { id: 'stuhl', de: 'der Stuhl', pt: 'a cadeira', en: 'the chair' },
      { id: 'geschirr', de: 'das Geschirr', pt: 'a louça', en: 'the dishes' },
      { id: 'serviette', de: 'die Serviette', pt: 'o guardanapo', en: 'the napkin' },
      { id: 'tischtuch', de: 'das Tischtuch', pt: 'a toalha de mesa', en: 'the tablecloth' },
    ],
  },
  {
    id: 'schlafzimmer',
    labelPt: 'Quarto',
    labelEn: 'Bedroom',
    labelDe: 'Schlafzimmer',
    gridArea: 'schlafzimmer',
    items: [
      { id: 'bett', de: 'das Bett', pt: 'a cama', en: 'the bed' },
      { id: 'schrank', de: 'der Schrank', pt: 'o armário', en: 'the wardrobe' },
      { id: 'kissen', de: 'das Kissen', pt: 'a almofada', en: 'the pillow' },
      { id: 'decke', de: 'die Decke', pt: 'o cobertor (também: teto!)', en: 'the blanket (also: ceiling!)' },
      { id: 'wecker', de: 'der Wecker', pt: 'o despertador', en: 'the alarm clock' },
    ],
  },
  {
    id: 'badezimmer',
    labelPt: 'Casa de banho',
    labelEn: 'Bathroom',
    labelDe: 'Badezimmer',
    gridArea: 'badezimmer',
    items: [
      { id: 'dusche', de: 'die Dusche', pt: 'o duche', en: 'the shower' },
      { id: 'badewanne', de: 'die Badewanne', pt: 'a banheira', en: 'the bathtub' },
      { id: 'waschbecken', de: 'das Waschbecken', pt: 'o lavatório', en: 'the sink' },
      { id: 'handtuch', de: 'das Handtuch', pt: 'a toalha', en: 'the towel' },
      { id: 'toilette', de: 'die Toilette', pt: 'a sanita', en: 'the toilet' },
    ],
  },
  {
    id: 'flur',
    labelPt: 'Corredor / entrada',
    labelEn: 'Hallway / entrance',
    labelDe: 'Flur',
    gridArea: 'flur',
    items: [
      { id: 'garderobe', de: 'die Garderobe', pt: 'o cabide', en: 'the coat rack' },
      { id: 'schluessel', de: 'der Schlüssel', pt: 'a chave', en: 'the key' },
      { id: 'schirm', de: 'der Schirm', pt: 'o guarda-chuva', en: 'the umbrella' },
      { id: 'spiegel', de: 'der Spiegel', pt: 'o espelho', en: 'the mirror' },
      { id: 'schuhe', de: 'die Schuhe', pt: 'os sapatos', en: 'the shoes' },
    ],
  },
]
