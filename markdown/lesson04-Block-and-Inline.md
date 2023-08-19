## 1. Introduction

CSS has two box types: `block` and `inline` boxes, which determine element behavior and interaction. The `display` property controls how HTML elements appear on the webpage.

## 2. Lesson Overview

<div>
	<ul>
		<li> 
			Learn about "Normal Flow" 
		</li>
		<li> 
			Differences between <code>block</code> and <code>inline</code> elements 
		</li>
		<li> 
			Which elements default to <code>block</code> and which elements default to <code>inline</code>
		</li>
		<li> 
			Learn what divs and spans are 
		</li>
	</ul>
</div>

[scrimba](https://scrimba.com/)

## 3. Block vs Inline

Most of the elements that you have learned about so far are block elements. In other words, their default style is `display: block`.

Inline elements, however, do not start on a new line. They appear in line with whatever elements they are placed beside. A clear example of an inline element is a link, or `<a>` tag.

### The middle ground `inline-block`

`inline-block` elements behave like inline elements, but with block-style padding and margin.

`display: inline-block` is a useful tool to know about, but in practice, you’ll probably end up reaching for flexbox more often if you’re trying to line up a bunch of boxes.

*Flexbox* will be covered in-depth in the next lesson.

## 4. Divs and Spans

We can’t talk about block and inline elements without discussing divs and spans. All the other HTML elements we have encountered so far give meaning to their content.

`Example`: Paragraph elements tell the browser to display the text it contains as a paragraph.

Having elements like this available to us is a lot more useful than it may first appear. We will often need elements that serve no other purpose than to be “hook” elements. 

We can give an id or class to target them for styling with CSS.

Div is a block-level element by default. It is commonly used as a container element to group other elements. Divs allow us to _divide_ the page into different blocks and apply styling to those blocks [See a example on codepen.io](https://codepen.io/TheOdinProjectExamples/pen/KKXXbwR)

Span is an inline-level element by default. It can be used to group text content and inline HTML elements for styling and should only be used when no other semantic HTML element is appropriate. [See a example on codepen.io](https://codepen.io/TheOdinProjectExamples/pen/abLLPor)
