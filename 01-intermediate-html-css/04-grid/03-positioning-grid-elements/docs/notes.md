# 📍 Positioning Grid Elements

### Intermediate HTML and CSS Course

> This lesson explores how to precisely position items within a CSS Grid by using its underlying structure of tracks, lines, and cells.

## 📖 Lesson Overview

-----

  - Describe the differences between grid **tracks**, **lines**, and **cells**.
  - Position items by defining their start and end **lines**.
  - Create a visual layout using **`grid-template-areas`**.
  - Use shorthand properties for positioning.

## 用語 Grid Terminology

-----

To position items, you first need to understand the parts of a grid.

  - **Track**: A single row or column of space in the grid.
  - **Line**: The divider between tracks. Lines are numbered starting from 1. A 3-column grid has 4 column lines. We use these lines to place items.
  - **Cell**: The smallest unit on the grid—the space created by the intersection of one row and one column. By default, each grid item occupies one cell.

> **Tip**: Use your browser's developer tools to overlay the grid lines and their numbers on your page. This makes positioning much easier to visualize.

## 📐 Positioning with Grid Lines

-----

The primary way to position an item is to tell it which grid line to start on and which line to end on. This allows an item to span multiple tracks.

  - **`grid-column-start` / `grid-column-end`**: Specifies the vertical lines an item should start and end on.
  - **`grid-row-start` / `grid-row-end`**: Specifies the horizontal lines an item should start and end on.

### Shorthand Properties

You can combine the start and end properties into a shorthand.

  - **`grid-column`**: A shorthand for `grid-column-start` and `grid-column-end`.
  - **`grid-row`**: A shorthand for `grid-row-start` and `grid-row-end`.

<!-- end list -->

```css
.living-room {
  /* Longhand */
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 3;
  
  /* Shorthand Version */
  grid-column: 1 / 6;
  grid-row: 1 / 3;
}
```

## 🗺️ Positioning with `grid-template-areas`

-----

This is a more visual and intuitive way to create a layout. It's a two-step process:

1.  **Name Your Items**: On each **grid item**, use the `grid-area` property to give it a unique name.

    ```css
    .header { grid-area: header; }
    .sidebar { grid-area: sidebar; }
    .main-content { grid-area: main; }
    ```

2.  **Create a Visual Map**: On the **grid container**, use the `grid-template-areas` property to draw your layout using the names you defined. Each string represents a row, and the names define which area each cell belongs to.

    ```css
    .container {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-areas: 
        "header  header"
        "sidebar main"
        "sidebar main";
    }
    ```

<!-- end list -->

  - To leave a cell empty, use a period (`.`).

### The Dual-Purpose `grid-area` Property

The `grid-area` property can be confusing because it has two uses:

1.  **Naming an item** for `grid-template-areas` (as seen above).
2.  **As a shorthand** for all four line-based positioning properties: `row-start / column-start / row-end / column-end`.
    ```css
    .living-room {
      grid-area: 1 / 1 / 3 / 6;
    }
    ```

## ✍️ Assignment

-----

  - **Read**: [MDN’s Line-based Placement with CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid).
  - **Practice**: Complete the `01-basic-holy-grail` exercise in the repository.

## 🤔 Knowledge Check

-----

  - Explain the difference between a track and a line.
  - What is the smallest unit on a grid?
  - What kind of value (e.g., a length, a number) do you give to `grid-column-start`?
  - Which property can combine all the start and end values for positioning a grid item?
  - Which grid container property can map out a visual structure of grid items?

## 📚 Additional Resources

-----

  - **Game**: Play through levels 1-17 of [CSS Grid Garden](https://cssgridgarden.com/) to practice positioning.
  - **Article**: Read [this Smashing Magazine article](https://www.google.com/search?q=https://www.smashingmagazine.com/2017/10/css-grid-template-areas/) to learn more about `grid-template-areas`.
  - **Docs**: Learn more about alignment from the [MDN Docs on Box Alignment in CSS Grid Layout](https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_Grid_Layout).
  - **Cheatsheet**: This [visual CSS grid cheatsheet](https://grid.malven.co/) is a great quick reference.