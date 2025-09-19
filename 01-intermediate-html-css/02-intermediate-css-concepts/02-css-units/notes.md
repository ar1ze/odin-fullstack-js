# 📏 CSS Units

### Intermediate HTML and CSS Course

> This lesson introduces the most important units used to define sizes in CSS, covering both absolute and relative types.

## 📖 Lesson Overview

-----

  - Learn the difference between **relative** and **absolute** units.
  - Understand when it is appropriate to use different units.

## 🧱 Absolute Units

-----

Absolute units are fixed and do not change based on context.

  - **`px` (pixels)**: The only absolute unit you should be using for web projects. It represents a single dot on the screen.
  - Other units like `in` (inches) and `cm` (centimeters) are better suited for print.

## 🌊 Relative Units

-----

Relative units are flexible and can change based on their context.

### `em` and `rem`

Both units relate to font size. **As a rule-of-thumb, prefer `rem`**.

  - **`1em`**: Equal to the font-size of the **current element's parent**. This can become complex to track as element nesting changes.

    > Example: If a parent's font-size is `16px`, then `4em` on a child element equals `64px`.

  - **`1rem`**: Equal to the font-size of the **root element** (`<html>`). This provides a consistent reference point across the entire page.

    > Using `rem` for font sizes is recommended for accessibility, as it respects a user's browser settings for readability.

### Viewport Units

These units are relative to the size of the browser viewport.

  - **`1vh`**: Equal to 1% of the viewport's **height**.
  - **`1vw`**: Equal to 1% of the viewport's **width**.
  - **Use Cases**: Ideal for creating elements that scale with the browser window, like full-height hero sections or full-screen app layouts.

## ✍️ Assignment

-----

  - **Read**: [CSS values and units](https://www.google.com/search?q=MDN+CSS+values+and+units) for a comprehensive list of all available units.
  - **Read**: [CSS units](https://www.google.com/search?q=CSS+units+em+rem+px) for an in-depth look at when to use `em`, `rem`, or `px`.
  - **Explore**: [Fun with Viewport Units](https://www.google.com/search?q=Fun+with+Viewport+Units) to see creative examples using `vh` and `vw`.

## ✅ Knowledge Check

-----

  - Why use `em` or `rem` for font-size instead of `px`?
  - What are some instances where you might want to use `vh` and `vw`?
  - What are some instances where you might want to use `px` instead of a relative unit?

## 🔗 Additional Resources

-----

  - **Watch**: [are you using the right CSS unit?](https://www.google.com/search?q=https://www.youtube.com/results%3Fsearch_query%3DKevin%2BPowell%2Bright%2BCSS%2Bunit) by Kevin Powell for his rules of thumb on choosing units.
  - **Watch**: [Learn CSS Units & When To Use Them](https://www.google.com/search?q=https://www.youtube.com/results%3Fsearch_query%3DSlaying%2BThe%2BDragon%2BLearn%2BCSS%2BUnits) from Slaying The Dragon for best practices.