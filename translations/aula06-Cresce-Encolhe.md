## 1. Introdução

Vamos dar uma olhada mais de perto no que realmente aconteceu quando você colocou `flex: 1` nesses itens flex na última lição.

## 2. Visão geral da lição

Esta seção contém uma visão geral dos tópicos que você aprenderá nesta lição.

<div>
  <ul>
    <li>
      Você aprenderá as três propriedades definidas pela abreviatura flex e como usá-las individualmente.
    </li>
  </ul>
</div>

## 3. A abreviatura Flex

A declaração flex é na verdade uma abreviação de 3 propriedades que você pode definir em um item flexível. Essas propriedades afetam o tamanho dos itens flexíveis em seu contêiner.

Neste caso, `flex` é na verdade uma abreviação de `flex-grow`, `flex-shrink` e `flex-basis`.

![img01](https://cdn.statically.io/gh/TheOdinProject/curriculum/0cc6b26bb0c4b94524369d327c97a8fb11e83b6b/foundations/html_css/flexbox/imgs/10.png)

Na captura de tela acima, `flex: 1` equivale a: `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: 0`. Quando colocamos flex: 1 em nossos divs, na verdade estávamos especificando uma abreviação de `flex: 1 1 0`.

### 3.1. Flex-grow

`flex-grow` espera um único número como valor, e esse número é usado como o “fator de crescimento” do item flexível. Quando aplicamos `flex: 1` a cada div dentro do nosso contêiner, estávamos dizendo a cada div para crescer na mesma quantidade. O resultado disso é que cada div termina exatamente com o mesmo tamanho. Se, em vez disso, adicionarmos `flex: 2` a apenas um dos divs, esse div crescerá para `2x` o tamanho dos outros.

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
}

/* este seletor seleciona todos os divs dentro de .flex-container */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 100px;
  flex: 1 1 0%;
}

/* apenas div.two está selecionado aqui */
.flex-container .two {
  flex: 2 1 0%;
}
```

### 3.2. Flex-shrink

`flex-shrink` é semelhante a `flex-grow`, mas define o “fator de redução” de um item flexível. `flex-shrink` só será aplicado se o tamanho de todos os itens flexíveis for maior que o contêiner pai. Por exemplo, se nossos três divs acima tivessem uma declaração de largura como: `width: 100px` e `.flex-container` fossem menores que `300px`, nossos divs teriam que diminuir para caber.

O fator de redução padrão é `flex-shrink: 1`, o que significa que todos os itens serão reduzidos uniformemente. Se você _não_ deseja que um item diminua, você pode especificar `flex-shrink: 0;`.

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
}

/* this selector selects all divs inside of .flex-container */
.flex-container div {
  background: rgb(215, 185, 255);
  border: 2px solid brown;
  height: 100px;
  width: 250px;
  flex: 1 1 auto;
}

.flex-container .two {
  flex-shrink: 0;
}
```

An important implication to notice here is that when you specify `flex-grow` or `flex-shrink`, flex items do not necessarily respect your given values for `width`.
