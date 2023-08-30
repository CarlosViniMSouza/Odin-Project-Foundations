## 1. Introduction

Let’s look a little closer at what actually happened when you put `flex: 1` on those flex items in the last lesson.

## 2. Lesson Overview

This section contains a general overview of topics that you will learn in this lesson.

<div>
  <ul>
    <li> 
      You’ll learn the 3 properties that are defined by the flex shorthand, and how to use them individually. 
    </li>
  </ul>
</div>

## 3. The Flex shorthand

The flex declaration is actually a shorthand for 3 properties that you can set on a flex item. These properties affect how flex items size themselves within their container.

In this case, `flex` is actually a shorthand for `flex-grow`, `flex-shrink` and `flex-basis`.

![img01](https://cdn.statically.io/gh/TheOdinProject/curriculum/0cc6b26bb0c4b94524369d327c97a8fb11e83b6b/foundations/html_css/flexbox/imgs/10.png)

In the above screenshot, `flex: 1` equates to: `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: 0`. When we put flex: 1 on our divs, we were actually specifying a shorthand of `flex: 1 1 0`.

### 3.1. Flex-grow

`flex-grow` expects a single number as its value, and that number is used as the flex-item’s “growth factor”. When we applied `flex: 1` to every div inside our container, we were telling every div to grow the same amount. The result of this is that every div ends up the exact same size. If we instead add `flex: 2` to just one of the divs, then that div would grow to `2x` the size of the others.

```html
<div class="flex-container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
```

### 3.2. Flex-shrink

`flex-shrink` is similar to `flex-grow`, but sets the “shrink factor” of a flex item. `flex-shrink` only ends up being applied if the size of all flex items is larger than their parent container. For example, if our 3 divs from above had a width declaration like: `width: 100px`, and `.flex-container` was smaller than `300px`, our divs would have to shrink to fit.

The default shrink factor is `flex-shrink: 1`, which means all items will shrink evenly. If you do _not_ want an item to shrink then you can specify `flex-shrink: 0;`.

An important implication to notice here is that when you specify `flex-grow` or `flex-shrink`, flex items do not necessarily respect your given values for `width`.

### 3.3. Flex-basis

`flex-basis` simply sets the initial size of a flex item, so any sort of `flex-grow`ing or `flex-shrink`ing starts from that baseline size. The shorthand value defaults to `flex-basis: 0%`. Using `auto` as a flex-basis tells the item to check for a width declaration (`width: 250px`).

### 4. In practice ...

In practice you will likely not be using complex values for `flex-grow`, `flex-shrink` or `flex-basis`. Generally, you’re most likely to use declarations like `flex: 1;` to make divs grow evenly and `flex-shrink: 0` to keep certain divs from shrinking.
