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

#### 4.1. Universal Selector

The universal selector will select elements of anu type, hence the name "universal", and the syntax for it's a simple asterisk.

```CSS
* {
	color: purple;
}
```

#### 4.2. Type Selectors

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

#### 4.3. Class Selectors

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

#### 4.4. ID Selectors

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

#### 4.5. Grouping Selectors

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

#### 4.6. Chaining Selectors

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

#### 4.7. Descendant combinator

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

## 6. Properties to get started with

There are some CSS properties that you're going to be using all the time, or at the very least more often than not. Learning the following properties will simply be enough to help get you started.

#### 6.1. Color and Background-color

1. `color`: Set an element text color;
2. `background-color`: Set the background color of an element;

```CSS
.element {
	color: #1100ff;           /* example 01 - HEX example*/
	color: rgb(100, 0, 127);  /* example 02 - RGB example */
	color: hsl(15, 82%, 56%); /* example 03 - HSL example */
}
```

`Trick`: Take a quick look at [CSS Legal Color Values](https://www.w3schools.com/cssref/css_colors_legal.asp) to see how you can adjust the opacity of these colors by adding an alpha value.

#### 6.2. Typography basics and text-align

1. `font-family`: Set a value that determine what font an element uses. 
	Like `"Times New Roman"` (your should use quotes when have space between spaces) or `sans-serif`  (generic family names, don't use quotes).
	
2. `font-size`: Set the size of font. 
	Example: `font-size: 24px`
3. `font-weight`: affects the boldness of text, can be a number between 1 and 1000 (but you can use words predefined). 
	Examples: `font-weight: bold` | `font-weight: 500`
4. `text-align`: This will align text horizontally within an element. 
	Example: `text-align: center`

#### 6.3. Image height and width

By default, an `<img>` element's `height` and `width` ready values. For modify, use a value of "auto" for the `height` property and adjust the `width` value:

```CSS
img {
	height: auto;
	width: 150px;
}
```

For example, if an image’s original size was 500px height and 1000px width, using the above CSS would result in a height of 250px.

## Adding CSS to HTML

Exist three ways of link CSS to HTML: By "External CSS" (using meta links at `<head>`), and "Internal CSS" (using the tag `<style>`), and the "Inline CSS" (applying the CSS properties inside of HTML tags)

```
📑 NOTE: 

As I know how to use the all forms, I'll skip this topic, and go to the next one!
```
