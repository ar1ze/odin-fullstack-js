# 🏛️ Semantic HTML

### Introduction

While `<div>` and `<span>` elements are useful generic containers, they aren't always accessibility-friendly. It's crucial to check if a more appropriate, semantic element exists and if you're using it correctly.

-----

### 🤔 The Importance of Semantics

In terms of accessibility, semantic HTML is vital because it provides **meaning and context**.

  * **Semantically Neutral Elements:** `<div>` and `<span>` have no semantic meaning and provide no context to assistive technologies. They are still perfectly fine for use as generic containers, such as for layouts.
  * **Semantic Elements:** A `<button>` has semantic meaning *and* provides context.

**Example:**
Imagine you built a "Rock, Paper, Scissors" game.

  * **Non-Semantic HTML:**

    ```html
    <div class='rock'>Rock</div>
    <div class='paper'>Paper</div>
    <div class='scissors'>Scissors</div>
    ```

    A screen reader would just announce "Rock", "Paper", "Scissors", making the user think it's just plain text.

  * **Semantic HTML:**

    ```html
    <button class='rock'>Rock</button>
    <button class='paper'>Paper</button>
    <button class='scissors'>Scissors</button>
    ```

    A screen reader would announce **"Rock, button"**, **"Paper, button"**, etc. This provides the crucial context that the element is interactive.

-----

### ✅ Using Semantic HTML Correctly

Always think about your **intent** for the user and the **context** you need to provide.

  * **🖱️ Clickable Elements:** If a user is meant to click something, use a `<button>` element.
  * **📊 Tabular Data:** Use a `<table>` element and its related elements (`<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`). This allows screen reader users to easily navigate the data.
  * **📝 Inputs and Labels:** Always connect an `<input>` with a `<label>`.
      * It provides context by announcing the label when the input is focused.
      * It increases the clickable area of the input, which benefits all users.
      * **Methods:**
        ```html
        <label for='name'>Name</label>
        <input type='text' id='name' />

        <label>
          Name
          <input type='text' />
        </label>
        ```
  * **⌨️ Input Types:** Use the correct `type` for your inputs (e.g., `type="text"`, `type="email"`, `type="tel"`). This provides a better user experience, especially on mobile devices where it can show a specific keyboard (like a number pad for `type="tel"`).
  * **📋 Lists:** Use the appropriate list elements (`<ol>`, `<ul>`, or `<dl>`). This tells the user they are entering a list and how many items are in it.

-----

### 🗺️ Headings and Landmarks

Properly using headings and landmarks makes a page more operable and understandable for assistive technology users.

  * **Headings:** The `<h1>` through `<h6>` elements act as headings for sections of a page.
  * **Landmarks:** These are native HTML elements that define the major regions of a page.

There are **seven** native HTML elements that define landmark regions:

  * `<aside>`
  * `<footer>`
  * `<form>`
  * `<header>`
  * `<main>`
  * `<nav>`
  * `<section>`

By using these, screen reader users can use navigation commands to jump directly to a specific region (like the `<nav>` or `<main>` content) instead of having to go through the entire page from top to bottom.

-----

### 📚 Assignment

  * Read "How screen readers navigate data tables".
  * Watch "Introduction to accessible tables and a screen reader demo".
  * Watch "Why headings and landmarks are so important".

-----

### 🤔 Knowledge Check

  * Why is semantic HTML important for accessibility?
  * What are the seven HTML elements that define landmarks on a page?

-----

### 🔗 Additional Resources

  * This section provides links to download and learn the basics of screen readers, such as **NVDA** (Windows) and **VoiceOver** (macOS). It's invaluable to start testing your own projects with a screen reader.
  * The "ARIA Landmarks Example" lists the landmark elements and their roles.