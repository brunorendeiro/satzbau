export type DialogueLine = { speaker: 'a' | 'b'; de: string; pt: string; en: string }
export type Phrase = { de: string; pt: string; en: string }
export type ComprehensionQuestion = { de: string; pt: string; en: string; choices: string[]; correctIndex: number }

export type Scene = {
  id: string
  titleDe: string
  titlePt: string
  titleEn: string
  speakerA: string
  speakerB: string
  lines: DialogueLine[]
  keyPhrases: Phrase[]
  question: ComprehensionQuestion
}

export const scenes: Scene[] = [
  {
    id: 'baeckerei',
    titleDe: 'Bäckerei',
    titlePt: 'Padaria',
    titleEn: 'Bakery',
    speakerA: 'Verkäufer',
    speakerB: 'Kunde',
    lines: [
      { speaker: 'a', de: 'Guten Tag! Was darf es sein?', pt: 'Bom dia! O que vai ser?', en: 'Good day! What can I get you?' },
      { speaker: 'b', de: 'Guten Tag! Ich hätte gern zwei Brötchen.', pt: 'Bom dia! Queria dois pãezinhos.', en: "Hello! I'd like two bread rolls." },
      { speaker: 'a', de: 'Gerne. Sonst noch etwas?', pt: 'Com certeza. Mais alguma coisa?', en: 'Sure. Anything else?' },
      { speaker: 'b', de: 'Ja, ein Vollkornbrot, bitte.', pt: 'Sim, um pão integral, por favor.', en: 'Yes, a wholegrain bread, please.' },
      { speaker: 'a', de: 'Das macht zusammen fünf Euro fünfzig.', pt: 'Isso dá cinco euros e cinquenta ao todo.', en: "That's five euros fifty altogether." },
      { speaker: 'b', de: 'Hier, bitte. Einen schönen Tag noch!', pt: 'Aqui está. Tenha um bom dia!', en: 'Here you go. Have a nice day!' },
      { speaker: 'a', de: 'Danke, ebenfalls!', pt: 'Obrigado, igualmente!', en: 'Thanks, you too!' },
    ],
    keyPhrases: [
      { de: 'Ich hätte gern...', pt: 'Eu queria...', en: 'I would like...' },
      { de: 'Was darf es sein?', pt: 'O que vai ser?', en: 'What can I get you?' },
      { de: 'Sonst noch etwas?', pt: 'Mais alguma coisa?', en: 'Anything else?' },
      { de: 'Das macht ... Euro.', pt: 'Isso dá ... euros.', en: 'That comes to ... euros.' },
      { de: 'das Brötchen / das Brot', pt: 'o pãozinho / o pão', en: 'the bread roll / the bread' },
    ],
    question: {
      de: 'Was kauft der Kunde?',
      pt: 'O que compra o cliente?',
      en: 'What does the customer buy?',
      choices: ['Brötchen und ein Vollkornbrot', 'Nur Kuchen', 'Einen Kaffee', 'Zwei Kuchen'],
      correctIndex: 0,
    },
  },
  {
    id: 'friseur',
    titleDe: 'Friseur',
    titlePt: 'Cabeleireiro',
    titleEn: 'Hairdresser',
    speakerA: 'Friseurin',
    speakerB: 'Kundin',
    lines: [
      { speaker: 'a', de: 'Hallo! Was möchten Sie heute?', pt: 'Olá! O que deseja hoje?', en: 'Hi! What would you like today?' },
      { speaker: 'b', de: 'Ich möchte einen Haarschnitt, bitte.', pt: 'Queria cortar o cabelo, por favor.', en: "I'd like a haircut, please." },
      { speaker: 'a', de: 'Wie kurz soll es sein?', pt: 'Quão curto deve ficar?', en: 'How short should it be?' },
      { speaker: 'b', de: 'Nur die Spitzen, bitte.', pt: 'Só as pontas, por favor.', en: 'Just the tips, please.' },
      { speaker: 'a', de: 'Möchten Sie auch eine neue Farbe?', pt: 'Também quer uma cor nova?', en: 'Would you also like a new color?' },
      { speaker: 'b', de: 'Nein danke, nur schneiden.', pt: 'Não, obrigada, só cortar.', en: 'No thanks, just a cut.' },
      { speaker: 'a', de: 'Alles klar, setzen Sie sich bitte.', pt: 'Perfeito, sente-se, por favor.', en: 'Alright, please sit down.' },
    ],
    keyPhrases: [
      { de: 'Ich möchte einen Haarschnitt.', pt: 'Queria cortar o cabelo.', en: "I'd like a haircut." },
      { de: 'Nur die Spitzen.', pt: 'Só as pontas.', en: 'Just the tips.' },
      { de: 'Wie kurz soll es sein?', pt: 'Quão curto deve ficar?', en: 'How short should it be?' },
      { de: 'Setzen Sie sich bitte.', pt: 'Sente-se, por favor.', en: 'Please sit down.' },
      { de: 'eine neue Farbe', pt: 'uma cor nova', en: 'a new color' },
    ],
    question: {
      de: 'Was möchte die Kundin?',
      pt: 'O que quer a cliente?',
      en: 'What does the customer want?',
      choices: ['Nur die Spitzen schneiden', 'Eine neue Farbe', 'Lange Haare', 'Eine Dauerwelle'],
      correctIndex: 0,
    },
  },
  {
    id: 'supermarkt',
    titleDe: 'Supermarkt',
    titlePt: 'Supermercado',
    titleEn: 'Supermarket',
    speakerA: 'Kassiererin',
    speakerB: 'Kunde',
    lines: [
      { speaker: 'a', de: 'Guten Tag, haben Sie eine Kundenkarte?', pt: 'Bom dia, tem cartão de cliente?', en: 'Hello, do you have a loyalty card?' },
      { speaker: 'b', de: 'Nein, ich habe keine.', pt: 'Não, não tenho.', en: "No, I don't have one." },
      { speaker: 'a', de: 'Kein Problem. Das macht zwölf Euro dreißig.', pt: 'Sem problema. Isso dá doze euros e trinta.', en: "No problem. That's twelve euros thirty." },
      { speaker: 'b', de: 'Kann ich mit Karte zahlen?', pt: 'Posso pagar com cartão?', en: 'Can I pay by card?' },
      { speaker: 'a', de: 'Ja, natürlich.', pt: 'Sim, claro.', en: 'Yes, of course.' },
      { speaker: 'b', de: 'Brauche ich eine Tüte?', pt: 'Preciso de um saco?', en: 'Do I need a bag?' },
      { speaker: 'a', de: 'Die kostet zwanzig Cent extra.', pt: 'Esse custa mais vinte cêntimos.', en: 'That costs 20 cents extra.' },
      { speaker: 'b', de: 'Gut, eine Tüte bitte.', pt: 'Está bem, um saco, por favor.', en: 'OK, one bag please.' },
    ],
    keyPhrases: [
      { de: 'Haben Sie eine Kundenkarte?', pt: 'Tem cartão de cliente?', en: 'Do you have a loyalty card?' },
      { de: 'Kann ich mit Karte zahlen?', pt: 'Posso pagar com cartão?', en: 'Can I pay by card?' },
      { de: 'Brauche ich eine Tüte?', pt: 'Preciso de um saco?', en: 'Do I need a bag?' },
      { de: 'Das macht ... Euro.', pt: 'Isso dá ... euros.', en: "That's ... euros." },
      { de: 'Bar oder Karte?', pt: 'Dinheiro ou cartão?', en: 'Cash or card?' },
    ],
    question: {
      de: 'Wie zahlt der Kunde?',
      pt: 'Como paga o cliente?',
      en: 'How does the customer pay?',
      choices: ['Mit Karte', 'Bar', 'Mit dem Handy', 'Er zahlt nicht'],
      correctIndex: 0,
    },
  },
  {
    id: 'restaurant',
    titleDe: 'Restaurant',
    titlePt: 'Restaurante',
    titleEn: 'Restaurant',
    speakerA: 'Kellner',
    speakerB: 'Gast',
    lines: [
      { speaker: 'a', de: 'Guten Abend! Haben Sie schon gewählt?', pt: 'Boa noite! Já escolheu?', en: 'Good evening! Have you chosen already?' },
      { speaker: 'b', de: 'Ja, ich hätte gern die Suppe und den Fisch.', pt: 'Sim, queria a sopa e o peixe.', en: "Yes, I'd like the soup and the fish." },
      { speaker: 'a', de: 'Und zu trinken?', pt: 'E para beber?', en: 'And to drink?' },
      { speaker: 'b', de: 'Ein Glas Wasser, bitte.', pt: 'Um copo de água, por favor.', en: 'A glass of water, please.' },
      { speaker: 'a', de: 'Kommt sofort.', pt: 'Já vem.', en: 'Coming right up.' },
      { speaker: 'b', de: 'Die Rechnung, bitte.', pt: 'A conta, por favor.', en: 'The bill, please.' },
      { speaker: 'a', de: 'Zusammen oder getrennt?', pt: 'Junto ou separado?', en: 'Together or separate?' },
      { speaker: 'b', de: 'Zusammen, bitte.', pt: 'Junto, por favor.', en: 'Together, please.' },
    ],
    keyPhrases: [
      { de: 'Haben Sie schon gewählt?', pt: 'Já escolheu?', en: 'Have you already chosen?' },
      { de: 'Ich hätte gern...', pt: 'Eu queria...', en: 'I would like...' },
      { de: 'Die Rechnung, bitte.', pt: 'A conta, por favor.', en: 'The bill, please.' },
      { de: 'Zusammen oder getrennt?', pt: 'Junto ou separado?', en: 'Together or separate?' },
      { de: 'Guten Appetit!', pt: 'Bom apetite!', en: 'Enjoy your meal!' },
    ],
    question: {
      de: 'Was möchte der Gast trinken?',
      pt: 'O que quer beber o cliente?',
      en: 'What does the guest want to drink?',
      choices: ['Ein Glas Wasser', 'Ein Bier', 'Einen Kaffee', 'Einen Wein'],
      correctIndex: 0,
    },
  },
  {
    id: 'bahnhof',
    titleDe: 'Bahnhof',
    titlePt: 'Estação de comboios',
    titleEn: 'Train station',
    speakerA: 'Angestellter',
    speakerB: 'Reisender',
    lines: [
      { speaker: 'a', de: 'Guten Tag, wie kann ich helfen?', pt: 'Bom dia, como posso ajudar?', en: 'Hello, how can I help?' },
      { speaker: 'b', de: 'Ich brauche eine Fahrkarte nach München.', pt: 'Preciso de um bilhete para Munique.', en: 'I need a ticket to Munich.' },
      { speaker: 'a', de: 'Einfach oder hin und zurück?', pt: 'Ida ou ida e volta?', en: 'One-way or round trip?' },
      { speaker: 'b', de: 'Hin und zurück, bitte.', pt: 'Ida e volta, por favor.', en: 'Round trip, please.' },
      { speaker: 'a', de: 'Wann möchten Sie fahren?', pt: 'Quando quer viajar?', en: 'When do you want to travel?' },
      { speaker: 'b', de: 'Heute Nachmittag.', pt: 'Esta tarde.', en: 'This afternoon.' },
      { speaker: 'a', de: 'Der nächste Zug fährt um 15 Uhr, Gleis 4.', pt: 'O próximo comboio parte às 15h, linha 4.', en: 'The next train leaves at 3pm, platform 4.' },
      { speaker: 'b', de: 'Vielen Dank!', pt: 'Muito obrigado!', en: 'Thank you very much!' },
    ],
    keyPhrases: [
      { de: 'Ich brauche eine Fahrkarte nach...', pt: 'Preciso de um bilhete para...', en: 'I need a ticket to...' },
      { de: 'Einfach oder hin und zurück?', pt: 'Ida ou ida e volta?', en: 'One-way or round trip?' },
      { de: 'Wann fährt der nächste Zug?', pt: 'Quando parte o próximo comboio?', en: 'When does the next train leave?' },
      { de: 'Von welchem Gleis?', pt: 'De que linha?', en: 'From which platform?' },
      { de: 'Der Zug hat Verspätung.', pt: 'O comboio está atrasado.', en: 'The train is delayed.' },
    ],
    question: {
      de: 'Von welchem Gleis fährt der Zug?',
      pt: 'De que linha parte o comboio?',
      en: 'Which platform does the train leave from?',
      choices: ['Gleis 4', 'Gleis 1', 'Gleis 7', 'Gleis 12'],
      correctIndex: 0,
    },
  },
]
