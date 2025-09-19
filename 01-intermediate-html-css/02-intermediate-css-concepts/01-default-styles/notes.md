# 🎨 Default Styles

### Intermediate HTML and CSS Course

> Browsers apply a set of default styles to every webpage to ensure basic styling even without CSS. This lesson explores what they are and how to manage them.

## 📖 Lesson Overview
---
- Learn about **default browser styles** (user-agent stylesheets).
- Understand how to use a **CSS reset** to remove or change default styles.

## 🤔 What are default styles and where do they come from?
---
- **Definition**: Default styles are applied by the browser's **user-agent stylesheets**.
- **Purpose**: To ensure webpages have basic styling and readability without any user-defined CSS.
- **Examples**:
  - `<h1>` elements are larger and bolder.
  - `<a>` elements are blue and underlined.
  - Default margins and padding on various elements.
- **Problem**: Default styles can vary slightly between different browsers (e.g., Chrome, Firefox, Safari), leading to inconsistencies.

## 💡 What if I don’t like the defaults?
---
There are two main approaches to managing default styles:

1.  **Overwrite them manually**: Your own CSS rules have a higher precedence than user-agent rules, so they will automatically overwrite the defaults.
2.  **Use a CSS Reset**:
    - A **CSS reset** is a separate stylesheet with rules designed to alter or completely remove the browser's default styles.
    - **Benefits**:
      - Helps achieve a consistent look across all browsers.
      - Provides a "clean slate" for developers to apply their own styles without interference.
    - **Note**: Resets are **not mandatory**. They are subjective and "opinionated," reflecting the preferences of their creator.

## ✍️ Assignment
---
- **Read**: [Reboot, Resets, and Reasoning](https://www.google.com/search?q=Reboot%2C+Resets%2C+and+Reasoning) for a history of CSS resets.
- **Read**: [Making the case for CSS normalize and reset stylesheets in 2023](https://www.google.com/search?q=Making+the+case+for+CSS+normalize+and+reset+stylesheets+in+2023) to understand the differences between reset types.
- **Explore**: [Josh Comeau’s custom CSS reset](https://www.google.com/search?q=Josh+Comeau%E2%80%99s+custom+CSS+reset) for a breakdown of the thought process behind creating a reset.

## ✅ Knowledge Check
---
- Why would you want to use a CSS reset?
- Are resets required?

## 🔗 Additional Resources
---
- **[Browser Default Styles](https://www.google.com/search?q=Browser+Default+Styles+user-agent)**: View the user-agent rules applied to each HTML element.
- **[The Fabulous Styleboard](https://www.google.com/search?q=The+Fabulous+Styleboard)**: A tool to see how different resets affect various HTML elements.