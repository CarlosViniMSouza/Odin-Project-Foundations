## 1. Introduction

Let's go to JS

## 2. How to run JavaScript code

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>
</body>
</html>
```

Another way to include JavaScript in a webpage is through an external script. This is very similar to linking external CSS docs to your website.

```js
<script src="script.js"></script>
```

## 3. Variables

You can think of variables as simply "storage containers" for data in your code.

![img01](https://cdn.statically.io/gh/TheOdinProject/curriculum/d39eaf2ca95e80705f703bb218216c10508f5047/foundations/javascript_basics/fundamentals-1/imgs/00.png)

## 4. Numbers

Numbers are the building blocks of programming logic! In fact, it’s hard to think of any useful programming task that doesn’t involve at least a little basic math.

1. [This W3Schools lesson](https://www.w3schools.com/js/js_arithmetic.asp) followed by [this one](https://www.w3schools.com/js/js_numbers.asp), are good introductions to what you can accomplish with numbers in JavaScript.

2. [This MDN article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math) covers the same info from a slightly different point of view, while also teaching you how to apply some basic math in JavaScript.

3. Read through [this article](http://javascript.info/operators) about operators in Javascript.

## 5. Strings

Depending on what kind of work you’re doing, you might end up working more with pieces of text rather than numbers. A string is simply a piece of text … and is a fundamental building block of the language.

1. Read and code along with [yet another MDN tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings) on the topic.

2. Go through [this lesson](https://www.w3schools.com/js/js_string_methods.asp) to learn a bit more about what you can do with strings… be sure to take a peek at the String Reference page near the bottom.

3. Vocabulary time: a **method** is a bit of functionality built into the language or specific data types. In [the previous W3Schools exercise](https://www.w3schools.com/js/js_string_methods.asp), you’ve learned about a few methods that can be used on strings, such as `replace` and `slice`.

## 6. Conditionals

Now it’s time for the fun stuff ... So far, we haven’t done much with our programming that you couldn’t do with simple math skills.

1. Step one in learning about conditionals is making sure you have a good grasp on [comparisons](http://javascript.info/comparison).

2. [This tutorial](https://www.w3schools.com/js/js_if_else.asp) is a great first glance at conditionals in JavaScript.

3. [This tutorial](http://javascript.info/logical-operators) will teach you about logical operators.

## 7. Functions

1. [This lengthy MDN article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions) is a good place to start. Don't worry as there may be some functions that can be beyond the reach of this particular lesson, but do pay special attention to the sections on 'Function Scope'.

2. Read this article about [return values](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values).

3. Let's discuss parameters and arguments in the context of the following example function:

```js
function favoriteAnimal(animal) {
  return animal + " is my favorite animal!";
}

console.log(favoriteAnimal('Dog'));
```

In JavaScript, parameters are the items listed between the parentheses in the function declaration. 

Function arguments are the actual values we decide to pass to the function.

4. Next, read [this article](http://javascript.info/function-basics) from Javascript.info. We’ve mentioned this before, but JavaScript has changed a bit over the years and functions have recently received some innovation.

5. Now, read [this article](http://javascript.info/function-expressions) about functions in JavaScript to give you a little more context, and read [this article](http://javascript.info/arrow-functions-basics) for an introduction to a relatively new feature in modern JavaScript called the `arrow function`.

6. Finally, read [this article](https://www.javascripttutorial.net/javascript-call-stack/) about call stacks and how `return` works in the context of chained function calls.
