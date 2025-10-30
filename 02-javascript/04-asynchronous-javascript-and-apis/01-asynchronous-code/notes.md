# Asynchronous Code

### Introduction

JavaScript needs to perform functions that take time, like fetching data from a server. To handle this without freezing the rest of the code, JavaScript supports **asynchronous functions**, which can happen in the background.

-----

### 📝 Lesson Overview

  * Explain what a callback is.
  * Explain what a promise is.
  * Explain the circumstances under which promises are better than callbacks.
  * Explain what the `.then()` function does.

-----

### 📞 Callbacks

A **callback function** is a function passed into another function as an argument. This callback is then invoked inside the outer function to complete an action.

**Example:**

```javascript
myDiv.addEventListener("click", function(){
  // do something!
})
```

Here, the anonymous function is a callback passed to `addEventListener`. It's "called back" when `myDiv` is clicked.

  * **Problem:** While useful, callbacks can get out of hand, especially when you need to chain several together in a specific order. This is often called **"callback hell."**

-----

### 🤝 Promises

Promises are another way to handle asynchronous code. A **promise** is an object that *might* produce a value at some point in the future.

**The Problem Promises Solve:**
Imagine a function `getData()` that fetches data from a server.

```javascript
const getData = function() {
  // go fetch data from some API...
  // clean it up a bit and return it as an object:
  return data
}
```

If you try to use it like this, you'll run into trouble:

```javascript
const myData = getData()
const pieceOfData = myData['whatever'] // Error!
```

The code `myData['whatever']` will run before `getData()` has finished fetching. `myData` will be `undefined`.

**The Promise Solution:**
Promises allow you to tell your code to *wait* until the data is ready. If `getData()` is refactored to return a promise, you can do this:

```javascript
const myData = getData() // This returns a promise

myData.then(function(data){ // .then() waits for the promise to resolve
  const pieceOfData = data['whatever'] // This code runs only AFTER data arrives
})
```

The **`.then()`** function tells the code to wait until the promise is resolved (the data has arrived) and *then* run the function passed to it.

-----

### 📚 Assignment

  * Read a short [Promises article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises).
  * Watch a [video about promises](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DDHvZLrfKNVE) to see how they are used.
  * Watch ["What is Event Loop?"](https://www.youtube.com/watch?v=8aGhZQkoFbQ) to understand how async code works.
  * Watch a [video visualizing the Event loop](https://www.youtube.com/watch?v=PNa9OMajw9w).
  * Watch a [video visualizing promises](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DV6j14N3L38g) to understand their execution.
  * Read an [excellent promise basics article](https://developers.google.com/web/fundamentals/primers/promises) for beginners.

-----

### 🤔 Knowledge Check

  * What is a callback?
  * What is a promise?
  * When should you use promises over callbacks?
  * What does the `.then()` function do?

-----

### 🔗 Additional Resources

  * **Video:** [The Promises by ColorCode](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D2l3sP1GgD-4)
  * **Interactive:** [Scrim on asynchronous coding](https://www.google.com/search?q=https://scrimba.com/g/gasync)
  * **Book:** "You Don’t Know JavaScript" [Chapter 2: Callbacks](https://www.google.com/search?q=https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%2520%26%2520performance/ch2.md) and [Chapter 3: Promises](https://www.google.com/search?q=https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%2520%26%2520performance/ch3.md). (These are a difficult but worthwhile read).