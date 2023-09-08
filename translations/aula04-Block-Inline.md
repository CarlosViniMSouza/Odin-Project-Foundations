## 1. Introdução

CSS tem dois tipos de caixas: caixas `block` e `inline` , que determinam o comportamento e a interação do elemento. A propriedade `display` controla como os elementos HTML aparecem na página da Web.

## 2. Visão geral da lição

<div>
  <ul>
    <li>
      Saiba mais sobre "Fluxo Normal"
    </li>
    <li>
      Diferenças entre os elementos <code>block</code> e <code>inline</code>
    </li>
    <li>
      Quais elementos são padronizados para <code>block</code> e quais elementos são padronizados para <code>inline</code>
    </li>
    <li>
      Aprenda o que são divs e spans
    </li>
  </ul>
</div>

[scrimba](https://scrimba.com/)

## 3. Block vs Inline

A maioria dos elementos que você aprendeu até agora são elementos de bloco. Em outras palavras, o estilo padrão é `display: block`.

Os elementos embutidos, entretanto, não começam em uma nova linha. Eles aparecem alinhados com quaisquer elementos ao lado dos quais são colocados. Um exemplo claro de elemento inline é um link ou tag `<a>`.

### O meio-termo `inline-block`

Os elementos `inline-block` se comportam como elementos inline, mas com preenchimento e margem no estilo de bloco.

`display: inline-block` é uma ferramenta útil para conhecer, mas na prática, você provavelmente acabará recorrendo ao flexbox com mais frequência se estiver tentando alinhar um monte de caixas.

*Flexbox* será abordado em detalhes na próxima lição.

## 4. Divs e spans

Não podemos falar sobre elementos block e inline sem discutir divs e spans. Todos os outros elementos HTML que encontramos até agora dão significado ao seu conteúdo.

`Exemplo`: Os elementos do parágrafo dizem ao navegador para exibir o texto que contém como um parágrafo.

Ter elementos como este à nossa disposição é muito mais útil do que pode parecer à primeira vista. Muitas vezes precisaremos de elementos que não têm outro propósito senão serem elementos de “gancho”.

Podemos fornecer um ID ou classe para direcioná-los para estilização com CSS.

Div é um elemento de nível de bloco por padrão. É comumente usado como um elemento contêiner para agrupar outros elementos. Divs nos permitem _dividir_ a página em blocos diferentes e aplicar estilo a esses blocos [Veja um exemplo em codepen.io](https://codepen.io/TheOdinProjectExamples/pen/KKXXbwR)

Span é um elemento de nível embutido por padrão. Ele pode ser usado para agrupar conteúdo de texto e elementos HTML embutidos para estilo e só deve ser usado quando nenhum outro elemento HTML semântico for apropriado. [Veja um exemplo em codepen.io](https://codepen.io/TheOdinProjectExamples/pen/abLLPor)
