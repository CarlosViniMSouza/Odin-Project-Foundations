## 1. Overview

Now, it’s time to combine our knowledge of selectors with the *C* of *css* - the cascade.

## 2. Lesson Overview

<ul>
	<li> What cascade does </li>
	<li> Specificity and combining css selectors </li>
	<li> How inheritance affects certain porperties </li>
</ul>

## 3. The cascade of css

The cascade is what determines which rules actually get applied to our html.

There are different factors that the cascade uses to determine this.

`We will examine three of these factors, which will hopefully help you avoid those frustrating "I hate css" moments.`

### 4. Specificity

A css declaration that is more specific will take precedence over less specific ones.

There is an execution order of the css in each part of the html involved in the styling, this order is:

1. ID Selectors `(most specific selector)`
2. Class Selectors
3. Type Selectors

```
📑 NOTE:

The specificity will only be taken into account when an element has multiple, conflicting declarations targeting it, sort of like a tie-braker.
```

Let's see a quick example about of how this works in practice:

```html
<!-- index.html -->

<div class="main">
	<div class="list subsection"></div>
</div>
```

```css
/* rule 1 */
.subsection {
	color: blue;
}

/* rule 2 */
.main .list {
	color: red;
}
```

In the example above, both rules are using only class selectors, but rule 2 is more specific because it is using more class selectors, so the `color: red;` declaration would take precedence.

Now, let's change things a little bit:

```html
<!-- index.html -->

<div class="main">
	<div class="list" id="subsection"></div>
</div>
```

```css
/* rule 1 */
#subsection {
	color: blue;
}

/* rule 2 */
.main .list {
    color: red;
}
```

In the example above, despite rule 2 having more class selectors than ID selectors, rule 1 is more specific because ID beats class.

### 5. Inheritance

Inheritance refers to certain css properties that, when applied to an element, are inherited by that element's descendants, even if we don't explicitly write a rule for those descendants. Usually applied in the `color, font-size, font-family`, etc.

The exception to this is when directly targeting an element, as this always beats inheritance:

```html
<!-- index.html -->

<div id="parent">
	<div class="child"></div>
</div>
```

```css
/* styles.css */

#parent {
	color: red;
}

.child {
	color: blue;
}
```

Despite the `parent` element having a higher specificity with an ID, the `child` element would have the `color: blue` style applied since that declaration directly targets it, while `color: red` from the parent is only inherited.

### 6. Rule order

The final factor, the end of the line, the tie-breaker of the tie-breaker.Let's say that after every other factor has been taken into account, there are still multiple conflicting rules targeting an element. See this example below:

```css
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```

For an element that has both the `alert` and `warning` classes, the cascade would run through every other factor, including inheritance (none here) and specificity (neither rule is more specific than the other).
