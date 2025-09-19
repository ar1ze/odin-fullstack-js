### Knowledge Check Answers 🎯

---

**Question: What is the difference between the child combinator and the descendant combinator?**

**Answer:** The **child combinator (`>`)** selects only direct children, while the **descendant combinator (a space)** selects any child nested at any level.
**Why:** A child is an element immediately inside another. A descendant is any element contained within another, no matter how deep it's nested.
**Example:** For `<article><div><p>Text</p></div></article>`, the selector `article > div` works, but `article > p` does not. The selector `article p` works because the `<p>` is a descendant.
**Remember:** `>` is a direct arrow to an immediate child. A space is wide open and finds *everything* inside.

---

**Question: How does the syntax of pseudo-classes and pseudo-elements differ?**

**Answer:** Pseudo-classes use a **single colon (`:`)**, while pseudo-elements use a **double colon (`::`)**.
**Why:** The double colon was introduced to visually separate pseudo-elements (which style a *part* of an element) from pseudo-classes (which style an element in a special *state*).
**Example:** `a:hover` is a pseudo-class (a state), while `p::first-line` is a pseudo-element (a part).
**Remember:** **One colon** for a **state**, **two colons** for a **part**.

---

**Question: Do pseudo-classes exist somewhere in HTML? Do pseudo-elements?**

**Answer:** No, neither exists directly in your HTML file.
**Why:** They are "pseudo" because they are not real HTML elements. They are keywords you add to CSS selectors to apply styles based on an element's state or to target a specific part of an element that you can't see in the HTML.

---

**Question: Name two ways you could select every second child of an element, starting with the first.**

**Answer:** You can use `:nth-child(odd)` or `:nth-child(2n+1)`.
**Why:** `:nth-child(odd)` is a simple keyword that selects the 1st, 3rd, 5th, etc., child. The formula `2n+1` does the same thing by selecting every second element (`2n`) with an offset of one (`+1`), effectively targeting all odd-numbered children.
**Example:** `li:nth-child(odd)` will select the first, third, and fifth items in a list.

---

**Question: What is the difference between `div:first-child` and `div:last-child`? What will each select?**

**Answer:** `div:first-child` selects a `<div>` only if it is the **first element** inside its parent. `div:last-child` selects a `<div>` only if it is the **last element** inside its parent.
**Why:** These selectors check two conditions at once: is it a `<div>`, AND is it the very first (or last) child? If another element like an `<h1>` is first, `div:first-child` will not match anything.
**Example:** For `<body><h1>Title</h1><div>Content</div></body>`, `div:last-child` would select the `<div>`, but `div:first-child` would not.

---

**Question: What selector would you use to style a button a user is currently hovering over? How about one that is currently being clicked on?**

**Answer:** Use the **`:hover`** pseudo-class for hovering and the **`:active`** pseudo-class for clicking.
**Why:** These pseudo-classes apply styles that depend on user actions. `:hover` activates when a cursor is over the element, and `:active` activates for the brief moment a user clicks down on it.
**Example:** `button:hover { background-color: lightblue; }` and `button:active { transform: scale(0.98); }`.

---

**Question: How could you select all input elements with a type of text?**

**Answer:** You use an attribute selector: `input[type="text"]`.
**Why:** This syntax targets an element (`input`) based on one of its HTML attributes (`type`) having a specific value (`"text"`).
**Example:** `input[type="text"] { border-color: green; }` would only style text inputs, not password or submit inputs.

---

**Question: How could you select all classes that begin with `thunder`?**

**Answer:** Use the "begins with" attribute selector: `[class^="thunder"]`.
**Why:** The caret symbol (`^`) inside the brackets `[]` specifically matches an attribute value that starts with the provided string.
**Example:** This selector would match elements with `class="thunder-storm"` and `class="thunderbolt"` but not `class="summer-thunder"`.
**Remember:** The **caret (`^`)** points to the **beginning**.