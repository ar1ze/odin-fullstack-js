# 🏛️ Classes

## 📝 Introduction

* JavaScript does not have classes in the same sense as other object-oriented languages like Java or Ruby.
* The ES6 `class` keyword is essentially a new syntax (syntactic sugar) over the existing object constructors and prototypes.
* While the syntax is new, the underlying mechanisms of prototypal inheritance have **not** changed.
* The syntax can be confusing because it isn't explicit about what's really happening with the objects.

## 📚 Lesson Overview

* ❓ Explain the differences between an object constructor and a class.
* 🔄 Explain what getters and setters are.
* ✍️ Describe basic class syntax.
* 👨‍👧‍👦 Use inheritance with classes.
* 🔒 Explain how to implement private class fields and methods.
* 🗿 Explain what static properties and methods are.

## 💻 Assignment

### 📖 Reading
* Read about **getters and setters**.
* Read JavaScript.info’s primer on **class syntax**.

### 🔍 Deeper Dive (MDN Docs)
Explore these features on MDN. You don't need to memorize them now.
* **Extending classes**: A `Player` class that extends a `Person` class.
* **Private properties**: Properties or methods not accessible outside the class.
* **Static properties and methods**: Methods called on the class itself (e.g., `String.fromCharCode()`) rather than on an instance of the class (e.g., `someString.slice()`).

### 🔨 Practice
* Refactor your **Library project** to use `class` instead of plain constructors.
* Don't forget to use the `git branch` workflow.

## 🧠 Knowledge Check

* What are the differences between object constructors and classes?
* What are getters and setters?
* How is inheritance used with classes?
* What are some private class features?
* What are static properties?

## 🔗 Additional Resources

* **YouTube Playlist**: Stephen Mayeux has a playlist on ES6 classes with easy-to-follow examples.
* **Exercises**: w3resource provides a comprehensive collection of exercises on classes.