# ✨ Transitions

## 📝 Introduction

CSS transitions allow you to animate a property change from an element's **initial state** to an **end state** over a period of time, creating smooth and slick transformations instead of abrupt changes.

## 📚 Lesson Overview

  * What a CSS transition is and when to use it.
  * Which CSS properties are animatable and which are not.
  * How to ensure your transitions are smooth and performant.

## ⚙️ How Transitions Work

Transitions are defined using the `transition` property, which is shorthand for four individual properties. A transition is triggered when a property's value changes, often due to a pseudo-class (like `:hover`) or a class being added/removed by JavaScript.

### Longhand Properties

  * `transition-property`: The CSS property to be transitioned (e.g., `background-color`, `transform`).
  * `transition-duration`: How long the transition should take (e.g., `1s`).
  * `transition-timing-function`: The speed curve of the transition (e.g., `ease-out`, which starts fast and slows down).
  * `transition-delay`: The delay before the transition starts (e.g., `0.25s`).

<!-- end list -->

```css
button {
  transition-property: background-color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
  transition-delay: 0.25s;
}
```

### Shorthand Property

You can combine all the properties into a single `transition` declaration.

```css
button {
  background-color: white;
  /* property | duration | timing-function | delay */
  transition: background-color 1s ease-out 0.25s;
}

button:hover {
  background-color: black;
}
```

## 🚀 Performance

While generally performant, there are two key concepts to keep in mind for smooth animations:

1.  **Stacking Context**: This refers to how elements are layered on the z-axis. Certain properties, like `transform` and `opacity`, create a new stacking context. When you animate a property within a stacking context, the browser might have to **repaint** not just the animated element, but also every element layered on top of it, which can cause performance issues ("jank").

2.  **Best Properties to Animate**: For the absolute best performance, you should primarily animate `opacity` and `transform`. Changes to these properties are less "expensive" for the browser to process than properties like `background-color` or `width`, which can trigger costly repaints and layout recalculations.

## 💻 Assignment

  * Read the MDN article on using CSS transitions.
  * Read about stacking context.
  * Learn about creating performant CSS animations and check the CSS Triggers website.
  * Read the interactive guide to transitions.
  * Learn how to debug repaint issues.

## 🧠 Knowledge Check

  * Are all CSS properties animatable?
  * What are the longhand and shorthand notations for transitions?
  * What is the stacking context?
  * Why do you need to keep an eye on repaints?

## 🔗 Additional Resources

  * For a deeper dive, check out the MDN article on the stacking context.
  * Explore custom timing functions like `cubic-bezier()` with the CSS Cubic Bezier Generator.