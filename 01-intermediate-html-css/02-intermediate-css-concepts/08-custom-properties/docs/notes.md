# 🎨 Custom Properties (CSS Variables)

### Intermediate HTML and CSS Course

> Custom properties, also known as CSS variables, are a powerful tool that allows you to define a CSS value once and reuse it throughout your stylesheet. This makes your code easier to maintain and is incredibly useful for creating themes (like light and dark modes).

## 📖 Lesson Overview

-----

  - How to **declare** and **use** custom properties.
  - Understand the **scope** of custom properties.
  - How to use the **`:root`** selector for global variables.
  - How to create themes using variables and **media queries**.

## 🔧 How to Use Custom Properties

-----

The syntax is straightforward and involves two parts: declaring the variable and using it.

### Declaration and Usage

  - **Declare** a custom property inside a selector by starting it with a double hyphen (`--`). The name is case-sensitive and must use kebab-case.
  - **Use** the custom property with the `var()` function.

<!-- end list -->

```css
.error-modal {
  /* Declaration */
  --color-error-text: red;
  --modal-border: 1px solid black;

  /* Usage */
  color: var(--color-error-text);
  border: var(--modal-border);
}
```

### Fallback Values

The `var()` function can accept a second optional argument: a **fallback value**. This value is used if the custom property is invalid or not defined.

```css
/* If --primary-color is not defined, 'black' will be used. */
background-color: var(--primary-color, black);
```

## 🌍 Scope and the `:root` Selector

-----

  - **Scope**: A custom property is only available within the selector it is declared in and to its **descendants**. It follows the rules of inheritance.

  - **Global Scope with `:root`**: To make a custom property available globally (to all elements), declare it inside the **`:root`** pseudo-class. `:root` is essentially the `<html>` element but with higher specificity.

<!-- end list -->

```css
:root {
  --main-color: red;
}

.cool-paragraph {
  /* This works because .cool-paragraph is a descendant of :root */
  color: var(--main-color);
}
```

## 🌓 Creating Themes

-----

Custom properties are perfect for theming because you can redefine them in different contexts.

### Manual Theme Toggling

You can define different sets of variables based on a class applied to the `:root` (or `<body>`) element.

```css
/* Default (Light Theme) */
:root {
  --background-color: white;
  --text-color: black;
}

/* Dark Theme */
:root.dark {
  --background-color: #222;
  --text-color: white;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}
```

### Automatic Theming with Media Queries

Use the **`prefers-color-scheme`** media query to automatically apply a theme based on the user's OS or browser setting.

```css
/* Default (light) theme values */
:root {
  --background-color: white;
  --text-color: black;
}

/* Redefine variables if user prefers a dark scheme */
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #222;
    --text-color: white;
  }
}
```

## ✍️ Assignment

-----

  - **Watch**: [This video on CSS custom properties](https://www.youtube.com/watch?v=2an6-WVPuJU) for a great introduction.
  - **Read**: [MDN’s Using CSS custom properties page](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), starting from the "Inheritance of custom properties" section.
  - **Read**: [The CSS Tricks article](https://css-tricks.com/a-complete-guide-to-custom-properties/) for a comprehensive overview.

## ✅ Knowledge Check

-----

  - How would you declare a custom property with a name of `text-color`?
  - How would you access a custom property with a name of `background-color`?
  - Where would you declare a custom property to have its scope be global?
  - How can you apply styles based on a user's OS theme preference?

## 📚 Additional Resources

-----

  - **Video**: [Using CSS custom properties](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DPHO6TBq_wec) by Kevin Powell shows neat ways to use them.