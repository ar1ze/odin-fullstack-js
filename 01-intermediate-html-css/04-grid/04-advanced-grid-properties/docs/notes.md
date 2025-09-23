# 🚀 Advanced Grid Properties

### Intermediate HTML and CSS Course

> Go beyond static layouts with advanced CSS Grid properties that make your designs responsive, dynamic, and easier to write. This lesson covers powerful functions and keywords for creating flexible grids.

## 📖 Lesson Overview

-----

  - Create multiple grid tracks efficiently using the **`repeat()`** function.
  - Size tracks flexibly with fractional units (**`fr`**).
  - Set size boundaries for tracks using **`minmax()`** and **`clamp()`**.
  - Create responsive, auto-flowing grids with **`auto-fit`** and **`auto-fill`**.

## 🔢 Sizing and Repeating Tracks

-----

### `repeat()`

Instead of writing out every track size manually, use the `repeat()` function to create multiple tracks of the same size more efficiently.

  - **Before**: `grid-template-columns: 150px 150px 150px 150px 150px;`
  - **After**: `grid-template-columns: repeat(5, 150px);`

### Fractional Units (`fr`)

The `fr` unit is a flexible unit that represents a fraction of the **available space** in the grid container. It allows grid tracks to grow and shrink relative to one another.

```css
/*
  The container's width is divided into 7 total fractions (2+2+1+1+1).
  The first two columns will each take up 2/7 of the space.
  The last three columns will each take up 1/7 of the space.
*/
.grid-container {
  grid-template-columns: repeat(2, 2fr) repeat(3, 1fr);
}
```

## 📏 Setting Size Constraints

-----

Use CSS functions to control how small or large your grid tracks can get, preventing content from breaking at extreme screen sizes.

### `minmax()`

A **Grid-only function** that defines a size range for a track. It takes two arguments: `minmax(MIN, MAX)`. The track can flex between these two values.

```css
/* Each column will be flexible (1fr) but won't shrink below 150px. */
.grid-container {
  grid-template-columns: repeat(5, minmax(150px, 1fr));
}
```

### `clamp()`

A **global CSS function** that "clamps" a value between a minimum and maximum. It takes three arguments: `clamp(MIN, IDEAL, MAX)`.

  - The `IDEAL` value is the size the property wants to be (usually a responsive unit like `%` or `vw`).
  - The browser will use the `IDEAL` value, but won't let it go below the `MIN` or above the `MAX`.

<!-- end list -->

```css
/* Each column will try to be 20% of the container's width,
   but will not shrink below 150px or grow beyond 200px. */
.grid-container {
  grid-template-columns: repeat(5, clamp(150px, 20%, 200px));
}
```

## 🌊 Creating Responsive Grids

-----

The keywords `auto-fit` and `auto-fill` are used with `repeat()` to create a grid with a dynamic number of columns that automatically adjusts to the container's width.

### The Magic Combination: `auto-fit` and `minmax()`

This is the most powerful pattern for creating a responsive grid of items.

```css
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

  - **How it works**:
    1.  The browser looks at the container's width and the **minimum** size from `minmax()` (`150px`).
    2.  It calculates the maximum number of `150px` columns that can fit in the available space.
    3.  It then takes the remaining space and distributes it evenly among the columns, because the **maximum** size is `1fr`.

This creates columns that wrap automatically and stretch to fill the space.

### `auto-fit` vs. `auto-fill`

The difference is only noticeable when there are not enough grid items to fill a row.

  - **`auto-fit`**: Stretches the existing items to fill all available space.
  - **`auto-fill`**: Creates empty "ghost" tracks if there is space for more columns, keeping the existing items at their minimum width.

## ✍️ Assignment

-----

  - **Read**: Review [Part 4 on Grid Properties](https://www.google.com/search?q=https://css-tricks.com/snippets/css/complete-guide-grid/%23prop-grid-template-rows-columns) from CSS-Tricks.
  - **Practice**: Complete the exercises `01-responsive-holy-grail` and `02-holy-grail-mockup` in the repository.

## 🤔 Knowledge Check

-----

  - How do you create several grid tracks of the same size without typing each one out?
  - How can you assign a grid track a flexible value that changes with available space?
  - Which Grid-only function lets you set a minimum and maximum track size?
  - Which keyword, when used with `repeat()`, fills a container with as many tracks as possible?
  - What is the difference between `auto-fit` and `auto-fill`?

## 📚 Additional Resources

-----

  - [Learn more about the differences between auto-fit and auto-fill](https://www.google.com/search?q=https://css-tricks.com/auto-sizing-columns-in-css-grid-auto-fill-vs-auto-fit/).
  - Check out this [beautiful interactive guide to grid](https://grid.layoutit.com/).