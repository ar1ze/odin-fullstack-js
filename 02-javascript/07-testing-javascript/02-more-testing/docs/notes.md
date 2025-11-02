# 🧪 More Testing

### 🎯 The Importance of Isolation

-----

A basic concept in testing is **isolation**. You should only test one method at a time.

  * Tests for one function should **not** depend on an external function behaving correctly.
  * **Why?** When tests fail, you want to narrow down the cause as quickly as possible. If a test depends on several functions, it's hard to tell exactly what went wrong.

### 🧬 Pure Functions vs. Tightly Coupled Code

-----

One of the biggest benefits of TDD (Test Driven Development) is that it helps you write better code by avoiding **tightly coupled code**.

  * **Tightly Coupled Code:** Code where functions are highly dependent on each other and external elements like DOM methods or `console.log()`. This type of code is very hard to test.

  * **Bad Example (Tightly Coupled):**

    ```javascript
    function guessingGame() {
      const magicNumber = 22;
      const guess = prompt('guess a number between 1 and 100!'); // External dependency
      if (guess > magicNumber) {
        alert('YOUR GUESS IS TOO BIG'); // External dependency
      } else if (guess < magicNumber) {
        alert('YOUR GUESS IS TOO SMALL'); // External dependency
      } //...
    }
    ```

  * **Good Example (Decoupled):**

    ```javascript
    // This is a "Pure Function" - easy to test
    function evaluateGuess(magicNumber, guess) {
      if (guess > magicNumber) {
        return 'YOUR GUESS IS TOO BIG';
      } else if (guess < magicNumber) {
        return 'YOUR GUESS IS TOO SMALL';
      } //...
    }

    // This function has "side effects"
    function guessingGame() {
      const magicNumber = 22;
      const guess = prompt('guess a number between 1 and 100!');
      const message = evaluateGuess(magicNumber, guess); // Uses the pure function
      alert(message);
    }
    ```

  * In the good example, we only need to test the `evaluateGuess` function, which is now a **Pure Function** (it has clear inputs and outputs and doesn't call external functions).

  * TDD encourages you to write code that looks like the second example from the start.

### 🎭 Mocking

-----

There are two solutions to the "tightly coupled code" problem:

1.  **Best Option:** Refactor your code to remove dependencies and create pure functions (as shown above).
2.  **Second Option: Mocking.** This is used when refactoring isn't possible.

<!-- end list -->

  * **What is Mocking?** Writing "fake" versions of a function that always behave exactly how you want them to for the test.
  * **Example:** If you're testing a function that gets data from a DOM input, you can "mock" the input-grabbing function to always return a specific value (e.g., "test value") without needing a real webpage.
  * **Warning:** Too much mocking is a bad sign. It means your code is too tightly coupled and should probably be refactored.

### 📚 Assignment Highlights

-----

  * Learn the value of "pure functions."
  * Watch videos on how to use Mocks in testing.
  * Read about Jest's "Setup and Teardown" and "mocking functions."
  * Watch the video on **what to test** (the concepts apply to any language).

### 🤔 Knowledge Check

-----

  * **What is tightly coupled code?**
      * Code where different parts are highly dependent on each other.
  * **What are the two requirements for a function to be pure?**
      * It only depends on its inputs.
      * It produces no "side effects" (like DOM manipulation, alerts, or console logs).
  * **What should you try before testing tightly coupled code?**
      * Refactor it to decouple it and create pure functions.
  * **How can you test code that can’t be decoupled?**
      * By using **mocking**.
  * **What should you *not* test?**
      * You should not test implementation details.
      * You should not test private methods.
      * You should not test outgoing messages that have no side effects.