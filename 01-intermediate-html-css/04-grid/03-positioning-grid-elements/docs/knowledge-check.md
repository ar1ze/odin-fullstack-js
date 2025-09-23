### Knowledge Check Answers 🎯

-----

**Question: Explain the difference between a track and a line.**

**Answer:** A **line** is a divider in the grid structure, while a **track** is the actual space between two parallel lines.
**Why:** The lines are the numbered vertical and horizontal boundaries that make up the grid. The tracks are the columns and rows that you place your content into.
**Example:** A grid with 2 columns has 3 vertical **lines** and 2 column **tracks**.
**Remember:** You place items on a train **track**, which sits between the metal rails (**lines**).

-----

**Question: What is the smallest unit on a grid?**

**Answer:** The smallest unit on a grid is a **grid cell**.
**Why:** A grid cell is the space created by the intersection of one row track and one column track, much like a single cell in a spreadsheet. By default, each grid item occupies one cell.

-----

**Question: What kind of value do we give to the `grid-column-start` or `grid-column-end` properties?**

**Answer:** You give them a **number that corresponds to a grid line**.
**Why:** These properties tell a grid item which grid line to start or end on. This allows you to precisely position items and make them span across multiple tracks.
**Example:** To make an item span the first two columns, you would set `grid-column-start: 1;` and `grid-column-end: 3;` (it starts on line 1 and ends on line 3).

-----

**Question: Which property can we use to combine all the start and end values for a grid item?**

**Answer:** You can use the **`grid-area`** shorthand property.
**Why:** `grid-area` is a powerful shorthand that lets you set the `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end` values all in one line of code.
**Example:** `grid-area: 1 / 2 / 3 / 4;` sets the row-start, column-start, row-end, and column-end lines, respectively.
**Remember:** `grid-area` defines the entire rectangular **area** for an item.

-----

**Question: Which grid container property can map out a visual structure of grid items?**

**Answer:** The **`grid-template-areas`** property.
**Why:** This unique property allows you to name your grid items (using `grid-area`) and then arrange them in a visual, ASCII-art-like format on the grid container. It provides a very intuitive way to define a page layout.
**Example:**

```css
.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
```