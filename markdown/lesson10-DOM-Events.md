## 1. Introduction

One of the most unique and useful abilities of JavaScript is its ability to manipulate the DOM. But what is the DOM, and how do we go about changing it?

## 2. Overview

1. Explain what the DOM is in relation to a webpage.

2. Explain the difference between a “node” and an “element”.

3. Explain how to target nodes with “selectors”.

4. Explain the basic methods for finding/adding/removing and altering DOM nodes.

5. Explain the difference between a “nodelist” and an “array of nodes”.

6. Explain what "bubbling" is and how it works.


## 3. DOM - Document Object Model

The **DOM (or Document Object Model)** is a tree-like representation of the contents of a webpage - a tree of *"nodes"* with different relationships depending on how they’re arranged in the HTML document.

```html
<div id="container">
    <div class="display"></div>
    <div class="controls"></div>
</div>
```

In the above example, the `<div class="display"></div>` is a “child” of `<div id="container"></div>` and a sibling to `<div class="controls"></div>`.

## 3.1. Targeting nodes with selectors

Let’s start with CSS-style selectors. In the above example, you could use the following selectors to refer to `<div class="display"></div>`:

1. `div.display`

2. `.display`

3. `#container > .display`

4. `div#container > div.display`

You can also use relational selectors with special properties owned by the nodes.

`OBS.: Remember the HTML code made previously (and it's below):`

```html
<div id="container">
    <div class="display"></div>
    <div class="controls"></div>
</div>
```

```js
const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display
```

## 4. DOM Methods

When your HTML code is parsed by a web browser, it is converted to the DOM as was mentioned above.

One of the primary differences is that these nodes are objects that have many properties and methods attached to them.

## 4.1. Query Selectors

1. `element.querySelector(selector)` -> returns a reference to the first match of selector.

2. `element.querySelectorAll(selector)` -> returns a "nodelist" with references to all matches of the selectors.

`There are several other, more specific queries, that offer potential (marginal) performance benefits, but we won't be going over them now.`

## 4.2. Element Creation

`document.createElement(tagName, [options])` - creates a new element of tag type tagName.

```js
const div = document.createElement('div');
```

## 4.3. Altering elements

When you have a reference to an element, you can use that reference to alter the element's own properties.

```js
const div = document.createElement('div');                     
// creates a new div referenced in the variable 'div'
```

## 4.4. Adding inline style

```js
div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white;');    
// adds several style rules
```

See DOM Enlightenment’s [section on CSS Style rules](https://domenlightenment.com/#6.2) for more info on inline styles.

## 4.5. Adding content (text/html)

```js
div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and inserts it in div

div.innerHTML = '<span>Hello World!</span>';                   
// renders the HTML inside div
```

Note that textContent is preferable for adding text, and innerHTML should be used sparingly as it can create security risks if misused.

```
Keep in mind that the JavaScript does not alter your HTML, but the DOM - your HTML file will look the same, but the JavaScript changes what the browser renders.

Alternatively, you can link the JavaScript file in this way:
```

```js
<head>
    <script src="js-file.js" defer></script>
</head>
```