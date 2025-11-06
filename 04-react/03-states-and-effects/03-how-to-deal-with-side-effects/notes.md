# 💥 How To Deal With Side Effects

**React Course**

### Introduction

Certain components need to interact with things outside themselves (e.g., fetching data, changing the document title). This interaction is called a **side-effect**. React provides the `useEffect` hook to handle these.

-----

### 📝 Lesson Overview

  * Understand what effects are in React.
  * Learn how to use effects in React applications.
  * Explore different parts of the `useEffect` hook.
  * Identify when to use an effect.

-----

### 🦸 Using Effect Saves the Day

Imagine a `Clock` component that updates every second. If we put `setInterval` directly in the component body, it would create a new interval on every render, causing chaos.

The `useEffect` hook lets us move this side-effect outside the rendering calculation.

```javascript
import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(key);
    };
  }, []) // Empty dependency array

  return (
    <p>{counter} seconds have passed.</p>
  );
}
```

#### The Dependency Array

The second argument to `useEffect` is an array of dependencies.

  * `useEffect(() => { ... })`: Runs after **every render**.
  * `useEffect(() => { ... }, [])`: Runs **only on mount** (initial render).
  * `useEffect(() => { ... }, [a, b])`: Runs on mount *and* if `a` or `b` have changed since the last render.

#### The Clean-up Function

You can return a function from `useEffect`. This function is executed:

1.  Before the next effect is run.
2.  When the component unmounts.
    This is crucial for cleaning up subscriptions, timers (like `setInterval`), etc., to prevent memory leaks and bugs.

-----

### 🤔 But Do We Need the Effect?

`useEffect` is an escape hatch to sync with external systems. **Unnecessary effects are a code smell.**

#### When NOT to use `useEffect`:

1.  **Calculating state during rendering:** If you can calculate something from existing state/props, do it directly in the component body.
    ```javascript
    // Don't use state + effect for this:
    const sum = number1 + number2;
    ```
2.  **Handling user events:** Use event handlers (like `onChange`, `onClick`) instead of effects when possible.
3.  **Resetting state based on a condition:** Often, you can use a unique `key` on a component to reset its state when props change.

#### Lifting State Up

If multiple components need to share state, move that state up to their closest common ancestor rather than trying to sync it with effects.

-----

### 📚 Assignment

  * Read the React docs on the [lifecycle of a component and useEffect](https://react.dev/learn/lifecycle-of-reactive-effects).
  * Read [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect).
  * Read about the common [infinite useEffect loop mistake](https://dmitripavlutin.com/react-useeffect-infinite-loop/).

-----

### 🤔 Knowledge Check

  * What is an effect?
  * What constitutes a `useEffect` hook?
  * What is the one question we can ask to know when to use an effect?
  * What do we mean by lifting up the state?