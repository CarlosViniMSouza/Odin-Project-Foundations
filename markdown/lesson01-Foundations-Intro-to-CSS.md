## 1. Introduction

The previous lesson, you learned about HTML and how to use the tags for show elements on screen. The next step is to make that structure look good with some *style*, wich is exactly what CSS is for.

## 2. Lesson overview

<ul>
	<li>Add style to HTML using CSS</li>
	<li>Understand classes and ID attributes</li>
	<li>Add style to specific elements</li>
</ul>

## 3. Basic Syntax

At the most basic level of CSS syntax, you'll work  *'property': 'value'* pair ... See the below image

![img01-css-syntax](https://cdn.statically.io/gh/TheOdinProject/curriculum/05ce472eabf8e04eeb2cc9139e66db884074fd7d/foundations/html_css/css-foundations/imgs/00.jpg)
```markdown
📑 NOTE

A <div> is one of the basic HTML elements. It's simply an empty container.

In general, use other tags such as <h1>, <h4>, <p>, <img>, etc; inside a <div>
```

## 4. Selectors

`Explication:` Selectors simply refer to the HTML elements to which CSS rules apply.
They're what is actually being "selected" for each rule.

Here are some examples to refers to on 'How to manipulate selectors in CSS'

### 4.1. Universal Selector

The universal selector will select elements of anu type, hence the name "universal", and the syntax for it's a simple asterisk.

```CSS
* {
	color: purple;
}
```

### 4.2. Type Selectors

A type selector will select all elements of the given element type, and the syntax is just the name of the element:

```HTML
<!-- index.html -->

<div>Hello, World!</div>
```

```CSS
/* styles.css */

div {
	color: white;
}
```

### 4.3. Class Selectors

Class selectors will select all elements with the given class, which is just an attribute you place on an HTML element.

See a example for understand:

```HTML
<!-- index.html -->

<div class="alert-text"> Please, Agree to our Terms of Service! 🙏 </div>
```

```CSS
/* styles.css */

.alert-text {
	color: red;
}
```

`Note:` The syntax for class selectors, a period immediately followed by the case-sensitive value of the class attribute.

`Another thing`: You can do with the class attribute is to add multiple classes to a single element as a space-separated list, such as `class="alert-text severe-alert"`.

### 4.4. ID Selectors

ID Selectors are similar to class selectors.
The major difference between classes and IDs, is that an element can only have one ID!

```HTML
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
```

```CSS
/* styles.css */

#myParagraph {
	backgroud-color: gray;
}
```

For IDs, instead of a period, we use a hashtag immediately followed by the case-sensitive value of the ID attribute.

### 4.5. Grouping Selectors

What if we have two groups of elements that share some of their style declarations?

```CSS
.read, .unread {
	color: white;
	background-color: black;
	font-family: 'Times New Roman';
	font-size: 12px;
}
```

Both our `.read` and `.unread` selectors share the `color: white;` and `background-color: black;` declarations; but otherwise have several of their own unique declarations.

### 4.6. Chaining Selectors

Another way to use selectors is to chain them as a list without any separation.

```HTML
<!-- index.html -->

<div>
  <div class="subsection header"> Latest Posts </div>
  <p class="subsection preview"> This is where a preview for a post might go. </p>
</div>
```

We have two elements with the subjection class that have some sort of unique styles.

```CSS
/* styles.css */

.subsection.header {
	color: write;
	background-color: green;
}
```

This syntax basically works for chaining any combination of selectors, except for chaining more than one [type selector](https://www.theodinproject.com/lessons/foundations-intro-to-css#type-selectors) 

### 4.7. Descendant combinator

Combinators allow us to combine multiple selectors differently than either grouping or chaining them, as they show a relationship between the selectors.

So something like `.ancestor .child` would select an element with the class `child` if it has an ancestor with the class `ancestor`. 

Another way to think of it is `child` will only be selected if it is nested inside of `ancestor`, no matter how deep.

```HTML
<!-- index.html -->

<div class="ancestor">
	<!-- A -->
	<div class="contents">
		<!-- B -->
	    <div class="contents">
			<!-- C -->
		</div>
	</div>
</div>

<div class="contents"></div>
<!-- D -->
```

```CSS
/* styles.css */

.ancestor, .contents {
	margin: 0 auto;
	padding: 24px; 
}
```

In the above example, the first two elements with the `contents` class (B and C) would be selected, but that last element (D) wouldn’t be. Was your guess correct?

There’s really no limit to how many combinators you can add to a rule, so `.one` `.two` `.three` `.four` would be totally valid.

## 5. Order Matters!

When two selectors have the same level of specificity, the rule that is defined last has the most precedence; that is, the last rule overrides any rules before it.

```CSS
/* styles.css */

.first_declared, .last_declared {
	background-color: rgb(200, 50, 150);
	font-weight: 800;
}
.first_declared {
	color: rgb(50, 50, 200);
	font-size: 32px;
}
.last_declared {
	font-size: 14px;
	font-weight: 800;
}
```

In the above example, the selector `last_declared` would override the `first_declared` selector.
