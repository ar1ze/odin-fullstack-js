# 🏭 Factory Functions & The Module Pattern

### 🔭 Scope & Closures

  * **Scope:** Determines where a variable is accessible.

      * **Global Scope:** Available everywhere in the code.
      * **Function Scope:** Limited to the function it was declared in (using `var`).
      * **Block Scope:** Limited to the nearest set of `{}` curly braces, like in an `if` statement or `for` loop (using `let` and `const`).

  * **Closures:** A closure is the combination of a function and the environment (or *lexical environment*) in which it was declared.

      * **In simple terms:** An inner function "remembers" and has access to the variables of its outer function, even after the outer function has finished running.
      * **Why it's important:** This allows us to create **private** variables and associate data with functions.

    <!-- end list -->

    ```javascript
    function makeAdding(firstNumber) {
      // 'first' is part of the closure
      const first = firstNumber;
      return function resulting(secondNumber) {
        // 'resulting' "remembers" 'first'
        return first + secondNumber;
      }
    }

    const add5 = makeAdding(5); // add5 is a closure
    console.log(add5(2)); // 7
    ```

### 😟 What's Wrong with Constructors?

While fundamental, constructors have some drawbacks that have made factory functions more popular:

  * **Ambiguous Syntax:** They look like regular functions but behave differently.
  * **Requires `new`:** Forgetting the `new` keyword can lead to hard-to-track bugs.
  * **Unreliable `instanceof`:** In JavaScript, `instanceof` can be misleading for checking an object's origin.

### ✨ Factory Functions

A factory function is simply a function that creates and returns an object, without using the `new` keyword or prototypes.

  * **Basic Example:**
    ```javascript
    function createUser(name) {
      const discordName = "@" + name;
      // Uses object shorthand notation
      return { name, discordName };
    }

    const newUser = createUser("josh");
    ```
  * **Private Variables & Functions:** This is the key advantage of factories, enabled by closures. Variables defined inside the factory but *not* returned are private. They can only be accessed or modified by the methods that *are* returned.
    ```javascript
    function createUser(name) {
      let reputation = 0; // Private variable
      const giveReputation = () => reputation++; // Public method
      const getReputation = () => reputation; // Public method

      return { name, giveReputation, getReputation };
    }

    const josh = createUser("josh");
    josh.giveReputation();
    console.log(josh.getReputation()); // 1
    // console.log(josh.reputation); // undefined - can't access it directly
    ```
  * **Inheritance:** You can achieve inheritance by calling one factory inside another or by using `Object.assign()`.

### 📦 The Module Pattern & IIFEs

The Module Pattern is a way to organize code into self-contained units, avoiding pollution of the global scope. It's often used when you only need a single instance of an object.

  * **IIFE (Immediately Invoked Function Expression):** A function that is defined and executed immediately. It's the core of the module pattern.

    ```javascript
    const myModule = (function() {
      // ... private variables and functions here
      return {
        // ... public methods here
      };
    })(); // The () at the end executes it right away
    ```

  * **How it Works:** The IIFE creates a private scope. The object it returns becomes the public interface for the module.

  * **Benefits:**

      * **Encapsulation:** Bundles related code and data together.
      * **Namespacing:** Prevents naming collisions. Instead of a generic `add` function in the global scope, you can have a more specific `calculator.add()`.

    <!-- end list -->

    ```javascript
    const calculator = (function () {
      const add = (a, b) => a + b;
      const sub = (a, b) => a - b;
      return { add, sub };
    })();

    calculator.add(3, 5); // 8
    ```