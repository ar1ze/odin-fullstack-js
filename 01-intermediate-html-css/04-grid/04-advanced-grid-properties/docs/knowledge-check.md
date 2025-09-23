### Knowledge Check Answers 🎯

---

**Question: How do you create several grid tracks of the same size without manually typing each one out?**

**Answer:** You use the **`repeat()`** function.
**Why:** The `repeat()` function is a powerful notation that lets you define a repeating pattern of grid tracks. It's much more concise and maintainable than writing out the same value multiple times.
**Example:** Instead of `grid-template-columns: 1fr 1fr 1fr;`, you can simply write `grid-template-columns: repeat(3, 1fr);`.

---

**Question: What is the difference between a static and dynamic size value?**

**Answer:** A **static** size is a fixed, unchanging value (like `100px`), while a **dynamic** size is a flexible value that adapts to its environment (like `50%` or `1fr`).
**Why:** Static sizes are predictable but not responsive. Dynamic sizes allow your layout to be fluid and adjust automatically to different screen sizes or available space.

---

**Question: How can you assign a grid track a flexible value that changes depending on the remaining space available in the grid?**

**Answer:** You use the **`fr`** (fractional) unit.
**Why:** The `fr` unit was designed for CSS Grid to represent a fraction of the available free space in the grid container. It automatically calculates and distributes space, making flexible layouts simple.
**Example:** `grid-template-columns: 200px 1fr;` creates two columns; the first is a static 200px wide, and the second takes up all the remaining free space.

---

**Question: How can you assign grid tracks an uneven distribution of the remaining space in a grid?**

**Answer:** You use **different `fr` values** for the different tracks.
**Why:** The grid distributes the available space in proportion to the `fr` values assigned. A track set to `2fr` will always be twice as wide as a track set to `1fr`.
**Example:** `grid-template-columns: 2fr 1fr;` divides the space into three parts and gives two parts to the first column and one part to the second.

---

**Question: Which CSS functions will return the *smallest* or *largest* value supplied to them?**

**Answer:** The **`min()`** function returns the smallest value, and the **`max()`** function returns the largest value.
**Why:** These functions compare a list of values and pick the one that is either the smallest or largest at any given moment, which is useful for creating responsive boundaries.
**Example:** `width: min(90%, 800px);` means the width will be 90% of the parent's width, but it will never grow larger than 800px.

---

**Question: Which CSS Grid-only function allows you to supply a minimum and maximum track size that is calculated in realtime?**

**Answer:** The **`minmax()`** function.
**Why:** Used specifically within grid track definitions, `minmax()` sets a size range for a track. The track can flex and grow, but it will never be smaller than the minimum or larger than the maximum value you define.
**Example:** `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` creates responsive columns that are at least 250px wide but will stretch to fill any extra space.

---

**Question: Which global CSS function allows you to supply a minimum, ideal, and maximum value that is calculated in realtime?**

**Answer:** The **`clamp()`** function.
**Why:** `clamp()` "clamps" a value within a specific range. It takes three arguments: a minimum allowed value, a preferred (ideal) value that scales with the viewport, and a maximum allowed value.
**Example:** `font-size: clamp(1rem, 2.5vw, 1.5rem);` allows text to scale with the viewport width (`2.5vw`) but prevents it from ever being smaller than `1rem` or larger than `1.5rem`.

---

**Question: What attribute of `repeat()` can be used to fill in as many grid tracks as possible, given certain constraints?**

**Answer:** You can use the **`auto-fit`** or **`auto-fill`** keywords.
**Why:** When used as the first argument of `repeat()`, these keywords tell the browser to automatically create as many grid tracks as can fit into the container. This is a core feature for building modern, responsive grid layouts without media queries.
**Example:** `grid-template-columns: repeat(auto-fit, 100px);` will create as many 100px columns as possible in the available space.

---

**Question: What is the difference between `auto-fit` and `auto-fill`?**

**Answer:** When there is extra space in the container, **`auto-fit`** collapses any empty tracks and expands the existing items to fill the space. **`auto-fill`** keeps the empty tracks, leaving blank space at the end of the row.
**Why:** Use `auto-fit` when you want your content to stretch and fill the entire row. Use `auto-fill` when you want to maintain a consistent item size, even if it results in whitespace.
**Remember:** **`auto-fit`** makes items **fit** the space. **`auto-fill`** **fills** the row with tracks, even if they remain empty.