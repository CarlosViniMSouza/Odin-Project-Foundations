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

```CSS
* {
	color: purple;
}
```

### 4.2. Type Selectors

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

### 4.4. ID Selectors

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

### 4.5. Grouping Selectors

```CSS
.read, .unread {
	color: white;
	background-color: black;
	font-family: 'Times New Roman';
	font-size: 12px;
}
```

### 4.6. Chaining Selectors

```HTML
<!-- index.html -->

<div>
  <div class="subsection header"> Latest Posts </div>
  <p class="subsection preview"> This is where a preview for a post might go. </p>
</div>
```

```CSS
/* styles.css */

.subsection.header {
	color: write;
	background-color: green;
}
```

### 4.7. Descendant combinator

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
```

```CSS
/* styles.css */

.ancestor, .contents {
	margin: 0 auto;
	padding: 24px; 
}
```


