### Knowledge Check Answers 🎯

***

**Question: What does it mean to hash?**

**Answer:** Hashing is a one-way process that takes an input (like a key) and generates a corresponding output (a hash code).

**Why:** A hash function must always produce the same output for the same input, but the process is irreversible. In a hash map, this hash code is used as a number to determine the index (or bucket) for storage.

**Example:** A hash function might take the key "Carlos" and always produce the hash code "C", but you can't reverse "C" to get "Carlos".

***

**Question: What are buckets?**

**Answer:** Buckets are the storage locations where key-value pairs are stored in a hash map.

**Why:** They are typically implemented as an array. The hash code generated from a key is used to calculate an index, and that index corresponds to the bucket where the data is stored.

***

**Question: What is a collision?**

**Answer:** A collision occurs when two different keys generate the exact same hash code.

**Why:** This means both key-value pairs are assigned to the same bucket. This is commonly handled by making each bucket the head of a linked list, so the colliding pairs can be stored one after another in that single bucket.

***

**Question: When is it a good time to grow our buckets array?**

**Answer:** It's time to grow the array when the number of entries exceeds a specific threshold defined by the **load factor**.

**Why:** The load factor is a set percentage (e.g., 0.8) of the total capacity (number of buckets). Once the number of items passes this threshold, the map resizes (usually by doubling) to create more buckets and reduce the chance of future collisions.

**Example:** With 16 buckets and a 0.8 load factor, the map will grow when you add the 13th item (since `16 * 0.8 = 12.8`).