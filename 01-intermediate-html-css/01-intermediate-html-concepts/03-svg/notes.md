# ✨ All About SVGs

## ❓ What are SVGs?

-----

  * **SVG** stands for **Scalable Vector Graphics**. They are a scalable image format perfect for the web.
  * Unlike **raster graphics** (like JPEGs) which are made of pixels, vector graphics are defined by **math and XML code**.
  * This means they can be scaled to **any size** without losing quality or increasing the file size.

### 👍 When to Use SVGs

  * Icons
  * Graphs and Charts
  * Large, simple images
  * Patterned backgrounds

### 👎 When NOT to Use SVGs

  * Complex, photo-realistic images.
  * Images with fine, detailed textures.
      * For these, raster formats like JPEG or PNG are a better choice.

## 🔬 Anatomy of an SVG

-----

Since SVGs are just code, you can read and edit them in a text editor. Key parts include:

  * `<svg>`: The main wrapper tag.
  * `xmlns`: The **XML NameSpace**, which tells the browser it's an SVG image.
  * `viewBox`: Defines the SVG's coordinate system and aspect ratio.
  * **Shape Elements**: Basic building blocks like `<rect>`, `<circle>`, `<path>`, and `<text>`.
  * **CSS Styling**: You can target SVG elements with classes or IDs and style attributes like `fill` and `stroke` using CSS.

## ➡️ Embedding SVGs in Your Website

-----

There are two main ways to add SVGs to your site:

### Linked SVGs

  * **How**: Use an `<img>` tag or a CSS `background-image` property, just like any other image file.
  * **Pros**: Simple and keeps your HTML clean.
  * **Cons**: You **cannot** manipulate the SVG's internal parts with CSS or JavaScript.

### Inline SVGs

  * **How**: Paste the entire `<svg>...</svg>` code directly into your HTML file.
  * **Pros**: Unlocks the full power of SVGs, allowing you to style and animate individual parts with CSS and JavaScript.
  * **Cons**: Can make your HTML file large and harder to read, and may negatively impact caching and page load times.

## 🤔 Knowledge Check

-----

  * What is the `xmlns` attribute?
  * What are some situations where you wouldn’t want to use SVG?
  * What are the benefits of “inlining” your SVGs? What are the drawbacks?

## 🔗 Additional Resources

-----

  * **Icon Libraries**: Check out free resources like [Material icons](https://fonts.google.com/icons) and [Feather icons](https://feathericons.com/).
  * **SVG Editors**: For creating or editing SVGs, try a visual tool like [Yann Armelin’s SVG path editor](https://yqnn.github.io/svg-path-editor/).
  * **In-Depth Guide**: [A Friendly Introduction to SVG](https://www.google.com/search?q=https://www.joshwcomeau.com/svg/a-friendly-introduction-to-svg/) by Josh Comeau offers interactive demos.