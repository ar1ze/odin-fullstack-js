# 🧹 Linting

### Introduction
Before diving deeper into code, it's beneficial to improve your editor setup and productivity. This lesson introduces code style and tools to maintain consistency, which can make development much easier and even auto-fix issues like indentation.

---
### 📝 Lesson Overview
* Learn about style guides and why they are important.
* Set up a linter and prettier to make your code better.

---
### 🎨 Style Guides
Code style is crucial for making code more maintainable and easier to read. A consistent set of rules (e.g., for indentation, quotes, code structure) helps across a codebase.

**Examples of popular JavaScript style guides:**
* **The Airbnb Style Guide:** One of the most popular.
* **Google's JavaScript Style Guide**
* **The JavaScript Standard Style**

---
### 🔍 Linting
Linters are tools that scan your code against a set of style rules and report any errors. They can sometimes even auto-fix the errors.

* **ESLint:** By far the most common linter for JavaScript.
* **Installation:** Installed as a **dev dependency** in your project.
* **Usage:** Allows you to run checks via the command line.
* **Configuration:** The [official "Getting Started" page](https://eslint.org/docs/latest/user-guide/getting-started) is the best place to begin. The default rules cover many common scenarios. You can [configure ESLint](https://eslint.org/docs/latest/user-guide/configuring/) to include/exclude files or change specific rules.

---
### ✨ Formatters
Formatters automatically reformat your code according to a set of rules. They differ from linters as they don't look for style *errors* but specifically target code *layout* (spaces, indentation, line breaks).

* **Prettier:** A very popular, highly opinionated formatter.
* **Benefit:** Reduces time spent on formatting decisions, as most are not customizable.
* **Installation:** Installed as a **dev dependency**. Refer to [Prettier’s installation guide](https://prettier.io/docs/en/install.html).
* **Configuration:** While it runs with defaults, settings can be changed in a [Prettier configuration file](https://prettier.io/docs/en/configuration.html).
* **Compatibility:** If using the default ESLint recommended rules, there should be no clashes with Prettier.

> **Why use Prettier?** It makes coding faster and easier. You don't have to worry about details like indentation or semicolons because it handles them for you.

---
### 💻 IDE Extensions for Linting and Formatting
ESLint and Prettier both have extensions for IDEs like **Visual Studio Code**, making them more convenient.

* **ESLint Extension:** Shows warnings/errors (squiggly lines) directly in your file without running a command.
* **Prettier Extension:** Allows you to format a file with an IDE command or keyboard shortcut.

**Important:**
> You must **still install the packages (ESLint, Prettier) as dependencies** in your project along with any configuration files. The extensions should use the project's installed packages and rules as the **source of truth**. This ensures consistency if you work on other projects.

---
### 📂 Adding Setup to Template Repositories
You can include linter and formatter setups in your template repositories to make future project creation quicker and easier.

---
### 📚 Assignment
* Read an article on the value of linters.
* Watch a short intro to Prettier by its creator.
* Test drive Prettier’s online playground by pasting in some of your old JavaScript code.

---
### 🤔 Knowledge Check
* What is linting?
* Which problems can linting prevent?
* What are some of the benefits of using a formatter?
* What is Prettier?
* Why should you install linters and/or formatters as dev dependencies in your project?

---
### 🔗 Additional Resources
* This section currently has no resources.