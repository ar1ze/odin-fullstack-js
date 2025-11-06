# 🧠 Introduction To State

### Introduction

Applications change as the user interacts with them, from toggling a menu to fetching data. React provides **state** to make your components dynamic. In this lesson, we will learn how to use state in React.

-----

### 📝 Lesson Overview

  * What state in React is.
  * How to use state in React.
  * What happens in React when state is changed.

-----

### 🤔 What is State in React?

Components often need to change what’s on the screen as a result of an interaction. To do this, a component needs to "remember" things. **State is a component’s memory.**

-----

### 🪝 The useState Hook

The `useState` hook is a built-in React function that allows you to add state to a functional component.

It takes one argument: the **initial value** for the state.
It returns an array with two elements:

1.  The **current state value**.
2.  A **function to update the state value**.

We typically use array destructuring to get these two elements:

```javascript
const [stateValue, setStateValue] = useState(initialValue);

// Example
const [backgroundColor, setBackgroundColor] = useState(initialColor);
```

When you call the update function (e.g., `setBackgroundColor`), React handles the rest.

-----

### ⚙️ How Does State Work in React?

When a component’s state or props change, React **runs your component function again from the beginning**. This process is called **rerendering**.

React uses the new state and props to figure out what should be displayed and then applies (or "commits") the calculated changes to the DOM.

#### The Reconciliation Algorithm

1.  Rerendering generates a new **virtual DOM** (a lightweight copy of the UI).
2.  React compares this new virtual DOM tree to the previous one.
3.  It calculates the **minimal set of changes** needed to update the *actual* DOM.
4.  This comparison process is the **reconciliation algorithm**.

When you call an update function (like `setBackgroundColor`), the component rerenders. React keeps track of the latest state value and provides it to your component. The `initialValue` (e.g., `initialColor`) is **only used for the component’s first render** and is ignored on all subsequent rerenders.

-----

### Rules of Hooks

**Hooks** are functions that let you use React features (like `useState`). All hooks are recognizable by the `use` prefix.

Hooks have two important rules:

1.  Hooks can **only be called from the top level** of a functional component.
2.  Hooks **can’t be called from inside loops or conditions.**

-----

### 📚 Assignment

  * Read the following articles from the React docs:
      * [State: A Component’s Memory](https://react.dev/learn/state-a-components-memory)
      * [Render and Commit](https://react.dev/learn/render-and-commit)
  * Read this article on the [React Reconciliation Algorithm](https://reactjs.org/docs/reconciliation.html) for a great explanation.
  * Go back to the color-changing background example from the lesson, fork it on CodeSandbox, and add a new state variable to **keep track of the number of times the background color has been changed**. Display this count on the page.

-----

### 🤔 Knowledge Check

  * What is state?
  * What is the `useState` hook and how would you use it?
  * What happens to a component when one of its states is changed?
  * What are some of the rules of hooks?

-----

### 🔗 Additional Resources

  * You can go through the [GeeksforGeeks article on reconciliation](https://www.google.com/search?q=httpsD://www.geeksforgeeks.org/react-js-reconciliation/) for an in-depth look into the algorithm.