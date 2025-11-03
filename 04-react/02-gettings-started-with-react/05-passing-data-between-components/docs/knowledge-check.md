### Knowledge Check Answers 🎯

-----

**Question: How does data flow between React components? From child to parent? From parent to child? Both?**

**Answer:** Data flow in React is **unidirectional**, meaning it only flows one way: from **parent components down to child components**.

**Why:** This one-way data flow gives you more control over your application's data and makes it easier to find and fix bugs, as you always know where the data is coming from.

**Example:**

```jsx
// App (parent) passes the 'text' prop DOWN to Button (child)
function App() {
  return <Button text="Click Me!" />;
}
```

**Remember:** Think of it as a **waterfall** 🌊. Data always flows **downhill** from parent to child.

-----

**Question: Why do we use props in React?**

**Answer:** We use props (short for "properties") to pass data into components, which allows us to **customize** them and make them **reusable**.

**Why:** Instead of creating a new component for every slight variation (like a different button label), you can create one reusable component and pass in its data as props.

**Example:**

```jsx
// We can reuse the SAME Button component with different data
<Button text="Click Me!" />
<Button text="Don't Click Me!" />
```

**Remember:** **Props** give your components "custom **properties**."

-----

**Question: How do we define default properties on a React component? What are some benefits in doing so?**

**Answer:** You define default props using **default parameters** in the component's function signature, right where you destructure the props.

**Why:** The benefits are that it **avoids repetition** (you don't have to pass the same prop every time) and **protects against errors** by ensuring a prop is never `undefined`.

**Example:**

```javascript
// 'text' will be "Click Me!" unless it's overridden
function Button({ text = "Click Me!", color = "blue" }) {
  // ...
}

// This button now automatically gets the default text:
<Button color="red" />
```

-----

**Question: How can we pass functions as props?**

**Answer:** You define the function in the parent component and then pass the **function reference** (its name, without parentheses) as a prop to the child.

**Why:** This is the primary way a child component can "communicate back" to its parent. The child receives the function as a prop and can call it when an event (like a click) happens.

**Example:**

```javascript
// 1. Define the function in the Parent (App)
function App() {
  const handleParentClick = () => {
    alert("Clicked!");
  };

  // 2. Pass the function *reference* as a prop
  return <Button handleClick={handleParentClick} />;
}

// 3. The Child (Button) calls the prop
function Button({ handleClick }) {
  return <button onClick={handleClick}>Click Me</button>;
}
```

**Remember:** Pass the **function name**, not the **function call `()`**.