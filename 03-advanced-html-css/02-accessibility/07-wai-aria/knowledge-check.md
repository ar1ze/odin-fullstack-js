### Knowledge Check Answers 🎯

-----

**Question: What purpose does WAI-ARIA serve?**

**Answer:** ARIA (Accessible Rich Internet Applications) makes web content more accessible by "filling in the gaps" where native HTML is not enough.

**Why:** It provides extra HTML attributes that add or modify the meaning (semantics) and context of your elements, so assistive technologies (like screen readers) can understand and interact with them correctly.

**Example:** Using `aria-label="Close"` on a button that only contains an "X" tells a screen reader its true purpose.

**Remember:** ARIA is like a **translator** 🗣️ that explains your custom or complex elements to assistive technology.

-----

**Question: What are the four things ARIA can’t do?**

**Answer:** ARIA **cannot** change an element's **appearance**, its **behavior**, its **focusability**, or add **keyboard event handling**.

**Why:** ARIA only affects the "accessibility tree" (what screen readers are told); it doesn't change the DOM, CSS, or JavaScript functionality. You must add these things yourself.

**Remember:** ARIA is **"all talk, no action."** It only *describes* your elements; it doesn't *make* them work or change how they look.

-----

**Question: What are the five rules of ARIA?**

**Answer:** The five main rules are:

1.  **Use native HTML first.** (e.g., use `<button>`, not `<div role="button">`).
2.  **Don't change native semantics.** (e.g., don't add `role="heading"` to a `<button>`).
3.  **All interactive ARIA controls must be keyboard accessible.** (You must add `tabindex` and event listeners).
4.  **Don't hide focusable elements.** (Never put `role="presentation"` or `aria-hidden="true"` on a button or link).
5.  **All interactive elements must have an accessible name.**

**Remember:** The first and most important rule: **No ARIA is better than bad ARIA.**

-----

**Question: What is the accessibility tree?**

**Answer:** The accessibility tree is a version of the DOM that contains *only* the accessibility-related information for assistive technologies.

**Why:** It's a simplified "map" of the page that screen readers use to navigate. ARIA works by directly modifying the properties (like "name" and "description") of the objects in this tree.

-----

**Question: What are the differences between the three ARIA labels?**

**Answer:** `aria-label` provides a new accessible name with a string. `aria-labelledby` creates the name by *referencing* the text of other elements (using their IDs). `aria-describedby` adds *extra* descriptive text that is read *after* the name.

**Why:** You use `aria-label` for simple labels (like on an "X" button). You use `aria-labelledby` to combine existing text into a label. You use `aria-describedby` for helpful instructions (like password requirements).

**Remember:**

  * `aria-label`: "My name is [this string]."
  * `aria-labelledby`: "My name is [the text from that element over there]."
  * `aria-describedby`: "My name is... and [here is some extra descriptive info]."

-----

**Question: What does the `aria-hidden` attribute do?**

**Answer:** The `aria-hidden="true"` attribute completely hides an element (and all its children) from assistive technologies, even if it's still visible on the screen.

**Why:** This is extremely useful for hiding purely decorative elements (like icons inside a button) so they don't add "noise" or get read out confusingly by a screen reader.

**Example:**

```html
<button type='button'>
  <span class='material-icons' aria-hidden='true'>add</span> 
  Add Book
</button>
```