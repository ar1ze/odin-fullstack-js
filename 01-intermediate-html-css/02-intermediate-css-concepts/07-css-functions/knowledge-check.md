### Knowledge Check Answers 🎯

---

**Question: What are the four CSS math functions we covered above?**

**Answer:** The four main CSS math functions are `calc()`, `min()`, `max()`, and `clamp()`.
**Why:**
* **`calc()`:** Performs a calculation (+, -, \*, /).
* **`min()`:** Selects the smallest value from a list.
* **`max()`:** Selects the largest value from a list.
* **`clamp()`:** "Clamps" a value between a minimum and a maximum limit.

---

**Question: How do we use CSS math functions in our CSS?**

**Answer:** You use them as the value for a CSS property, placing the calculation or set of values inside the parentheses.
**Why:** This lets the browser dynamically compute the final value for a property, allowing you to mix different units like percentages and pixels.
**Example:** Instead of a fixed width like `width: 900px;`, you can use `width: calc(100% - 40px);` to make an element fill its container minus 40 pixels of padding.

---

**Question: How can CSS functions help make websites and applications more responsive?**

**Answer:** They create fluid layouts and typography that automatically adapt to different screen sizes, often without needing media queries.
**Why:** You can set sizes that grow or shrink with the viewport width while setting firm minimum and maximum limits. This ensures your design looks good and remains readable on any device, from a small phone to a large desktop monitor.
**Example:** Using `font-size: clamp(16px, 4vw, 24px);` allows your text to scale with the screen's width (`4vw`), but it will never be smaller than `16px` or larger than `24px`.