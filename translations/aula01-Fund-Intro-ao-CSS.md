## 1. Introdução

Na lição anterior, você aprendeu sobre HTML e como usar tags para mostrar elementos na tela. O próximo passo é fazer com que essa estrutura fique bem com algum *estilo*, que é exatamente para que serve o css.


## 2. Visão geral da lição

<ul>
  <li>Adicionar estilo ao HTML usando css</li>
  <li>Entender classes e atributos de ID</li>
  <li>Adicione estilo a elementos específicos</li>
</ul>

## 3. Sintaxe Básica

No nível mais básico da sintaxe css, você trabalhará com pares *'property': 'value'* ... Veja a imagem abaixo

![img01-css-syntax](https://cdn.statically.io/gh/TheOdinProject/curriculum/05ce472eabf8e04eeb2cc9139e66db884074fd7d/foundations/html_css/css-foundations/imgs/00.jpg)

```redução
📑 NOTA

Um <div> é um dos elementos básicos do HTML. É simplesmente um recipiente vazio.

Em geral, utilize outras tags como <h1>, <h4>, <p>, <img>, etc; dentro de uma <div>
```

## 4. Seletores

`Explicação:` Os seletores simplesmente referem-se aos elementos HTML aos quais as regras css se aplicam. Eles são o que realmente está sendo "selecionado" para cada regra.

Aqui estão alguns exemplos para referência em 'como manipular seletores em css'

#### 4.1. Seletor universal

O seletor universal selecionará elementos do tipo qualquer, daí o nome "universal", e a sintaxe para ele é um simples asterisco.

```css
* {
	color: purple;
}
```

#### 4.2. Seletores de tipo

Um seletor de tipo selecionará todos os elementos de um determinado tipo de elemento, e a sintaxe é apenas o nome do elemento:

```html
<!-- index.html -->

<div> Hello, World! </div>
```

```css
/* styles.css */

div {
	color: white;
}
```

#### 4.3. Seletores de Classe

Os seletores de classe selecionarão todos os elementos de uma determinada classe, que é apenas um atributo que você coloca em um elemento HTML.

Veja um exemplo para entender:

```html
<!-- index.html -->

<div class="alert-text"> Please, Agree to our Terms of Service! 🙏 </div>
```

```css
/* styles.css */

.alert-text {
	color: red;
}
```

`Nota:` A sintaxe para seletores de classe, um ponto imediatamente seguido pelo valor que diferencia maiúsculas de minúsculas do atributo de classe.

`Outra coisa`: você pode fazer com o atributo classe adicione múltiplas classes a um único elemento como uma lista separada por espaços, como `class="alert-text severe-alert"`.

#### 4.4. Seletores de ID

Os seletores de ID são semelhantes aos seletores de classe.
A principal diferença entre classes e IDs é que um elemento só pode ter um ID!

```html
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
```

```css
/* styles.css */

#myParagraph {
	backgroud-color: gray;
}
```

Para IDs, em vez de um ponto final, usamos uma hashtag imediatamente seguida pelo valor que diferencia maiúsculas de minúsculas do atributo ID.

#### 4.5. Seletores de agrupamento

E se tivermos dois grupos de elementos que compartilham algumas de suas declarações de estilo?

```css
.read, .unread {
	color: white;
	background-color: black;
	font-family: 'Times New Roman';
	font-size: 12px;
}
```

Nossos seletores `.read` e `.unread` compartilham as declarações `color: white;` e `background-color: black;` ; mas por outro lado têm várias de suas próprias declarações exclusivas.

#### 4.6. Seletores de encadeamento

Outra forma de usar seletores é encadeá-los como uma lista sem qualquer separação.

```html
<!-- index.html -->

<div>
	<div class="subsection header"> Latest Posts </div>
    <p class="subsection preview"> This is where a preview for a post might go. </p>
</div>
```

Temos dois elementos com a classe de sujeição que possuem algum tipo de estilo único.

```css
/* styles.css */

.subsection.header {
	color: write;
	background-color: green;
}
```

Essa sintaxe funciona basicamente para encadear qualquer combinação de seletores, exceto para encadear mais de um [seletor de tipo](https://www.theodinproject.com/lessons/foundations-intro-to-css#type-selectors)

#### 4.7. Combinador descendente

Os combinadores nos permitem combinar vários seletores de maneira diferente de agrupá-los ou encadeá-los, pois mostram um relacionamento entre os seletores.

Portanto, algo como `.ancestor .child` selecionaria um elemento com a classe `child` se ele tiver um ancestral com a classe `ancestor`.

Outra maneira de pensar nisso é que `child` só será selecionado se estiver aninhado dentro de `ancestor`, não importa a profundidade.

```html
<!-- index.html -->

<div class="ancestor">
	<!-- A -->
	<div class="contents">
		<!-- B -->
	    <div class="contents">
			<!-- C -->
		</div>
	</div>
</div>

<div class="contents"></div>
<!-- D -->
```

```css
/* styles.css */

.ancestor, .contents {
	margin: 0 auto;
	padding: 24px; 
}
```

No exemplo acima, os dois primeiros elementos da classe `contents` (B e C) seriam selecionados, mas o último elemento (D) não seria. Seu palpite estava correto?

Na verdade, não há limite para quantos combinadores você pode adicionar a uma regra, então `.one` `.two` `.three` `.four` seria totalmente válido.

## 5. A Ordem é importante!

Quando dois seletores têm o mesmo nível de especificidade, a regra definida por último tem maior precedência; isto é, a última regra substitui quaisquer regras anteriores.

```css
/* styles.css */

.first_declared, .last_declared {
	background-color: rgb(200, 50, 150);
	font-weight: 800;
}

.first_declared {
	color: rgb(50, 50, 200);
	font-size: 32px;
}

.last_declared {
	font-size: 14px;
	font-weight: 800;
}
```

No exemplo acima, o seletor `last_declared` substituiria o seletor `first_declared`.

## 6. Propriedades para começar

Existem algumas propriedades css que você usará o tempo todo ou, pelo menos, com mais frequência. Aprender as propriedades a seguir será suficiente para ajudá-lo a começar.

#### 6.1. Cor e cor de fundo

1. `color`: Defina a cor do texto do elemento;
2. `background-color`: Define a cor de fundo de um elemento;

```css
.element {
	color: #1100ff;           /* example 01 - HEX example*/
	color: rgb(100, 0, 127);  /* example 02 - RGB example */
	color: hsl(15, 82%, 56%); /* example 03 - HSL example */
}
```

`Dica`: dê uma olhada rápida em [valores legais de cores css](https://www.w3schools.com/cssref/css_colors_legal.asp) para ver como você pode ajustar a opacidade dessas cores adicionando um valor alfa.

#### 6.2. Noções básicas de tipografia e alinhamento de texto

1. `font-family`: Defina um valor que determina qual fonte um elemento usa.
Como `"Times New Roman"` (você deve usar aspas quando houver espaço entre espaços) ou `sans-serif` (nomes de família genéricos, não use aspas).

2. `font-size`: Defina o tamanho da fonte.
Exemplo: `font-family: 24px`

3. `font-weight`: afeta o negrito do texto, pode ser um número entre 1 e 1000 (mas você pode usar palavras pré-definidas).
Exemplos: `font-weight: bold` | `font-weight: 500`

4. `text-align`: Alinhará o texto horizontalmente dentro de um elemento.
Exemplo: `text-align: center`

#### 6.3. Altura e largura da imagem

Por padrão, os valores prontos para `<img>`, e `height` e `width`. Para modificar, use um valor "auto" para a propriedade `height` e ajuste o valor `width`:

```css
img {
	height: auto;
	width: 150px;
}
```

Por exemplo, se o tamanho original de uma imagem fosse 500px de altura e 1000px de largura, usar o css acima resultaria em uma altura de 250px.

## 7. Adicionando css ao HTML

Existem três formas de vincular css a html: Por "css externo" (usando meta links em `<head>`), e "css interno" (usando a tag `<style>`), e o "css inline" (aplicando as propriedades css dentro das tags html)

```
📑 NOTA:

Como sei usar todas as formas, vou pular esse tópico e passar para o próximo!
```
