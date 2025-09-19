### Knowledge Check Answers 🎯

---

**Question: What is the difference between static and relative positioning?**

**Answer:** `position: static;` is the default where elements follow the normal page flow, while `position: relative;` lets you shift an element from its normal position.
**Why:** A relatively positioned element is moved *relative to* its original spot in the flow, but the space it would have occupied is still preserved. Static elements ignore properties like `top`, `left`, `right`, and `bottom`.
**Remember:** **Static** is "stuck" in the normal flow. **Relative** lets you nudge an element "relative to" its starting point.

---

**Question: What is absolute positioning useful for?**

**Answer:** It's useful for placing an element at a precise location, completely removing it from the normal document flow.
**Why:** This allows you to create overlays, icons on top of images, or modal dialogs without affecting the layout of other elements on the page.
**Example:** Placing a caption over an image by making the image's container `position: relative;` and the caption `position: absolute;`.
**Remember:** It gives you **absolute control** over an element's position inside its parent.

---

**Question: What is the difference between fixed and sticky positioning?**

**Answer:** `position: fixed;` locks an element to the browser window, so it never moves when you scroll. `position: sticky;` behaves normally until you scroll to a certain point, where it then "sticks" in place.
**Why:** A **fixed** element is always positioned relative to the viewport (the visible part of the webpage). A **sticky** element is a hybrid that scrolls with its parent until it hits a specified offset (like `top: 0;`), at which point it behaves like it's fixed.
**Example:** A `fixed` element is like a "Chat Now" button that's always in the bottom corner. A `sticky` element is like a navigation bar that scrolls with the page initially but then sticks to the top once you scroll past it.
**Remember:** **Fixed** is *permanently* fixed to the screen. **Sticky** is normal *until* it gets stuck.