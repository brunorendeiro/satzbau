import type { Locale } from '../../i18n/common'
import type { NumberRule } from './germanNumbers'

type UiStrings = {
  title: string
  intro: string
  ruleExplain: Record<NumberRule, string>
  highlightsLabel: string
  beyondTitle: string
  beyondIntro: string
}

export const ui: Record<Locale, UiStrings> = {
  pt: {
    title: 'Zahlen',
    intro: 'Os números em alemão seguem umas poucas regras simples — a partir daí, é só combinar. Arrasta para ver qualquer número de 0 a 100.',
    ruleExplain: {
      base: 'De 0 a 12, cada número tem uma palavra própria — tens de as decorar uma a uma.',
      teen: 'De 13 a 19, junta-se o radical do número ao sufixo "-zehn" (dez). Repara que "sechs" e "sieben" perdem uma letra: sechzehn, siebzehn.',
      tenRegular: 'As dezenas juntam o radical do número ao sufixo "-zig". Outra vez, "sechs" e "sieben" perdem uma letra: sechzig, siebzig.',
      tenIrregular: 'Esta dezena é irregular — não segue o padrão "-zig" normal, tem de se decorar à parte.',
      combo: 'De 21 a 99 (fora das dezenas certas), junta-se a unidade + "und" (e) + a dezena — e ao contrário do português, a unidade vem primeiro: einundzwanzig é literalmente "um-e-vinte".',
      hundred: '100 é simplesmente "hundert".',
    },
    highlightsLabel: 'Saltar para',
    beyondTitle: 'E depois de 100?',
    beyondIntro: 'A mesma lógica continua: unidade + "hundert" (cem) ou + "tausend" (mil) — e ao juntar hundert/tausend ao resto do número não se usa "und", só dentro desse resto (234 = zweihundert + vierunddreißig, sem "und" a mais).',
  },
  en: {
    title: 'Zahlen',
    intro: 'German numbers follow a handful of simple rules — after that, it\'s just combining pieces. Drag to see any number from 0 to 100.',
    ruleExplain: {
      base: 'From 0 to 12, each number has its own word — you just have to memorise them one by one.',
      teen: 'From 13 to 19, the number\'s stem gets the suffix "-zehn" (ten). Notice "sechs" and "sieben" drop a letter: sechzehn, siebzehn.',
      tenRegular: 'The tens attach the number\'s stem to the suffix "-zig". Again, "sechs" and "sieben" drop a letter: sechzig, siebzig.',
      tenIrregular: 'This ten is irregular — it doesn\'t follow the usual "-zig" pattern, so it has to be memorised on its own.',
      combo: 'From 21 to 99 (outside the round tens), it\'s unit + "und" (and) + ten — and unlike English, the unit comes first: einundzwanzig is literally "one-and-twenty".',
      hundred: '100 is simply "hundert".',
    },
    highlightsLabel: 'Jump to',
    beyondTitle: 'What about after 100?',
    beyondIntro: 'The same logic keeps going: unit + "hundert" (hundred) or + "tausend" (thousand) — and joining hundert/tausend to the rest of the number never uses "und", only within that rest (234 = zweihundert + vierunddreißig, no extra "und").',
  },
  de: {
    title: 'Zahlen',
    intro: 'Deutsche Zahlen folgen ein paar einfachen Regeln — danach werden nur noch Teile kombiniert. Zieh den Regler, um jede Zahl von 0 bis 100 zu sehen.',
    ruleExplain: {
      base: 'Von 0 bis 12 hat jede Zahl ihr eigenes Wort — die musst du einzeln lernen.',
      teen: 'Von 13 bis 19 wird der Wortstamm mit dem Suffix "-zehn" verbunden. "Sechs" und "sieben" verlieren dabei einen Buchstaben: sechzehn, siebzehn.',
      tenRegular: 'Die Zehner verbinden den Wortstamm mit dem Suffix "-zig". Auch hier verlieren "sechs" und "sieben" einen Buchstaben: sechzig, siebzig.',
      tenIrregular: 'Dieser Zehner ist unregelmäßig — er folgt nicht dem üblichen "-zig"-Muster und muss extra gelernt werden.',
      combo: 'Von 21 bis 99 (außerhalb der runden Zehner) gilt: Einer + "und" + Zehner — die Einerstelle steht zuerst: einundzwanzig.',
      hundred: '100 heißt einfach "hundert".',
    },
    highlightsLabel: 'Springe zu',
    beyondTitle: 'Und nach 100?',
    beyondIntro: 'Die gleiche Logik geht weiter: Einer + "hundert" oder + "tausend" — und beim Anfügen von hundert/tausend an den Rest der Zahl steht nie ein "und", nur innerhalb dieses Rests (234 = zweihundert + vierunddreißig, ohne zusätzliches "und").',
  },
}
