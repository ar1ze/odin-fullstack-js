### Knowledge Check Answers 🎯

---

**Question: How can you use Flex to make a two-dimensional layout?**

**Answer:** You can create a two-dimensional layout by nesting Flexbox containers.
**Why:** Flexbox is designed for one-dimensional layouts (either a row or a column). To simulate two dimensions, you can create a flex row and then turn each item in that row into a flex column, effectively creating a grid.
**Example:** You could have a main container with `display: flex;` to create a row of items, and then make each of those items also a flex container with `display: flex; flex-direction: column;` to stack content vertically inside them.

---

**Question: Why was CSS Grid introduced?**

**Answer:** CSS Grid was introduced to provide a native and simpler way to create complex two-dimensional layouts.
**Why:** Before Grid, developers had to rely on hacks with floats, positioning, or complex nested Flexbox to create grid-like structures. Grid was specifically designed to handle both rows and columns at the same time, making it much easier to build sophisticated page layouts that were previously very difficult.
**Remember:** Flexbox is for one dimension (a line of things), but **Grid** is for **two dimensions** (a grid of things).

---

**Question: Which CSS layout module would you use to easily make equal sized items in a container?**

**Answer:** **CSS Grid** is often the easiest and most direct tool for this.
**Why:** Grid was built for dividing space. Using the `fr` (fractional) unit, you can effortlessly divide a container into equally sized tracks. While Flexbox can also create equal items using `flex: 1`, Grid's approach from the container level is often more intuitive for this specific task.
**Example:** To create four equal columns, you can simply set `grid-template-columns: repeat(4, 1fr);` on the parent container.