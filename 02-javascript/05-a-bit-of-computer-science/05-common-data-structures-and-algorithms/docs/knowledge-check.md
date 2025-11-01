### Knowledge Check Answers 🎯

***

**Question: What is the difference between a stack and a queue?**

**Answer:** A stack is **LIFO** (Last-In, First-Out), and a queue is **FIFO** (First-In, First-Out).

**Why:** In a stack, you add and remove items from the *same* end (the "top"). In a queue, you add items to one end (the "back") and remove them from the *other* end (the "front").

**Remember:** A **stack** is like a pile of **plates** 🥞 (you take the last one you put on). A **queue** is like a checkout **line** 🚶‍♂️🚶‍♀️ (the first person in is the first person out).

***

**Question: What are the `enqueue` and `dequeue` properties?**

**Answer:** `Enqueue` is the operation to **add** an item to the back of a queue. `Dequeue` is the operation to **remove** an item from the front of a queue.

**Why:** These are the standard names for a queue's "add" and "remove" operations, which respect its FIFO (First-In, First-Out) structure.

**Remember:** `Enqueue` = **Enter** the queue. `Dequeue` = **Depart** the queue.

***

**Question: What is a linked list?**

**Answer:** A linked list is a data structure where elements (called nodes) are linked together in a sequence using pointers.

**Why:** Each node holds its own data and a reference (or "link") to the next node in the chain. This differs from an array, where items are stored in one continuous block of memory.

**Example:** A treasure hunt 🗺️, where each clue (a node) contains its treasure (the data) and the location of the next clue (the pointer).

**Remember:** A **Linked** List is a **chain** 🔗 of nodes.

***

**Question: What is a node?**

**Answer:** A node is the basic building block for data structures like linked lists and trees.

**Why:** It's a small object or container that holds two things: the actual piece of **data** (the "value") and one or more **pointers** (references) to other nodes.

**Example:**
* In a linked list: `{ value: 10, next: ... }`
* In a tree: `{ value: 10, leftChild: ..., rightChild: ... }`

***

**Question: Which recursive problem-solving method/algorithm design principle does binary search implement?**

**Answer:** Binary search implements the **"Divide and Conquer"** principle.

**Why:** It works by repeatedly dividing the problem in half. It compares the target to the middle element and immediately discards the half that *doesn't* contain the target, then recursively repeats the process on the remaining, smaller half.

***

**Question: What abstract data type would you use to defer/store nodes in a breadth-first tree traversal?**

**Answer:** You would use a **Queue**.

**Why:** Breadth-First Search (BFS) explores the tree level by level. A queue (FIFO) is perfect for this because you visit a node, add its children to the *back* of the queue, and then process the next node from the *front*. This ensures you visit all nodes on a level before moving to the next.

**Remember:** BFS explores **wide** (like a **line**, which is a **Queue**).

***

**Question: What abstract data type would you use to defer/store nodes in a depth-first tree traversal?**

**Answer:** You would use a **Stack**.

**Why:** Depth-First Search (DFS) explores as far down one branch as possible before backtracking. A stack (LIFO) naturally handles this. When you visit a node, you push its children onto the stack, and the *last* one you added is the *first* one you explore next, taking you deeper down that branch.

**Remember:** DFS goes **deep** (like a **Stack** of plates).