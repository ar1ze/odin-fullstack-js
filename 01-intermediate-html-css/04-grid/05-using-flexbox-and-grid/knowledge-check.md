### Knowledge Check Answers 🎯

---

**Question: When might you use Flexbox over Grid?**

**Answer:** You should use **Flexbox** when you need to align a series of items in a single dimension, either in a row or a column.
**Why:** Flexbox excels at distributing space along one axis. It's the perfect tool for arranging smaller page components, like the items in a navigation bar, a group of buttons, or aligning text and an icon next to each other.
**Remember:** **Flexbox** is for **one-dimensional** layouts (a single line of things).

---

**Question: When might you use Grid over Flexbox?**

**Answer:** You should use **Grid** when you need to control the layout in two dimensions, managing both rows and columns at the same time.
**Why:** Grid is designed for the overall structure of a page. It makes creating complex, two-dimensional layouts—like a traditional header, sidebar, main content, and footer—much simpler than trying to use Flexbox.
**Remember:** **Grid** is for **two-dimensional** layouts (a grid of things).

---

**Question: When might you use the two of these tools together?**

**Answer:** It's very common to use **Grid for the overall page layout** and **Flexbox for the individual components** within that layout.
**Why:** This approach lets you use the best tool for the job at every level. Grid handles the "big picture" structure (e.g., placing the header, sidebar, and main content area), while Flexbox handles the "small details" within each of those sections (e.g., aligning the links inside the header).
**Example:** You can have a container with `display: grid;` to structure your page. One of the grid items could be a `<nav>`, and inside that `<nav>`, you could use `display: flex;` to space out the navigation links evenly.