# 🧠 More On State


### Introduction

This lesson builds on the previous one, introducing more advanced concepts and techniques for managing state.

-----

### 📝 Lesson Overview

  * How to structure state.
  * How state updates.
  * Learn about controlled components.

-----

### 🏗️ How to Structure State

Effective state structure is crucial for avoiding bugs. As a general rule: **don’t put values in state that can be calculated from existing state or props.**

#### State Should Not Be Mutated

Treat state as if it were immutable. **Never mutate state directly**, especially objects and arrays. Always use the `setState` function to replace the state with a *new* object or array.

```javascript
function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  // ❌ BAD - Don't do this! Mutating state.
  const handleIncreaseAge_BAD = () => {
    person.age = person.age + 1; // MUTATION
    setPerson(person); // React may not see this as a change
  };

  // ✅ GOOD - Do this!
  const handleIncreaseAge_GOOD = () => {
    // Create a new object based on the old one
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson); // Pass the new object to update state
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge_GOOD}>Increase age</button>
    </>
  );
}
```

`setState` uses `Object.is()` to check for changes. If you pass the *same* object (even if you mutated it), React won't detect a change and won't re-render. You must provide a new object or array.

-----

### ⏱️ How State Updates

State updates are **asynchronous**. When you call `setState`, React queues the update and applies it in the *next* component render.

#### State as a Snapshot

State variables don't change *within* the render they were called. They are a "snapshot" of the state for that specific render.

```javascript
function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  const handleIncreaseAge = () => {
    // 'person' here is a snapshot from the render when the button was clicked
    console.log("in handleIncreaseAge (before setPerson call): ", person); // { age: 100 }
    
    setPerson({ ...person, age: person.age + 1 }); 
    
    // 'person' is *still* the snapshot from this render
    console.log("in handleIncreaseAge (after setPerson call): ", person);  // { age: 100 }
  };
  
  // This log runs on every render
  console.log("during render: ", person); // R1: { age: 100 }, R2: { age: 101 }

  return (
    <button onClick={handleIncreaseAge}>Increase age</button>
  );
}
```

The state only "updates" when the component re-renders.

#### The Unexpected Infinite Loop

Can you guess why this is an infinite loop?

```javascript
function Component() {
  const [count, setCount] = useState(0);

  setCount(count + 1); // Calling setState directly in the render body
                       // 1. Renders
                       // 2. setCount is called
                       // 3. Queues a re-render
                       // 4. Go back to step 1... 🔁

  return <h1>{count}</h1>;
}
```

#### State Updater Functions

What do you think this does?

```javascript
const handleIncreaseAge = () => {
  setPerson({ ...person, age: person.age + 1 });
  setPerson({ ...person, age: person.age + 1 });
};
```

It only increases the age by **1**. Both calls read from the *same snapshot* of `person` from the current render.

To update state based on the *previous* state (especially multiple times), pass an **updater function** to `setState`. React will queue these functions and run them in order.

```javascript
const handleIncreaseAge = () => {
  // Pass a function that receives the "previous state"
  setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
};
```

This will correctly increase the age by 2.

#### React Batches State Updates

Even though we called `setPerson` twice, React is smart and **batches** these updates together. The component will only **re-render once** per event.

-----

### 🎮 Controlled Components

Native HTML elements like `<input>` maintain their own internal state. A **controlled component** is one where React "controls" the element by managing its state.

We do this by:

1.  Creating a state variable (e.g., `value`).
2.  Setting the element's `value` prop to our state variable (`value={value}`).
3.  Updating our state variable in the `onChange` event handler.

<!-- end list -->

```javascript
function CustomInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value} // React controls the value
      onChange={(event) => setValue(event.target.value)} // React updates state on change
    />
  );
}
```

This pattern is essential for forms, as it gives React access to the user's input at all times.

-----

### 📚 Assignment

  * Read the following articles from the React documentation:
      * [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)
      * [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure)
      * [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
  * **Update the `Person` component:**
      * Add two separate input fields for first name and last name.
      * These inputs should be **controlled components**.
      * On every keystroke, they should update the full name displayed in the `<h1>` element.

-----

### 🤔 Knowledge Check

  * What should you keep in mind while declaring state?
  * Why should we always use `setState` to update our state?
  * What does “state as a snapshot” mean?
  * What’s the difference between passing a value vs. a callback to the `setState` function?
  * Why should we always provide a new object to `setState`?
  * Why would you want to control a component?