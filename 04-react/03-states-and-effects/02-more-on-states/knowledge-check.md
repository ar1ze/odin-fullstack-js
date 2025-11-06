### Knowledge Check Answers 🎯

-----

**Question: What should you keep in mind while declaring state?**

**Answer:** You should only store the **minimal** data your component needs to "remember." Avoid storing data that you can calculate from existing state or props.

**Why:** Storing duplicate or derived data makes your state complex and can lead to bugs where different state variables get out of sync.

**Example:** Instead of storing `firstName`, `lastName`, and `fullName` in state, just store `firstName` and `lastName`. You can always calculate `fullName` during the render.

**Remember:** Don't store what you can **calculate**.

-----

**Question: Why should we always use `setState` to update our state?**

**Answer:** You must use the `setState` function (e.g., `setCount`) because it's the only way to tell React that the state has changed and that it needs to **schedule a re-render**.

**Why:** If you modify state directly (e.g., `person.age++`), React won't know that a change happened and your component will not update its display.

**Remember:** Don't **touch** the state directly; **ask** React to change it with the `setState` function.

-----

**Question: What does “state as a snapshot” mean?**

**Answer:** "State as a snapshot" means that in any given render, your state variables have a **fixed value** from the moment that render began.

**Why:** Even if you call `setState`, the state variable in your event handler will still hold the "snapshot" value from *before* the update. The new value will only appear in the *next* re-render.

**Remember:** State is a **snapshot** 📸, not a live variable. It only "updates" when the component re-renders.

-----

**Question: What’s the difference between passing a value vs. a callback to the `setState` function?**

**Answer:** Passing a **value** (e.g., `setCount(10)`) sets the state directly. Passing a **callback function** (e.g., `setCount(prev => prev + 1)`) tells React to calculate the new state *based on the previous state*.

**Why:** You *must* use the callback function when your update depends on the old value (like incrementing a counter) to avoid bugs from the "state as a snapshot" behavior.

**Remember:** Use a **value** to **set**. Use a **callback** to **update** or **increment**.

-----

**Question: Why should we always provide a new object to `setState`?**

**Answer:** You must provide a new object because React only re-renders if it detects a **new object reference**.

**Why:** React treats state as immutable and checks for changes using a shallow comparison (`Object.is()`). If you *mutate* (change) the old object and pass it back, React sees the same object in memory and will **not** re-render.

**Example:**

```javascript
// ❌ BAD (Mutating):
person.age = person.age + 1;
setPerson(person); // React sees the same object, no re-render!

// ✅ GOOD (New Object):
const newPerson = { ...person, age: person.age + 1 };
setPerson(newPerson); // React sees a new object, re-renders!
```

-----

**Question: Why would you want to control a component?**

**Answer:** You "control" an element (like an `<input>`) so that its value is stored in React's state, making React the single **source of truth**.

**Why:** This pattern gives your component direct access to the user's input at all times. This is essential for validating forms, filtering lists in real-time, or resetting a field.

**Remember:** A **controlled component** means **React is in control** of the input's value.