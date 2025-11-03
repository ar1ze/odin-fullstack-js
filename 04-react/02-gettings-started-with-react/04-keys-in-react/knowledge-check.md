### Knowledge Check Answers 🎯

-----

**Question: Why does React need keys?**

**Answer:** React needs keys to identify which items in a list have changed, been added, or been removed.

**Why:** When a list updates, keys allow React to efficiently match the old items with the new ones. This lets React apply changes only to the specific elements that actually changed, added, or moved, instead of wastefully re-rendering the entire list.

**Remember:** Keys are like **name tags** 🏷️ for list items, so React knows exactly which one is which during an update.

-----

**Question: How do you use keys?**

**Answer:** You pass a `key` prop to the top-level element you are returning inside your `.map()` loop.

**Why:** This `key` must be a string or number that is unique among its siblings (the other items in the same list).

**Example:**

```jsx
{todos.map((todo) => (
  // The key is passed directly to the <li> element
  <li key={todo.id}>{todo.task}</li>
))}
```

-----

**Question: Where should the key value ideally come from?**

**Answer:** The key value should ideally come from a **stable and unique ID** that already exists in your data, such as an `id` from a database.

**Why:** Using a database ID ensures the key is permanent and always tied to that specific piece of data, even if the list is re-ordered or filtered.

**Example:**

```javascript
const todos = [
  { task: "mow the yard", id: "a1" },
  { task: "Work on Odin", id: "b2" },
];
// Use `todo.id` as the key, since it's unique and stable.
```

-----

**Question: When can we use an array index as the key value?**

**Answer:** You should only use an array index as a key for lists that are **completely static** and will **never change**.

**Why:** A static list is one that will never be re-ordered, filtered, or have items added or removed. If you use an index on a dynamic list, it can lead to bugs and performance issues when the list changes.

-----

**Question: What is an anti-pattern when using keys?**

**Answer:** The anti-pattern is to **generate keys on-the-fly** during render, such as using `Math.random()` or `crypto.randomUUID()`.

**Why:** This defeats the entire purpose of keys. A new, random key will be generated on *every* re-render, which forces React to destroy and recreate all the DOM elements from scratch instead of efficiently updating them.