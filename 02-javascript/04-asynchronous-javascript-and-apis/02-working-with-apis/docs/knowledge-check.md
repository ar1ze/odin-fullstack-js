### Knowledge Check Answers 🎯

-----

**Question: What is an API?**

**Answer:** An API (Application Programming Interface) is a server designed to provide data (like blog posts, user data, or weather) to external websites or apps.

**Why:** It allows you to "query" a specific URL (called an endpoint) to fetch data from an external source and display it on your own site.

**Example:** You can query the Giphy API's endpoint to get a random gif and show it on your webpage.

**Remember:** Think of an API as a **waiter** 🤵. You send a request (your order) to a specific endpoint (the waiter), and the API brings you back the data (your food) from the server (the kitchen).

-----

**Question: How is access to an API restricted?**

**Answer:** Access is most often restricted using an **API key**.

**Why:** An API key is a unique string you must include with your requests. It allows the API service to track your usage, prevent abuse, and manage costs by enforcing free tiers (e.g., 1000 calls/day).

**Example:**

```
.../timeline/london?key=11111111111111111
```

-----

**Question: How do you fetch and extract data from an API?**

**Answer:** You use the built-in `fetch()` function, which returns a promise. You then need two `.then()` blocks: the first calls the `.json()` method on the response, and the second receives the actual data.

**Why:** The first `fetch()` call only returns the HTTP response, not the usable data. The `.json()` method is also asynchronous (returns a promise), so you need a second `.then()` to wait for the data to be extracted.

**Example:**

```javascript
fetch('https://api.giphy.com/v1/gifs/translate?api_key=...')
  .then(function(response) {
    return response.json(); // 1. Get response, return json() promise
  })
  .then(function(data) {
    // 2. This .then() receives the actual JSON data
    img.src = data.data.images.original.url;
  });
```