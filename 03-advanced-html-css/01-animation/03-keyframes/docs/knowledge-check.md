### Knowledge Check Answers 🎯

-----

**Question: What are the long and short-hand notations for CSS animations?**

**Answer:** The shorthand property is `animation`. The long-hand properties include `animation-name`, `animation-duration`, `animation-iteration-count`, and `animation-direction`, among others.

**Why:** The `animation` shorthand allows you to define all aspects of an animation in a single, concise line, while the long-hand properties give you more explicit control over each individual setting.

**Example:**

```css
/* Shorthand notation */
#ball {
  animation: 2s change-color infinite alternate;
}

/* Long-hand equivalent */
#ball {
  animation-duration: 2s;
  animation-name: change-color;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

**Remember:** Shorthand is the **summary**, while long-hand is the **detailed list**.

-----

**Question: How do you add keyframes to an animation?**

**Answer:** You add keyframes using the `@keyframes` at-rule, which defines the styles for different points (or "stops") in the animation's timeline using percentages.

**Why:** The `@keyframes` rule is linked to an element via the `animation-name` property. It allows you to create complex, multi-step animations by specifying what the element should look like at various stages of the animation cycle.

**Example:**

```css
@keyframes change-color {
  /* `from` is an alias for 0% */
  from {
    background-color: red;
  }
  
  50% {
    transform: scale(2);
    background-color: blue;
  }

  /* `to` is an alias for 100% */
  to {
    background-color: green;
  }
}
```

**Remember:** Think of `@keyframes` as defining the **scenes** 🎬 in your animation's movie timeline.

-----

**Question: When would you use an animation over a transition (and vice versa)?**

**Answer:** Use an **animation** for complex, multi-step sequences or for effects that loop continuously without a user trigger. Use a **transition** for simple, two-state changes that are triggered by an event like `:hover`.

**Why:** Animations provide much more flexibility with multiple keyframes and can run automatically. Transitions are simpler and are specifically designed for smooth changes between a start state and an end state.

**Example:**

  * **Animation:** A loading spinner that rotates indefinitely.
  * **Transition:** A button that smoothly changes color when you hover over it.

**Remember:** A **transition** is a simple trip from **A to B**. An **animation** is a full **road trip** with multiple stops (keyframes).