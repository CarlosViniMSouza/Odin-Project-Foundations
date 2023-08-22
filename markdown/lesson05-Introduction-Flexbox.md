## 1. Introduction

As you’ll learn, there are many ways to move elements around on a web page. New methods have been developed over the years and older things have fallen out of style. Flexbox is a relatively new way of manipulating elements in CSS, and its debut was revolutionary.

Many resources put it near the end of their curriculum because it is somewhat new as a technology. But at this point, it has become the default way of positioning elements for many developers. Flexbox will be one of the most used tools in your toolbox, so why not learn it first?

## 2. Lesson Overview

<div>
  <ul>
    <li> 
      You will learn how to position elements using flexbox. 
    </li>
    <li>
      You will learn about flex containers and flex items.
    </li>
    <li>
      You will learn how to create useful components and layouts that go beyond just stacking and centering items.
    </li>
  </ul>
</div>

## 3. Before we get started

Flexbox layouts can get a little complicated. In a previous lesson, you learned how to inspect and debug things using your browser’s developer tools.

Those tools will be crucial for you in the following lessons. If something isn’t behaving the way you expect, inspecting it in the developer tools should be your first step every time.

Flexbox isn’t necessarily any more difficult than the other concepts that we’ve covered so far, but it does have a few more moving parts. It is going to be somewhat difficult to make use of any of the things you’re learning in these first lessons until you get to the end and can put it all together. As we go, do yourself a favor and play with all of the code examples.

## 4. Let's Flex! 

Flexbox is a way to arrange items into rows or columns. These items will flex (i.e. grow or shrink) based on some simple rules that you can define. To get started, let’s look at a simple demonstration.

We’ll get into exactly what’s going on here soon enough. But for now, let’s uncomment the two flex related CSS declarations in the above Codepen by removing the `/*` and `*/` tags surrounding them, then check out the result.

## 5. Flex containers and flex items

As you’ve seen, flexbox is not just a single CSS property but a whole toolbox of properties that you can use to put things where you need them. 

Some of these properties belong on the flex container, while some go on the flex items. This is a simple yet important concept.

A flex container is any element that has `display: flex` on it. A flex item is any element that lives directly inside of a flex container.

![img01](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/03.png)

![img02](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/04.png)

![img03](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/05.png)
