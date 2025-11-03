# 🎨 Rendering Techniques

### Introduction

Now that we know JSX, this lesson covers rendering multiple elements and conditional rendering.

-----

### 📝 Lesson Overview

  * Render a list of elements/components in JSX.
  * Conditionally render UI.

-----

### 📜 Rendering Lists in JSX

Hard-coding lists in JSX is inflexible:

```javascript
function App() {
  return (
    <ul>
      <li>Lion</li>
      <li>Cow</li>
    </ul>
  );
}
```

A better way is to use the JavaScript `.map()` method to transform an array of data into an array of elements. JSX can render arrays automatically.

```javascript
function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}
```

> **What is `key`?**
> The `key` prop is a special string attribute you need to include when creating lists of elements. It helps React identify which items have changed, are added, or are removed. We will cover this in more detail in the next lesson.

-----

### 📦 Rendering Lists of Components

You can make your code more modular by moving the list logic into its own component. We pass data to components using **props**, which are passed just like HTML attributes.

```javascript
// A component for the list item
function ListItem(props) {
  return <li>{props.animal}</li>
}

// A component for the list
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        // Pass the individual animal as a prop to ListItem
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      {/* Pass the whole array as a prop to List */}
      <List animals={animals} />
    </div>
  );
}
```

-----

### 🤔 Conditionally Rendering UI

You can use standard JavaScript syntax to conditionally render JSX.

#### 1\. Using `if` Statements (Guard Clauses)

You can use `if` statements at the top of your component to return different JSX based on a condition. This is a great pattern for handling "loading" or "empty" states.

```javascript
function List(props) {
  // 1. Guard for loading state
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  // 2. Guard for empty state
  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  // 3. Render the list
  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function App() {
  const animals = []; // Try with [], null, or ["Lion", "Cow"]

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
```

#### 2\. Using the Ternary Operator (`? :`)

For simple inline conditions, the ternary operator is very common. Use `null` to render nothing.

```javascript
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        // Only render animals that start with 'L'
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}
```

#### 3\. Using the Logical AND (`&&`) Operator

This is a shortcut for when you want to render something *only if* the condition is true.

```javascript
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        // Only render animals that start with 'L'
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}
```

> **Pitfall:** When using `&&`, don’t put numbers on the left side. `0 && <SomeComponent />` will render `0`, not nothing.

-----

### 📚 Assignment

  * Read the React docs on **[Conditional Rendering](https://react.dev/learn/conditional-rendering)** and try the examples.
  * Read the React docs on **[Rendering Lists](https://react.dev/learn/rendering-lists)**. (You can skip the section on keys for now).

-----

### 🧠 Knowledge Check

  * How do you render a list of elements/components in JSX?
  * What are the ways you could render UI conditionally?
  * How would you conditionally return JSX?