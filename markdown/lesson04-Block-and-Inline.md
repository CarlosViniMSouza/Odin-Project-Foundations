## 1. Introduction

CSS has two box types: `block` and `inline` boxes, which determine element behavior and interaction. The `display` property controls how HTML elements appear on the webpage.

## 2. Lesson Overview

<div>
	<ul>
		<li> Learn about "Normal Flow" </li>
		<li> Differences between <code>block</code> and <code>inline</code> elements </li>
		<li> Which elements default to <code>block</code> and which elements default to <code>inline</code> </li>
		<li> learn what divs and spans are </li>
	</ul>
</div>
[scrimba](https://scrimba.com/)

## 3. Block vs Inline

Most of the elements that you have learned about so far are block elements. In other words, their default style is `display: block`.

Inline elements, however, do not start on a new line. They appear in line with whatever elements they are placed beside. A clear example of an inline element is a link, or `<a>` tag.

### The middle ground `inline-block`

`Inline-block` elements behave like inline elements, but with block-style padding and margin.

`display: inline-block` is a useful tool to know about, but in practice, you’ll probably end up reaching for flexbox more often if you’re trying to line up a bunch of boxes.

*Flexbox* will be covered in-depth in the next lesson.
