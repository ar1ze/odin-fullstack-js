### Knowledge Check Answers 🎯

-----

**Question: How would you briefly define a recursive function?**

**Answer:** A recursive function is a function that calls itself from within its own code.

**Why:** It's a problem-solving technique where a function breaks a big problem down into smaller, identical versions of the same problem until it's simple enough to solve directly.

**Remember:** It's a function that **calls itself** to solve a smaller piece of the puzzle.

-----

**Question: What is the point of recursion? Is it more efficient than using a plain loop?**

**Answer:** The point of recursion is to solve complex problems using a "Divide and Conquer" strategy. No, it is almost always **less efficient** than using a loop.

**Why:** Each recursive call adds a new function to the call stack, which consumes more memory. Loops are generally faster and use less memory, but recursion can be a much cleaner and more elegant solution for certain types of problems (like navigating a file tree).

**Remember:** Use recursion for **clarity**, not **efficiency**.

-----

**Question: What are the 2 essential parts in a recursive function?**

**Answer:** The two essential parts are the **base case** and the **recursive case**.

**Why:**

1.  **Base Case:** This is the simple condition that **stops** the recursion.
2.  **Recursive Case:** This is where the function **calls itself** with a slightly smaller or simpler input, moving it closer to the base case.

**Example:**

```javascript
function countdown(n) {
  // 1. Base Case (the stopping condition)
  if (n < 1) {
    return;
  }
  
  // 2. Recursive Case (call itself with a smaller problem)
  countdown(n - 1);
}
```

-----

**Question: Why is “stack overflow” relevant to a recursive problem?**

**Answer:** A "stack overflow" is the error that happens when a recursive function calls itself too many times and runs out of memory.

**Why:** Every time a function calls itself, it gets added to the "call stack" in memory. If your function never hits its base case (or takes too many steps to get there), the stack fills up completely and the program crashes.

**Remember:** No **base case** (stop sign)? You'll **overflow the stack** (crash your program).