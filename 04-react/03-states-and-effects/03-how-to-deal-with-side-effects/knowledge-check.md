### Knowledge Check Answers 🎯

-----

**Question: What is an effect?**

**Answer:** An effect (or side effect) is any operation that interacts with the world *outside* of your component's rendering process.

**Why:** Examples include fetching data from an API, updating the document's title, setting up a timer (like `setInterval`), or manually changing the DOM.

**Remember:** If it affects something **outside** the component, it's a **side effect**.

-----

**Question: What constitutes a `useEffect` hook?**

**Answer:** A `useEffect` hook consists of two main parts: the **effect function** (the code to run) and an optional **dependency array** (which tells React *when* to run it).

**Why:** The effect function can also optionally return a **cleanup function**, which React runs before the effect re-runs or when the component unmounts to tidy up.

**Example:**

```javascript
useEffect(() => {
  // 1. The effect code (runs after render)
  console.log("Component mounted or updated");

  return () => {
    // 3. The cleanup function (optional)
    console.log("Cleaning up before next run or unmount");
  };
}, [count]); // 2. Dependency array (runs effect only when 'count' changes)
```

-----

**Question: What is the one question we can ask to know when to use an effect?**

**Answer:** You should ask: **"Do I need to synchronize with an external system?"**

**Why:** If the answer is yes (e.g., connecting to a server, a browser API, or a third-party library), then you likely need an effect. If you're just calculating data based on props or state, you *don't* need an effect.

**Remember:** Use effects to **sync**, not to **think** (calculate).

-----

**Question: What do we mean by lifting up the state?**

**Answer:** "Lifting up state" means moving a state variable from a child component up to its closest common ancestor component.

**Why:** This is done so that multiple child components can share and sync the same data. The parent manages the state and passes it down to the children via props.