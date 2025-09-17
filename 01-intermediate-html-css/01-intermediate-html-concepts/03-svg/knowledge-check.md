## Knowledge Check Answers 🎨

**Question**: What is the `xmlns` attribute?
**Answer**: The `xmlns` attribute defines the XML namespace for SVG, telling the browser this is SVG code.
**Example**: `<svg xmlns="http://www.w3.org/2000/svg">`
**Why**: It ensures the browser interprets the SVG elements correctly as scalable vector graphics.
**Remember**: xmlns = "this is SVG territory" declaration.

---

**Question**: What are some situations where you *wouldn't* want to use SVG?
**Answer**: Don't use SVG for complex photographs, very detailed images, or when you need pixel-perfect control.
**Why**: SVGs are best for simple graphics, icons, and logos. Photos with lots of colors and detail are better as JPG/PNG.
**Example**: Use JPG for a sunset photo, use SVG for a simple logo.
**Remember**: SVG = simple graphics, not complex photos.

---

**Question**: What are the benefits of "inlining" your SVGs? What are the drawbacks?
**Answer**: 
**Benefits**: Styleable with CSS, fewer HTTP requests, can be interactive
**Drawbacks**: Makes HTML larger, can't be cached separately, harder to reuse across pages
**Why**: Inline SVGs become part of your HTML, giving more control but less efficiency.
**Remember**: Inline = more control but bigger file size.