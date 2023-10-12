## 1. Introdução

Vamos para o JS

## 2. Como rodar código JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>
</body>
</html>
```

Outra forma de incluir JavaScript em uma página web é através de um script externo. Isso é muito similar a linkar um documento CSS externo ao website.

```js
<script src="script.js"></script>
```

## 3. Variáveis

Você pode pensar nas variáveis ​​simplesmente como “contêineres de armazenamento” para dados em seu código.

![img01](https://cdn.statically.io/gh/TheOdinProject/curriculum/d39eaf2ca95e80705f703bb218216c10508f5047/foundations/javascript_basics/fundamentals-1/imgs/00.png)

## 4. Números

Números são os blocos de contrução da lógica de programação. De fato, é difícil pensar em qualquer atividade de programação útil que não envolva ao menos um pouco de matemática básica.

1. [Essa aula da W3Schools](https://www.w3schools.com/js/js_arithmetic.asp) seguida por [esta aula](https://www.w3schools.com/js/js_numbers.asp), são boas introduções para o que você pode realizar com números em JavaScript.

2. [Este artigo do MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math) aborda as mesmas informações de um ponto de vista um pouco diferente, ao mesmo tempo que ensina como aplicar alguns matemática básica em JavaScript.

3. Leia [este artigo](http://javascript.info/operators) sobre operadores em Javascript.

## 5. Strings

Dependendo do tipo de trabalho que você está fazendo, você pode acabar trabalhando mais com pedaços de texto do que com números. Uma string é simplesmente um pedaço de texto ... e é um bloco de construção fundamental da linguagem.

1. Leia e codifique junto com [mais um tutorial do MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings) sobre o tópico.

2. Leia [esta aula](https://www.w3schools.com/js/js_string_methods.asp) para aprender um pouco mais sobre o que você pode fazer com strings... não deixe de dar uma olhada na página String Reference perto da parte inferior.

3. Tempo de vocabulário: um **método** é uma funcionalidade incorporada à linguagem ou a tipos de dados específicos. No [exercício anterior do W3Schools](https://www.w3schools.com/js/js_string_methods.asp), você aprendeu alguns métodos que podem ser usados em strings, como `replace` e `slice`.

## 6. Condicionais

Agora é hora da diversão... Até agora, não fizemos muito com nossa programação que você não pudesse fazer com simples habilidades matemáticas.

1. O primeiro passo para aprender sobre condicionais é ter uma boa noção de [comparações](http://javascript.info/comparison).

2. [Este tutorial](https://www.w3schools.com/js/js_if_else.asp) é uma ótima primeira olhada nas condicionais em JavaScript.

3. [Este tutorial](http://javascript.info/logical-operators) ensinará você sobre operadores lógicos.

## 7. Funções

1. [Este longo artigo do MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions) é um bom lugar para começar. Não se preocupe, pois pode haver algumas funções que podem estar além do alcance desta lição em particular, mas preste atenção especial às seções sobre 'Escopo da Função'.

2. Leia este artigo sobre [valores de retorno](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values).

3. Vamos discutir paramêtros e argumentos no contexto do seguinte exemplo de função:

```js
function favoriteAnimal(animal) {
  return animal + " is my favorite animal!";
}

console.log(favoriteAnimal('Dog'));
```

Em JavaScript, parâmetros são os itens listados entre parênteses na declaração da função.

Argumentos de função são os valores reais que decidimos passar para a função.

4. A seguir, leia [este artigo](http://javascript.info/function-basics) em Javascript.info. Já mencionamos isso antes, mas o JavaScript mudou um pouco ao longo dos anos e as funções receberam recentemente algumas inovações.

5. Agora, leia [este artigo](http://javascript.info/function-expressions) sobre funções em JavaScript para ter um pouco mais de contexto e leia [este artigo](http://javascript.info/arrow-functions -básicos) para uma introdução a um recurso relativamente novo no JavaScript moderno chamado `função de seta`.

6. Por fim, leia [este artigo](https://www.javascripttutorial.net/javascript-call-stack/) sobre pilhas de chamadas e como `return` funciona no contexto de chamadas de função encadeadas.
