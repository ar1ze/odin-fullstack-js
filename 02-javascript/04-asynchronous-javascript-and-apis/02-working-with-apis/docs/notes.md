# 📡 Working with APIs

### Introduction

One powerful ability for a web developer is fetching data from a server (like blog posts, user data, or weather data) and displaying it on a site. Servers that exist to serve data for external use are often called APIs.

-----

### 📝 Lesson Overview

  * Explain what an API is.
  * Explain broadly how access to an API works.
  * Explain how to fetch and extract data from an API.
  * Explain why your API request might be blocked by the browser, and how to fix this.

-----

### 🔌 APIs (Application Programming Interfaces)

APIs are servers designed to serve data to external websites or apps. They are usually accessed through specific URLs (called **endpoints**).

  * **How they work:** You query a specific URL, often passing in parameters to get specific data.
  * **Example (Visual Crossing Weather API):**
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london`

#### API Keys

Most APIs require you to create an account and get an **API key**.

  * This key must be included with your requests, often as a URL parameter:
    `.../timeline/london?key=11111111111111111`
  * **Purpose:** Keys allow services to track usage, prevent abuse, and manage costs.
  * **Cost:** Many APIs have free tiers (e.g., 1000 calls/day) and paid tiers for more frequent requests or more data.
  * **Security:** API keys (especially for paid tiers) must be kept secure. Bots crawl sites like GitHub looking for exposed keys.
      * **Warning:** Putting a key directly in the URL on a frontend-only project (like in these examples) is insecure. Securing keys properly requires a server-side solution (covered later in the curriculum). For free-tier keys on portfolio projects, this is less of a concern.

-----

### 🚚 Fetching Data

We can get data from an API into our code using the built-in `fetch` function, which is a modern replacement for the older, more complex `XMLHttpRequest`.

  * `fetch` is native to modern browsers and uses **Promises**.

**Basic Syntax:**

```javascript
// URL (required), options (optional)
fetch('https://url.com/some/url')
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
    // Error :(
  });
```

#### Example: Giphy API

Let's fetch a random "cats" gif from Giphy.

1.  **Get your API key** from Giphy.
2.  **Find the endpoint:** The Giphy documentation for the 'translate' endpoint shows the URL is `api.giphy.com/v1/gifs/translate` and it needs `api_key` and `s` (search term) parameters.
3.  **Build the URL:**
    `'https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats'`

**Code Walkthrough:**

1.  **Start with HTML:**

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Document</title>
    </head>
    <body>
      <img src="#">
      <script>
      </script>
    </body>
    </html>
    ```

2.  **Select the image and fetch:**

    ```javascript
    const img = document.querySelector('img');
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats')
      .then(function(response) {
        // The initial response isn't the data, it's the HTTP response.
        // We need to call .json() to get the data, which ALSO returns a promise.
        return response.json();
      })
      .then(function(response) {
        // This .then() receives the actual JSON data object.
        console.log(response);
        // We inspect the object to find the URL we need.
        // In this case, it's deep inside: response.data.images.original.url
        img.src = response.data.images.original.url;
      });
    ```

<!-- end list -->

  * **Note:** We need two `.then()` blocks. The first one gets the response and calls `.json()`. The second one receives the result of `.json()` (the actual data).

-----

### 📚 Assignment

  * Read the [Fetch documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
  * Browse this [list of Public APIs](https://github.com/public-apis/public-apis) for inspiration.
  * **Expand your Giphy project:**
      * Add a button that fetches a new image without refreshing the page.
      * Add a search box to search for specific gifs.
      * Add a `.catch()` to manage errors.
      * **Important:** `fetch` only errors on network failures, not on bad HTTP responses (like 404). You must check the response (e.g., `response.ok`) inside the first `.then()` to handle 404s manually.

-----

### 🤔 Knowledge Check

  * What is an API?
  * How is access to an API restricted?
  * How do you fetch and extract data from an API?