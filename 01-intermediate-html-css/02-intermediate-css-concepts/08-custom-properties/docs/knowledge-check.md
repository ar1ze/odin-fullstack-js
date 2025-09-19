### Knowledge Check Answers 🎯

-----

**Question: How would you declare a custom property with a name of `text-color`?**

**Answer:** You declare it by prefixing the name with two hyphens: `--text-color`.
**Why:** The double-hyphen (`--`) syntax is how CSS identifies a declaration as a custom property (or CSS variable).
**Example:** `:root { --text-color: blue; }`

-----

**Question: How would you access a custom property with a name of `background-color`?**

**Answer:** You access it using the `var()` function, like `var(--background-color)`.
**Why:** The `var()` function is the required method to retrieve and use the value of a custom property you've previously declared.
**Example:** `body { background-color: var(--background-color); }`

-----

**Question: Where would you declare a custom property to have its scope be global and accessible by all other selectors?**

**Answer:** You declare it inside the `:root` pseudo-class.
**Why:** The `:root` selector targets the highest-level element in the HTML document (the `<html>` element). Properties defined here are inherited by every other element, making them globally available.
**Example:**

```css
:root {
  --main-font: "Arial", sans-serif;
  --primary-color: #007bff;
}
```

**Remember:** Place global variables at the **root** of your document.

-----

**Question: Where would you declare a custom property so that a user’s theme setting from their OS or browser was taken into account?**

**Answer:** You declare it inside a `prefers-color-scheme` media query.
**Why:** This media feature detects if the user has requested a light or dark theme in their system settings. You can then redefine your custom properties to match their preferred theme.
**Example:**

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #ffffff;
    --background-color: #222222;
  }
}
```