## 1. Introdução

Agora que você entende a sintaxe básica de HTML e CSS, vamos levar a sério. As habilidades mais importantes que você precisa dominar com CSS são _posicionamento_ e _layout_.

Aprender a posicionar elementos em uma página da web não é tão difícil quando você entende apenas alguns conceitos-chave.

## 2. Visão geral da lição

<ul>
  <li> Você aprenderá tudo sobre o modelo de caixa. </li>
  <li> Você aprenderá como garantir que os elementos tenham o tamanho certo com margem, preenchimento e bordas. </li>
</ul>

Para uma explicação e exemplo mais interativos, experimente o seguinte Scrim (diga-nos o que você acha deles):

[scrimba](https://scrimba.com/scrim/cof3d488184abe24ec6258ab4)

## 3. O modelo de caixa

O primeiro conceito importante que você precisa entender para ter sucesso em CSS é o modelo box. Não é complicado, mas ignorá-lo agora causará muita frustração no futuro.

Cada coisa em uma página da web é uma caixa retangular. Essas caixas podem conter outras caixas e podem ficar lado a lado.

![img01](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/css-foundations/the-box-model/imgs/boxes.png)

OK, então pode haver alguns círculos na imagem acima… mas quando se trata de layout, eles se encaixam como caixas retangulares e não como círculos.

A única complicação real aqui é que existem muitas maneiras de manipular o tamanho dessas caixas e o espaço entre elas, usando `padding`, `margin` e `border`.

1. `padding`: Aumenta o espaço entre a borda de uma caixa e o conteúdo da caixa.
2. `margin`: Aumenta o espaço entre as bordas de uma caixa e as bordas das caixas adjacentes.
3. `border`: Adiciona espaço entre a margem e o preenchimento.

Imagem para representar a explicação

![img02](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/css-foundations/the-box-model/imgs/box-model.png)
