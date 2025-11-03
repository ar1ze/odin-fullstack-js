# ⚛️ React Components

### Introduction

This lesson covers the basics of React components: what they do and how to write them.

-----

### 📝 Lesson Overview

  * Learn about React components.
  * Understand how to create components.
  * Describe where components reside in a React project.

-----

### 🤔 What are Components?

  * The beauty of React is that it allows you to break a UI (User Interface) down into independent, reusable chunks, which we call **components**.
  * For example, a website could be broken into:
      * `App`: The main application component and parent to all others.
      * `Navbar`: The navigation bar.
      * `MainArticle`: The main content area.
      * `NewsletterForm`: A form for email sign-ups.
  * Think of components as **JavaScript functions** that can take an input and return a React element.

-----

### ✅ How to Create Components

  * We will practice creating **functional components**, which are literally just JavaScript functions.

    ```javascript
    function Greeting() {
      return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>;
    }
    ```

  * **Note on `&quot;`:** This is an [HTML escape code](https://www.google.com/search?q=https://www.lambdatest.com/free-tools/html-escape) for a double quote (`"`). Your linter may error if you use regular quotes inside JSX.

  * **Note on "HTML in JS":** The syntax that looks like HTML is called **JSX**.

> **Key Rule:** React components **must be capitalized** (e.g., `Greeting`). If they aren't, they will not function as expected.

-----

### 📁 Where Do Components Live?

Components typically live in their own files, making them independent. We use **importing and exporting** to use them in other parts of our application.

#### 📤 Exporting

To make a component available to other files, you must export it.

```javascript
function Greeting() {
  return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>;
}

export default Greeting;
```

#### 📥 Importing

To use an exported component, you must import it into the parent file (like `main.jsx`). Let's replace the default `<App />` component with our new `<Greeting />` component.

**`Greeting.jsx`** (Our new component file)

```javascript
function Greeting() {
  return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>;
}

export default Greeting;
```

**`main.jsx`** (The main entry point)

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx"; // We remove the default App
import Greeting from "./Greeting.jsx"; // We import our new component
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting /> {/* We render our new component */}
  </StrictMode>,
);
```

> #### capital 🅰️ The Capitalization Rule
>
> When the JSX is parsed, React uses capitalization to tell the difference between an HTML tag and a React component.
>
>   * `<greeting />` (lowercase) would be interpreted as a normal HTML tag.
>   * `<Greeting />` (uppercase) is interpreted as your React component.

-----

### 📚 Assignment

  * Create new components in your project (e.g., display your favorite food).
  * Try using **named exports** instead of `default` exports. (Check the [MDN documentation on export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) if you're unsure).

-----

### 🧠 Knowledge Check

  * What does a React element look like?
  * How would you create a functional component?
  * How do you export and then import a component?

-----

### 🔗 Additional Resources

  * [Geeks for Geeks: ReactJS Functional Components](https://www.google.com/search?q=httpsS://www.geeksforgeeks.org/reactjs-functional-components/)