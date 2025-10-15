### Knowledge Check Answers 🎯

-----

**Question: Before ES6 modules, how would you privatize a variable from being accessible in other files?**

**Answer:** You would wrap your code in an Immediately Invoked Function Expression (IIFE).

**Why:** Variables declared inside an IIFE are scoped only to that function. This prevents them from being added to the global scope, effectively making them private and inaccessible to other script files.

**Example:**

```javascript
// one.js
(() => {
  const privateGreeting = "Hello!"; // This is private
})();

// two.js
// console.log(privateGreeting); // This would cause an error
```

**Remember:** An IIFE is like a **private room** for your code; what's declared inside, stays inside.

-----

**Question: Before ES6 modules, how would you expose variables to be accessible in later files?**

**Answer:** You would explicitly `return` a value from an IIFE and assign it to a global variable.

**Why:** This allows you to selectively expose certain parts of your code. Only the returned value becomes globally accessible, while all other internal variables remain private.

**Example:**

```javascript
// one.js
const greetingModule = (() => {
  const greetingString = "Hello, Odinite!";
  return greetingString; // Expose only this string
})();

// two.js
console.log(greetingModule); // "Hello, Odinite!"
```

-----

**Question: What are some benefits of writing code in modules?**

**Answer:** Modules help organize code, prevent global scope pollution, and make code more reusable and maintainable.

**Why:** Each module has its own private scope, so you don't have to worry about variable names clashing between different files. You can explicitly choose what to `import` and `export`, giving you full control over dependencies.

-----

**Question: What is the difference between default and named exports?**

**Answer:** A file can have many **named exports** which must be imported using their exact names inside curly braces (`{}`). In contrast, a file can only have one **default export**, which can be imported using any name you choose.

**Why:** Named exports are useful for exporting several smaller utilities from a file, while a default export is typically used for the primary "thing" the module is meant to provide.

**Example:**

```javascript
// utils.js
export const pi = 3.14; // Named export
export default function greet() { /*...*/ } // Default export

// main.js
import sayHello, { pi } from "./utils.js"; // Import default and named
```

**Remember:** **Named** exports are like items on a **menu** (you order by name), while a **default** export is the **house special**.

-----

**Question: What is an entry point?**

**Answer:** The entry point is the single, top-level JavaScript file that you link to in your HTML when using modules.

**Why:** The browser starts with the entry point, reads its `import` statements, and then automatically loads any other modules that are needed, creating a dependency graph.

**Example:** If `main.js` imports from `helper.js`, you only need to link `main.js` in your HTML because it's the entry point.

-----

**Question: How do you link a module script in HTML?**

**Answer:** You link it by adding the `type="module"` attribute to your `<script>` tag.

**Why:** This attribute tells the browser that the script is an ES6 module, which enables the `import`/`export` syntax and automatically defers the script's execution.

**Example:**

```html
<script src="main.js" type="module"></script>
```