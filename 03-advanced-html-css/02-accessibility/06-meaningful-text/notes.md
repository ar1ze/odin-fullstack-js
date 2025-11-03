# 📝 Meaningful Text

### Introduction

Meaningful text is straightforward: users should be able to understand it immediately, even without surrounding context. A lack of it affects all users, but especially those who rely on assistive technologies.

-----

### Lesson Overview

  * Know how to provide meaningful links.
  * Know how to provide meaningful text in forms.
  * Know how to provide meaningful alt attributes for images.

-----

### 🔗 Links

Screen reader users often navigate by pulling up a list of all links on a page. A link with generic text like "Click here" is meaningless out of context.

**❌ Bad:**

```html
<a href='...'>Click here</a> to start your career in web development!
```

*A screen reader just announces, "Click here, link."*

**✅ Good:**

```html
Visit <a href='...'>The Odin Project</a> to start your career in web development!
```

*A screen reader announces, "The Odin Project, link."*

**Rules for links:**

  * Make text **brief (around 100 characters)** and clearly indicate where it redirects. Avoid "click here" or "this page".
  * If a link opens/downloads a file, **state the file type and size**.
    ```html
    <a href='...'>2021 Sign Up Statistics (PDF, 1MB)</a>
    ```
  * If a link opens in a new tab (`target="_blank"`), **indicate this to the user**.
    ```html
    <a href='...'>GitHub (opens in new tab)</a>
    ```

-----

### 📋 Forms

Providing meaningful errors in forms is crucial.

  * **❌ Bad (Not helpful):**
    ```html
    <div class='input-error'>Error: Invalid input.</div>
    ```
  * **✅ Better (Tells you *what*):**
    ```html
    <div class='input-error'>Error: Email is invalid.</div>
    ```
  * **✨ Best (Tells you *what* and *how to fix it*):**
    ```html
    <div class='input-error'>Error: 'JohnSmith@@test.com' is not valid. Example of a valid email: example@yourdomain.com.</div>
    ```

**Instructions:**

  * **Global instructions** (e.g., `* indicates a required field`) should be at the **top of the form**.
  * **Input-specific instructions** (e.g., password requirements) should be **alongside the input itself**.

-----

### 🖼️ Alternative Text

The `alt` attribute on `<img>` elements is crucial. Both of the following examples are valid, depending on the context:

**1. Decorative Images**

  * Use an **empty string (`alt=""`)** (a null value) for images that are purely decorative.
  * This tells screen readers to **ignore the image**.
  * **Never omit the `alt` attribute entirely**, as the screen reader might announce the confusing file name.
    ```html
    <img src='...' alt='' />
    ```

**2. Informative Images**

  * Use descriptive text for images that convey information.
  * The screen reader will announce the text (e.g., "Odin, graphic").
    ```html
    <img src='...' alt='Odin' />
    ```

-----

### 📚 Assignment

  * Read **Alternative Text - WebAIM** to learn when and how you should be adding alternative text for images based on the function of the image and the context surrounding it.

-----

### 🤔 Knowledge Check

  * What are three rules you should follow in order to provide meaningful links?
  * What information should you inform users of in order to provide meaningful error messages in forms?
  * When should you use the empty string/null value for the `alt` attribute?

-----

### 🔗 Additional Resources

  * **Making Accessible Links: 15 Golden Rules For Developers**
  * **Usable and Accessible Form Validation and Error Recovery**