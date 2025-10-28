# 📦 npm

## 📝 Introduction

As applications grow, we often rely on third-party code (libraries, frameworks, etc.) to avoid reinventing the wheel. A **package manager** like `npm` is a tool that helps us easily find, install, and manage these third-party packages in our projects.

## 📚 Lesson Overview

* Understand what `npm` is.
* Understand the purpose of the `package.json` file.

## ⚙️ What is npm?

* **npm** (no capitals!) is a **package manager** for JavaScript. It's a massive online repository of code packages and a command-line tool to install and manage them.
* It allows you to download packages and use their code in your own project files.
* Interestingly, `npm` does **not** stand for "Node Package Manager".
* As projects get more complex with many dependencies, managing them becomes difficult. `npm` simplifies this process.
* This also sets the stage for the next topic: **bundlers**, which help manage and optimize these multiple files for the browser.

## 📄 package.json

* The `package.json` file is the heart of an `npm` project.
* It's a JSON file that contains **metadata** about your project, including its name, version, and a list of its dependencies.
* When you run the command `npm install` in a project folder, `npm` reads the `package.json` file and automatically downloads and installs all the listed dependencies.
* As you install or uninstall packages, `npm` will automatically update this file for you.

## 💻 Assignment

### 📖 Reading
1.  Read about **installing packages with npm**.
2.  Read about the **`package.json` file**.
3.  Understand the difference between **dependencies** (needed for the final app) and **development dependencies** (only used during development, like testing frameworks).
4.  Read the history of JavaScript package management up to (but not including) the section on bundlers.

## 🧠 Knowledge Check

* What is `npm`?
* What file does `npm` use that contains all information about dependencies?