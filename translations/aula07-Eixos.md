## 1. Introdução

Vamos ver como a orientação dos itens dentro de um flex container pode ser controlada usando a propriedade `flex-direction`.

## 2. Visão geral da lição

Esta seção contém uma visão geral dos tópicos que você aprenderá nesta lição.
<ul>
   <li> Você aprenderá sobre os 2 “eixos” de um flex container. </li>
   <li> Você aprenderá como alterar esses eixos para organizar seu conteúdo em colunas em vez de linhas. </li>
</ul>

## 3. Eixos

Não importa a direção que você esteja usando, você precisa pensar em seus flex-containers como tendo 2 eixos: o eixo principal e o eixo transversal. É a direção desses eixos que muda quando a `flex-direction` é alterada. Na maioria das circunstâncias, `flex-direction: row` coloca o eixo principal na horizontal (da esquerda para a direita) e `column` coloca o eixo principal na vertical (de cima para baixo).

Veja o exemplo abaixo:

```html
<div class="flex-container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
```

```css
.flex-container {
  display: flex;
  /* flex-direction: column; */
}

/* este seletor seleciona todos os divs dentro de .flex-container */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 80px;
  flex: 1 1 auto;
}
```

Uma coisa a notar é que neste exemplo, `flex-direction: column` não funcionaria como esperado se usássemos a abreviação `flex: 1`. A razão para isso é que a abreviação flex expande `flex-basis` para **0**, o que significa que todos os `flex-grow` e `flex-shrink` começariam seus cálculos a partir de **0**.

Por padrão, divs vazios têm altura 0, portanto, para que nossos itens flexíveis preencham a altura de seu contêiner, eles não precisam ter altura alguma.

O exemplo acima corrigiu isso especificando `flex: 1 1 auto`, informando aos itens flexíveis para usarem como padrão a `altura` fornecida. Também poderíamos ter corrigido isso colocando uma altura no pai `.flex-container` ou usando `flex-grow: 1` em vez da abreviação.
