### Knowledge Check Answers 🎯

-----

#### **How does scope work in JavaScript?**

**Answer:** Scope determines where a variable is accessible in your code. Variables can be **global** (available everywhere) or **local** (available only within a specific function or block).

**Why:** JavaScript has **function scope** for variables declared with `var` and **block scope** for variables declared with `let` and `const`. Block scope means the variable is only accessible within the nearest set of curly braces (`{}`).

**Example:**

```javascript
function testScope() {
  var functionVar = "I'm in a function"; // function scope
  if (true) {
    let blockVar = "I'm in a block";     // block scope
    console.log(blockVar);               // Works fine here
  }
  // console.log(blockVar);              // ERROR! Not accessible here.
}
```

**Memory Aid:** Think of scope as the **room** a variable lives in; you can't see it from outside that room.

-----

#### **What are closures and how do they help in creating private variables?**

**Answer:** A closure is a function's ability to "remember" and access variables from its parent's scope, even after the parent function has finished executing.

**Why:** This helps create private variables because you can define variables in a parent function and only return inner functions that use them. Since the variables themselves aren't returned, they can't be accessed from the outside, only through the returned functions.

**Example:**

```javascript
function makeAdding(firstNumber) {
  // 'firstNumber' is "remembered" by the inner function
  return function resulting(secondNumber) {
    return firstNumber + secondNumber;
  };
}
const add5 = makeAdding(5); // The inner function "remembers" that firstNumber is 5
console.log(add5(2)); // 7
```

**Memory Aid:** A closure is like a function with a **backpack** 🎒; it carries its surrounding variables with it wherever it goes.

-----

#### **What common issues can you face when working with constructors?**

**Answer:** The most common issues are forgetting to use the `new` keyword and the `instanceof` operator being potentially unreliable.

**Why:** Calling a constructor without `new` can create hard-to-debug errors by modifying the global object. Furthermore, `instanceof` isn't foolproof for checking an object's origin because its prototype chain can be altered after creation.

**Example:**

```javascript
function MyConstructor() {
  // If called without `new`, `this` would refer to `window`
  // instead of a new object, causing unexpected behavior.
  this.value = 1;
}
const myObj = MyConstructor(); // Missing 'new' - this is a bug!
```

-----

#### **What are private variables in factory functions and how can they be useful?**

**Answer:** Private variables are variables declared inside a factory function that are not returned in the final object.

**Why:** They are useful for protecting your data. Because they can't be accessed or modified from outside the function, you prevent accidental changes and can control how the data is handled by only exposing specific "public" functions that can interact with it.

**Example:**

```javascript
function createUser(name) {
  let reputation = 0; // 'reputation' is private
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;
  return { name, getReputation, giveReputation };
}

const josh = createUser("josh");
// josh.reputation is undefined; you must use josh.getReputation()
```

**Memory Aid:** Private variables are like an engine's internal parts; you use the public functions (pedals, steering wheel) to control them, but you don't touch them directly.

-----

#### **How can we implement inheritance with factory functions?**

**Answer:** Factories implement inheritance through **composition**, by calling one factory inside another and merging their returned objects.

**Why:** Instead of linking prototypes, you create an object from a "base" factory and then use a method like `Object.assign` to combine its properties with the new properties of the "child" factory.

**Example:**

```javascript
function createPlayer(name, level) {
  const user = createUser(name); // 1. Create the 'base' object
  const increaseLevel = () => level++;

  // 2. Combine the base object with new properties
  return Object.assign({}, user, { increaseLevel });
}
```

-----

#### **How does the module pattern work?**

**Answer:** The module pattern uses an Immediately Invoked Function Expression (IIFE) to create a single object that exposes a public interface while keeping its internal logic private.

**Why:** You define all your variables and functions inside an IIFE. The function returns an object containing only the members you want to be public. This encapsulates the internal details, which remain hidden but accessible to the public functions via closure.

**Example:**

```javascript
const calculator = (function () {
  const add = (a, b) => a + b; // private logic
  const sub = (a, b) => a - b; // private logic

  return { add, sub }; // public interface
})();

calculator.add(3, 5); // 8
```

**Memory Aid:** A module is a **self-building toolbox** 🧰; it runs once to assemble itself and only exposes the public controls.

-----

#### **What does IIFE stand for and what are they?**

**Answer:** IIFE stands for **Immediately Invoked Function Expression**.

**Why:** It is a JavaScript function that is defined and then executed immediately. This pattern is achieved by wrapping a function definition in parentheses `()` and then adding another pair of parentheses `()` to call it right away.

**Example:**

```javascript
(function() {
  console.log("This function ran instantly!");
})();
```

-----

#### **What is namespacing and how does the module pattern help with encapsulation?**

**Answer:** **Namespacing** is grouping related code under a single, unique name to avoid conflicts. **Encapsulation** is bundling that code into a self-contained unit.

**Why:** The module pattern helps by creating a single object (the "namespace") that holds related functions. This encapsulates the logic and prevents function names (like `add`) from clashing with other functions in the global scope, because you access them specifically through your unique namespace (e.g., `calculator.add`).

**Example:**

```javascript
const myCalculatorModule = (function() {
  // This 'add' function is safe inside the module's namespace
  const add = (a, b) => a + b;
  return { add };
})();

// No conflict with a global 'add' function because it's namespaced
myCalculatorModule.add(5, 5);
```