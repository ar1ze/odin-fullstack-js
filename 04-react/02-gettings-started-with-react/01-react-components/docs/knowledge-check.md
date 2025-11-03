### Knowledge Check Answers 🎯

-----

**Question: What does a React element look like?**

**Answer:** A React element looks just like regular HTML syntax, but it's actually JavaScript.

**Why:** This HTML-like syntax is called **JSX** (JavaScript XML). React uses it to describe what the user interface should look like.

**Example:**

```jsx
<h1>Hello, world!</h1>
// or a self-closing component
<Greeting />
```

**Remember:** It looks like **HTML**, but it's really **JSX**.

-----

**Question: How would you create a functional component?**

**Answer:** You create a functional component by writing a standard JavaScript function that returns JSX.

**Why:** The function acts as a blueprint. The two most important rules are that the function name **must be capitalized** and it **must return** React elements.

**Example:**

```javascript
function MyComponent() {
  return <h2>This is my first component!</h2>;
}
```

**Remember:** A component is just a **capitalized function** that **returns JSX**.

-----

**Question: How do you export and then import a component?**

**Answer:** You add `export default` at the end of your component's file, and then use `import` in the file where you want to use it.

**Why:** `export` makes the component available to other parts of your app, and `import` pulls that component into a new file so you can render it.

**Example:**

```javascript
// In Greeting.jsx
function Greeting() { /* ... */ }
export default Greeting;

// In main.jsx
import Greeting from "./Greeting.jsx";
```

**Remember:** You **`export`** from the component file to **`import`** it everywhere else.