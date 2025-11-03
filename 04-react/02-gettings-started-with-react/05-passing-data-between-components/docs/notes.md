# 🎁 Passing Data with Props

### Introduction

You're starting to see how powerful reusable components are. But how do you share information between them or customize them? This lesson covers **React props** (short for properties) and how to use them to pass data between components.

-----

### 📝 Lesson Overview

  * Passing data between components.
  * Using data to create customizable, reusable components.

-----

### 🌊 Data Transfer in React

In React, data transfer is **unidirectional**, meaning it flows in only one direction: from **parent components to child components**.

This data is passed via **props**. Any changes to this data only affect the child components that use it, not the parent or sibling components. This restriction gives you more control and results in fewer errors.

-----

### Using Props in React

Imagine we have a reusable `Button` component:

```javascript
function Button() {
  return (
    <button>Click Me!</button>
  );
}

export default function App() {
  return (
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  );
}
```

This is reusable, but all three buttons are identical. What if we want the second button to say "Don't Click Me\!"? We *could* create a `Button2` component, but this leads to a lot of code duplication.

This is where props come in. We can pass data *to* the `Button` component, just like passing arguments to a function.

```javascript
function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px'
  };

  return (
    <button style={buttonStyle}>{props.text}</button>
  );
}

export default function App() {
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>
  );
}
```

  * The `Button` component now receives a `props` object as its argument.
  * We access the data using `props.propertyName` (e.g., `props.text`).
  * In the `App` component, we pass the data to each `Button` using HTML-like attributes.

-----

### ✨ Prop Destructuring

A very common and clean pattern is to **destructure** the `props` object directly in the component's function signature. This makes the code more concise.

```javascript
function Button({ text, color, fontSize }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>;
}

// The App component stays the same
export default function App() {
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>
  );
}
```

-----

### 📦 Default Props

To avoid repetition and protect against `undefined` values, you can set **default values** for props using JavaScript's default parameters.

```javascript
function Button({ text = "Click Me!", color = "blue", fontSize = 12 }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return <button style={buttonStyle}>{text}</button>;
}

export default function App() {
  return (
    <div>
      {/* This button will use all default values */}
      <Button />
      
      {/* This button overrides two props */}
      <Button text="Don't Click Me!" color="red" />
      
      {/* This button overrides one prop */}
      <Button fontSize={20} />
    </div>
  );
}
```

> **Note:** You may also see an older syntax using `Button.defaultProps = { ... }`. This was common for class components, but default parameters are the preferred method for modern functional components.

-----

### 🔂 Functions as Props

You can also pass functions as props. This is a primary way a child component communicates back to its parent (by calling the function the parent passed to it).

```javascript
function Button({ text = "Click Me!", handleClick }) {
  const buttonStyle = {
    color: "blue",
    fontSize: "12px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function App() {
  // 1. Define the function in the parent
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      {/* 2. Pass the function *reference* as a prop */}
      <Button handleClick={handleButtonClick} />
    </div>
  );
}
```

**Important:** We pass the function *reference* (`handleClick={handleButtonClick}`), not the *result of calling it* (`handleClick={handleButtonClick()}`). If you include the parentheses, the function will execute when the component *renders*, not when it's clicked.

#### Passing Arguments to Prop Functions

If you need to pass an argument to the function, you must wrap it in an **anonymous arrow function** to prevent it from calling on render.

```javascript
export default function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      {/* This passes an arrow function to onClick.
        When the button is clicked, the arrow function is called,
        which *then* calls handleButtonClick with the URL.
      */}
      <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')} />
    </div>
  );
}
```

-----

### 📚 Assignment

  * Read through the React docs on [**Passing Props to a Component**](https://react.dev/learn/passing-props-to-a-component). Make sure to edit the code examples and experiment with different prop values.

-----

### 🤔 Knowledge Check

  * How does data flow between React components? From child to parent? From parent to child? Both?
  * Why do we use props in React?
  * How do we define default properties on a React component? What are some benefits in doing so?
  * How can we pass functions as props?