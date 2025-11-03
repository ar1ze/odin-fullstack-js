### Knowledge Check Answers 🎯

-----

**Question: What is the main difference between `object-fit` and `background-size`?**

**Answer:** `object-fit` is a CSS property used to style a semantic `<img>` tag, while `background-size` is used to style the `background-image` of any element (like a `<div>`).

**Why:** Although they do similar things (like `cover` or `contain`), they apply to different types of elements. `object-fit` gives you control over an `<img>` element that is part of your content, while `background-size` controls a decorative background.

**Remember:** `object-fit` is for **objects** (images). `background-size` is for **backgrounds**.

-----

**Question: How can you define a `width` and a `height` on an `img` without distorting it?**

**Answer:** You can set a fixed `width` and `height` and then add the `object-fit` property to control how the image fits inside those dimensions without distortion.

**Why:** By default, a fixed `width` and `height` will stretch the image (`object-fit: fill`). Setting `object-fit: cover` or `object-fit: contain` tells the browser to maintain the aspect ratio, either by cropping the image or by letterboxing it.

**Example:**

```css
img {
  width: 300px;
  height: 300px;
  object-fit: cover; /* Prevents distortion by cropping */
}
```

-----

**Question: Why would you want to provide different images at different screen resolutions?**

**Answer:** You do this for **performance** (loading smaller files on small screens) and for **art direction** (showing a differently cropped image that looks better on that screen).

**Why:** A phone doesn't need to download a massive, 4MB desktop image, which saves the user bandwidth and speeds up loading. Also, a wide landscape image may look bad when shrunk down, so you can serve a pre-cropped, vertical version that looks better.

**Remember:** This saves **bandwidth** (performance) and improves the **look** (art direction).

-----

**Question: When would you want to use an `img` with a `srcset` vs a `picture`?**

**Answer:** Use `<img>` with `srcset` for **resolution switching**. Use the `<picture>` element for **art direction**.

**Why:** `srcset` lets the *browser decide* which version of the *same image* to load for performance (e.D., `image-sm.jpg` vs. `image-lg.jpg`). The `<picture>` element lets *you decide* exactly which (often *different*) image to show at specific breakpoints (e.D., forcing a `image-portrait.jpg` to load on phones).

**Remember:**

  * `srcset` = **Browser's choice** (for performance).
  * `<picture>` = **Your choice** (for art).