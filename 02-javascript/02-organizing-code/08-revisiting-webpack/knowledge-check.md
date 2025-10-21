### Knowledge Check Answers 🎯

-----

**Question: Where do npm scripts live?**

**Answer:** npm scripts live inside your `package.json` file, within the `"scripts"` object.

**Why:** This file acts as your project's manifest, and the `"scripts"` section is where you define command-line shortcuts for managing your project (like building or testing).

**Example:**

```json
// In package.json
"scripts": {
  "build": "webpack",
  "dev": "webpack serve"
}
```

-----

**Question: How do you define and run npm scripts?**

**Answer:** You define a script as a key-value pair in your `package.json`'s `"scripts"` object. You run it from your terminal with the command `npm run <script-name>`.

**Why:** The key is the shortcut name you want (e.g., "build"), and the value is the full command you want it to run (e.g., "webpack").

**Example:**

  * **Define:** `"deploy": "git subtree push --prefix dist origin gh-pages"`
  * **Run:** `npm run deploy`

-----

**Question: What are the two Webpack modes?**

**Answer:** The two modes are `development` and `production`.

**Why:** `development` mode is optimized for fast builds and helpful debugging. `production` mode is optimized for deployment, creating a much smaller, minified file that is faster for users to download.

**Remember:** `development` is for **building** (fast, with helpful errors), `production` is for **shipping** (small, fast).

-----

**Question: What tool allows you to split your Webpack configuration file with minimal duplication?**

**Answer:** The `webpack-merge` tool.

**Why:** It lets you create a `webpack.common.js` file for all your shared settings (like loaders) and then merge it with specific `webpack.dev.js` or `webpack.prod.js` files. This keeps your configuration clean and avoids repeating code.

-----

**Question: What is a template repository, and how would you create one?**

**Answer:** A template repository is a GitHub feature that lets you use one repository as a "starter kit" for new projects.

**Why:** This saves you from manually setting up Webpack, linters, and folder structures every time you start a project. To create one, go to your repository's **Settings** on GitHub and check the "Template repository" box.