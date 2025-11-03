# 🛠️ Setting Up A React Environment

## React Course

### 🏁 Introduction

-----

You know what React is and you might even have an idea of where to use it. Now, it’s time to start figuring out how.

This lesson is going to cover starting a new React project on your machine, as well as some useful tools to help you along the way. We’ll also explain some of the problems that may arise (and how to avoid them).

### 📝 Lesson Overview

-----

  * How React projects can be created.
  * How to use Vite to create new React projects.
  * How to format the code in React projects.
  * What React Developer Tools are.

### 🛣️ Many Paths

-----

There are multiple ways to start using React, from simple `<script>` tags to robust toolchains and frameworks.

Some examples of these toolchains include:

  * **Vite’s** React Config
  * Gatsby
  * NextJS
  * Create React App (Deprecated)

Why do we need these toolchains? Can’t we just make our own?

Yes, but it’s hard. Before you can start writing code, you would need to configure at least the following:

  * Package Management (NPM, Yarn)
  * Module bundling (Webpack, Parcel)
  * Compilation (Babel)
  * React itself

### A Note on Create React App

-----

Create React App (CRA) was the official way to scaffold new React projects since 2016. Unfortunately, CRA was **deprecated in early 2023**. You’ll see it in many tutorials, but it’s **no longer recommended** for new projects.

### 💨 Simplifying the Process

-----

We can get started with a single terminal command using **Vite**.

Vite leverages the latest technologies to provide a great developer experience. We will use Vite’s CLI to quickly create a template React project. It requires minimal configuration and provides useful tools right out of the box.

### 🚀 Creating a React App

-----

Please make sure that you are using the latest LTS version of Node. Open your terminal in your projects folder and enter the following command:

```bash
npm create vite@latest my-first-react-app -- --template react
```

If you see the following output, enter `y` and press enter:

```
Need to install the following packages:
create-vite@5.X.X
Ok to proceed? (y)
```

Once executed, follow the next steps:

```bash
cd my-first-react-app
npm install
npm run dev
```

Provided everything has gone according to plan, head over to `localhost:5173`. Congratulations\! You’ve created your first React app.

To link your project to GitHub, create a new empty repo and follow the instructions on the repo’s page to connect it.

### Using an existing repo

-----

Alternatively, if you already cloned an empty GitHub repo, `cd` into it and run the Vite command using `.` as the project name:

```bash
npm create vite@latest . -- --template react
```

This tells Vite to use the current directory instead of creating a new one.

### 🔍 Delving Deeper

-----

Let’s take a closer look at our new project.

  * The **`public`** folder is where all static assets (images, icons, etc.) will go.
  * The **`src`** folder is where you will find the code that runs your app.

The **`main.jsx`** file in `src` is the entry point of the application:

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

Here’s a brief rundown of what is happening:

  * We import `StrictMode` and `createRoot`.
  * We import the `App` component from `App.jsx`.
  * We import some CSS styling.
  * We create a `root` object by selecting the element with the ID of "root" from our `index.html`.
  * We invoke the `render` method to place our `App` component inside that root.

You'll know exactly what all of this does by the end of the course.

### 🧰 Developer Tools

-----

As your projects become larger, it’s useful to track and debug the moving parts of your app. For this, we can use a Chrome extension called **React Developer Tools**.

We recommend installing this and becoming comfortable using it as early as possible, as it’s an invaluable tool.

### 📚 Assignment

-----

  * Review this material by reading through **Vite’s Getting Started Page**.
  * Check out this **guide for React Developer Tools** to begin learning how to use it.
  * Try to **clean up your `my-first-react-app` project** so that it no longer displays the default page. See if you can get it to display a “Hello, World\!” message instead.

### 🤔 Knowledge Check

-----

  * What are some of the ways we can start a new React project?
  * Why should we initially be using pre-made toolchains instead of making our own?
  * What is Vite and why would we use it?
  * What command can we run to scaffold a new React project using Vite?
  * What is in the `public` folder?
  * What is in the `src` folder?
  * Why are the React Developer Tools useful?

### 🔗 Additional Resources

-----

  * **Intro to React Dev Tools** gets you up to speed with a quick overview of the basic features.