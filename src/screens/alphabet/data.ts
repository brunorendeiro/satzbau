/** One entry per letter: how it's named when spelling something aloud, an
 * example word, and how its sound compares to Portuguese and English — the
 * two reference languages this app is built for. `tricky` flags the letters
 * whose sound most often surprises PT/EN speakers (G, J, V, W, Z, Ä, Ö, Ü, ß). */
export type LetterEntry = {
  id: string
  letter: string
  name: string
  example: string
  examplePt: string
  exampleEn: string
  soundPt: string
  soundEn: string
  tricky: boolean
}

export const alphabet: LetterEntry[] = [
  { id: 'a', letter: 'A', name: 'ah', example: 'Apfel', examplePt: 'maçã', exampleEn: 'apple', soundPt: 'Como o "a" aberto de "pá".', soundEn: 'Like the "a" in "father".', tricky: false },
  { id: 'b', letter: 'B', name: 'beh', example: 'Buch', examplePt: 'livro', exampleEn: 'book', soundPt: 'Como o "b" português — mas no fim de palavra soa a "p".', soundEn: 'Like English "b" — but at the end of a word it sounds like "p".', tricky: false },
  { id: 'c', letter: 'C', name: 'tseh', example: 'Computer', examplePt: 'computador', exampleEn: 'computer', soundPt: 'Sozinho é raro; costuma aparecer em "ch" ou "ck". Em palavras como esta soa "k".', soundEn: 'Rare on its own; usually shows up as "ch" or "ck". In words like this it sounds like "k".', tricky: false },
  { id: 'd', letter: 'D', name: 'deh', example: 'Danke', examplePt: 'obrigado', exampleEn: 'thanks', soundPt: 'Como o "d" português — mas no fim de palavra soa a "t".', soundEn: 'Like English "d" — but at the end of a word it sounds like "t".', tricky: false },
  { id: 'e', letter: 'E', name: 'eh', example: 'Elefant', examplePt: 'elefante', exampleEn: 'elephant', soundPt: 'Como o "ê" fechado de "mesa".', soundEn: 'Like the "e" in "bet", but a touch longer and closed.', tricky: false },
  { id: 'f', letter: 'F', name: 'ef', example: 'Fisch', examplePt: 'peixe', exampleEn: 'fish', soundPt: 'Como o "f" português.', soundEn: 'Like English "f".', tricky: false },
  { id: 'g', letter: 'G', name: 'geh', example: 'Garten', examplePt: 'jardim', exampleEn: 'garden', soundPt: 'Sempre "g" duro, como em "gato" — nunca como o "g" de "gelo".', soundEn: 'Always a hard "g", as in "go" — never soft like in "giant".', tricky: true },
  { id: 'h', letter: 'H', name: 'hah', example: 'Haus', examplePt: 'casa', exampleEn: 'house', soundPt: 'O português não tem este som — é um sopro de ar, como um suspiro.', soundEn: 'Like English "h" in "house" — a light breath of air.', tricky: false },
  { id: 'i', letter: 'I', name: 'ih', example: 'Igel', examplePt: 'ouriço', exampleEn: 'hedgehog', soundPt: 'Como o "i" fechado de "vi".', soundEn: 'Like the "ee" in "see", but shorter.', tricky: false },
  { id: 'j', letter: 'J', name: 'yot', example: 'Ja', examplePt: 'sim', exampleEn: 'yes', soundPt: 'Como o "i" de "iogurte" — nunca como o "j" português.', soundEn: 'Like the "y" in "yes" — never like an English "j".', tricky: true },
  { id: 'k', letter: 'K', name: 'kah', example: 'Katze', examplePt: 'gato', exampleEn: 'cat', soundPt: 'Como o "c" de "casa".', soundEn: 'Like English "k".', tricky: false },
  { id: 'l', letter: 'L', name: 'el', example: 'Liebe', examplePt: 'amor', exampleEn: 'love', soundPt: 'Como o "l" português, mas mais claro, com a língua mais à frente.', soundEn: 'A "light" l, tongue forward, as in the English "love".', tricky: false },
  { id: 'm', letter: 'M', name: 'em', example: 'Mutter', examplePt: 'mãe', exampleEn: 'mother', soundPt: 'Como o "m" português.', soundEn: 'Like English "m".', tricky: false },
  { id: 'n', letter: 'N', name: 'en', example: 'Nase', examplePt: 'nariz', exampleEn: 'nose', soundPt: 'Como o "n" português.', soundEn: 'Like English "n".', tricky: false },
  { id: 'o', letter: 'O', name: 'oh', example: 'Ofen', examplePt: 'forno', exampleEn: 'oven', soundPt: 'Como o "ô" fechado de "avô".', soundEn: 'Like the "o" in "go", but pure — no "w" glide at the end.', tricky: false },
  { id: 'p', letter: 'P', name: 'peh', example: 'Papier', examplePt: 'papel', exampleEn: 'paper', soundPt: 'Como o "p" português.', soundEn: 'Like English "p".', tricky: false },
  { id: 'q', letter: 'Q', name: 'kuh', example: 'Quelle', examplePt: 'fonte', exampleEn: 'source', soundPt: '"qu" soa "kv", não "kw" — "Quelle" lê-se mais ou menos "kvéle".', soundEn: '"qu" sounds like "kv", not "kw" — "Quelle" reads roughly "KVEH-leh".', tricky: false },
  { id: 'r', letter: 'R', name: 'er', example: 'Rot', examplePt: 'vermelho', exampleEn: 'red', soundPt: 'No início de palavra ou antes de vogal é gutural, vindo da garganta (Rot, trinken); depois de vogal ou no fim de palavra fica leve, quase um "a" (wir, Vater).', soundEn: 'At the start of a word or before a vowel it\'s throaty/guttural (Rot, trinken); after a vowel or at the end of a word it softens into an almost "a"-like sound (wir, Vater).', tricky: true },
  { id: 's', letter: 'S', name: 'es', example: 'Sonne', examplePt: 'sol', exampleEn: 'sun', soundPt: 'Antes de vogal soa "z" (como em "zebra"); no fim de sílaba soa "s".', soundEn: 'Before a vowel it sounds like "z" (as in "zoo"); at the end of a syllable it\'s a plain "s".', tricky: false },
  { id: 't', letter: 'T', name: 'teh', example: 'Tisch', examplePt: 'mesa', exampleEn: 'table', soundPt: 'Como o "t" português, mas mais aspirado, com um sopro de ar.', soundEn: 'Like English "t", with a puff of air (aspirated).', tricky: false },
  { id: 'u', letter: 'U', name: 'uh', example: 'Uhr', examplePt: 'relógio', exampleEn: 'clock', soundPt: 'Como o "u" fechado de "tu".', soundEn: 'Like the "oo" in "boot".', tricky: false },
  { id: 'v', letter: 'V', name: 'fau', example: 'Vater', examplePt: 'pai', exampleEn: 'father', soundPt: 'Costuma soar "f" — "Vater" lê-se "fáta". Só soa "v" em palavras estrangeiras.', soundEn: 'Usually sounds like "f" — "Vater" reads "FAH-ter". Only sounds like an English "v" in loanwords.', tricky: true },
  { id: 'w', letter: 'W', name: 'veh', example: 'Wasser', examplePt: 'água', exampleEn: 'water', soundPt: 'Soa como o "v" português de "vaca" — nunca como o "w" inglês.', soundEn: 'Sounds like an English "v" — never like an English "w".', tricky: true },
  { id: 'x', letter: 'X', name: 'iks', example: 'Taxi', examplePt: 'táxi', exampleEn: 'taxi', soundPt: 'Como o "x" de "táxi", som de "ks".', soundEn: 'Like "ks", as in the English "taxi".', tricky: false },
  { id: 'y', letter: 'Y', name: 'ypsilon', example: 'Physik', examplePt: 'física', exampleEn: 'physics', soundPt: 'Diz um "i" com os lábios arredondados, como se fosses dizer "u".', soundEn: 'Say an "ee" while rounding your lips, as if you were about to say "oo".', tricky: false },
  { id: 'z', letter: 'Z', name: 'tset', example: 'Zeit', examplePt: 'tempo', exampleEn: 'time', soundPt: 'Sempre soa "ts", como em "Zeit" = "tsait" — nunca como o "z" português.', soundEn: 'Always sounds like "ts" (as in "cats") — never like an English "z".', tricky: true },
  { id: 'auml', letter: 'Ä', name: 'ä', example: 'Mädchen', examplePt: 'menina', exampleEn: 'girl', soundPt: 'Como o "é" aberto de "pé".', soundEn: 'Like the "e" in "bed".', tricky: true },
  { id: 'ouml', letter: 'Ö', name: 'ö', example: 'Öl', examplePt: 'óleo', exampleEn: 'oil', soundPt: 'Sem equivalente em português — diz "ê" arredondando os lábios como para dizer "ô".', soundEn: 'No English equivalent — say "ay" while rounding your lips as if about to whistle.', tricky: true },
  { id: 'uuml', letter: 'Ü', name: 'ü', example: 'Über', examplePt: 'sobre', exampleEn: 'over', soundPt: 'Sem equivalente em português — diz "i" arredondando os lábios como para dizer "u".', soundEn: 'No English equivalent — say "ee" while rounding your lips as if about to whistle.', tricky: true },
  { id: 'eszett', letter: 'ß', name: 'eszett', example: 'Straße', examplePt: 'rua', exampleEn: 'street', soundPt: 'Soa exatamente como um "s" duplo/forte — usa-se em vez de "ss" depois de vogal longa.', soundEn: 'Sounds exactly like a sharp double "s" — used instead of "ss" after a long vowel.', tricky: true },
]

/** Letter *combinations* that behave as a single sound, reusing the same
 * card shape as `alphabet` — here `name` holds the linguistic term for the
 * sound instead of a spelling-name, since digraphs aren't spelled aloud. */
export const combos: LetterEntry[] = [
  { id: 'ch-ich', letter: 'ch', name: 'ich-Laut', example: 'ich', examplePt: 'eu', exampleEn: 'I', soundPt: 'Língua atrás dos dentes de baixo, um "ch" sibilado e suave — aparece depois de e, i ou de uma consoante.', soundEn: 'Tongue behind the lower teeth, a soft hissing sound — appears after e, i, or a consonant.', tricky: true },
  { id: 'ch-ach', letter: 'ch', name: 'ach-Laut', example: 'Nacht', examplePt: 'noite', exampleEn: 'night', soundPt: 'Um sopro áspero vindo da garganta, como limpar a garganta com suavidade — aparece depois de a, o, u e au.', soundEn: 'A rough, throaty rasp — like softly clearing your throat — appears after a, o, u, and au.', tricky: true },
  { id: 'sch', letter: 'sch', name: 'sch', example: 'Schule', examplePt: 'escola', exampleEn: 'school', soundPt: 'As três letras juntas soam como o nosso "x" de "chuva".', soundEn: 'The three letters together sound like the English "sh" in "shoe".', tricky: true },
  { id: 'chs', letter: 'chs', name: 'chs', example: 'sechs', examplePt: 'seis', exampleEn: 'six', soundPt: 'Quando "s" vem depois de "ch", o som vira "ks" — como em "táxi".', soundEn: 'When "s" follows "ch", the sound becomes "ks" — like the English "taxi".', tricky: false },
  { id: 'ei', letter: 'ei', name: 'ei', example: 'meine', examplePt: 'minha', exampleEn: 'my', soundPt: 'Soa "ai", como em "pai" — nunca "ei" como em "lei".', soundEn: 'Sounds like "eye" — never like the "ay" in "day".', tricky: true },
  { id: 'ie', letter: 'ie', name: 'ie', example: 'Liebe', examplePt: 'amor', exampleEn: 'love', soundPt: 'As duas letras juntas fazem um só som: um "i" longo e fechado.', soundEn: 'The two letters together make a single sound: a long "ee".', tricky: false },
  { id: 'eu', letter: 'eu', name: 'eu', example: 'Deutsch', examplePt: 'alemão', exampleEn: 'German', soundPt: 'Soa "ói", como em "herói" — nunca como o "eu" português.', soundEn: 'Sounds like "oy", as in "boy" — never like the English word "you".', tricky: true },
  { id: 'er', letter: 'er', name: 'final -er', example: 'Wasser', examplePt: 'água', exampleEn: 'water', soundPt: 'No fim de palavra reduz-se a um "a" curto e átono — quase não se ouve o "r".', soundEn: 'At the end of a word it reduces to a short, unstressed "uh" — the "r" is barely heard.', tricky: true },
]

/** Real German surnames make good practice material for the R sound —
 * both the throaty word-initial variant and the softened final "-er". */
export const practiceSurnames: string[] = ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Schulz', 'Weber', 'Wagner', 'Becker', 'Hoffmann', 'Bauer']
