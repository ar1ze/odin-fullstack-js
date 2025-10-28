# 🗂️ JSON (JavaScript Object Notation)

## 📝 Introduction

  * **JSON** is a standard, text-based format for structuring and transmitting data.
  * It is heavily based on JavaScript object syntax but is language-independent.
  * It's the most common format for sending data between a server and a web application (e.g., working with APIs).
  * **Serialization**: Converting a native object (like a JS object) into a JSON string.
  * **Deserialization**: Converting a JSON string into a native object.

## 📐 JSON Structure & Syntax Rules

JSON format is *similar* to JavaScript objects but is much **stricter**.

  * **Keys**: Property names *must* be strings in **double quotes** (e.g., `"squadName"`).
  * **Strings**: All string values *must* use **double quotes** (`"`). Single quotes are **not** allowed.
  * **No Comments**: JSON does not support comments.
  * **No Trailing Commas**: A comma after the last property in an object or last item in an array is **invalid**.

### ✅ Allowed Data Types

  * Strings (in double quotes)
  * Numbers
  * Objects (must also be valid JSON)
  * Arrays (must also be valid JSON)
  * Booleans (`true` or `false`)
  * `null`

### ❌ Disallowed Data Types

  * `undefined`
  * `NaN` or `Infinity`
  * Functions
  * `Date`, `Set`, `Map` objects

## 🔄 Working with JSON in JavaScript

Browsers have a built-in `JSON` object with two primary methods for serialization and deserialization.

### `JSON.parse()`

  * Converts a JSON **string** into a JavaScript **object** or value.

    ```js
    // text is a raw JSON string
    const superHeroesText = '{ "squadName": "Super hero squad" }';
    const superHeroes = JSON.parse(superHeroesText);
    console.log(superHeroes.squadName); // "Super hero squad"
    ```

### `JSON.stringify()`

  * Converts a JavaScript **object** or value into a valid JSON **string**.

    ```js
    let myObj = { name: "Chris", age: 38 };
    let myString = JSON.stringify(myObj);
    // myString is now '{"name":"Chris","age":38}'
    ```

## 📡 Fetching and Using JSON

When using the `fetch` API, you can get the response and parse it automatically.

  * The `response.json()` method reads a response stream and parses it as JSON.

  * This is the most common way to handle API responses.

    ```js
    async function populate() {
      const response = await fetch(requestURL);
      
      // .json() automatically parses the text response
      const superHeroes = await response.json(); 

      // superHeroes is now a JS object
      populateHeader(superHeroes);
      populateHeroes(superHeroes);
    }
    ```

## 💻 Assignment

  * Read the MDN tutorial on JSON.
  * Learn the two key JavaScript methods: `JSON.parse()` and `JSON.stringify()`.
  * Use a **JSON formatter** (like JSONLint) to find formatting errors, as mis-formatted JSON is a common cause of bugs.