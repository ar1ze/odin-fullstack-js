# ⌨️ Keyboard Navigation

### Introduction
Some users navigate websites using only a keyboard or assistive technology (like voice recognition) that simulates keyboard inputs. Other users simply prefer it. Proper keyboard navigation is essential for these users.

---
### 🎯 Focus
Interactive elements **must** have two things for keyboard users:
1.  **Be focusable** (can be tabbed to).
2.  **Have event handling** (respond to 'Enter' or 'Space' keys).

* Semantic elements like `<button>` have this behavior **by default**. They are focusable and the 'Enter' and 'Space' keys trigger a "click" event.
* Non-semantic elements like `<div>` or `<span>` are **not focusable or interactive by default**.
* To make a `<div>` act like a button, you must manually add `tabindex="0"` to make it focusable *and* add JavaScript event listeners for both `'click'` and `'keydown'` (checking for 'Space' and 'Enter').
* Using the correct semantic element (like `<button>`) is always the better and more accessible solution as it provides context to screen readers.

---
### 💡 Focus Styles
Focus styles are the visual indicators (like an outline or border) that show which element currently has keyboard focus.

* **CRITICAL: You should never completely remove focus styles!**
* Do **not** use CSS like `*:focus { outline: none; }`.
* **Why?** Removing the outline makes the site impossible for keyboard-only users to navigate. They have no visual indication of where they are on the page. It’s like trying to use a website with an invisible mouse cursor.
* **What to do:** You can either leave the default browser focus styles or **replace** them with your own custom, visible focus styles (e.g., a thicker border, `transform: scale()`, or a different `outline`).

---
### 🔢 Tab Order
The **tab order** is the sequence in which elements receive focus when a user presses the 'Tab' key.

* By default, the tab order follows the **HTML source order**.
* **CRITICAL:** The tab order *must* match the visual order of the page.
* If you use CSS (like `flex-order` or `float`) to visually reorder elements, the tab order might become illogical and confusing, jumping erratically around the screen.
* **Best solution:** Structure your HTML in the logical order you want users to navigate.

---
### 🙈 Hidden Content
Content that is not immediately visible (like modals, dropdown menus) must be hidden properly from assistive technologies.

* **Why?** If not hidden correctly, a keyboard user can 'tab' into the invisible content. Their focus indicator will disappear, leaving them confused and lost.
* **Bad solution:** `tabindex="-1"`. This only removes the items from the keyboard tab order but does *not* hide them from screen readers.
* **Best solution:** Use `display: none;` or `visibility: hidden;` on the *container* element. This removes it from the tab order *and* hides it from assistive technologies.

---
### 📚 Assignment
* Watch "What is Focus?" to see issues that occur when trying to change the tab order.
* Watch "Controlling focus with tabindex" to see how the `tabindex` attribute can affect the tab order.

---
### 🤔 Knowledge Check
* What are two things that interactive elements must have for keyboard users?
* What are focus styles?
* Why should you never completely remove focus styles from an element?
* What is the tab order?
* What is the best way to hide hidden content from assistive technologies?