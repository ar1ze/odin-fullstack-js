### Knowledge Check Answers 🎯

-----

**Question: What is a bundler?**

**Answer:** A bundler is a tool that takes your JavaScript files and all their dependencies, combines them, and outputs a single, optimized file.

**Why:** It processes your code by starting from an "entry point" file, mapping out all the files that are imported (the dependency graph), and then merging them into one bundle for the browser to load efficiently.

**Remember:** A bundler is like a **chef** 🧑‍🍳 who takes all your separate ingredients (`src` files) and cooks them into one final dish (`dist` bundle).

-----

**Question: What is Webpack?**

**Answer:** Webpack is one of the most popular and powerful JavaScript bundlers.

**Why:** It's used to manage and bundle not just JavaScript, but also other assets like HTML, CSS, and images, by using a system of loaders and plugins defined in a configuration file.

-----

**Question: How do you bundle JavaScript?**

**Answer:** You configure a `webpack.config.js` file specifying an `entry` point and an `output` location, then run the `npx webpack` command.

**Why:** The configuration file tells Webpack where to start looking for your code (`entry`) and where to place the final bundled file (`output`). Running the command executes this process.

**Example:**

```javascript
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

-----

**Question: How do you load CSS using Webpack?**

**Answer:** You install `style-loader` and `css-loader`, add a rule for `.css` files in your Webpack config, and then `import` your CSS file directly into your JavaScript.

**Why:** `css-loader` reads the CSS file, and `style-loader` injects it into the DOM. This allows Webpack to include your styles as part of its dependency graph.

**Example:**

```javascript
// webpack.config.js rule
{
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'], // Order matters!
}

// src/index.js
import './styles.css';
```

-----

**Question: How do you automatically build HTML files in `dist` using Webpack?**

**Answer:** You use the `HtmlWebpackPlugin`.

**Why:** This plugin generates an HTML file in your `dist` folder based on a template you provide. It automatically injects a `<script>` tag referencing your bundled JavaScript so you don't have to do it manually.

**Example:**

```javascript
// webpack.config.js
plugins: [
  new HtmlWebpackPlugin({
    template: './src/template.html',
  }),
],
```

-----

**Question: How would you handle assets like local image files?**

**Answer:** You add a rule in your Webpack config with `type: 'asset/resource'` for image file types and then `import` the image into your JavaScript.

**Why:** This tells Webpack to treat the imported image as a file to be copied into the `dist` folder. The `import` statement will then return the correct public URL to that file, which you can use in your code.

**Example:**

```javascript
// webpack.config.js rule
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
}

// src/index.js
import odinImage from './odin.png';
const image = document.createElement('img');
image.src = odinImage; // `odinImage` contains the correct path
```

-----

**Question: What Webpack tool could you use during development to view changes to your website live?**

**Answer:** You can use `webpack-dev-server`.

**Why:** It's a development tool that automatically rebundles your code and refreshes your browser whenever you save a change, creating a smooth "live reload" experience.

**Remember:** `webpack-dev-server` is your personal **live-reloading assistant** 🤖, saving you from manually refreshing the page.

-----

**Question: How does using a source map help with development?**

**Answer:** A source map links your bundled code back to your original source code, making debugging much easier.

**Why:** When an error occurs in the bundled file, the source map allows your browser's developer tools to show you the error in the original, readable file and line number, instead of in the compressed and jumbled bundle.