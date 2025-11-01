# 🗺️ HashMap Data Structure
---
### 🔑 Introduction
A **hash map** (or hash table) is a data structure that stores **key-value pairs**. It uses "keys" as indices instead of sequential numbers (like arrays), which allows for very quick search speeds.

* JavaScript's Object Literals (`{}`), `Set`, and `Map` are based on hash tables.
* The basic process: A key-value pair is taken, a **hash code** is produced from the key, and the pair is stored in a **bucket**.
---
### 🧮 What is a Hash Code?
**Hashing** is a one-way process of taking an input and generating a corresponding output (a hash code).

* A hash function must be a **pure function**: the same input must *always* return the same hash code.
* **Irreversible:** Hashing is one-way. You can't get the original input from the hash code. (e.g., "Carlos" -> "C", but "C" cannot be reversed to "Carlos").
* This one-way property makes hashing great for security (e.g., storing password hashes instead of plain text passwords).
* For hash maps, the hash code needs to be a **number**, as this number will be used as the index for a bucket.
---
### 🧺 Buckets
**Buckets** are the storage locations for the key-value pairs, typically implemented as an array.

* The hash function generates a number (hash code) from the key, which determines the **index** (bucket) where the pair should be stored.
* **Retrieval:** To get a value, you hash the key to find the bucket index. Then, you **must compare the key** stored in that bucket to your input key. This is because different keys might generate the same hash code (a collision).
* **Uniqueness:** If you insert a pair with a key that *already* exists, the hash map simply overwrites the old value. This is how a `Set` ensures all its values are unique.
---
### 🚫 Insertion Order is Not Maintained
A standard hash map **does not guarantee insertion order**. When iterating, items will *not* appear in the order they were added.

*(Note: JavaScript's built-in `Map` object *does* maintain insertion order, but the underlying data structure we are discussing does not).*

---
### 💥 Collisions
A **collision** occurs when two different keys generate the exact same hash code, meaning they are assigned to the same bucket.

* Even good hash functions (e.g., one using a prime number like 31) can't eliminate collisions entirely with a finite number of buckets.
* **Dealing with Collisions:** The most common solution is **Linked Lists**. Each bucket isn't just a single slot, but the *head* of a linked list. If a collision occurs, the new key-value pair is simply added to the end of the linked list in that bucket.


---
### 📈 Growth of a Hash Map
A hash map starts with a small, fixed number of buckets (e.g., 16) to save memory.

* **Mapping Index:** To fit a large hash code into a small array, we use the **modulo (`%`) operator**. (e.g., `bucketIndex = hashCode % 16` will always result in a number from 0-15).
* **Resizing:** As more items are added, collisions become more likely. To fix this, the hash map must grow. This is determined by the **load factor**.
    * **Capacity:** The total number of buckets (e.g., 16).
    * **Load Factor:** A threshold (e.g., 0.75 or 0.8) that determines when to resize.
    * **When to Grow:** `if (numberOfEntries > capacity * loadFactor)`.
    * **Example:** With 16 buckets and a 0.8 load factor, the map will resize when the 13th item is added (since `16 * 0.8 = 12.8`).
* Growing involves creating a new, larger array (usually double the size) and **re-hashing all existing items** into the new buckets.
---
### ⏱️ Computation Complexity
**Average Case (with a good hash function):**
* Insertion: **O(1)** (Constant)
* Retrieval: **O(1)** (Constant)
* Removal: **O(1)** (Constant)

**Worst Case (all keys hash to one bucket):**
* Insertion/Retrieval/Removal: **O(n)** (Linear). This happens because the hash map degrades into a single, long linked list.

**Growth (Resizing):**
* **O(n)**. This is because all `n` items must be re-hashed and inserted into the new, larger array.
---
### 🤔 Knowledge Check
* What does it mean to hash?
* What are buckets?
* What is a collision?
* When is it a good time to grow our buckets array?