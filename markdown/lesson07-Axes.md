## 1. Introduction

Let’s see how the orientation of items within a flex container can be controlled using the `flex-direction` property.

## 2. Lesson Overview

This section contains a general overview of topics that you will learn in this lesson.
<ul>
  <li> You’ll learn about the 2 “axes” of a flex container. </li>
  <li> You’ll learn how to change those axes to arrange your content in columns instead of rows. </li>
</ul>

## 3. Axes

No matter which direction you’re using, you need to think of your flex-containers as having 2 axes: the main axis and the cross axis. It is the direction of these axes that changes when the `flex-direction` is changed. In most circumstances, `flex-direction: row` puts the main axis horizontal (left-to-right), and `column` puts the main axis vertical (top-to-bottom).

See the below example:

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
  /* flex-direction: column; */
}

/* this selector selects all divs inside of .flex-container */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 80px;
  flex: 1 1 auto;
}
```

One thing to note is that in this example, `flex-direction: column` would not work as expected if we used the shorthand `flex: 1`. The reason for this is that the flex shorthand expands `flex-basis` to **0**, which means that all `flex-grow`ing and `flex-shrink`ing would begin their calculations from **0**. 

Empty divs by default have 0 height, so for our flex items to fill up the height of their container, they don’t actually need to have any height at all.

The example above fixed this by specifying `flex: 1 1 auto`, telling the flex items to default to their given `height`. We could also have fixed it by putting a height on the parent `.flex-container`, or by using `flex-grow: 1` instead of the shorthand.
