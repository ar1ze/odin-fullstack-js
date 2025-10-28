# 📦 ES6 Modules

## 📝 Introduction

ES6 Modules (ESM) provide a native way to split JavaScript code into multiple, organized files. Before ES6, developers often used the "module pattern" with IIFEs to avoid polluting the **global scope**, but ESM offers a more robust and cleaner solution.

## 📚 Lesson Overview

  * ❓ Explain what ES6 modules are and how to `import` and `export` from them.
  * ↔️ Describe the difference between **default** and **named** exports.
  * 🆚 Explain the main differences between CommonJS modules and ES6 modules.

## 🕰️ Before ES6 Modules: The Global Scope Problem

  * **Problem**: Loading multiple `<script>` tags in HTML puts all variables and functions into the same **global scope**. This can lead to naming conflicts and unpredictable behavior.

  * **Solution (The "Module Pattern")**: Using an Immediately Invoked Function Expression (IIFE) to create a private scope.

      * Variables inside an IIFE are not global.
      * You can selectively expose variables by returning them from the IIFE and assigning them to a global variable.

    <!-- end list -->

    ```javascript
    // one.js
    const myModule = (() => {
      const privateVar = "I am private";
      const publicVar = "I am public";

      return {
        publicVar: publicVar,
      };
    })();
    ```

## 🚀 ES6 Modules in Action

With ESM, each file is its own module with a private scope. You explicitly choose what to **export** from one file and what to **import** into another.

### 📤 Import and Export

There are two types of exports: **named** and **default**.

#### 🏷️ Named Exports

  * You can export **multiple** values from a single file.
  * The name used for importing must match the name used for exporting.
  * Syntax uses curly braces `{ }`.

**Exporting (`one.js`):**

```javascript
// Exporting inline
export const greeting = "Hello, Odinite!";

// Exporting at the end
const farewell = "Bye bye, Odinite!";
export { farewell };
```

**Importing (`two.js`):**

```javascript
import { greeting, farewell } from "./one.js";

console.log(greeting); // "Hello, Odinite!"
console.log(farewell); // "Bye bye, Odinite!"
```

> **Note:** The `{ }` syntax is specific to modules and is **not** an object literal or destructuring.

#### 👑 Default Exports

  * You can only have **one** default export per file.
  * You can name the import whatever you like when you import it.
  * Syntax does not use curly braces for importing.

**Exporting (`one.js`):**

```javascript
const greeting = "Hello, Odinite!";
export default greeting;
```

**Importing (`two.js`):**

```javascript
import myCustomGreetingName from "./one.js";

console.log(myCustomGreetingName); // "Hello, Odinite!"
```

You can also **combine** default and named exports in the same file.

### 🏁 Entry Points

  * Instead of linking every JavaScript file in your HTML, you only link a single **entry point** file.
  * The browser automatically reads the `import` statements and loads all necessary dependency files.
  * To enable this, add `type="module"` to your script tag. This also automatically defers the script.

<!-- end list -->

```html
<script src="entry-point.js" type="module"></script>
```

## 📦 CommonJS (CJS)

  * An older module system primarily used in **Node.js**.
  * Uses `require` and `module.exports` syntax.
  * **Browsers do not understand CommonJS syntax**. For now, we will focus on ESM for front-end development.

## 💻 Assignment

  * 📖 Read the MDN docs on `export` and `import` to learn about extra features like aliases and namespace imports.

## 🧠 Knowledge Check

  * How would you privatize a variable before ES6 modules? (IIFE)
  * How would you expose a variable before ES6 modules? (Return it from an IIFE)
  * What are the benefits of writing code in modules? (Organization, private scope, avoiding global pollution)
  * What is the difference between default and named exports? (One vs. many per file, import syntax)
  * What is an entry point? (The single script file linked in the HTML)
  * How do you link a module script in HTML? (`<script type="module">`)

## 🔗 Additional Resources

  * **Video**: Web Dev Simplified has a great video summarizing ES6 Modules.
  * **Article**: A brief comparison of CommonJS modules and ES6 modules.