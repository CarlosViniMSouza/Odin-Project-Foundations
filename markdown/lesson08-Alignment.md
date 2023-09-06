## 1. Introduction

So far everything we’ve touched with flexbox has used the rule `flex: 1` on all flex items, which makes the items grow or shrink equally to fill all of the available space. Very often, however, this is not the desired effect. 

Flex is also very useful for arranging items that have a specific size.

## 2. Lesson Overview

This section contains a general overview of topics that you will learn in this lesson.

<ul>
  <li> You’ll learn how to align items inside a flex container both vertically and horizontally. </li>
</ul>

## 3. Alignment

See the below example:

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

Remove `flex: 1` from `.item` and add `justify-content: space-between` to `.container`. Doing so should give you something like this:

![img01](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/07.png)

`justify-content` aligns items across the **main axis**. There are a few values that you can use here. You’ll learn the rest of them in the reading assignments, but for now try changing it to `center`, which should center the boxes along the main axis.

To change the placement of items along the **cross axis** use `align-items`. Try getting the boxes to the center of the container by adding `align-items: center` to `.container`. The desired result looks like this:

![img02](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/08.png)

Because `justify-content` and `align-items` are based on the main and cross axis of your container, their behavior changes when you change the flex-direction of a flex-container.

## 4. Gap

One very useful feature of flex is the `gap` property. Setting `gap` on a flex container simply adds a specified space between flex items, similar to adding a margin to the items themselves. 

OBS.: `gap` is a *new property*; so, it doesn’t show up in many resources yet!
