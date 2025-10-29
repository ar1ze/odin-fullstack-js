### Knowledge Check Answers 🎯

***

**Question: What is linting? Which problems can linting prevent?**

**Answer:** Linting is the process of using a tool (a linter) to automatically scan your code for potential errors, style issues, and bad practices.

**Why:** It helps prevent bugs (like using an undefined variable) and enforces a consistent coding style (like using specific quotes). This makes your code more readable, maintainable, and less error-prone.

**Remember:** A linter is like a **grammar and spell checker** for your code.

***

**Question: What are some of the benefits of using a formatter?**

**Answer:** A formatter automatically rewrites your code to have a consistent layout, saving you time and mental energy.

**Why:** It takes care of all formatting decisions, like indentation, spacing, and line breaks, so you can focus on writing logic. It also stops arguments about code style on a team, because the formatter decides.

**Remember:** A formatter is your personal **code janitor** 🧹; it cleans up the appearance automatically.

***

**Question: What is Prettier?**

**Answer:** Prettier is a popular, "opinionated" code formatter.

**Why:** It's called "opinionated" because it has a default set of rules and makes most formatting decisions for you with very little setup. It ensures code looks identical no matter who wrote it.

***

**Question: Why should you install linters and/or formatters as dev dependencies in your project?**

**Answer:** You install them as dev dependencies (`--save-dev`) so that every developer working on the project uses the exact same version and rules.

**Why:** This ensures the code style stays consistent regardless of whose computer it's on. It also keeps these development tools separate from the production code that your users will run.

**Remember:** Dev dependencies are your **developer tools**; they belong in the project's toolbox, not in the final product.