# ♿ WAI-ARIA

### Introduction

-----

Previous lessons were just the tip of the iceberg. WAI-ARIA introduces attributes that make websites even more accessible by modifying the **semantics and context** of elements. This gives you greater control over how assistive technologies perceive them. This lesson will cover two key attributes.

### 📝 Lesson Overview

-----

  * Know the purpose of WAI-ARIA.
  * Know what ARIA *can’t* do.
  * Understand the five rules of ARIA use.
  * Understand what the accessibility tree is.
  * Understand the three ARIA attributes that can add labels to elements.
  * Understand what the `aria-hidden` attribute does.

### 🤔 What is WAI-ARIA?

-----

WAI-ARIA stands for **Web Accessibility Initiative’s Accessible Rich Internet Applications** specification. Its purpose is to define a way to make web content more accessible when native HTML is unable to do so. Think of ARIA as filling in the accessible gaps left by HTML.

It’s important to note that ARIA can only modify the semantics or context of an element.

**ARIA *can’t*:**

  * modify an element’s appearance,
  * modify an element’s behavior,
  * add focusability, or
  * add keyboard event handling.

When you use ARIA, you will usually have to take additional steps to add any missing functionality (like adding `tabindex` and event listeners to a `<div>` "button").

### 📜 The Five Rules of ARIA

-----

No ARIA is better than bad ARIA. The WCAG provides five rules for using ARIA:

1.  **Always use native HTML elements and attributes over ARIA when possible.**
2.  Never change native semantics, unless you have no other choice.
3.  All interactive ARIA controls must be usable with a keyboard.
4.  Never use `role='presentation'` or `aria-hidden='true'` on focusable elements.
5.  All interactive elements must have an accessible name.

### 🌳 The Accessibility Tree

-----

The accessibility tree is based on the DOM, but it contains only the accessibility-related information used by assistive technologies. ARIA works by modifying the properties of the objects in this tree.

We will focus on two properties:

  * **Name:** Also known as the “accessible name”. This is what assistive technologies announce (e.g., text content, `<label>`, `alt` attribute).
  * **Description:** What assistive technologies announce *in addition to* the accessible name.

### 🏷️ ARIA Labels

-----

ARIA labels help assistive technology users by overriding native labels or providing extra descriptive text.

#### `aria-label`

The `aria-label` attribute **overrides any native label** of an element and modifies its `name` property in the accessibility tree.

  * It is best used when an element doesn't have a native label.
  * The string value becomes the element's accessible name.
  * **Note:** It does not affect some elements, like `<div>` or `<span>`.

A common use is for "close" buttons that only have an "X":

```html
<button type='button' aria-label='Close menu'>X</button>
```

  * A screen reader would announce, “Close menu, button” instead of the meaningless, “X, button”.

You can also use it to distinguish landmark elements:

```html
<nav aria-label='main navigation'>...</nav>
```

  * A screen reader would announce, “Main navigation, navigation landmark”.

> **Warning:** Do not use `aria-label` to try and fix how a screen reader pronounces a word. It may "fix" it for one technology but break it for another (like a braille reader).

#### `aria-labelledby`

This attribute **overrides both the native label AND the `aria-label` attribute**.

  * Its value is one or more `id` references to other elements.
  * The accessible name is created by concatenating the text content of the referenced elements.
  * An element can reference itself.
  * Even if the labeling element is visually hidden, it will still be used for the accessible name.

<!-- end list -->

```html
<h2 id='label'>Shirts</h2>

<button type='button' id='shop-btn' aria-labelledby='label shop-btn'>Shop Now</button>
```

  * A screen reader would announce, “Shirts, shop now, button”. This makes multiple "Shop Now" buttons on a page unique.

> **Note:** `aria-labelledby` does *not* provide the same functionality as a `<label>` (e.g., clicking the label does not focus the input). You must add this behavior with JavaScript.

#### `aria-describedby`

This attribute modifies the **description property** in the accessibility tree.

  * It provides *additional* descriptive text that is announced *after* the element's accessible name.
  * Like `aria-labelledby`, it works by referencing one or more `id`s.

<!-- end list -->

```html
<label>Password:
  <input type='password' aria-describedby='password-requirements' />
</label>

<span id='password-requirements'>Password must be at least 10 characters long.</span>
```

  * When the input receives focus, a screen reader would announce, “Password, edit protected, password must be at least ten characters long.”

### 🙈 Hiding Content from the Accessibility Tree

-----

You can use `aria-hidden="true"` to hide elements from the accessibility tree while keeping them visually visible. This is useful for decorative elements like icons inside buttons.

```html
<button type='button'>
  <span class='material-icons'>add</span> Add Book
</button>
```

  * A screen reader would announce, “Add add book, button”.

<!-- end list -->

```html
<button type='button'>
  <span class='material-icons' aria-hidden='true'>add</span> Add Book
</button>
```

  * A screen reader would correctly announce, “Add book, button”.

> **Warning:**
>
>   * When you set `aria-hidden="true"` on an element, **all of its children are also hidden** from the accessibility tree.
>   * **Never** use `aria-hidden="true"` on a focusable element. This would cause nothing to be announced when the element receives focus, confusing keyboard and screen reader users.

### 🤔 Knowledge Check

-----

  * What purpose does WAI-ARIA serve?
  * What are the four things ARIA *can’t* do?
  * What are the five rules of ARIA?
  * What is the accessibility tree?
  * What are the differences between the three ARIA labels?
  * What does the `aria-hidden` attribute do?

### 🔗 Additional Resources

-----

  * **An in-depth guide to ARIA roles:** Covers altering element semantics.
  * **ARIA live regions:** Incredibly useful for having dynamic updates announced by assistive technologies.
  * **ARIA, Accessibility APIs and coding like you give a damn:** A 30-minute video.
  * **Accessibility Fundamentals with Rob Dodson:** A 30-minute video covering the accessibility tree, ARIA, and semantic HTML.