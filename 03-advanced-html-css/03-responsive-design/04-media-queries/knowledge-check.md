### Knowledge Check Answers 🎯

-----

**Question: How do you define a media query to create a mobile layout for your site?**

**Answer:** You use the `@media` rule with a `max-width` "breakpoint" to apply specific styles to screens *below* that width.

**Why:** This allows you to override your default (desktop) styles with new styles (like smaller margins or a single-column layout) only on smaller screens.

**Example:**

```css
/* On screens 600px and smaller, change the margin */
@media (max-width: 600px) {
  body {
    margin: 8px;
  }
}
```

**Remember:** Think "at a **max width** of 600px, apply these mobile styles."

-----

**Question: What is the difference between `max-width` and `min-width` in a media query definition?**

**Answer:** `max-width` applies styles to screens **smaller than or equal to** the value, while `min-width` applies styles to screens **larger than or equal to** the value.

**Why:** You use `max-width` to target *smaller* screens (like mobile) and `min-width` to target *larger* screens (like desktops).

**Example:**

  * `@media (max-width: 600px)` targets all screens **up to 600px wide**.
  * `@media (min-width: 601px)` targets all screens **from 601px wide and up**.

**Remember:**

  * **`max-width`** = Max = For **small** screens.
  * **`min-width`** = Min = For **big** screens.