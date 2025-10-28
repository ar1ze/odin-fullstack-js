# Revisiting Webpack

## 📝 Introduction

This lesson covers a few concepts to improve your Webpack setup and development workflow, building on what you learned in the Restaurant Page project.

## 📚 Lesson Overview

  * How to write and run **npm scripts**.
  * What **Webpack modes** are and how to automate switching between them.
  * How to create and use **template repositories**.

## 🏃 npm Scripts

  * **Purpose**: To save time and create standardized names for running common commands in the terminal.
  * **Location**: They live in the `package.json` file under a `"scripts"` property.
  * **Format**: `"name": "command"`
  * **Execution**: Run them using `npm run <name>`.
  * **Example**:
    ```json
    "scripts": {
      "build": "webpack",
      "dev": "webpack serve",
      "deploy": "git subtree push --prefix dist origin gh-pages"
    }
    ```
  * **Running the example scripts**:
      * `npm run build` (runs `webpack`)
      * `npm run dev` (runs `webpack serve`)
      * `npm run deploy` (runs the long `git subtree` command)
  * **Note**: You can drop the `npx` prefix when using commands in npm scripts.

## 💡 Webpack Modes

  * **Purpose**: Webpack has two modes that apply different optimizations.
    1.  **`development`**: Best for when you are actively working on your project.
    2.  **`production`**: Best for building your final files for deployment (creates a more optimized, minified bundle).
  * **Problem**: You have to manually change the `mode` in `webpack.config.js` when switching between development and building for production.
  * **Solution**: Create separate configuration files (e.g., `webpack.dev.js` and `webpack.prod.js`) and tell your npm scripts which one to use.
      * **`webpack-merge`**: A tool (covered in the assignment) that helps you split your configuration into multiple files without duplicating code.
  * **Example `package.json` with separate configs**:
    ```json
    "scripts": {
      "build": "webpack --config webpack.prod.js",
      "dev": "webpack serve --config webpack.dev.js"
    }
    ```

## repositories(Template Repositories)

  * **Problem**: Setting up Webpack requires creating multiple files, directories, and configuration, which is repetitive for every new project.
  * **Solution**: Use **template repositories** on GitHub.
  * **How to create one**:
    1.  Create a new repository with all your boilerplate setup code (Webpack config, `package.json`, `src` and `dist` folders, etc.).
    2.  Go to the repository's **Settings**.
    3.  Check the **"Template repository"** box.
  * **How to use one**:
    1.  When you create a new repository on GitHub, select your template from the **"Repository template"** dropdown.
    2.  Your new repository will be created as a copy of the template, saving you all the setup time.

## Assignment

  * Read more about **npm scripts**.
  * Read Webpack’s **“Production” guide** to learn how to use **`webpack-merge`** and split your configuration files.

## 🧠 Knowledge Check

  * Where do npm scripts live? (In `package.json` under the `"scripts"` property)
  * How do you define and run npm scripts? (Define as `"name": "command"`, run with `npm run <name>`)
  * What are the two Webpack modes? (`development` and `production`)
  * What tool allows you to split your Webpack configuration? (`webpack-merge`)
  * What is a template repository? (A GitHub repo you can use as a starter for new projects)