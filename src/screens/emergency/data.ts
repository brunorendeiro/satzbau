export type EmergencyNumber = {
  id: string
  number: string
  country: string
  labelDe: string
  labelPt: string
  labelEn: string
}

export const emergencyNumbers: EmergencyNumber[] = [
  { id: 'eu112', number: '112', country: 'DE · AT · CH', labelDe: 'Europaweiter Notruf', labelPt: 'Número de emergência europeu', labelEn: 'Europe-wide emergency number' },
  { id: 'police-de', number: '110', country: 'DE · AT', labelDe: 'Polizei', labelPt: 'Polícia', labelEn: 'Police' },
  { id: 'police-ch', number: '117', country: 'CH', labelDe: 'Polizei', labelPt: 'Polícia', labelEn: 'Police' },
  { id: 'fire-ch', number: '118', country: 'CH', labelDe: 'Feuerwehr', labelPt: 'Bombeiros', labelEn: 'Fire brigade' },
  { id: 'ambulance-ch', number: '144', country: 'CH', labelDe: 'Rettungsdienst', labelPt: 'Ambulância', labelEn: 'Ambulance' },
]

export type Phrase = { id: string; de: string; pt: string; en: string }

export type PhraseGroup = {
  id: string
  titleDe: string
  titlePt: string
  titleEn: string
  phrases: Phrase[]
}

export const phraseGroups: PhraseGroup[] = [
  {
    id: 'general',
    titleDe: 'Allgemein',
    titlePt: 'Geral',
    titleEn: 'General',
    phrases: [
      { id: 'help', de: 'Hilfe!', pt: 'Ajuda!', en: 'Help!' },
      { id: 'emergency', de: 'Notfall!', pt: 'Emergência!', en: 'Emergency!' },
      { id: 'need-help', de: 'Ich brauche Hilfe.', pt: 'Preciso de ajuda.', en: 'I need help.' },
      { id: 'can-you-help', de: 'Können Sie mir helfen?', pt: 'Pode ajudar-me?', en: 'Can you help me?' },
      { id: 'call-emergency', de: 'Rufen Sie bitte den Notruf!', pt: 'Ligue para as urgências, por favor!', en: 'Please call emergency services!' },
      { id: 'urgent', de: 'Es ist dringend!', pt: 'É urgente!', en: "It's urgent!" },
      { id: 'no-german', de: 'Ich spreche kein gutes Deutsch.', pt: 'Não falo bem alemão.', en: "I don't speak German well." },
    ],
  },
  {
    id: 'fire',
    titleDe: 'Feuerwehr',
    titlePt: 'Bombeiros',
    titleEn: 'Fire brigade',
    phrases: [
      { id: 'its-burning', de: 'Es brennt!', pt: 'Está a arder!', en: "It's on fire!" },
      { id: 'fire', de: 'Feuer!', pt: 'Fogo!', en: 'Fire!' },
      { id: 'call-fire', de: 'Rufen Sie die Feuerwehr!', pt: 'Chame os bombeiros!', en: 'Call the fire brigade!' },
      { id: 'leave-building', de: 'Wir müssen das Gebäude verlassen.', pt: 'Temos de sair do edifício.', en: 'We need to leave the building.' },
      { id: 'smell-smoke', de: 'Ich rieche Rauch.', pt: 'Estou a sentir cheiro a fumo.', en: 'I smell smoke.' },
      { id: 'someone-inside', de: 'Jemand ist noch drinnen!', pt: 'Ainda está alguém lá dentro!', en: 'Someone is still inside!' },
    ],
  },
  {
    id: 'police',
    titleDe: 'Polizei',
    titlePt: 'Polícia',
    titleEn: 'Police',
    phrases: [
      { id: 'call-police', de: 'Rufen Sie die Polizei!', pt: 'Chame a polícia!', en: 'Call the police!' },
      { id: 'robbed', de: 'Ich wurde bestohlen.', pt: 'Fui roubado.', en: "I've been robbed." },
      { id: 'saw-accident', de: 'Ich habe einen Unfall gesehen.', pt: 'Vi um acidente.', en: 'I saw an accident.' },
      { id: 'stolen', de: 'Mein Pass wurde gestohlen.', pt: 'O meu passaporte foi roubado.', en: 'My passport was stolen.' },
      { id: 'attacked', de: 'Man hat mich angegriffen.', pt: 'Fui atacado/a.', en: 'I was attacked.' },
      { id: 'report', de: 'Ich möchte das melden.', pt: 'Quero denunciar isto.', en: 'I want to report this.' },
    ],
  },
  {
    id: 'medical',
    titleDe: 'Arzt & Krankenwagen',
    titlePt: 'Médico e ambulância',
    titleEn: 'Doctor & ambulance',
    phrases: [
      { id: 'need-doctor', de: 'Ich brauche einen Arzt.', pt: 'Preciso de um médico.', en: 'I need a doctor.' },
      { id: 'call-ambulance', de: 'Rufen Sie einen Krankenwagen!', pt: 'Chame uma ambulância!', en: 'Call an ambulance!' },
      { id: 'unconscious', de: 'Er/Sie ist bewusstlos.', pt: 'Ele/Ela está inconsciente.', en: 'He/She is unconscious.' },
      { id: 'strong-pain', de: 'Ich habe starke Schmerzen.', pt: 'Tenho dores fortes.', en: "I'm in a lot of pain." },
      { id: 'allergic', de: 'Ich bin allergisch gegen...', pt: 'Sou alérgico a...', en: "I'm allergic to..." },
      { id: 'bleeding', de: 'Ich blute stark.', pt: 'Estou a sangrar muito.', en: "I'm bleeding heavily." },
      { id: 'cant-breathe', de: 'Ich kann nicht atmen.', pt: 'Não consigo respirar.', en: "I can't breathe." },
    ],
  },
]
