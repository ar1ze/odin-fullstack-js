### Knowledge Check Answers 🎯

-----

**Question: What differences are there between object constructors and classes?**

**Answer:** Classes are mostly "syntactic sugar" over constructor functions, providing a cleaner syntax, but they are stricter.

**Why:** Unlike constructors, class declarations are not hoisted (you must declare them before use), and all code inside a class automatically runs in "strict mode," which helps prevent common errors.

**Example:**

```javascript
// Constructor Function
function Player(name) {
  this.name = name;
}

// Class (cleaner syntax for the same thing)
class Player {
  constructor(name) {
    this.name = name;
  }
}
```

**Remember:** A `class` is like a **formal blueprint** for an object, while a constructor function is a more **traditional recipe**.

-----

**Question: What are getters and setters?**

**Answer:** Getters and setters are special methods that look like properties but let you run code when a property is read (`get`) or assigned (`set`).

**Why:** They allow you to add custom logic, like validation or formatting, when interacting with an object's properties, giving you more control over your data.

**Example:**

```javascript
class User {
  constructor(name) {
    this._name = name; // A "private" property by convention
  }
  
  get name() {
    return `User: ${this._name}`;
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    }
  }
}

const user = new User('Link');
console.log(user.name); // Calls the getter: "User: Link"
```

**Remember:** A **getter** is the **doorman** announcing who is leaving, and a **setter** is the doorman checking an ID before letting someone in.

-----

**Question: How is inheritance used with classes?**

**Answer:** Inheritance is used with the `extends` keyword to make one class a "child" of another, allowing it to inherit the parent's methods and properties.

**Why:** This promotes code re-use. The child class can call the parent's constructor using `super()` and then add its own unique features.

**Example:**

```javascript
class Person {
  constructor(name) { this.name = name; }
}

class Player extends Person { // Player inherits from Person
  constructor(name, score) {
    super(name); // Calls the Person constructor to set the name
    this.score = score;
  }
}
```

**Remember:** `extends` lets a child class **stand on the shoulders** of a parent class.

-----

**Question: What are some private class features?**

**Answer:** Private class features are properties and methods prefixed with a hash (`#`) that can only be accessed from inside the class itself.

**Why:** This enforces encapsulation by hiding internal implementation details, which prevents outside code from accidentally breaking the object's state.

**Example:**

```javascript
class BankAccount {
  #balance = 100; // private property

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }
}

const myAccount = new BankAccount();
// console.log(myAccount.#balance); // This would cause an error!
```

**Remember:** The hash (`#`) acts like a **private key** 🔑; only the class has it.

-----

**Question: What are static properties?**

**Answer:** Static properties and methods belong to the class itself, not to any single instance (object) created from that class.

**Why:** They are useful for utility functions or data that is shared across all instances of a class, such as a configuration setting or a helper method. You call them directly on the class name.

**Example:**

```javascript
class Game {
  static maxPlayers = 4; // Static property

  static getRules() { // Static method
    return 'Play fair!';
  }
}

console.log(Game.maxPlayers); // Access directly on the Game class
console.log(Game.getRules());
```

**Remember:** **Static** means it's **stuck** to the class blueprint, not copied to each new object.