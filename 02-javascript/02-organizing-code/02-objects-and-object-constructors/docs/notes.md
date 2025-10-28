# 🧱 Objects and Object Constructors

### 🎯 Basic Object Refresher

  * **Object Literal Syntax:** The most common way to create an object.
    ```javascript
    const myObject = {
      property: 'Value!',
      otherProperty: 77
    };
    ```
  * **Accessing Data:** There are two methods to get information from an object.
      * **Dot Notation:** `myObject.property`
          * Cleaner and generally preferred.
          * Cannot be used for properties with spaces or special characters, or with variables.
      * **Bracket Notation:** `myObject["property"]`
          * Required for property names that are strings with spaces (e.g., `"obnoxious property"`).
          * **Must be used** when accessing a property via a variable.
        <!-- end list -->
        ```javascript
        const variable = 'property';
        myObject[variable]; // returns 'Value!'
        ```

### 🏭 Object Constructors

Constructors are functions used as a blueprint for creating multiple objects of the same type.

  * **Why use them?** To avoid manually creating many similar objects, which is inefficient and error-prone. This is essential for applications like games (multiple players) or e-commerce sites (many inventory items).
  * **Syntax:** A regular function, but capitalized by convention. The `this` keyword refers to the new object being created.
    ```javascript
    function Player(name, marker) {
      this.name = name;
      this.marker = marker;
    }
    ```
  * **Instantiation:** Use the `new` keyword to create an instance of the object.
    ```javascript
    const player1 = new Player('steve', 'X');
    ```
  * **Safeguarding:** You can prevent a constructor from being called without `new` by checking the `new.target` meta-property.

### 🧬 The Prototype

The prototype is a core concept in JavaScript that enables inheritance.

  * **Three Key Facts:**
    1.  **All objects** in JavaScript have a prototype.
    2.  The prototype is **another object**.
    3.  An object **inherits from its prototype**, meaning it has access to all of the prototype's properties and methods.
  * **Accessing the Prototype:** The standard, recommended way is `Object.getPrototypeOf()`.
    ```javascript
    Object.getPrototypeOf(player1) === Player.prototype; // true
    ```
      * Avoid using the deprecated `.__proto__` property.
  * **Shared Methods:** To save memory, you can define methods on the prototype. This way, every instance of the object shares the same function instead of creating a new one for each object.
    ```javascript
    Player.prototype.sayHello = function() {
      console.log("Hello, I'm a player!");
    };

    player1.sayHello(); // This works!
    ```

### 🔗 Prototypal Inheritance

Objects can inherit from other objects, forming a "prototype chain." When you try to access a property on an object, JavaScript will look for it on the object itself, then on its prototype, then on that prototype's prototype, and so on, until it reaches the end of the chain (`null`).

  * **How it works:** `player1` inherits from `Player.prototype`, which in turn inherits from `Object.prototype`. This is why `player1` has access to methods like `.valueOf()` even though you didn't define them.
  * **Recommended Method:** Use **`Object.setPrototypeOf()`** to set the prototype of an object. This should be done *before* creating instances.
    ```javascript
    // Make Player's prototype inherit from Person's prototype
    Object.setPrototypeOf(Player.prototype, Person.prototype);
    ```
  * **⚠️ Common Mistake:** **Do not** assign prototypes directly (`Player.prototype = Person.prototype`). This links them to the *same object*, so changing one will affect the other, leading to unintended side effects.

### ✅ Knowledge Check

  * Can you write an **object constructor** and instantiate it with `new`?
  * Do you know what a **prototype** is and how it allows objects to share methods?
  * Can you explain **prototypal inheritance** and the concept of the prototype chain?
  * Do you know the correct way to set up inheritance (`Object.setPrototypeOf()`) and the pitfalls to avoid?
  * Do you have a basic understanding of how the `this` keyword works in constructors and methods?