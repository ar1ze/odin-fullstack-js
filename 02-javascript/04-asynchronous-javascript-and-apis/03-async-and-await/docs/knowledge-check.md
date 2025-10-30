### Knowledge Check Answers 🎯

-----

**Question: What does the `async` keyword do?**

**Answer:** The `async` keyword is placed before a function to declare it as an asynchronous function.

**Why:** This allows the function to use the `await` keyword and automatically makes the function return a promise.

**Example:**

```javascript
async function myFunc() {
  // This is now an async function
  return 'hello';
}
```

**Remember:** `async` is the **"on switch"** 💡 for asynchronous behavior in a function.

-----

**Question: What does the `await` keyword do?**

**Answer:** The `await` keyword pauses the execution of an `async` function until a promise settles (resolves or rejects).

**Why:** This lets you "wait" for an asynchronous action to finish and get its value, making your code look synchronous and avoiding `.then()` blocks.

**Example:**

```javascript
async function getData() {
  // Pauses here until the promise resolves
  const response = await fetch('url'); 
  const data = await response.json(); // Pauses again
  return data;
}
```

**Remember:** `await` is the **"pause button"** ⏸️ that waits for a promise to finish.

-----

**Question: What is returned from an `async` function?**

**Answer:** An `async` function **always** returns a promise.

**Why:** If you `return` a value directly (like `return 10`), the function automatically wraps that value in a promise that resolves with `10`.

**Example:**

```javascript
async function getNum() {
  return 5; // This function actually returns Promise.resolve(5)
}

getNum().then(value => console.log(value)); // Logs 5
```

**Remember:** `async` functions **promise** to give you a value back.

-----

**Question: What happens when an error is thrown inside an `async` function?**

**Answer:** The `async` function stops executing, and the promise it returned is immediately **rejected** with that error.

**Why:** This is the `async/await` equivalent of calling `reject(error)` in a traditional promise.

**Example:**

```javascript
async function testError() {
  throw new Error('Oops!'); // This promise will be rejected
}

testError().catch(err => console.log(err.message)); // Logs 'Oops!'
```

-----

**Question: How can you handle errors inside an `async` function?**

**Answer:** You can use a `try...catch` block *inside* the function, or a `.catch()` block *outside* where the function is called.

**Why:** A `try...catch` block allows you to catch errors from `await` expressions directly, just like regular synchronous code. A `.catch()` block works because the `async` function returns a promise.

**Example:**

```javascript
// Using try...catch inside
async function myFunc() {
  try {
    const data = await someRiskyOperation();
  } catch (error) {
    console.log('Caught error inside:', error);
  }
}

// Using .catch() outside
myFunc().catch(err => console.log('Caught error outside:'));
```