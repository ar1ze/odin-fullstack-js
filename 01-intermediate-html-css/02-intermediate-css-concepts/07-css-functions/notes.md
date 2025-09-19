# ⚙️ CSS Functions

### Intermediate HTML and CSS Course

> CSS functions are reusable pieces of code that perform specific tasks. They use a `function()` syntax, where arguments are passed inside the parentheses, like `rgb(0, 42, 255)`. While you can't create your own, CSS provides many powerful built-in functions.

## 📖 Lesson Overview

-----

  - Recognize the basic parts of a CSS function.
  - Learn about the **`calc()`**, **`min()`**, **`max()`**, and **`clamp()`** math functions and how to use them for responsive design.

## ➗ Responsive Math Functions

-----

These functions are especially useful for creating fluid and responsive layouts.

### `calc()`

The `calc()` function performs a calculation to be used as a property value.

  - **Key Features**:
      - **Mix Units**: You can freely mix different units in one calculation, like `calc(100vh - 80px)`.
      - **Nesting**: You can nest `calc()` functions inside each other for more complex math.
  - **Example**:
    ```css
    :root {
      --header-height: 3rem;
      --footer-height: 40px;
      --main-height: calc(100vh - (var(--header-height) + var(--footer-height)));
    }
    ```

### `min()`

The `min()` function selects the **smallest** value from a list of comma-separated arguments. You can think of it as setting a **maximum boundary**.

  - **Use Case**: Ensure an element doesn't get *too big*.
  - **Example**:
    ```css
    /* The width will be 100% of its parent, but will not exceed 150px. */
    width: min(150px, 100%);
    ```

### `max()`

The `max()` function selects the **largest** value from a list of comma-separated arguments. You can think of it as setting a **minimum boundary**.

  - **Use Case**: Ensure an element doesn't get *too small*.
  - **Example**:
    ```css
    /* The width will try to be 50% of its parent, but will not shrink below 100px. */
    width: max(100px, 50%);
    ```

### `clamp()`

The `clamp()` function "clamps" a value between an upper and lower bound. It takes three arguments: a minimum value, a preferred value, and a maximum value. `clamp(MIN, IDEAL, MAX)`.

  - **Use Case**: Create fluid typography or sizing that scales with the viewport but has defined limits.
  - **Example**:
    ```css
    /* Font size will try to be 80vw, 
    but will not shrink below 320px or grow larger than 60rem. 
    */
    h1 {
      font-size: clamp(320px, 80vw, 60rem);
    }
    ```

## ✍️ Assignment

-----

  - **Browse**: Look at the [complete list of CSS functions on MDN](https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Functions) to see what's possible.
  - **Read**: Dive deeper into [min(), max(), and clamp()](https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions%23math_functions) in action.

## ✅ Knowledge Check

-----

  - What are the four CSS math functions covered in this lesson?
  - How do we use these math functions in our CSS?
  - How can CSS functions help make websites and applications more responsive?

## 📚 Additional Resources

-----

  - **Video**: [Steve Griffith’s video on CSS Math functions](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Dh-6Y-q55q4I) gives a good visual overview.
  - **Article**: Ahmad Shadeed writes about [real-world use cases for CSS Math functions](https://www.google.com/search?q=https://ishadeed.com/article/css-math-functions/).
  - **Article**: Explore specific use cases for [min, max, clamp and calc](https://www.google.com/search?q=https://css-tricks.com/specific-use-cases-for-min-max-and-clamp/).