# 🎯 Advanced Selectors

### Intermediate HTML and CSS Course

> This lesson introduces advanced CSS selectors that allow you to target elements in a more specific and finely-grained way, especially when you can't or don't want to change the HTML.

## 📖 Lesson Overview

-----

  - Understand how to use **child** and **sibling combinators**.
  - Recognize the difference between **pseudo-classes** and **pseudo-elements**.
  - Learn to use common pseudo-selectors.
  - Learn how to select elements by their **attributes**.

## 🔗 Child and Sibling Combinators

-----

Combinators allow you to select elements based on their relationship to other elements.

  - **`>` (Child Combinator)**: Selects only **direct children** of an element.

      - `main > div` selects `div`s that are one level inside `<main>`, but not any further nested `div`s.

  - **`+` (Adjacent Sibling Combinator)**: Selects the element that is **immediately following** another element on the same level.

      - `.group1 + div` selects only the first sibling that comes right after the element with the class `group1`.

  - **`~` (General Sibling Combinator)**: Selects **all siblings** that follow an element on the same level.

      - `.group1 ~ div` selects *all* `div` siblings that come after the element with the class `group1`.

## 👻 Pseudo-selectors

-----

Pseudo-selectors are keywords that let you style elements based on information outside of the document tree.

> **Key Difference**:
>
>   - **Pseudo-classes** (`:`) select elements that exist in the HTML but are in a specific state or position (e.g., `:hover`).
>   - **Pseudo-elements** (`::`) create and select things that don't normally exist in the HTML (e.g., `::before`).

### Pseudo-classes (`:`)

These select elements based on their state or structure.

#### Dynamic and User Action Pseudo-classes

  - **`:hover`**: When the user's mouse is over the element.
  - **`:active`**: When the element is being clicked.
  - **`:focus`**: When an element is selected (e.g., an input field).
  - **`:link`** & **`:visited`**: For styling unvisited and visited links, respectively.

#### Structural Pseudo-classes

  - **`:root`**: Selects the root element of the document (usually `<html>`). Great for defining global CSS variables.
  - **`:first-child`** & **`:last-child`**: Select the first or last sibling element.
  - **`:nth-child()`**: A powerful way to select elements based on a pattern.
      - `:nth-child(5)` selects the 5th child.
      - `:nth-child(even)` selects every even child (2nd, 4th, 6th...).
      - `:nth-child(3n)` selects every 3rd child (3rd, 6th, 9th...).

### Pseudo-elements (`::`)

These let you style a specific part of an element or add content before/after it.

  - **`::first-letter`** & **`::first-line`**: Style the first letter or line of a block of text.
  - **`::marker`**: Styles the bullet point or number of a list item (`<li>`).
  - **`::selection`**: Styles the highlight when a user selects text.
  - **`::before`** & **`::after`**: Add content to the page with CSS that is not in the HTML. Requires the `content` property.
    ```css
    .emojify::before {
      content: '😎';
    }
    ```

## 🏷️ Attribute Selectors

-----

These select elements based on the presence or value of their HTML attributes.

  - **`[attribute]`**: Selects any element that has the specified attribute.

      - `[src]` selects any element with a `src` attribute.

  - **`[attribute="value"]`**: Selects elements where the attribute's value is an exact match.

      - `img[src="puppy.jpg"]` selects `<img>` tags with that exact `src`.

  - **Substring Matching**: For more flexible matching.

      - `[attribute^="value"]` (Caret `^`): Matches attributes that **start with** the value.
      - `[attribute$="value"]` (Dollar `$`) : Matches attributes that **end with** the value.
      - `[attribute*="value"]` (Asterisk `*`): Matches attributes that **contain** the value anywhere inside.

## ✍️ Assignment

-----

  - **Practice**: Complete [CSS Diner](https://flukeout.github.io/) to practice your selector skills.
  - **Read**: Shay Howe’s article on [Complex Selectors](https://learn.shayhowe.com/advanced-html-css/complex-selectors/).
  - **Practice**: Do the [Selectors Assessment from MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks).

## ✅ Knowledge Check

-----

  - What is the difference between the child combinator (`>`) and the descendant combinator (`     `)?
  - How does the syntax of pseudo-classes (`:`) and pseudo-elements (`::`) differ?
  - What selector would you use to style a button a user is currently hovering over? How about one that is currently being clicked on?
  - How could you select all `input` elements with a `type` of `text`?
  - How could you select all classes that begin with "thunder"?

## 📚 Additional Resources

-----

  - **[CSS Tricks Almanac](https://css-tricks.com/almanac/)**: A great reference for all pseudo-elements and selectors.
  - **[W3 Schools Reference List](https://www.w3schools.com/cssref/css_selectors.asp)**: A solid, concise reference.
  - **[Free Code Camp Selector Cheat Sheet](https://www.freecodecamp.org/news/css-selectors-cheat-sheet/)**: A good summary of common selectors.