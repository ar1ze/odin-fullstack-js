# 📈 Time Complexity

### 🎯 Introduction

Beyond readability and maintainability, code **efficiency** is critically important. You need to understand how your code will perform and how your choices (data structures, algorithms) will impact that performance.

Efficiency is measured in two ways:

1.  **Time Complexity:** How long it takes to run (covered in this lesson).
2.  **Space Complexity:** How much memory it uses.

-----

### 📝 Lesson Overview

  * How the efficiency of an algorithm is measured.
  * What **Big O** is.
  * What the Big O notations are.
  * Other ways to measure an algorithm’s efficiency.
  * What to do when two algorithms have the same complexity.

-----

### ⏱️ Efficiency Basics

The first step is understanding how to measure efficiency.

  * **We don't measure efficiency with time.** Running time (in seconds) varies based on the computer and its current processes.
  * **We measure efficiency by counting 'steps'.** An algorithm that takes 5 steps is definitively more efficient than one that takes 20 steps to do the same task.

However, the number of steps often changes based on the *size of the input*.

**Example:** A function processing 10 items (e.g., `oddNumbers(10)`) takes a fixed number of steps (e.g., 34). But a function processing `n` items (e.g., `oddNumbers(maxNumber)`) takes a *variable* number of steps.

We don't want a concrete step count. We want to measure **how the number of steps changes as the data (input size) changes.** This is called **scalability**, and we measure it using **Asymptotic Notations**.

-----

### 📊 Asymptotic Notations

Asymptotic Notations describe the running time of an algorithm as the input size grows.

  * **Big O (O) Notation:** Represents the **worst-case scenario** (upper bound). This is the most common and important one.
  * **Big Omega (Ω) Notation:** Represents the **best-case scenario** (lower bound).
  * **Big Theta (Θ) Notation:** Represents the average case, or a tight bound where the best and worst cases are the same.

We focus on **Big O** because we must plan for the worst-case scenario to ensure our code is scalable and won't fail under heavy load.

-----

### 🤔 What is Big O?

Big O gives us a consistent way to measure an algorithm's efficiency. It measures how the time (number of steps) it takes for an algorithm to run *scales as the input grows*.

It is a concept you apply by analyzing your code, not a program you run.

-----

### 🔠 Big O Notation (Common Types)

Here are the most common notations, from fastest (most scalable) to slowest (least scalable).

  * **O(1) - Constant Complexity**

      * **What it is:** The algorithm takes the same number of steps regardless of the input size.
      * **Example:** Accessing an element in an array by its index (e.g., `arr[5]`). Whether the array has 10 or 10 million items, it's one step.
      * **Note:** Big O **drops constants**. An algorithm that takes 3 steps is still `O(1)`, because 3 is constant and doesn't change as the input grows.

  * **O(log N) - Logarithmic Complexity**

      * **What it is:** The number of steps increases by one as the data *doubles*. This is extremely efficient.
      * **Example:** A **Binary Search** on a *sorted* array. With each step, it cuts the data set in half, allowing it to find an item in an array of 32 elements in only 6 steps.

  * **O(N) - Linear Complexity**

      * **What it is:** The number of steps grows at the exact same rate as the number of items (`N`).
      * **Example:** Iterating over an entire array with a single `for` loop. 10 items = 10 steps, 1 million items = 1 million steps.

  * **O(N log N) - N x log N Complexity**

      * **What it is:** A combination of linear and logarithmic time.
      * **Example:** Efficient sorting algorithms like **Merge Sort**, which breaks the array down (`log N`) and then processes the items (`N`).

  * **O(n²) - Quadratic Complexity**

      * **What it is:** The number of steps grows quadratically. This gets slow, fast.
      * **Example:** **Nested loops**. A loop inside another loop. For 10 items, it takes 10*10 = 100 steps. For 100 items, it takes 100*100 = 10,000 steps.

  * **O(n³) - Cubic Complexity**

      * **What it is:** **Triple nested loops**. Avoid this.
      * **Example:** 10 items = 1,000 steps. 100 items = 1,000,000 steps.

  * **O(2ⁿ) - Exponential Complexity**

      * **What it is:** The number of steps *doubles* with each new item added. Extremely unscalable.

  * **O(N\!) - Factorial Complexity**

      * **What it is:** The number of steps is the factorial of the input size. This is the worst-case scenario.
      * **Example:** Calculating all permutations of a set. For 10 items, this is 3,628,800 steps.

-----

### 🌀 Alternatives to Big O

  * **Big Ω (Omega Notation)**

      * Measures the **best-case scenario**.
      * **Example:** A function that searches an array for `1`. The best case is `O(1)` if `1` is the *first* item.
      * **Why it's not as useful:** The best case is rare and tells us nothing about how the algorithm will perform under normal or heavy load.

  * **Big-Θ (Big-Theta Notation)**

      * Measures the average case or the "tight bound" (when the best and worst cases are the same).
      * **Example:** A simple loop that *always* runs `N` times is `Θ(N)`. Its best and worst case are identical.

-----

### 🏆 Why Big O?

We use Big O because we *must* analyze the **worst-case scenario**. If we build an algorithm, we need to be confident it will scale and not crash when the worst-case input happens.

-----

### ⚖️ Algorithms with the Same Complexity

What if two algorithms have the same Big O, like `O(N)`?

  * **Example:** One function iterates `N` times (incrementing by 1), and another iterates `N/2` times (incrementing by 2).
  * The first is `O(N)`. The second is technically `O(N/2)`.
  * However, Big O **drops constants**. As `N` gets massive, the `/2` becomes irrelevant to the overall growth. Both are simply considered **`O(N)`**.
  * **Why?** An algorithm with a slower-growing complexity (like `O(N)`) will *always* eventually be faster than an algorithm with a faster-growing complexity (like `O(n²)`), no matter what constants are involved (e.g., `O(1000N)` is still better than `O(n²)_`\_ eventually).

Your goal is to ensure your code is as efficient as it can be *within* its time complexity bracket.

-----

### 📚 Assignment

  * Read through [Big O Notation in JavaScript](https://www.doabledanny.com/big-o-notation-in-javascript).
  * Review the [Big-O cheat sheet](https://www.bigocheatsheet.com/) (amazing resource).
  * Read the [Step-by-step Big O Complexity Analysis Guide](https://www.google.com/search?q=https://www.freecodecamp.org/news/big-o-complexity-analysis-guide-with-javascript-examples/) (can skip the Space Complexity section for now).

-----

### 🧠 Knowledge Check

  * What is Big O?
  * What are the most common Big O Notations?
  * Why use Big O?
  * What is Big Omega and why isn’t it as useful?
  * Why don’t constants make a difference in Big O?