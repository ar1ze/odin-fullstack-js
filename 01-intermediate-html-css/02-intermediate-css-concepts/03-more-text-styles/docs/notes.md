# ✒️ More Text Styles

### Intermediate HTML and CSS Course

> This lesson covers more advanced CSS properties for working with fonts and styling text on your webpages.

## 📖 Lesson Overview

-----

  - Learn how to implement **custom fonts** on your web projects.
  - Discover additional CSS properties for styling text.

## 🔠 Fonts

-----

Beyond just changing `font-family`, there are more robust ways to handle fonts.

### The System Font Stack

A **system font stack** is a long list of `font-family` values that attempts to use the default font of the user's operating system. This often produces a clean, neutral, and high-performance result.

```css
body {
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

### Web Fonts

When you need a font that isn't installed on a user's device, you must import it as a **web font**.

> **Important**: Always include a fallback font (e.g., `sans-serif`) in your `font-family` rule. This ensures your site remains readable if the web font fails to load.

There are two main ways to use web fonts:

#### 1\. Online Font Libraries (e.g., Google Fonts)

You can link to fonts hosted on an external service.

  - **HTML `<link>` tag**:
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    ```
  - **CSS `@import` rule**:
    ```css
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    ```
  - **Privacy Note**: Be aware of privacy policies. Using the Google Fonts API, for example, can violate the European GDPR.

#### 2\. Self-Hosted Fonts

You can download font files and host them on your own server. Use the `@font-face` rule in your CSS to define a custom font family. This method is often more reliable and privacy-compliant.

```css
@font-face {
  font-family: my-cool-font;
  src: url(../fonts/the-font-file.woff);
}

h1 {
  font-family: my-cool-font, sans-serif;
}
```

## ✨ Text Styles

-----

Here are several useful properties for manipulating text.

### `font-style`

Typically used to make text *italic*.

> **Rule of thumb**: Use `font-style: italic;` for purely presentational italics. Use the `<em>` HTML tag when you want to give the text semantic emphasis.

### `letter-spacing`

Changes the space between characters in a word. Useful for adjusting custom fonts or for stylistic headings.

### `line-height`

Adjusts the vertical space between lines of text. A slightly increased `line-height` can significantly improve readability.

### `text-transform`

Changes the case of text. You can set it to `uppercase`, `lowercase`, or `capitalize`.

### `text-shadow`

Adds a shadow effect to text. Best used sparingly on headings or large, presentational text.

### Ellipsis for Overflowing Text

This is a useful trick to truncate long text with an ellipsis (...) when it overflows its container.

```css
.overflowing {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## ✍️ Assignment

-----

  - **Read**: [MDN’s article on web fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts) and complete the exercises.
  - **Read**: [Font Best Practices](https://www.google.com/search?q=Font+Best+Practices) to understand performance considerations.
  - **Read**: [web.dev Typography](https://www.google.com/search?q=https://web.dev/typography/) for important developer considerations.

## ✅ Knowledge Check

-----

  - What are the two ways to add fonts that are not installed on a user’s computer?
  - What is the ‘system font stack’ and why would you want to use it?
  - Which property would you use to increase or decrease the space between letters in a word?
  - Which property would you use to increase or decrease the space between lines in a paragraph?

## 🔗 Additional Resources

-----

  - **Article**: [Modern CSS Techniques To Improve Legibility](https://www.google.com/search?q=Modern+CSS+Techniques+To+Improve+Legibility+by+Edoardo+Cavazza).
  - **Resource**: [Modern Font Stacks](https://www.google.com/search?q=Modern+Font+Stacks) lists common font stacks.
  - **Libraries**:
      - [Google Fonts](https://fonts.google.com/)
      - [Font Bunny](https://fonts.bunny.net/) (GDPR compliant)
      - [Adobe Fonts](https://fonts.adobe.com/) (Premium)