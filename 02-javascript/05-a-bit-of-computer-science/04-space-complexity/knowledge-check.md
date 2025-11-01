### Knowledge Check Answers 🎯

***

**Question: What is space complexity?**

**Answer:** Space complexity measures how the total amount of memory (RAM) used by an algorithm scales relative to the size of its input.

**Why:** It helps you predict if your algorithm will run out of memory and crash when it has to process a very large amount of data.

**Remember:** Think of it as the **"memory footprint"** 👣 of your code; a bigger input might mean a bigger footprint.

***

**Question: How do we measure space complexity?**

**Answer:** We measure space complexity using **Big O notation**, just like we do for time complexity.

**Why:** Big O (e.g., `O(1)` or `O(N)`) gives us a standard way to describe how the memory usage grows as the input size (N) gets larger.

**Example:**
* **`O(1)` (Constant):** The algorithm always uses the same fixed amount of memory (like creating one new variable).
* **`O(N)` (Linear):** The memory usage grows directly with the input size (like creating a full copy of an input array).

***

**Question: What are the main considerations we should take into account when optimizing code?**

**Answer:** The main consideration is balancing **efficiency** (both time and space) with **code readability**.

**Why:** You should prioritize writing clear, understandable code first. Only optimize for efficiency if you have a clear, measurable performance problem, otherwise, you risk making the code overly complex and hard to maintain.

**Remember:** **Readability first, optimization second.** An ultra-fast algorithm that no one understands is often worse than a slightly slower, clear one.