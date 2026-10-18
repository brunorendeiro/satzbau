import type { Locale } from '../../i18n/common'

export type Situation = {
  id: string
  icon: string
  title: string
  goal: string
  phrases: { de: string; meaning: string }[]
  swissTip?: string
}

export type PronounMode = {
  id: 'du' | 'ihr' | 'sie'
  label: string
  use: string
  forms: { label: string; value: string }[]
  examples: { de: string; meaning: string }[]
  note: string
}

export type PracticeItem = {
  prompt: string
  answer: string
}

type UiStrings = {
  title: string
  intro: string
  situationsLabel: string
  swissTipLabel: string
  pronounsTitle: string
  pronounsIntro: string
  formsLabel: string
  examplesLabel: string
  capitalisationNote: string
  practiceTitle: string
  practiceIntro: string
  reveal: string
  hide: string
  situations: Situation[]
  pronouns: PronounMode[]
  practice: PracticeItem[]
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Alltag in der Schweiz',
    intro: 'Alemão A1 para situações que realmente aparecem na Suíça: apresentar-te, trabalhar, fazer compras, viajar, comer fora, ir ao médico e tratar de documentos.',
    situationsLabel: 'Escolhe uma situação',
    swissTipLabel: 'Na Suíça',
    pronounsTitle: 'Du, ihr ou Sie?',
    pronounsIntro: 'Escolhe com quem estás a falar. A app mostra imediatamente o pronome pessoal, o dativo e o possessivo corretos.',
    formsLabel: 'Formas essenciais',
    examplesLabel: 'Exemplos',
    capitalisationNote: 'Atenção: “Sie”, “Ihnen”, “Ihr” e “Ihre” escrevem-se com maiúscula quando são formais. “ihnen” com minúscula significa “a eles/elas”.',
    practiceTitle: 'Experimenta sem olhar',
    practiceIntro: 'Traduz mentalmente e só depois revela a resposta.',
    reveal: 'Mostrar resposta',
    hide: 'Esconder resposta',
    situations: [
      {
        id: 'vorstellen', icon: '🪪', title: 'Apresentar-te', goal: 'Dizer quem és e de onde vens.',
        phrases: [
          { de: 'Guten Tag, ich heiße Bruno.', meaning: 'Bom dia, chamo-me Bruno.' },
          { de: 'Ich komme aus Portugal.', meaning: 'Venho de Portugal.' },
          { de: 'Ich wohne in Münchenstein.', meaning: 'Moro em Münchenstein.' },
        ],
      },
      {
        id: 'arbeit', icon: '💼', title: 'Trabalho', goal: 'Começar num emprego e pedir ajuda.',
        phrases: [
          { de: 'Ich bin neu im Team.', meaning: 'Sou novo na equipa.' },
          { de: 'Könnten Sie das bitte wiederholen?', meaning: 'Poderia repetir, por favor?' },
          { de: 'Können Sie mir das zeigen?', meaning: 'Pode mostrar-me isso?' },
        ],
      },
      {
        id: 'einkaufen', icon: '🛒', title: 'Compras', goal: 'Encontrar produtos e pagar.',
        phrases: [
          { de: 'Wo finde ich das?', meaning: 'Onde encontro isso?' },
          { de: 'Ich hätte gern ein Kilo davon.', meaning: 'Queria um quilo disso.' },
          { de: 'Kann ich mit Karte bezahlen?', meaning: 'Posso pagar com cartão?' },
        ],
      },
      {
        id: 'unterwegs', icon: '🚆', title: 'Transportes', goal: 'Comprar bilhetes e encontrar a partida.',
        phrases: [
          { de: 'Ich brauche ein Billett nach Zürich.', meaning: 'Preciso de um bilhete para Zurique.' },
          { de: 'Wo fährt der Zug nach Basel ab?', meaning: 'De onde parte o comboio para Basileia?' },
          { de: 'Ist dieser Platz frei?', meaning: 'Este lugar está livre?' },
        ],
        swissTip: 'Na Suíça ouves “Billett”; na Alemanha é mais comum “Fahrkarte”.',
      },
      {
        id: 'restaurant', icon: '🍽️', title: 'Restaurante', goal: 'Pedir, receber uma recomendação e pagar.',
        phrases: [
          { de: 'Ich hätte gern die Speisekarte, bitte.', meaning: 'Queria o menu, por favor.' },
          { de: 'Was empfehlen Sie?', meaning: 'O que recomenda?' },
          { de: 'Zahlen, bitte.', meaning: 'A conta, por favor.' },
        ],
      },
      {
        id: 'gesundheit', icon: '🩺', title: 'Saúde', goal: 'Marcar uma consulta e explicar um problema.',
        phrases: [
          { de: 'Ich brauche einen Termin.', meaning: 'Preciso de uma consulta.' },
          { de: 'Ich habe seit gestern Schmerzen.', meaning: 'Tenho dores desde ontem.' },
          { de: 'Wo ist die nächste Apotheke?', meaning: 'Onde fica a farmácia mais próxima?' },
        ],
      },
      {
        id: 'gemeinde', icon: '🏛️', title: 'Município', goal: 'Fazer o registo e entregar documentos.',
        phrases: [
          { de: 'Ich möchte mich anmelden.', meaning: 'Quero fazer o meu registo.' },
          { de: 'Welche Unterlagen brauchen Sie?', meaning: 'De que documentos precisa?' },
          { de: 'Ich habe eine Aufenthaltsbewilligung.', meaning: 'Tenho uma autorização de residência.' },
        ],
        swissTip: '“Gemeinde” é o município/comuna onde tratas normalmente do registo de residência.',
      },
    ],
    pronouns: [
      {
        id: 'du', label: 'du', use: 'Uma pessoa, informal',
        forms: [{ label: 'Sujeito', value: 'du' }, { label: 'Acusativo', value: 'dich' }, { label: 'Dativo', value: 'dir' }, { label: 'Possessivo', value: 'dein / deine' }],
        examples: [{ de: 'Kann ich dir helfen?', meaning: 'Posso ajudar-te?' }, { de: 'Ist das dein Billett?', meaning: 'Esse é o teu bilhete?' }],
        note: 'Usa com amigos, família, crianças e pessoas que te tratam por “du”.',
      },
      {
        id: 'ihr', label: 'ihr', use: 'Várias pessoas, informal',
        forms: [{ label: 'Sujeito', value: 'ihr' }, { label: 'Acusativo', value: 'euch' }, { label: 'Dativo', value: 'euch' }, { label: 'Possessivo', value: 'euer / eure' }],
        examples: [{ de: 'Kann ich euch helfen?', meaning: 'Posso ajudar-vos?' }, { de: 'Ist das eure Wohnung?', meaning: 'Essa é a vossa casa?' }],
        note: '“euer” acompanha nomes masculinos/neutros; normalmente passa a “eure” com nomes femininos ou no plural.',
      },
      {
        id: 'sie', label: 'Sie', use: 'Uma ou várias pessoas, formal',
        forms: [{ label: 'Sujeito', value: 'Sie' }, { label: 'Acusativo', value: 'Sie' }, { label: 'Dativo', value: 'Ihnen' }, { label: 'Possessivo', value: 'Ihr / Ihre' }],
        examples: [{ de: 'Kann ich Ihnen helfen?', meaning: 'Posso ajudá-lo/a?' }, { de: 'Ist das Ihre Adresse?', meaning: 'Essa é a sua morada?' }],
        note: 'É a escolha segura com desconhecidos, clientes, autoridades e em situações profissionais.',
      },
    ],
    practice: [
      { prompt: '“Posso ajudá-lo?” — formal', answer: 'Kann ich Ihnen helfen?' },
      { prompt: '“Essa é a vossa casa?” — plural informal', answer: 'Ist das eure Wohnung?' },
      { prompt: '“Como está?” — formal', answer: 'Wie geht es Ihnen?' },
    ],
  },
  en: {
    title: 'Alltag in der Schweiz',
    intro: 'A1 German for situations you will actually face in Switzerland: introductions, work, shopping, transport, restaurants, health and official paperwork.',
    situationsLabel: 'Choose a situation',
    swissTipLabel: 'In Switzerland',
    pronounsTitle: 'Du, ihr or Sie?',
    pronounsIntro: 'Choose who you are speaking to. The app immediately shows the correct personal, dative and possessive forms.',
    formsLabel: 'Essential forms',
    examplesLabel: 'Examples',
    capitalisationNote: 'Remember: formal “Sie”, “Ihnen”, “Ihr” and “Ihre” are capitalised. Lowercase “ihnen” means “to them”.',
    practiceTitle: 'Try without looking',
    practiceIntro: 'Translate it in your head, then reveal the answer.',
    reveal: 'Show answer',
    hide: 'Hide answer',
    situations: [
      { id: 'vorstellen', icon: '🪪', title: 'Introductions', goal: 'Say who you are and where you come from.', phrases: [{ de: 'Guten Tag, ich heiße Bruno.', meaning: 'Hello, my name is Bruno.' }, { de: 'Ich komme aus Portugal.', meaning: 'I come from Portugal.' }, { de: 'Ich wohne in Münchenstein.', meaning: 'I live in Münchenstein.' }] },
      { id: 'arbeit', icon: '💼', title: 'Work', goal: 'Start a job and ask for help.', phrases: [{ de: 'Ich bin neu im Team.', meaning: 'I am new to the team.' }, { de: 'Könnten Sie das bitte wiederholen?', meaning: 'Could you repeat that, please?' }, { de: 'Können Sie mir das zeigen?', meaning: 'Can you show me that?' }] },
      { id: 'einkaufen', icon: '🛒', title: 'Shopping', goal: 'Find products and pay.', phrases: [{ de: 'Wo finde ich das?', meaning: 'Where can I find that?' }, { de: 'Ich hätte gern ein Kilo davon.', meaning: 'I would like a kilo of that.' }, { de: 'Kann ich mit Karte bezahlen?', meaning: 'Can I pay by card?' }] },
      { id: 'unterwegs', icon: '🚆', title: 'Transport', goal: 'Buy tickets and find your departure.', phrases: [{ de: 'Ich brauche ein Billett nach Zürich.', meaning: 'I need a ticket to Zurich.' }, { de: 'Wo fährt der Zug nach Basel ab?', meaning: 'Where does the train to Basel leave from?' }, { de: 'Ist dieser Platz frei?', meaning: 'Is this seat free?' }], swissTip: 'In Switzerland you will hear “Billett”; “Fahrkarte” is more common in Germany.' },
      { id: 'restaurant', icon: '🍽️', title: 'Restaurant', goal: 'Order, ask for a recommendation and pay.', phrases: [{ de: 'Ich hätte gern die Speisekarte, bitte.', meaning: 'I would like the menu, please.' }, { de: 'Was empfehlen Sie?', meaning: 'What do you recommend?' }, { de: 'Zahlen, bitte.', meaning: 'The bill, please.' }] },
      { id: 'gesundheit', icon: '🩺', title: 'Health', goal: 'Book an appointment and explain a problem.', phrases: [{ de: 'Ich brauche einen Termin.', meaning: 'I need an appointment.' }, { de: 'Ich habe seit gestern Schmerzen.', meaning: 'I have been in pain since yesterday.' }, { de: 'Wo ist die nächste Apotheke?', meaning: 'Where is the nearest pharmacy?' }] },
      { id: 'gemeinde', icon: '🏛️', title: 'Municipality', goal: 'Register and submit documents.', phrases: [{ de: 'Ich möchte mich anmelden.', meaning: 'I would like to register.' }, { de: 'Welche Unterlagen brauchen Sie?', meaning: 'Which documents do you need?' }, { de: 'Ich habe eine Aufenthaltsbewilligung.', meaning: 'I have a residence permit.' }], swissTip: 'The “Gemeinde” is your municipality/commune and usually handles resident registration.' },
    ],
    pronouns: [
      { id: 'du', label: 'du', use: 'One person, informal', forms: [{ label: 'Subject', value: 'du' }, { label: 'Accusative', value: 'dich' }, { label: 'Dative', value: 'dir' }, { label: 'Possessive', value: 'dein / deine' }], examples: [{ de: 'Kann ich dir helfen?', meaning: 'Can I help you?' }, { de: 'Ist das dein Billett?', meaning: 'Is that your ticket?' }], note: 'Use it with friends, family, children and people who address you as “du”.' },
      { id: 'ihr', label: 'ihr', use: 'Several people, informal', forms: [{ label: 'Subject', value: 'ihr' }, { label: 'Accusative', value: 'euch' }, { label: 'Dative', value: 'euch' }, { label: 'Possessive', value: 'euer / eure' }], examples: [{ de: 'Kann ich euch helfen?', meaning: 'Can I help you all?' }, { de: 'Ist das eure Wohnung?', meaning: 'Is that your apartment?' }], note: '“euer” goes with masculine/neuter nouns; it usually becomes “eure” with feminine or plural nouns.' },
      { id: 'sie', label: 'Sie', use: 'One or several people, formal', forms: [{ label: 'Subject', value: 'Sie' }, { label: 'Accusative', value: 'Sie' }, { label: 'Dative', value: 'Ihnen' }, { label: 'Possessive', value: 'Ihr / Ihre' }], examples: [{ de: 'Kann ich Ihnen helfen?', meaning: 'Can I help you?' }, { de: 'Ist das Ihre Adresse?', meaning: 'Is that your address?' }], note: 'The safe choice with strangers, customers, authorities and in professional situations.' },
    ],
    practice: [{ prompt: '“Can I help you?” — formal', answer: 'Kann ich Ihnen helfen?' }, { prompt: '“Is that your apartment?” — plural informal', answer: 'Ist das eure Wohnung?' }, { prompt: '“How are you?” — formal', answer: 'Wie geht es Ihnen?' }],
  },
  de: {
    title: 'Alltag in der Schweiz',
    intro: 'A1-Deutsch für echte Situationen in der Schweiz: sich vorstellen, arbeiten, einkaufen, unterwegs sein, essen gehen, Gesundheit und Behördengänge.',
    situationsLabel: 'Wähle eine Situation',
    swissTipLabel: 'In der Schweiz',
    pronounsTitle: 'Du, ihr oder Sie?',
    pronounsIntro: 'Wähle, mit wem du sprichst. Die passenden Personal-, Dativ- und Possessivformen erscheinen sofort.',
    formsLabel: 'Wichtige Formen',
    examplesLabel: 'Beispiele',
    capitalisationNote: 'Achtung: Das formelle „Sie“, „Ihnen“, „Ihr“ und „Ihre“ schreibt man groß. „ihnen“ mit kleinem i bedeutet „ihnen / den anderen Personen“.',
    practiceTitle: 'Versuche es ohne hinzusehen',
    practiceIntro: 'Formuliere den Satz zuerst selbst und decke dann die Antwort auf.',
    reveal: 'Antwort zeigen',
    hide: 'Antwort ausblenden',
    situations: [
      { id: 'vorstellen', icon: '🪪', title: 'Sich vorstellen', goal: 'Sagen, wer du bist und woher du kommst.', phrases: [{ de: 'Guten Tag, ich heiße Bruno.', meaning: 'Eine höfliche Vorstellung.' }, { de: 'Ich komme aus Portugal.', meaning: 'Du nennst dein Herkunftsland.' }, { de: 'Ich wohne in Münchenstein.', meaning: 'Du nennst deinen Wohnort.' }] },
      { id: 'arbeit', icon: '💼', title: 'Arbeit', goal: 'Neu anfangen und um Hilfe bitten.', phrases: [{ de: 'Ich bin neu im Team.', meaning: 'Du stellst dich im Team vor.' }, { de: 'Könnten Sie das bitte wiederholen?', meaning: 'Du bittest höflich um Wiederholung.' }, { de: 'Können Sie mir das zeigen?', meaning: 'Du bittest um eine Erklärung.' }] },
      { id: 'einkaufen', icon: '🛒', title: 'Einkaufen', goal: 'Produkte finden und bezahlen.', phrases: [{ de: 'Wo finde ich das?', meaning: 'Du fragst nach einem Produkt.' }, { de: 'Ich hätte gern ein Kilo davon.', meaning: 'Du bestellst eine Menge.' }, { de: 'Kann ich mit Karte bezahlen?', meaning: 'Du fragst nach Kartenzahlung.' }] },
      { id: 'unterwegs', icon: '🚆', title: 'Unterwegs', goal: 'Billette kaufen und die Abfahrt finden.', phrases: [{ de: 'Ich brauche ein Billett nach Zürich.', meaning: 'Du kaufst ein Billett.' }, { de: 'Wo fährt der Zug nach Basel ab?', meaning: 'Du suchst das richtige Gleis.' }, { de: 'Ist dieser Platz frei?', meaning: 'Du fragst nach einem Sitzplatz.' }], swissTip: 'In der Schweiz sagt man oft „Billett“; in Deutschland hört man häufiger „Fahrkarte“.' },
      { id: 'restaurant', icon: '🍽️', title: 'Restaurant', goal: 'Bestellen, nach einer Empfehlung fragen und zahlen.', phrases: [{ de: 'Ich hätte gern die Speisekarte, bitte.', meaning: 'Du bittest um die Speisekarte.' }, { de: 'Was empfehlen Sie?', meaning: 'Du fragst höflich nach einer Empfehlung.' }, { de: 'Zahlen, bitte.', meaning: 'Du möchtest bezahlen.' }] },
      { id: 'gesundheit', icon: '🩺', title: 'Gesundheit', goal: 'Einen Termin vereinbaren und Beschwerden erklären.', phrases: [{ de: 'Ich brauche einen Termin.', meaning: 'Du möchtest einen Termin vereinbaren.' }, { de: 'Ich habe seit gestern Schmerzen.', meaning: 'Du beschreibst seit wann du Schmerzen hast.' }, { de: 'Wo ist die nächste Apotheke?', meaning: 'Du suchst eine Apotheke.' }] },
      { id: 'gemeinde', icon: '🏛️', title: 'Gemeinde', goal: 'Sich anmelden und Unterlagen einreichen.', phrases: [{ de: 'Ich möchte mich anmelden.', meaning: 'Du meldest deinen Wohnsitz an.' }, { de: 'Welche Unterlagen brauchen Sie?', meaning: 'Du fragst nach den nötigen Dokumenten.' }, { de: 'Ich habe eine Aufenthaltsbewilligung.', meaning: 'Du nennst deine Bewilligung.' }], swissTip: 'Die Gemeinde ist normalerweise für die Anmeldung deines Wohnsitzes zuständig.' },
    ],
    pronouns: [
      { id: 'du', label: 'du', use: 'Eine Person, informell', forms: [{ label: 'Subjekt', value: 'du' }, { label: 'Akkusativ', value: 'dich' }, { label: 'Dativ', value: 'dir' }, { label: 'Possessiv', value: 'dein / deine' }], examples: [{ de: 'Kann ich dir helfen?', meaning: 'Informell zu einer Person.' }, { de: 'Ist das dein Billett?', meaning: 'Besitz, informell und Singular.' }], note: 'Für Freunde, Familie, Kinder und Menschen, die dich duzen.' },
      { id: 'ihr', label: 'ihr', use: 'Mehrere Personen, informell', forms: [{ label: 'Subjekt', value: 'ihr' }, { label: 'Akkusativ', value: 'euch' }, { label: 'Dativ', value: 'euch' }, { label: 'Possessiv', value: 'euer / eure' }], examples: [{ de: 'Kann ich euch helfen?', meaning: 'Informell zu mehreren Personen.' }, { de: 'Ist das eure Wohnung?', meaning: 'Besitz, informell und Plural.' }], note: '„euer“ steht bei maskulinen/neutralen Nomen; bei femininen oder Pluralformen meist „eure“.' },
      { id: 'sie', label: 'Sie', use: 'Eine oder mehrere Personen, formell', forms: [{ label: 'Subjekt', value: 'Sie' }, { label: 'Akkusativ', value: 'Sie' }, { label: 'Dativ', value: 'Ihnen' }, { label: 'Possessiv', value: 'Ihr / Ihre' }], examples: [{ de: 'Kann ich Ihnen helfen?', meaning: 'Formelle Anrede im Dativ.' }, { de: 'Ist das Ihre Adresse?', meaning: 'Formeller Besitz.' }], note: 'Die sichere Wahl bei Fremden, Kundschaft, Behörden und im Beruf.' },
    ],
    practice: [{ prompt: 'Formell fragen, ob du helfen kannst.', answer: 'Kann ich Ihnen helfen?' }, { prompt: 'Mehrere Freunde nach ihrer Wohnung fragen.', answer: 'Ist das eure Wohnung?' }, { prompt: 'Formell fragen, wie es jemandem geht.', answer: 'Wie geht es Ihnen?' }],
  },
}
