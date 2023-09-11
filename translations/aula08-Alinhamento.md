## 1. Introdução

Até agora, tudo o que abordamos com flexbox usou a regra `flex: 1` em todos os itens flex, o que faz com que os itens aumentem ou diminuam igualmente para preencher todo o espaço disponível. Muitas vezes, porém, este não é o efeito desejado.

Flex também é muito útil para organizar itens que possuem um tamanho específico.

## 2. Visão geral da lição

Esta seção contém uma visão geral dos tópicos que você aprenderá nesta lição.

<ul>
  <li> Você aprenderá como alinhar itens dentro de um flex container tanto vertical quanto horizontalmente. </li>
</ul>

## 3. Alinhamento

Veja o exemplo abaixo:

```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css
.container {
  height: 120px;
  padding: 15px;
  background: plum;
  border: 4px solid indigo;
  display: flex;
}

.item {
  width: 60px;
  height: 60px;
  border: 4px solid darkslategray;
  background: skyblue;
}
```

Remova `flex: 1` de `.item` e adicione `justify-content: space-between` a `.container`. Fazer isso deve lhe dar algo assim:

![img01](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/07.png)

`justify-content` alinha itens no **eixo principal**. Existem alguns valores que você pode usar aqui. Você aprenderá o restante nas tarefas de leitura, mas por enquanto tente alterá-lo para `center`, que deve centralizar as caixas ao longo do eixo principal.

Para alterar o posicionamento dos itens ao longo do **eixo cruzado** use `align-items`. Tente colocar as caixas no centro do contêiner adicionando `align-items: center` a `.container`. O resultado desejado é assim:

![img02](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/08.png)

Como `justify-content` e `align-items` são baseados no eixo principal e cruzado do seu contêiner, seu comportamento muda quando você altera a direção flexível de um contêiner flexível.

### 4. Gap

Um recurso muito útil do flex é a propriedade `gap`. Definir `gap` em um contêiner flexível simplesmente adiciona um espaço especificado entre os itens flexíveis, semelhante a adicionar uma margem aos próprios itens.

OBS.: `gap` é uma *nova propriedade*; então, ainda não aparece em muitos recursos!
