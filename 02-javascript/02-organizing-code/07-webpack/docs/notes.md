# 🚀 Webpack

## 📝 Introduction

-----

While ES6 modules help organize code into separate files, loading many individual files can be slow for the browser. A **bundler** like Webpack solves this by taking all your files (JavaScript, CSS, images, etc.), figuring out their dependencies, and combining them into a few optimized files for production. This requires some initial configuration, but it's a powerful and essential tool in modern web development.

## 📚 Lesson Overview

-----

  * ❓ Explain the purpose of bundlers.
  * ⚙️ Configure Webpack to bundle JavaScript modules.
  * 🎨 Configure Webpack to handle non-JavaScript files (HTML, CSS, images).
  * 🖥️ Set up Webpack’s development server for a live-reloading workflow.

## 📦 Core Concepts

-----

  * **Bundling Process**: Webpack starts from an **entry point** file, builds a **dependency graph** of all imported modules, and outputs a single, combined file (the "bundle").
  * **`src` and `dist` Directories**:
      * `src` (source): Where you write your code.
      * `dist` (distribution): Where the bundled, optimized output code lives. You deploy the contents of this folder.

## 🛠️ Basic Setup

-----

1.  **Initialize Project**:
    ```bash
    mkdir webpack-practice && cd webpack-practice && npm init -y
    ```
2.  **Install Webpack**: Install `webpack` and its command-line interface (`webpack-cli`) as development dependencies.
    ```bash
    npm install --save-dev webpack webpack-cli
    ```
3.  **Create `webpack.config.js`**: This file tells Webpack how to bundle your project. It uses CommonJS syntax (`require`/`module.exports`).
    ```javascript
    // webpack.config.js
    const path = require("path");

    module.exports = {
      mode: "development",
      entry: "./src/index.js", // The entry point
      output: {
        filename: "main.js", // The name of the output bundle
        path: path.resolve(__dirname, "dist"), // The output directory
        clean: true, // Cleans the /dist folder before each build
      },
    };
    ```
4.  **Run Webpack**:
    ```bash
    npx webpack
    ```

## 🧩 Handling Assets: Loaders & Plugins

-----

Webpack only understands JavaScript out of the box. We need **loaders** to process other file types and **plugins** to perform additional tasks.

### 📄 HTML

  * **Plugin**: `HtmlWebpackPlugin`
  * **Purpose**: Generates an HTML file in `dist` and automatically injects your bundled JavaScript script tag.
  * **Installation**: `npm install --save-dev html-webpack-plugin`
  * **Configuration**:
    ```javascript
    // webpack.config.js
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    module.exports = {
      // ... other config
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html", // Your source HTML file
        }),
      ],
    };
    ```

### 🎨 CSS

  * **Loaders**: `style-loader` and `css-loader`
  * **Purpose**:
      * `css-loader`: Reads the CSS file and resolves `@import` and `url()` paths.
      * `style-loader`: Injects the CSS into the DOM inside a `<style>` tag.
  * **Installation**: `npm install --save-dev style-loader css-loader`
  * **Configuration**:
    ```javascript
    // webpack.config.js
    module.exports = {
      // ... other config
      module: {
        rules: [
          {
            test: /\.css$/i, // A regex to find CSS files
            use: ["style-loader", "css-loader"], // Order matters: runs right-to-left!
          },
        ],
      },
    };
    ```
  * **Usage**: Import the CSS file directly in your JavaScript.
    ```javascript
    import "./styles.css";
    ```

### 🖼️ Images

  * **Method**: Use Webpack's built-in Asset Modules.
  * **Purpose**: To handle image files so they can be imported into JavaScript modules.
  * **Configuration**:
    ```javascript
    // webpack.config.js
    module.exports = {
      // ... other config
      module: {
        rules: [
          // ... other rules
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
        ],
      },
    };
    ```
  * **Usage**: Import the image to get its final URL.
    ```javascript
    import odinImage from "./odin.png";

    const myImage = document.createElement("img");
    myImage.src = odinImage;
    document.body.appendChild(myImage);
    ```

## ⚙️ Development Workflow

-----

### 🖥️ Webpack Dev Server

  * **Purpose**: A live-reloading server that automatically rebundles your code when you save a file. No more running `npx webpack` manually\!
  * **Installation**: `npm install --save-dev webpack-dev-server`
  * **Run Command**: `npx webpack serve` (access at `http://localhost:8080`)

### 🗺️ Source Maps

  * **Purpose**: Maps the bundled code back to your original source files, making debugging much easier.
  * **Configuration**: Add this top-level property to `webpack.config.js`.
    ```javascript
    // webpack.config.js
    module.exports = {
      // ... other config
      devtool: "eval-source-map",
    };
    ```

## 🧠 Knowledge Check

-----

  * **What is a bundler?** A tool that combines multiple code files into a single bundle.
  * **What is Webpack?** A popular and highly configurable module bundler.
  * **How do you load CSS?** With `style-loader` and `css-loader`.
  * **How do you handle HTML?** With `HtmlWebpackPlugin`.
  * **How do you handle images?** With the built-in `asset/resource` module type.
  * **What tool improves the development workflow?** `webpack-dev-server`.
  * **Why use a source map?** To make debugging easier by mapping bundled code to the original source.