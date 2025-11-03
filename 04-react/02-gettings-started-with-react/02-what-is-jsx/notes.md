# ❓ What Is JSX?

### Introduction

You’re likely somewhat familiar with JSX from previous React lessons. In this lesson, we’re going to explain what it is, why we use it, and how to use it in your React apps.

-----

### 📝 Lesson Overview

  * What JSX is.
  * Differences between JSX and HTML.

-----

### 🤔 What is JSX?

**JSX** is a syntax extension for JavaScript that lets you write **HTML-like markup inside a JavaScript file**. It’s not required when writing React, but it does make writing components more concise.

Essentially, JSX is syntactic sugar for the `React.createElement` function. This function creates a React element (a plain object), so JSX compiles down to plain JavaScript objects.

Here you can see the logged value of a `div` JSX element with some text:

### 💜 Why Do We Use JSX?

In apps, rendering logic and markup are often coupled. JSX allows React to keep both rendering logic and content in the same place (a component), rather than separating them into different files.

On top of this, it’s a more intuitive, visual way to work with the UI inside your code, and allows React to show more useful error and warning messages.

-----

### 📜 Rules of JSX

If you copy valid HTML straight into your React component, it won't work. This is due to a few rules JSX has that HTML doesn't.

#### 1\. Return a Single Root Element

If you want to return multiple elements, you must wrap them in a single parent tag. This can be a `<div>`, or if you don't want an extra container, you can use a React **Fragment**: `<> ... </>`.

**Correct:**

```javascript
function App() {
  // Could replace <></> with <div></div>
  return (
    <>
      <h1>Example h1</h1>
      <h2>Example h2</h2>
    </>
  );
}
```

**Incorrect:**

```javascript
function App() {
  return (
    <h1>Example h1</h1>
    <h2>Example h2</h2>
  );
}
```

#### 2\. Close All Tags

In HTML, some tags are self-closing (like `<input>`). In JSX, you must *explicitly* close every tag.

`<input>` becomes `<input />`, and `<li>` becomes `<li></li>`.

**Correct:**

```javascript
function App() {
  return (
    <>
      <input />
      <li></li>
    </>
  );
}
```

**Incorrect:**

```javascript
function App() {
  return (
    <>
      <input>
      <li>
    </>
  );
}
```

#### 3\. camelCase Most Things

JSX turns into JavaScript, and attributes become keys on JavaScript objects. You can't use dashes or reserved words like `class`.

Because of this, many HTML attributes are written in **camelCase**:

  * `stroke-width` becomes `strokeWidth`
  * `class` becomes `className`

**Correct:**

```javascript
function App() {
  return (
    <div className="container">
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
    </div>
  );
}
```

**Incorrect:**

```javascript
function App() {
  return (
    <div class="container">
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
      </svg>
    </div>
  );
}
```

-----

### 🔄 Converting HTML to JSX

Let's convert this block of HTML to valid JSX. You can follow along in your local environment or at [react.new](https://react.new).

**Original HTML:**

```html
<h1>Test title</h1>
<svg>
  <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
</svg>
<form>
  <input type="text">
</form>
```

**Step 1: Fix - Return a single root element**

```html
<div>
  <h1>Test title</h1>
  <svg>
    <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
  </svg>
  <form>
    <input type="text">
  </form>
</div>
```

**Step 2: Fix - Close all tags**

```html
<div>
  <h1>Test title</h1>
  <svg>
    <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
  </svg>
  <form>
    <input type="text" />
  </form>
</div>
```

**Step 3: Fix - camelCase attributes**

```html
<div>
  <h1>Test title</h1>
  <svg>
    <circle cx="25" cy="75"r="20" stroke="green" strokeWidth="2" />
  </svg>
  <form>
    <input type="text" />
  </form>
</div>
```

This is now fully fledged JSX code that can be used in a React component.

-----

### 📚 Assignment

  * Read through the React docs: **[Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)**.
  * Read through the React docs: **[JavaScript in JSX](https://www.google.com/search?q=https://react.dev/learn/javascript-in-jsx)** (to learn how to use logic and dynamic values).

-----

### 🤔 Knowledge Check

  * What is JSX?
  * Why do we use JSX?
  * What are the three rules of JSX?
  * How do you reference a dynamic value inside of your JSX?