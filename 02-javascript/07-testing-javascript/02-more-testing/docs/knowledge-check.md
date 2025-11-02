### Knowledge Check Answers 🎯

-----

**Question: What is tightly coupled code?**

**Answer:** Tightly coupled code is code where different functions or modules are highly dependent on each other to work.

**Why:** This is a bad sign because a change in one part of the code can easily break another part. It also makes testing difficult because you can't test one function in isolation.

**Remember:** Think of it as **glued-together code** 🧩; you can't test one piece without bringing the whole messy blob with it.

-----

**Question: What are the two requirements for a function to be pure?**

**Answer:** A pure function must 1) always return the same output for the same inputs, and 2) produce no "side effects."

**Why:** "No side effects" means the function doesn't change anything outside of itself. It can't modify a global variable, `alert()`, `console.log()`, or change the DOM. This makes them predictable and easy to test.

**Example:**

```javascript
// Pure function:
function add(a, b) {
  return a + b;
}
```

**Remember:** **Same input = same output,** and it doesn't change the outside world.

-----

**Question: What are side effects and why is it important to identify them when testing a function?**

**Answer:** Side effects are any actions a function takes that change something *outside* of its own scope, such as modifying the DOM, writing to the console, or changing a global variable.

**Why:** It's important to identify them because they make a function's behavior unpredictable. A function with side effects can't be tested in isolation, as it depends on or changes an external state.

-----

**Question: What should you try before testing tightly coupled code?**

**Answer:** You should always try to **refactor** the code first.

**Why:** Refactoring allows you to decouple the code by separating the pure logic (which is easy to test) from the parts with side effects (like DOM manipulation).

**Example:** Pulling the `evaluateGuess` logic out of the main `guessingGame` function creates a pure, testable function, leaving the `alert` and `prompt` in the (untested) `guessingGame` function.

**Remember:** **Separate the brain** (logic) **from the body** (side effects).

-----

**Question: How can you test code that can’t be decoupled?**

**Answer:** You can test code that can't be decoupled by using **mocking**.

**Why:** Mocking involves creating a "fake" version of a dependency (like a function or module) that you can control. This lets you test your function in isolation by telling the mock exactly how to behave.

**Remember:** A **mock** is a **stunt double** 🕴️ for your test.

-----

**Question: What is mocking?**

**Answer:** Mocking is the act of creating a "fake" or simulated version of a function, object, or module that your code depends on.

**Why:** This fake version is used only during tests. It allows you to control its behavior, such as forcing it to return a specific value or to check if it was called correctly, thereby isolating the code you are *actually* testing from its dependencies.

-----

**Question: When would you use a mock function?**

**Answer:** You would use a mock function to replace an external dependency that is difficult to use in a test.

**Why:** This is perfect for replacing things like API calls (you don't want to make a real network request in a test), DOM manipulation (`alert`), or any function from another module. This isolates your test to focus *only* on the logic of the function you are testing.

-----

**Question: How should you test incoming query messages?**

**Answer:** You should test the *observable outcome* of the query, not the query itself.

**Why:** You don't need to check that a "getter" function was called. You need to test that your code *behaves correctly* as a result. Assert that the *state* changed as expected or that the correct *response* was sent.

-----

**Question: Why should you not test implementation?**

**Answer:** You should not test implementation details because it makes your tests **brittle**.

**Why:** Brittle tests break when you refactor your code, even if the function's overall behavior is still correct. Your tests should only care about the **public interface** (what goes in and what comes out), not *how* the function gets its result.

**Remember:** Test **what** the function does, not **how** it does it.

-----

**Question: Should you test private methods?**

**Answer:** No, you should not test private methods directly.

**Why:** Private methods are an implementation detail. They should be tested *indirectly* by testing the public methods that call them. If a public method works, you can be confident the private methods it relies on are also working.

-----

**Question: Why should you not test outgoing messages with no side effects?**

**Answer:** Because if there is no observable change in behavior or state (no side effect), there is nothing to assert.

**Why:** A test can only check for an outcome. If a function calls another "query" function but doesn't change its own state or return a new value, testing that the call happened is just testing an implementation detail, which makes the test brittle.