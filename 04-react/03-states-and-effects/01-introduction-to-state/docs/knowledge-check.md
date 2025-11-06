### Knowledge Check Answers 🎯

-----

**Question: What is state?**

**Answer:** State is a component's **memory**.

**Why:** It allows a component to "remember" and keep track of information that changes over time, like user input, whether a menu is open, or data fetched from an API.

**Remember:** State is the component's **memory** 🧠.

-----

**Question: What is the `useState` hook and how would you use it?**

**Answer:** The `useState` hook is a built-in React function that lets you add a state variable to your functional component.

**Why:** You call it with an initial value, and it returns an array with two things: the current state value and a function to update that value.

**Example:**

```javascript
// 1. Call useState with an initial value
const [count, setCount] = useState(0);

// 2. Use the value in your JSX
<p>You clicked {count} times</p>

// 3. Use the update function to change the state
<button onClick={() => setCount(count + 1)}>
  Click me
</button>
```

**Remember:** `useState` gives you a **value** and a **setter function** to change that value.

-----

**Question: What happens to a component when one of its states is changed?**

**Answer:** The component **rerenders**, which means React runs the component's function again from the top.

**Why:** When you call the state update function (e.g., `setCount(1)`), React schedules a rerender. It then compares the new UI with the old one (called "reconciliation") and efficiently updates only the parts of the DOM that actually changed.

**Remember:** **State change = Rerender**.

-----

**Question: What are some of the rules of hooks?**

**Answer:** The two main rules are:

1.  Hooks can **only be called from the top level** of a functional component.
2.  Hooks can**not be called from inside loops or conditions**.

**Why:** These rules ensure that hooks are always called in the same order on every render, which is how React keeps track of which state belongs to which `useState` call.