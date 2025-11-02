### Knowledge Check Answers 🎯

-----

**Question: What are the benefits of TDD?**

**Answer:** The main benefits of Test Driven Development (TDD) are cleaner code, fewer bugs, and a "safety net" for future changes.

**Why:** By writing tests *first*, you are forced to think clearly about what a function needs to do before you write it. This leads to simpler, more focused code and instantly tells you if you've broken something later.

**Remember:** **Tests first, code second.** This forces you to think before you act, which prevents bugs.

-----

**Question: What are some common Jest matchers?**

**Answer:** Some of the most common Jest matchers are `.toBe()`, `.toEqual()`, `.toBeTruthy()`, `.toContain()`, and `.toThrow()`.

**Why:** Matchers are the assertion functions that check if your `expect()` statement is correct. You use `.toBe()` for simple values (like numbers or strings) and `.toEqual()` to check the values of objects or arrays.

**Example:**

```javascript
// For primitive values
expect(1 + 1).toBe(2);

// For objects or arrays
expect({ user: 'Odin' }).toEqual({ user: 'Odin' });

// For checking for an item in an array
expect([1, 2, 3]).toContain(2);
```

**Remember:** A **matcher** is the verb that **checks** your expectation (e.g., `toBe` or `toEqual`).