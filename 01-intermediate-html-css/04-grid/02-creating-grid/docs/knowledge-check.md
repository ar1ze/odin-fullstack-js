### Knowledge Check Answers 🎯

---

**Question: How does an HTML element become a grid item?**

**Answer:** An HTML element automatically becomes a **grid item** when it is a **direct child** of a container that has `display: grid`.
**Why:** Once you declare a parent element as a grid container, all of its immediate children are placed onto the grid and can be positioned within it. Nested elements are not grid items themselves.
**Remember:** Only **direct children** get to play on the grid.

---

**Question: What is the space between lines on the grid?**

**Answer:** The space between grid lines is called a **grid track**.
**Why:** A grid is composed of intersecting lines. The space between two adjacent vertical lines forms a **column track**, and the space between two adjacent horizontal lines forms a **row track**.

---

**Question: How do you set gutters (also known as alleys) in the grid?**

**Answer:** You can set gutters using the `gap`, `row-gap`, or `column-gap` properties on the grid container.
**Why:** The `gap` property is a shorthand for setting the space between both rows and columns simultaneously. If you need different spacing, you can use `row-gap` and `column-gap` to define them individually.
**Example:** `gap: 16px;` sets a 16-pixel gutter between all rows and columns.
**Remember:** Mind the **`gap`** between grid items.

---

**Question: Describe what happens when you have more content than defined tracks.**

**Answer:** The grid automatically creates new tracks in the **implicit grid** to hold the extra items.
**Why:** If you define 3 columns but have 4 items, Grid won't let the last item overflow. Instead, it will create a new row for it automatically. The rows and columns you define are the "explicit grid," while any created automatically are the "implicit grid."

---

**Question: How could you change the size for those undefined tracks?**

**Answer:** You can set their size using the **`grid-auto-rows`** and **`grid-auto-columns`** properties.
**Why:** These properties allow you to define a default size for any tracks that are created automatically in the implicit grid. This ensures your layout remains consistent even when you have more content than you explicitly planned for.
**Example:** `grid-auto-rows: 200px;` will make any new, automatically-created rows 200 pixels tall.
**Remember:** Use **`grid-auto-rows`** to size **auto**matically created rows.