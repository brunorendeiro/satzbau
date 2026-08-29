export type CheatPhrase = { id: string; de: string; pt: string; en: string }

export type CheatCategory = {
  id: string
  titleDe: string
  titlePt: string
  titleEn: string
  phrases: CheatPhrase[]
}

export const cheatCategories: CheatCategory[] = [
  {
    id: 'alltag',
    titleDe: 'Alltag',
    titlePt: 'Dia a dia',
    titleEn: 'Everyday',
    phrases: [
      { id: 'help-me', de: 'Können Sie mir helfen?', pt: 'Pode ajudar-me?', en: 'Can you help me?' },
      { id: 'dont-understand', de: 'Ich verstehe nicht.', pt: 'Não percebo.', en: "I don't understand." },
      { id: 'repeat', de: 'Können Sie das bitte wiederholen?', pt: 'Pode repetir, por favor?', en: 'Can you repeat that, please?' },
      { id: 'english', de: 'Sprechen Sie Englisch?', pt: 'Fala inglês?', en: 'Do you speak English?' },
      { id: 'sorry-what', de: 'Wie bitte?', pt: 'Como disse?', en: 'Sorry, what?' },
      { id: 'slower', de: 'Langsamer, bitte.', pt: 'Mais devagar, por favor.', en: 'Slower, please.' },
    ],
  },
  {
    id: 'arzt',
    titleDe: 'Beim Arzt',
    titlePt: 'No médico',
    titleEn: 'At the doctor',
    phrases: [
      { id: 'pain-here', de: 'Ich habe Schmerzen hier.', pt: 'Tenho dores aqui.', en: 'I have pain here.' },
      { id: 'not-well', de: 'Ich fühle mich nicht gut.', pt: 'Não me sinto bem.', en: "I don't feel well." },
      { id: 'allergic', de: 'Ich bin allergisch gegen...', pt: 'Sou alérgico a...', en: "I'm allergic to..." },
      { id: 'prescription', de: 'Ich brauche ein Rezept.', pt: 'Preciso de uma receita.', en: 'I need a prescription.' },
      { id: 'appointment-free', de: 'Haben Sie einen Termin frei?', pt: 'Tem alguma consulta disponível?', en: 'Do you have an appointment available?' },
      { id: 'insurance-card', de: 'Ich habe eine Versicherungskarte.', pt: 'Tenho o cartão do seguro de saúde.', en: 'I have an insurance card.' },
    ],
  },
  {
    id: 'behoerden',
    titleDe: 'Bei Behörden',
    titlePt: 'Na burocracia',
    titleEn: 'At government offices',
    phrases: [
      { id: 'register', de: 'Ich möchte mich anmelden.', pt: 'Queria fazer o registo de morada.', en: "I'd like to register my address." },
      { id: 'rental-contract', de: 'Haben Sie den Mietvertrag dabei?', pt: 'Tem o contrato de arrendamento consigo?', en: 'Do you have the rental contract with you?' },
      { id: 'need-appointment', de: 'Ich brauche einen Termin.', pt: 'Preciso de uma marcação.', en: 'I need an appointment.' },
      { id: 'find-form', de: 'Wo finde ich das Formular?', pt: 'Onde encontro o formulário?', en: 'Where do I find the form?' },
      { id: 'confirmation', de: 'Die Anmeldebestätigung, bitte.', pt: 'O comprovativo de registo, por favor.', en: 'The registration confirmation, please.' },
      { id: 'tax-id', de: 'Ich brauche eine Steuernummer.', pt: 'Preciso de um número de contribuinte.', en: 'I need a tax ID number.' },
    ],
  },
  {
    id: 'telefon',
    titleDe: 'Am Telefon',
    titlePt: 'Ao telefone',
    titleEn: 'On the phone',
    phrases: [
      { id: 'calling-about', de: 'Ich rufe wegen... an.', pt: 'Estou a ligar por causa de...', en: "I'm calling about..." },
      { id: 'call-back', de: 'Können Sie mich zurückrufen?', pt: 'Pode ligar-me de volta?', en: 'Can you call me back?' },
      { id: 'account-question', de: 'Ich habe eine Frage zu meinem Konto.', pt: 'Tenho uma pergunta sobre a minha conta.', en: 'I have a question about my account.' },
      { id: 'one-moment', de: 'Einen Moment, bitte.', pt: 'Um momento, por favor.', en: 'One moment, please.' },
      { id: 'spell-that', de: 'Können Sie das bitte buchstabieren?', pt: 'Pode soletrar isso, por favor?', en: 'Can you spell that, please?' },
    ],
  },
]
