# 🧠 OOP Principles

## 📝 Introduction

* Learning OOP syntax (factory functions, classes) is just the beginning.
* The real challenge is deciding **how** to use them effectively: what to put in an object, when to create new ones, and when to use inheritance.
* This lesson introduces key OOP principles. These are **helpful guidelines**, not strict rules.

## 📚 Lesson Overview

* Explain the **Single Responsibility Principle**.
* Briefly explain the additional **SOLID** principles.
* Explain **"tightly coupled"** objects and why to avoid them.
* Understand why **composition is preferred to inheritance**.

## 🎯 Single Responsibility Principle

* This is one of the most important principles.
* It states that a class (or object or module) should have **only one responsibility**.
* This doesn't mean it can only do *one thing*, but that all its actions should be part of that single responsibility.
* **Common Example**: Separate your application logic from your DOM manipulation logic.
    * **Bad**: A game-over function that both checks the game logic *and* creates/appends DOM elements.
    * **Good**: The `isGameOver()` function *only* checks the game logic and returns a value. A separate DOM module handles updating the screen based on that value.
* **Another way to think about it**: An object should only have **one reason to change**.
* This is the "S" in the **SOLID** principles.

## 🔗 Loosely Coupled Objects

* While objects work together, they should be able to **stand alone** as much as possible.
* **Tightly Coupled Objects**: These objects rely so heavily on each other that changing or removing one breaks the other. This is bad and should be avoided.
* **Example**: You should be able to completely change your UI (e.g., from `console.log` to DOM manipulation) *without* having to rewrite your core game logic.

## 💻 Assignment

* **Reading**:
    * Read about the **Single Responsibility Principle** (SOLID principle #1).
    * Read about **loosely coupled** objects.
* **Videos**:
    * Watch "The SOLID Design Principles" by WDS.
    * Watch FunFunFunction's video on **favoring composition over inheritance**.

## 🧠 Knowledge Check

* What is the "Single Responsibility Principle"?
* What are the additional SOLID principles?
* What are "tightly coupled" objects and why are they bad?
* Why is composition generally favored over inheritance?

## 🔗 Additional Resources
* **Books** (Not free, but highly recommended):
    * *Practical Object-Oriented Design In Ruby* (POODR): Excellent book on loose coupling. The Ruby is clear enough even for non-Rubyists.
    * *99 Bottles of OOP*: By the same author, available in JavaScript and Ruby, and good for OOP beginners.
* **Articles/Videos**:
    * "Building a house from the inside out" walks through separating core logic from DOM logic.
    * A brief video by Coderized covers SOLID principles and clean coding practices.