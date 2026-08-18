# Satzbau

Uma "máquina de frases" em alemão: escolhe o sujeito, o verbo, o objeto/lugar e um verbo modal, e vê a mesma frase mudar entre **Afirmativa**, **Pergunta**, **Negativa** e **Dois verbos**, seguindo as regras reais de ordem das palavras do alemão (posição do verbo, `kein` vs `nicht`, verbo modal + infinitivo no fim). Inclui verbos regulares e irregulares com explicação da conjugação, e respostas Sim/Não geradas dinamicamente no modo Pergunta.

Sem contas, sem backend: tudo corre no browser.

## Desenvolvimento

```bash
npm install
npm run dev
npm run check
npm run build
```

## Nota técnica — Google Analytics

O Analytics só é carregado depois de o utilizador aceitar os cookies. A função
`gtag` deve enviar o objeto nativo `arguments` para `dataLayer`:

```js
function gtag() {
  dataLayer.push(arguments)
}
```

Não substituir por `dataLayer.push(args)` com um rest parameter (`...args`):
apesar de o script da Google carregar, o comando `config` e o `page_view` podem
não ser processados.
