## 1. Introdução

Agora é hora de combinar nosso conhecimento sobre seletores com o *C* do *CSS*: a cascata.

2. Visão geral da lição

<ul>
  <li> O que a cascata faz </li>
  <li> Especificidade e combinação de seletores CSS </li>
  <li> Como a herança afeta certas propriedades </li>
</ul>

## 3. A cascata de CSS

A cascata é o que determina quais regras serão realmente aplicadas ao nosso HTML.

Existem diferentes fatores que a cascata usa para determinar isso.

`Examinaremos três desses fatores, que esperamos ajudá-lo a evitar aqueles momentos frustrantes do tipo "Eu odeio CSS".`

## 3. A cascata de CSS

A cascata é o que determina quais regras serão realmente aplicadas ao nosso HTML.
Existem diferentes fatores que a cascata usa para determinar isso.

`Examinaremos três desses fatores, que esperamos ajudá-lo a evitar aqueles momentos frustrantes do tipo “Eu odeio CSS”.`

1. Seletores de ID `(seletor mais específico)`
2. Seletores de Classe
3. Seletores de Tipo

```
📑 NOTA:

A especificidade só será levada em consideração quando um elemento tiver múltiplas declarações conflitantes direcionadas a ele, como se fosse um desempate.
```

Vejamos um exemplo rápido de como isso funciona na prática:

```HTML
<!-- index.html -->

<div class="main">
	<div class="list subsection"></div>
</div>
```

```CSS
/* rule 1 */
.subsection {
	color: blue;
}

/* rule 2 */
.main .list {
	color: red;
}
```

No exemplo acima, ambas as regras usam apenas seletores de classe, mas a regra 2 é mais específica porque usa mais seletores de classe, portanto, a declaração `color: red;` teria precedência.

Agora vamos mudar um pouco as coisas:

```html
<!-- index.html -->

<div class="main">
	<div class="list" id="subsection"></div>
</div>
```

```css
/* rule 1 */
#subsection {
	color: blue;
}

/* rule 2 */
.main .list {
    color: red;
}
```

No exemplo acima, apesar da regra 2 ter mais seletores de classe do que seletores de ID, a regra 1 é mais específica porque o ID supera a classe.

### 5. Herança

Herança refere-se a certas propriedades CSS que, quando aplicadas a um elemento, são herdadas pelos descendentes desse elemento, mesmo que não escrevamos explicitamente uma regra para esses descendentes. Geralmente aplicado em `color, font-size, font-family`, etc.

A exceção a isso é quando se visa diretamente um elemento, pois isso sempre supera a herança:

```html
<!-- index.html -->

<div id="parent">
	<div class="child"></div>
</div>
```

```css
/* styles.css */

#parent {
	color: red;
}

.child {
	color: blue;
}
```

Apesar do elemento `parent` ter uma especificidade mais alta com um ID, o elemento `child` teria o estilo `color: blue` aplicado, já que essa declaração o direciona diretamente, enquanto a `color: red` do pai é apenas herdada.

### 6. Ordem das regras

O fator final, o fim da linha, o desempate do desempate. Digamos que depois de todos os outros fatores terem sido levados em consideração, ainda existem múltiplas regras conflitantes visando um elemento. Veja este exemplo abaixo:

```css
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```

Para um elemento que possui as classes `alert` e `warning` , a cascata passaria por todos os outros fatores, incluindo herança (nenhuma aqui) e especificidade (nenhuma regra é mais específica que a outra).
