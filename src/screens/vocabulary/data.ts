export type VocabEntry = { id: string; de: string; pt: string; en: string }

export const colors: (VocabEntry & { hex: string })[] = [
  { id: 'rot', de: 'rot', pt: 'vermelho', en: 'red', hex: '#c94f4f' },
  { id: 'blau', de: 'blau', pt: 'azul', en: 'blue', hex: '#3d6fc9' },
  { id: 'gruen', de: 'grün', pt: 'verde', en: 'green', hex: '#4a9d5e' },
  { id: 'gelb', de: 'gelb', pt: 'amarelo', en: 'yellow', hex: '#d9bd3a' },
  { id: 'orange', de: 'orange', pt: 'laranja', en: 'orange', hex: '#e08b1d' },
  { id: 'lila', de: 'lila', pt: 'roxo', en: 'purple', hex: '#8a5cc7' },
  { id: 'rosa', de: 'rosa', pt: 'rosa', en: 'pink', hex: '#d97bb0' },
  { id: 'braun', de: 'braun', pt: 'castanho', en: 'brown', hex: '#8a5a34' },
  { id: 'schwarz', de: 'schwarz', pt: 'preto', en: 'black', hex: '#2b2b2b' },
  { id: 'weiss', de: 'weiß', pt: 'branco', en: 'white', hex: '#f2f2ec' },
  { id: 'grau', de: 'grau', pt: 'cinzento', en: 'gray', hex: '#8c8c86' },
]

/** "Guten Abend" greets someone in the evening; "Gute Nacht" is only for
 * parting ways (or going to bed) — mixing them up is a classic beginner slip. */
export const greetings: (VocabEntry & { note?: string; noteEn?: string })[] = [
  { id: 'morgen', de: 'Guten Morgen', pt: 'bom dia', en: 'good morning' },
  { id: 'tag', de: 'Guten Tag', pt: 'boa tarde / bom dia', en: 'good day' },
  {
    id: 'abend', de: 'Guten Abend', pt: 'boa noite (ao chegar/encontrar)', en: 'good evening (on arrival)',
    note: 'Usa-se para cumprimentar à noite — não para te despedires.',
    noteEn: 'Used to greet someone in the evening — not to say goodbye.',
  },
  {
    id: 'nacht', de: 'Gute Nacht', pt: 'boa noite (ao despedir)', en: 'good night (on parting)',
    note: 'Só para te despedires ou ir dormir — nunca para cumprimentar.',
    noteEn: 'Only for parting ways or going to bed — never as a greeting.',
  },
  { id: 'hallo', de: 'Hallo', pt: 'olá', en: 'hi' },
  { id: 'tschuess', de: 'Tschüss', pt: 'tchau (informal)', en: 'bye (informal)' },
  { id: 'wiedersehen', de: 'Auf Wiedersehen', pt: 'adeus (formal)', en: 'goodbye (formal)' },
  { id: 'wiegehts', de: "Wie geht's?", pt: 'como estás?', en: 'how are you?' },
]

export const weekdays: VocabEntry[] = [
  { id: 'montag', de: 'Montag', pt: 'segunda-feira', en: 'Monday' },
  { id: 'dienstag', de: 'Dienstag', pt: 'terça-feira', en: 'Tuesday' },
  { id: 'mittwoch', de: 'Mittwoch', pt: 'quarta-feira', en: 'Wednesday' },
  { id: 'donnerstag', de: 'Donnerstag', pt: 'quinta-feira', en: 'Thursday' },
  { id: 'freitag', de: 'Freitag', pt: 'sexta-feira', en: 'Friday' },
  { id: 'samstag', de: 'Samstag', pt: 'sábado', en: 'Saturday' },
  { id: 'sonntag', de: 'Sonntag', pt: 'domingo', en: 'Sunday' },
]

export const months: VocabEntry[] = [
  { id: 'januar', de: 'Januar', pt: 'janeiro', en: 'January' },
  { id: 'februar', de: 'Februar', pt: 'fevereiro', en: 'February' },
  { id: 'maerz', de: 'März', pt: 'março', en: 'March' },
  { id: 'april', de: 'April', pt: 'abril', en: 'April' },
  { id: 'mai', de: 'Mai', pt: 'maio', en: 'May' },
  { id: 'juni', de: 'Juni', pt: 'junho', en: 'June' },
  { id: 'juli', de: 'Juli', pt: 'julho', en: 'July' },
  { id: 'august', de: 'August', pt: 'agosto', en: 'August' },
  { id: 'september', de: 'September', pt: 'setembro', en: 'September' },
  { id: 'oktober', de: 'Oktober', pt: 'outubro', en: 'October' },
  { id: 'november', de: 'November', pt: 'novembro', en: 'November' },
  { id: 'dezember', de: 'Dezember', pt: 'dezembro', en: 'December' },
]

export const seasons: VocabEntry[] = [
  { id: 'fruehling', de: 'Frühling', pt: 'primavera', en: 'spring' },
  { id: 'sommer', de: 'Sommer', pt: 'verão', en: 'summer' },
  { id: 'herbst', de: 'Herbst', pt: 'outono', en: 'autumn' },
  { id: 'winter', de: 'Winter', pt: 'inverno', en: 'winter' },
]
