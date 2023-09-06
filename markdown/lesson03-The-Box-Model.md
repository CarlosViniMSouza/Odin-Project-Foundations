## 1. Introduction

Now that you understand the basic syntax of HTML and CSS, we’re going to get serious. The most important skills you need to master with CSS are _positioning_ and _layout_.

Learning to position elements on a webpage is not that difficult once you understand just a few key concepts.

## 2. Lesson Overview

<ul>
	<li> You’ll learn all about the box model. </li>
	<li> You’ll learn how to make sure elements are just the right size with margin, padding, and borders </li>
</ul>

For a more interactive explanation and example, try the following Scrim (let us know what you think of these):

[scrimba](https://scrimba.com/scrim/cof3d488184abe24ec6258ab4)

## 3. The box model

The first important concept that you need to understand to be successful in CSS is the box model. It isn’t complicated, but skipping over it now will cause you much frustration down the line.

Every single thing on a webpage is a rectangular box. These boxes can have other boxes in them and can sit alongside one another.

![img01](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/css-foundations/the-box-model/imgs/boxes.png)

OK, so there might be some circles in the above image… but when it comes to layout, they fit together like rectangular boxes and not circles.

The only real complication here is that there are many ways to manipulate the size of these boxes, and the space between them, using `padding`, `margin`, and `border`.

1. `padding`: Increases the space between the border of a box and the content of the box.
2. `margin`: Increases the space between the borders of a box and the borders of adjacent boxes.
3. `border`: Adds space between the margin and the padding.

Image to represent the explanation:

![img02](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/css-foundations/the-box-model/imgs/box-model.png)
