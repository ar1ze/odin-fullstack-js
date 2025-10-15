### Knowledge Check Answers 🎯

-----

**Question: Are all CSS properties animatable?**

**Answer:** No, not all CSS properties are animatable.

**Why:** Only properties that can have a range of in-between values (like `color`, `width`, or `opacity`) can be transitioned smoothly. Properties with discrete, on/off values (like `display: none` vs. `display: block`) cannot be animated.

**Remember:** Think of a **dimmer switch** versus a **light switch**. You can transition a dimmer (`opacity`), but a light switch (`display`) is just on or off.

-----

**Question: What are the long and short-hand notations for transitions?**

**Answer:** The shorthand property is `transition`. The long-hand properties are `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Why:** The shorthand `transition` property allows you to define all four aspects of a transition in a single, more concise line of code.

**Example:**

```css
/* Shorthand */
transition: background-color 1s ease-out 0.25s;

/* Long-hand equivalent */
transition-property: background-color;
transition-duration: 1s;
transition-timing-function: ease-out;
transition-delay: 0.25s;
```

-----

**Question: What is the stacking context?**

**Answer:** A stacking context is the three-dimensional layering of elements on a webpage, determining how they overlap along the z-axis (depth).

**Why:** Certain CSS properties like `transform` and `opacity` create a new stacking context for an element. Within that context, the element and its children are layered independently of elements outside it.

**Remember:** Think of stacking contexts as **separate stacks of paper** on a desk. An element's `z-index` only matters within its own stack.

-----

**Question: Why do you need to keep an eye on repaints?**

**Answer:** You need to watch for excessive repaints because they can make your transitions slow, choppy, and resource-intensive.

**Why:** When you animate certain properties (especially those affecting layout or being in a complex stacking context), the browser has to recalculate and "repaint" not just your element, but potentially many others. For the smoothest performance, it's best to stick to transitioning `transform` and `opacity` when possible.