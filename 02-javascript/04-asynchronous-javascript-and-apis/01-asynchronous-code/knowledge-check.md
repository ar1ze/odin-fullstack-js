### Knowledge Check Answers 🎯

-----

**Question: What is a callback?**

**Answer:** A callback is a function that you pass as an argument into another function.

**Why:** The outer function can then "call back" (run) your function later to complete an action, often after an event happens or a task is finished.

**Example:**

```javascript
// The anonymous function is the callback.
// It gets called back *only* when the click event happens.
myDiv.addEventListener("click", function(){
  console.log("The div was clicked!");
});
```

**Remember:** You give a function your **phone number (the callback)**, and it **calls you back** when it's ready.

-----

**Question: What is a promise?**

**Answer:** A promise is a JavaScript object that represents a future value; it's a placeholder for an action that hasn't finished yet.

**Why:** It allows you to write asynchronous code that is easier to manage. A promise can be in one of three states: pending (waiting), fulfilled (succeeded), or rejected (failed).

**Example:**

```javascript
// getData() returns a promise that *will* hold data in the future
const myDataPromise = getData();
```

**Remember:** A promise is like an **oven timer** ⏲️; it's an object that will notify you when your pizza (the data) is finally ready.

-----

**Question: When should you use promises over callbacks?**

**Answer:** You should use promises over callbacks when you need to chain several asynchronous actions together in a specific order.

**Why:** Chaining multiple callbacks can lead to deeply nested, hard-to-read code (known as "callback hell"). Promises allow you to chain actions cleanly using `.then()`, which is much easier to read and maintain.

-----

**Question: What does the `.then()` function do?**

**Answer:** The `.then()` function is attached to a promise and tells your code what to do *after* the promise successfully resolves.

**Why:** It takes a function as an argument, and that function will only run once the promise is fulfilled, receiving the resulting value (like the fetched data) as its parameter.

**Example:**

```javascript
myDataPromise.then(function(data) {
  // This code only runs AFTER the promise is fulfilled
  console.log(data); // `data` is the value from the promise
});
```

**Remember:** `.then()` is the instruction for "**...and *then* do this** with the result."