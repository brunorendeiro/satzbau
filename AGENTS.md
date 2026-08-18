# AGENTS.md

## Objetivo

Este projeto contém exclusivamente a app Satzbau, um construtor interativo de
frases em alemão: sujeito + verbo + objeto/lugar + verbo modal, alternando
entre Afirmativa, Pergunta, Negativa e Dois verbos.

## Regras

- Manter a app 100% client-side: sem backend, sem base de dados. A locale
  (`satzbau-locale`) vive só em `localStorage`.
- A gramática (sujeitos, verbos, objetos, modais e as funções que constroem
  as frases em DE/PT/EN) vive em `src/data/grammar.ts`. Qualquer verbo novo
  precisa de conjugação completa nas 6 pessoas em `de`, `pt` e `en`, e de
  pelo menos um objeto/lugar compatível.
- A regra de negação alemã: `kein/keine/keinen` (conforme o género) para
  substantivos sem artigo próprio; `nicht` para lugares/frases preposicionais.
  Não simplificar isto para "nicht" genérico — é o ponto pedagógico central.
- Qualquer texto visível novo tem de entrar no dicionário PT/EN/DE em
  `src/i18n.ts`, não pode ficar hardcoded.
- Não colocar aqui código do portfólio ou de outras aplicações.

## Validação

```bash
npm run check
npm run build
```
