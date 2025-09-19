### Knowledge Check Answers 🎯

-----

#### Question: What are the 2 ways to add fonts that are not installed on a user’s computer?

**Answer:** You can either **host the font files yourself** using the `@font-face` rule in your CSS, or you can use a **third-party font service** like Google Fonts.

**Why:** Hosting the fonts yourself gives you full control but requires you to manage the font files. Using a service like Google Fonts is often easier because they host the files for you and provide a simple `<link>` tag to add to your HTML.

**Remember:** **Self-host** (DIY) or use a **Service** (like Google Fonts).

-----

#### Question: What is the ‘system font stack’ and why would you want to use it?

**Answer:** The **system font stack** is a list of `font-family` values that tells the browser to use the native font of the user's current operating system (like San Francisco on a Mac, Segoe UI on Windows, or Roboto on Android).

**Why:** You'd use it because it's **extremely fast** (the font is already installed, so there's no download time) and it makes your website feel familiar and integrated with the user's operating system.

**Example:**

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
```

-----

#### Question: Which property would you use to increase or decrease the space between letters in a word?

**Answer:** You would use the **`letter-spacing`** property.

**Why:** This property, also known as tracking in typography, allows you to control the space between individual characters in your text. A positive value spreads them out, while a negative value pulls them closer together.

**Example:** `h1 { letter-spacing: 2px; }`

-----

#### Question: Which property would you use to increase or decrease the space between lines in a paragraph?

**Answer:** You would use the **`line-height`** property.

**Why:** This property, also known as leading in typography, controls the vertical distance between lines of text. Setting an appropriate `line-height` (a common value is `1.5`) is one of the most important things you can do to improve the readability of your text.

**Example:** `p { line-height: 1.5; }`