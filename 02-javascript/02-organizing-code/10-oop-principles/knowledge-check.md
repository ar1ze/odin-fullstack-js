### Knowledge Check Answers 🎯

***

**Question: What is the “Single Responsibility Principle”?**

**Answer:** It's a guideline that an object or module should have only one main responsibility or "reason to change."

**Why:** This makes your code much easier to understand, test, and maintain. If an object does too many things, a change to one of its features might accidentally break another.

**Example:** Your game logic (like checking `isGameOver`) should be in one object, and all the code that updates the DOM (like displaying the "Game Over" message) should be in a separate `DOMStuff` object.

**Remember:** **One object, one job.**

***

**Question: What are the additional SOLID principles?**

**Answer:** SOLID is an acronym for five principles: **S**ingle Responsibility, **O**pen/Closed, **L**iskov Substitution, **I**nterface Segregation, and **D**ependency Inversion.

**Why:** Together, these principles help you create code that is more flexible, understandable, and easier to maintain as it grows in complexity.

***

**Question: What are “tightly coupled” objects and why do we want to avoid them?**

**Answer:** Tightly coupled objects are objects that depend heavily on the specific details of each other to function.

**Why:** You should avoid them because they are brittle. If you need to change or fix one object, you're forced to make changes to all other objects coupled to it, which can lead to a cascade of bugs.

**Example:** Your game logic should work whether it's printing to the `console` or updating the DOM. If changing your UI from `console.log()` to HTML breaks your game logic, they are too tightly coupled.

**Remember:** Aim for **loose coupling** (like LEGO bricks that fit together) not **tight coupling** (like glued-together bricks).

***

**Question: Why is favoring composition over inheritance suggested?**

**Answer:** Composition is generally favored because it offers more flexibility and reusability than inheritance.

**Why:** Inheritance creates a very rigid "is-a" relationship (a `Player` *is-a* `Person`), which is a form of tight coupling. Composition lets you build objects by combining smaller, independent "parts" ("has-a" relationship), which is much easier to change and manage.

**Example:** Instead of a `Robot` *inheriting* from a `Flyer` class, you would **compose** it by giving your `Robot` instance a `flying` capability.

**Remember:** Favor **"has-a"** (composition) over **"is-a"** (inheritance) to keep your code flexible.