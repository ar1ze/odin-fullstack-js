### Knowledge Check Answers 🎯

***

**Question: What is natural responsiveness?**

**Answer:** Natural responsiveness is the practice of using flexible CSS and HTML from the start, so your site works on many screen sizes by default.

**Why:** Plain HTML is naturally responsive. By using tools like `max-width`, flexbox, and grid (instead of fixed widths), you maintain that flexibility *before* needing to add media queries.

**Remember:** Let the browser **naturally** handle the layout; don't **force** it with rigid sizes.

***

**Question: Why should you avoid fixed width?**

**Answer:** You should avoid fixed `width` because it prevents elements from shrinking, causing them to break the layout and overflow on small screens.

**Why:** An element with `width: 600px` will *always* try to be 600px wide, even on a 320px phone screen. Using `max-width: 600px` is better because it allows the element to shrink if the screen is too small.

**Memory Aid:** Fixed `width` is **brittle** 🧱; `max-width` is **flexible** 🌊.

***

**Question: Why should you avoid fixed height?**

**Answer:** You should avoid fixed `height` because it can cause content (like text) to spill out and overflow its container.

**Why:** When a screen gets narrower, text wraps to new lines, taking up more vertical space. If the container has a fixed `height`, the text will just flow out of the box. Using `min-height` is often better as it lets the container grow.

**Memory Aid:** Let your content **determine** the height; don't set a **ceiling** on it.

***

**Question: In what situations might it be appropriate to use a fixed height or width?**

**Answer:** It's appropriate for small elements that you don't want to shrink, or for major layout components that *must* be a specific size.

**Why:** You likely want a 32px icon to *always* be 32px. Similarly, a sidebar might need a fixed `width: 250px` to function as designed. Use them, but with caution.

***

**Question: Why should you avoid percentages?**

**Answer:** You should be careful with percentages because they are always relative to the **parent container**, which can cause unexpected results.

**Why:** If a parent element doesn't shrink properly, any child element with a percentage `width` won't shrink properly either and could still overflow. Modern tools like flexbox and grid are often safer and more predictable.

**Memory Aid:** A percentage is only as flexible as its **parent**.