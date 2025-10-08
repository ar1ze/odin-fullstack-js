### Knowledge Check Answers 🎯

-----

**Question: How do you write an object constructor and instantiate the object?**

**Answer:** You write an object constructor as a regular function (using an uppercase letter by convention) that assigns properties using `this`. To instantiate it, you call that function with the `new` keyword.

**Why:** The constructor acts as a blueprint for creating objects. The `new` keyword creates a new object and sets `this` to refer to that object within the constructor function's scope.

**Example:**

```javascript
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const player = new Player('steve', 'X');
```

**Remember:** A constructor is the **blueprint**, and `new` is the **factory** that builds from it.

-----

**Question: How can you prevent that an object constructor is called without using the keyword `new`?**

**Answer:** You can check for `new.target` inside the constructor; if it's undefined, you can throw an error.

**Why:** Calling a constructor without `new` can cause hard-to-track bugs. The `new.target` meta-property only exists when a function is called with `new`, so checking for it is a reliable safeguard.

**Example:**

```javascript
function Player(name) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
}
```

-----

**Question: What is a prototype and how can it be used?**

**Answer:** A prototype is another object that your object inherits from, giving it access to shared methods and properties.

**Why:** You can use the prototype to define common methods once, saving memory because each new object instance doesn't need its own copy. All instances will share the single method from the prototype.

**Example:**

```javascript
// All Player objects will share this single sayHello function
Player.prototype.sayHello = function() {
   console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
```

**Remember:** The **prototype** is a **shared toolbox** for all objects of the same type.

-----

**Question: What is prototypal inheritance?**

**Answer:** It's the process where an object can access methods and properties from its prototype, forming a "prototype chain."

**Why:** When you try to access a property, JavaScript first checks the object itself. If it's not found, it looks at the object's prototype, then that prototype's prototype, and so on, until it finds the property or the chain ends.

**Example:**

```javascript
// player1 doesn't have a 'valueOf' method...
player1.hasOwnProperty('valueOf'); // false

// ...but it can access it from Object.prototype up the chain!
player1.valueOf();
```

-----

**Question: What are the basic do’s and don’t’s of prototypal inheritance?**

**Answer:** **Do** link prototypes using `Object.setPrototypeOf()` to establish inheritance before creating objects. **Don't** directly assign one prototype to another (e.g., `Player.prototype = Person.prototype`).

**Why:** Direct assignment makes both prototypes point to the *exact same object*. This means that if you modify a method for one type of object, you will unintentionally modify it for the other as well.

**Example:**

```javascript
// DON'T DO THIS:
Enemy.prototype = Person.prototype;

// This change will now affect Person and Player objects, too!
Enemy.prototype.sayName = function() {
  console.log('HAHAHAHAHAHA');
};
```

**Remember:** **Link** the chain, don't **replace** a link with another.

-----

**Question: How does `this` behave in different situations?**

**Answer:** The value of `this` is determined by how a function is called, not where it is defined.

**Why:** In an object constructor invoked with the `new` keyword, `this` is bound to the new object being created. However, its context can change in other situations, such as a simple function call where it might refer to the global object.

**Example:**

```javascript
function Player(name, marker) {
  // `this` refers to the new object created by `new`
  this.name = name;
  this.marker = marker;
}
const player1 = new Player('steve', 'X'); // `this` is `player1` inside the call
```

**Remember:** To understand `this`, ask: "**Who is calling this function right now?**"