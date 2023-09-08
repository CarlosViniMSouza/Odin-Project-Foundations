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
