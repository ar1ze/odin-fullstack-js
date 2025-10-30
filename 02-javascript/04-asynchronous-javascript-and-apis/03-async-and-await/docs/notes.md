# ⛓️ Async and Await

### Introduction

`async` and `await` are two keywords that help make asynchronous code read more like synchronous code. This makes it cleaner and easier to follow while keeping the benefits of asynchronous operations.

**Promise `.then()` syntax:**

```javascript
function getPersonsInfo(name) {
  return server.getPeople().then(people => {
    return people.find(person => {
      return person.name === name
    });
  });
}
```

**`async/await` syntax:**

```javascript
async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find(person => {
    return person.name === name
  });
  return person;
}
```

Both functions do the exact same thing and return a promise.

-----

### 📝 Lesson Overview

  * Explain how you declare an `async` function.
  * Explain what the `async` keyword does.
  * Explain what the `await` keyword does.
  * Explain what an `async` function returns.
  * Explain what happens when an error is thrown inside an `async` function.
  * Explain how you can handle errors inside an `async` function.

-----

### ➡️ The `async` Keyword

  * The `async` keyword tells the JavaScript engine that you are declaring an asynchronous function.
  * It is **required** to use the `await` keyword inside a function.
  * It automatically makes the function **return a promise**.
  * **Returning** a value inside an `async` function is the same as **resolving** a promise with that value.
  * **Throwing an error** inside an `async` function is the same as **rejecting** the promise.
  * `async` functions are essentially "syntactical sugar" for promises.

`async` can be used with any function creation method:

```javascript
// Async function expression
const yourAsyncFunction = async () => {
  // do something asynchronously and return a promise
  return result;
}

// Async function in a callback
anArray.forEach(async item => {
  // do something asynchronously for each item
});
```

-----

### ⏸️ The `await` Keyword

  * `await` tells JavaScript to **wait** for an asynchronous action (a promise) to finish before continuing the function. It's like a "pause until done" keyword.
  * It is used to get a value from a promise, replacing the need for `.then()`.
  * You assign the result of the `await` expression to a variable, just as you would in synchronous code.

-----

### 🛡️ Error Handling

Since `async` functions return promises, you can handle errors in two main ways:

**1. Using `.catch()`**
You can append a `.catch()` block when you call the `async` function.

```javascript
asyncFunctionCall().catch(err => {
  console.error(err)
});
```

**2. Using `try...catch`**
You can handle the error *directly inside* the `async` function using a `try...catch` block. If an error is thrown in the `try` block (e.g., a promise rejects), the `catch` block's code will run.

```javascript
async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => {
      return person.name === name
    });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}
```

-----

### 🔄 Practice: Refactoring Giphy API Call

Here is how to convert the promise-based Giphy fetch to use `async/await`.

**Original `.then()` code:**

```javascript
<script>
  const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
</script>
```

**Refactored `async/await` code:**
Since `await` doesn't work at the top level (in non-module scripts), we wrap it in an `async` function.

```javascript
<script>
  const img = document.querySelector('img');

  async function getCats() {
    // 1. 'await' the fetch call to get the response
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats');
    
    // 2. 'await' the .json() call (which also returns a promise) to get the data
    const catData = await response.json();
    
    // 3. Use the data just like synchronous code
    img.src = catData.data.images.original.url;
  }
  
  // 4. Call the async function to run it
  getCats();
</script>
```

-----

### 📚 Assignment

  * Read an [Async and Await article](https://javascript.info/async-await) for a solid introduction.
  * Read this [Async and Await examples article](https://www.javascripttutorial.net/es-next/javascript-async-await/).
  * Watch this [Async and Await video by Wes Bos](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3DSgQhS11nS-w) for a good overview.

-----

### 🤔 Knowledge Check

  * What does the `async` keyword do?
  * What does the `await` keyword do?
  * What is returned from an `async` function?
  * What happens when an error is thrown inside an `async` function?
  * How can you handle errors inside an `async` function?

-----

### 🔗 Additional Resources

  * **Video:** [Change promises to async/await](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3D5-0n-nQ-jDk)
  * **Video:** [Promises, Async and Await](https://www.youtube.com/watch?v=li7FzDHYZpc) (comprehensive)
  * **Interactive:** [Scrim on async and await](https://www.google.com/search?q=https://scrimba.com/g/gasync)
  * **Article:** [Promises From The Ground Up](https://www.google.com/search?q=https://blog.webf.io/promises-from-the-ground-up/)