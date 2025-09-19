### Knowledge Check Answers 🎯

---

#### Question: Why would you want to use `em` or `rem` for font-size instead of `px`?

**Answer:** You'd use **`em`** or **`rem`** to create scalable designs that respect a user's browser settings for font size.

**Why:** Using `rem` (root em) allows all the font sizes on your site to scale proportionally if a user changes their browser's default font size for accessibility reasons. `em` does something similar but scales relative to the parent element's font size, which can be less predictable. Using `px` (pixels) creates a fixed size that ignores these user preferences.

**Remember:**
* **`rem`** = **R**elative to **R**oot (good for sitewide consistency).
* **`px`** = **P**erfectly fi**x**ed (ignores user settings).

---

#### Question: What are some instances where you might want to use `vh` and `vw`?

**Answer:** You would use **`vh`** (viewport height) and **`vw`** (viewport width) when you want an element's size to be based directly on the size of the browser window.

**Why:** These units are perfect for creating elements that need to occupy a specific percentage of the screen. This is a common technique for creating full-height hero sections or typography that fluidly scales with the browser's width.

**Example:** Setting `height: 100vh;` on a `div` will make it always take up the full height of the browser window.


---

#### Question: What are some instances where you might want to use `px` instead of a relative unit?

**Answer:** You would want to use **`px`** for properties where you need a precise, consistent, and fine-grained size that should not scale.

**Why:** While relative units are great for scalability, some design elements need to be a fixed size to look right. Pixels are ideal for these situations.

**Example:** Setting a `border: 1px solid black;` or a `box-shadow: 0 0 5px black;`. Using a relative unit for these could make them look too thick or blurry on some screens.