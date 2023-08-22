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

