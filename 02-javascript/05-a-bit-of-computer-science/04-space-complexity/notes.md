# 💾 Space Complexity

### Introduction

This lesson focuses on **space complexity**, measuring how the memory usage of an algorithm is affected by the size of its input. We use the same Big O notations learned in the previous lesson on time complexity. "Memory" refers to primary memory (like RAM), which is the working memory available to your system.

-----

### 📝 Lesson Overview

  * What do we mean by space complexity.
  * Why is it important to consider how our algorithm uses memory space.
  * How do we measure space complexity.

-----

### 🤔 What is Space Complexity?

**Space complexity** is the total amount of memory (space) used by an algorithm relative to the size of its input. Just like with time complexity, we want to know how the efficiency *scales* as the input size changes.

It is generally considered to be the sum of two parts:

  * **Input Space:** The space required to store the input data itself.
  * **Auxiliary Space:** The *extra* or temporary space used by the algorithm during its execution (e.g., temporary variables).

-----

### ⚖️ The Importance of Space Complexity

You'll find that time complexity is often discussed more than space complexity. This is because:

  * Memory (RAM) is relatively cheap compared to processing power.
  * Most algorithms deal with manageable input sizes where space isn't the first bottleneck.

However, space complexity is still crucial:

  * Hardware has a **fixed amount of memory**.
  * You can't "wait longer" for more space like you can for a slow algorithm (time). If a program runs out of memory, it will crash.

Ultimately, you'll need to balance time and space, though time is often the more pressing concern.

-----

### 📏 Measuring Space Complexity

The good news is that we measure space complexity in the **exact same way as time complexity**, using Big O notation.

We also **drop constants**. An algorithm that creates 3 temporary variables (a constant) in addition to scaling with its input (`N`) would have a complexity of `O(N) + 3`. We simplify this to just **O(N)**, as the constant becomes irrelevant at a large scale.

Common Big O notations:

  * O(1) - Constant
  * O(log N) - Logarithmic
  * O(N) - Linear
  * O(N log N) - N x log N
  * O(n²) - Quadratic
  * O(2ⁿ) - Exponential
  * O(N\!) - Factorial

-----

### 📈 Common Space Complexity Examples

#### O(1) - Constant Complexity

The algorithm uses the same, fixed amount of space regardless of the input size.

```javascript
function multiply(num1, num2) {
  return num1 * num2;
}
```

> This function only ever creates a single value (the product). Its space usage is constant.

#### O(N) - Linear Complexity

The space used by the algorithm grows linearly with the size of the input (`N`). Most data structures (arrays, objects) have `O(N)` space complexity.

```javascript
function sumArr(arr) {
  const copyArr = arr.slice(); // This line creates a copy
  let sum = 0;
  copyArr.forEach((number) => {
    sum += number;
  });
  return sum;
}
```

> The variable `copyArr` creates a new array. The size of this new array is directly proportional to the size of the input `arr`. Therefore, the space complexity is **O(N)**. (The `sum` variable is `O(1)`, which is dropped).

#### Other Complexities

  * You won't often encounter space complexities other than `O(1)` and `O(N)` for basic data structures.
  * Some sorting algorithms are very space-efficient, using `O(1)` auxiliary space.
  * Recursive functions can sometimes have `O(log N)` or `O(N)` space complexity due to the call stack.
  * The **Big-O cheat sheet** is an excellent reference for both time and space complexities of common algorithms and data structures.

-----

### ⚠️ Other Considerations

It can be confusing to determine *what* to count.

  * **Question:** If an array is passed to a function (by reference), does that function's space complexity include the array's size?
  * **Guideline:** Big O measures the **worst-case scenario**. It's safest to err on the side of caution and **consider the space of arguments passed to your method** in your analysis.

-----

### 🏁 Wrapping Up: The Final Balance

When writing code, you must balance efficiency with **readability**.

  * Is your super-efficient algorithm impossible for another developer (or your future self) to understand?
  * Don't make code overly complex just to improve efficiency *unless* there is a clear, measurable performance problem.

> **Advice:** Prioritize **readability first**. Refactor for better efficiency only when there is a clear impact on performance.

-----

### 📚 Assignment

  * Read an [article on big O and space complexity](https://www.google.com/search?q=https://www.freecodecamp.org/news/big-o-notation-and-space-complexity-in-javascript/). (Ruby examples, but easy to follow).
  * Read an [article on recursion and space complexity](https://www.google.com/search?q=https://www.baeldung.com/cs/recursion-space-complexity) for more context.

-----

### 🤔 Knowledge Check

  * What is space complexity?
  * How do we measure space complexity?
  * What are the main considerations we should take into account when optimizing code?