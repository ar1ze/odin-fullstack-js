# 📍 CSS Positioning

### Intermediate HTML and CSS Course

> While Flexbox and Grid are used for most layouts, the `position` property offers other powerful methods for placing elements in specific situations.

## 📖 Lesson Overview

-----

  - Learn to use **absolute**, **fixed**, and **sticky** positioning.
  - Understand the difference between each `position` value.

## 🗿 Static and Relative Positioning

-----

  - **`position: static`**: This is the default value for every element. The element flows into the page as it normally would. The `top`, `right`, `bottom`, and `left` properties have **no effect**.

  - **`position: relative`**: The element is positioned according to the normal flow of the document. However, you can then use `top`, `right`, `bottom`, and `left` to displace the element **relative to its normal position**. This does not affect the layout of other elements.

## 🛰️ Absolute Positioning

-----

  - **`position: absolute`**: An element is **removed from the normal document flow**. Other elements will behave as if it's not there.
  - It is positioned relative to its nearest **positioned ancestor** (an ancestor with a `position` value other than `static`). If no positioned ancestor exists, it is positioned relative to the initial containing block (often the `<html>` element).
  - **Use cases**:
      - Modals
      - Image captions
      - Icons on top of other elements

> **Disclaimer**: `position: absolute` has very specific use cases. It should **not** be used for entire page layouts. Prioritize Flexbox or Grid for layout.

## 📌 Fixed Positioning

-----

  - **`position: fixed`**: The element is **removed from the normal document flow**.
  - It is positioned relative to the **viewport** (the browser window).
  - It will stay in the same place even when the page is scrolled.
  - **Use cases**:
      - "Stuck" navigation bars
      - Floating chat buttons

## 🍯 Sticky Positioning

-----

  - **`position: sticky`**: A hybrid of `relative` and `fixed` positioning.
  - The element is treated as `relative` until it is scrolled past a specified offset (e.g., `top: 0`), at which point it becomes "stuck" and behaves like `position: fixed`.
  - It is **not** taken out of the normal document flow.
  - **Use cases**:
      - Section headings that stick to the top of the screen as you scroll through that section.

## ✍️ Assignment

-----

  - **Watch**: [Learn CSS Position In 9 Minutes](https://www.youtube.com/watch?v=jx5jmI0UlXU) by Web Dev Simplified for a good visual representation.
  - **Read**: [MDN's docs on `position`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/en-US/docs/Web/CSS/position%5D\(https://developer.mozilla.org/en-US/docs/Web/CSS/position\)) for conceptual details.
  - **Read**: [CSS trick's page on positioning](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/) for a different insight.
  - **Read**: [Kevin Powell's article on fixed vs. sticky](https://www.google.com/search?q=https://www.kevinpowell.co/article/css-position-fixed-vs-sticky/) to better understand the difference.

## ✅ Knowledge Check

-----

  - What is the difference between `static` and `relative` positioning?
  - What is `absolute` positioning useful for?
  - What is the difference between `fixed` and `sticky` positioning?

## 📚 Additional Resources

-----

  - **Article**: [Understand the CSS Position Property With Practical Examples](https://www.freecodecamp.org/news/css-position-property-explained/).
  - **Video**: [CSS positioning](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DS-tUT-8QY-E) from Slaying the Dragon for clear explanations and examples.