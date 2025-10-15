### Knowledge Check Answers 🎯

-----

**Question: What are the four main functions of the `transform` property?**

**Answer:** The four main transform functions are `rotate`, `scale`, `skew`, and `translate`.

**Why:** These functions allow you to change an element's position, size, and orientation in 2D space without disrupting the normal flow of the document.

  * **`rotate()`**: Spins an element.
  * **`scale()`**: Resizes an element.
  * **`skew()`**: Tilts or slants an element.
  * **`translate()`**: Moves an element.

**Remember:** **R**eal **S**mart **S**tudents **T**ransform (Rotate, Scale, Skew, Translate).

-----

**Question: Which function can be used to move an object through space on the X, Y, or Z axis?**

**Answer:** The `translate()` function is used to move an object.

**Why:** `translate()` repositions an element along the horizontal (X), vertical (Y), or depth (Z) axis without affecting the layout of other elements on the page.

**Example:**

```css
.element {
  /* Moves the element 100px to the right */
  transform: translateX(100px); 
}
```

-----

**Question: Which function can be used to make an object larger or smaller on the X, Y, or Z axis?**

**Answer:** The `scale()` function is used to make an object larger or smaller.

**Why:** `scale()` resizes an element from its center point. A value greater than 1 makes it larger, while a value between 0 and 1 makes it smaller.

**Example:**

```css
.element {
  /* Doubles the size of the element */
  transform: scale(2);
}
```

-----

**Question: What additional function is required for 3D transforms?**

**Answer:** The `perspective()` function is required to perceive 3D transforms.

**Why:** The `perspective()` function creates the illusion of depth by defining how far the object is from the viewer on the z-axis. Without it, 3D transformations like `rotateX()` or `translateZ()` would appear flat.

**Remember:** You need **perspective** to see things in **3D**.