### Knowledge Check Answers 🎯

-----

**Question: What is JSX?**

**Answer:** JSX is a syntax extension for JavaScript that lets you write HTML-like markup directly inside your JavaScript files.

**Why:** It's "syntactic sugar" that makes your code more visual and intuitive. React compiles this JSX into regular `React.createElement()` JavaScript objects.

**Remember:** JSX looks like **HTML**, but it's really **JavaScript**.

-----

**Question: Why do we use JSX?**

**Answer:** We use JSX because it's a more intuitive, visual way to build UIs, and it lets you keep your rendering logic and markup (content) together in one place—the component.

**Why:** This makes it easier to understand how your UI is structured and allows React to provide better error messages.

**Remember:** It keeps your **logic and markup coupled** in one component.

-----

**Question: What are the three rules of JSX?**

**Answer:** The three main rules are:

1.  **Return a single root element:** You must wrap all your elements in one parent tag (like a `<div>` or a `<>...</>` fragment).
2.  **Close all tags:** Every tag must be explicitly closed (e.g., `<input>` becomes `<input />`).
3.  **camelCase most attributes:** HTML attributes with dashes become camelCase (e.g., `class` becomes `className` and `stroke-width` becomes `strokeWidth`).

**Why:** These rules are necessary because JSX is stricter than HTML and needs to be converted into JavaScript objects.

**Example:**

```jsx
function MyComponent() {
  // 1. Single root (the <div>)
  return (
    // 3. camelCase attribute (className)
    <div className="container">
      <p>Hello!</p>
      <input /> {/* 2. Self-closing tag */}
    </div>
  );
}
```

-----

**Question: How do you reference a dynamic value inside of your JSX?**

**Answer:** You reference dynamic JavaScript values or variables inside JSX by wrapping them in **curly braces `{}`**.

**Why:** The curly braces are a special syntax that tells React to "escape" from JSX and run the JavaScript expression inside them.

**Example:**

```jsx
const name = "Odin";
// The curly braces evaluate the `name` variable
return <h1>Hello, {name}!</h1>;
```

**Remember:** **Curly braces `{}`** are the **"portal"** to using JavaScript inside your JSX.