# 🔑 Keys In React

**React Course**

### Introduction

In this lesson, we will cover keys in React. Keys are a special and required prop when rendering lists of elements, and we'll learn why they are so important.

-----

### 📝 Lesson Overview

  * Learn what keys are in React and why they are necessary.
  * Identify examples of good and bad key usage.

-----

### 🤔 Why Does React Need Keys?

When you render a list of items, React needs to know which item is which. Imagine your list changes—an item is added, removed, or re-sorted. How does React know which specific element in the DOM to update, move, or delete?

  * **Without Keys:** React might have to re-render the *entire* list, which is inefficient.
  * **With Keys:** You provide a **unique and stable** identifier for each item. When the list updates, React uses these keys to match the old items with the new ones and only applies changes to the items that actually changed.

Keys must be **consistent and unique** among their siblings for React to handle updates effectively.

-----

### How to Use Keys

Keys are passed as a prop to the element you are iterating over (like `<li>` or a custom component).

```jsx
<Component key={item.id} />
// or
<li key={item.id}>...</li>
```

#### ✅ Best Practice: Use a Stable, Unique ID

The best key is a string that uniquely and permanently identifies an item, such as an `id` from your data (e.g., from a database).

```jsx
const todos = [
  { task: "mow the yard", id: "a1" },
  { task: "Work on Odin", id: "b2" },
];

function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
```

#### ⚠️ Bad Practice: Using the Array Index

You can use the array index as a key (`key={index}`), but this is **not recommended** for lists where the order can change, or items can be added or removed. It can lead to bugs and performance issues. Only use it for lists that are completely static and will never change.

```jsx
// Only do this if the list is static and will never reorder.
{months.map((month, index) => (
  <li key={index}>{month}</li>
))}
```

#### ❌ Anti-Pattern: Generating Keys On-the-Fly

**Never** generate keys during render. This defeats the entire purpose of keys, as a new key will be generated on every re-render, forcing React to destroy and recreate all elements.

```jsx
// ANTI-PATTERN: DON'T DO THIS
{todos.map((todo) => (
  <li key={Math.random()}>{todo.task}</li>
))}

// ANTI-PATTERN: DON'T DO THIS EITHER
{todos.map((todo) => (
  <li key={crypto.randomUUID()}>{todo.task}</li>
))}
```

-----

### 🏁 Conclusion

Keys are crucial for React's performance. Always provide a **stable and unique** key for each item in a list, ideally from your data itself.

-----

### 📚 Assignment

1.  Read the [React docs on keys](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key).
2.  Watch this short video demonstrating why [index as key is an anti-pattern](https://youtu.be/xlPxnc5uUPQ).

-----

### 🤔 Knowledge Check

  * Why does React need keys?
  * How do you use keys?
  * Where should the key value ideally come from?
  * When *can* we use an array index as the key value?
  * What is an anti-pattern when using keys?

-----

### 🔗 Additional Resources

  * This article on [React key attribute by Nadia Makarevich](https://www.developerway.com/posts/react-key-attribute) takes an in-depth look into keys.