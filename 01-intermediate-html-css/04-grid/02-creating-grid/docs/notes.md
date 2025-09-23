# 🏗️ Creating a Grid

### Intermediate HTML and CSS Course

> This lesson covers the fundamentals of creating a CSS Grid, including setting up a grid container, defining columns and rows, understanding the implicit grid, and adding gaps between grid items.

## 📖 Lesson Overview

-----

  - Make a **grid container**.
  - Define grid **tracks** (columns and rows).
  - Explain the difference between an **implicit** and **explicit** grid.
  - Set **gaps** between grid cells.

## 🧱 Setting Up the Grid

-----

Creating a grid starts with a parent container and its direct children.

  - **Grid Container**: To turn an element into a grid container, use the `display: grid;` property.
  - **Grid Items**: All **direct children** of the grid container automatically become grid items. You don't need to add any special properties to them.

<!-- end list -->

```css
.container {
  display: grid;
}
```

```html
<div class="container">
  <div>Item 1</div> <div>Item 2</div> <div>Item 3</div> </div>
```

> **Note**: Elements nested inside a grid item are **not** grid items themselves.

## ↔️ Defining Columns and Rows

-----

Once you have a grid container, you can define its structure using `grid-template-columns` and `grid-template-rows`. These properties define the **grid tracks** (the space between the grid lines).

  - **`grid-template-columns`**: Defines the number and width of the columns.
  - **`grid-template-rows`**: Defines the number and height of the rows.

<!-- end list -->

```css
.container {
  display: grid;
  /* Creates three 50px-wide columns */
  grid-template-columns: 50px 50px 50px;
  /* Creates two 50px-high rows */
  grid-template-rows: 50px 50px;
}
```

There is also a shorthand property, `grid-template`, which defines rows before a slash `/` and columns after it.

```css
/* Same as the example above */
.container {
  display: grid;
  grid-template: 50px 50px / 50px 50px 50px;
}
```

## 🔮 Explicit vs. Implicit Grid

-----

  - **Explicit Grid**: This is the grid that you explicitly define using `grid-template-columns` and `grid-template-rows`.

  - **Implicit Grid**: If you have more grid items than cells in your explicit grid, the browser will automatically create new rows (by default) to place the extra items. These automatically generated tracks form the **implicit grid**.

  - **Sizing Implicit Tracks**: The implicit grid tracks do not automatically inherit the sizes from your explicit definition. You can, however, control their size using:

      - `grid-auto-rows`: Sets the height for implicitly created rows.
      - `grid-auto-columns`: Sets the width for implicitly created columns.

<!-- end list -->

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
  /* Any new rows created automatically will be 50px tall */
  grid-auto-rows: 50px;
}
```

## GAP Adding Gaps

-----

The space between your grid tracks is called the **gutter** or **alley**. You can control its size with the `gap` property.

  - `column-gap`: Sets the gap between columns.
  - `row-gap`: Sets the gap between rows.
  - `gap`: A shorthand to set both `row-gap` and `column-gap`.

<!-- end list -->

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
  
  /* Shorthand: 10px gap between rows, 20px between columns */
  gap: 10px 20px; 
}
```

## ✍️ Assignment

-----

  - **Read**: Parts I, II, and III from [CSS-Tricks' Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).
  - **Watch**: This short video on [implicit vs explicit tracks](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Dxbs3s_I0-pY) from Wes Bos.
  - **Explore**: Look through the developer tools docs on [inspecting CSS Grid in Chrome DevTools](https://developer.chrome.com/docs/devtools/css/grid/).

## 🤔 Knowledge Check

-----

  - How does an HTML element become a grid item?
  - What is the space between lines on the grid called?
  - How do you set gutters (gaps) in the grid?
  - What happens when you have more content than defined tracks?
  - How could you change the size for those undefined tracks?

## 📚 Additional Resources

-----

  - [MDN's Basic Concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout) reviews the basics and introduces additional concepts.
  - Watch this short video on [grid terminology](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D3Qa3s_mm-2I) from Peter Sommerhoff.