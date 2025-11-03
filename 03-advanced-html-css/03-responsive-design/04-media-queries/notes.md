# 📱 Media Queries

### Introduction

With media queries, it is possible to completely restyle your web projects based on the size of a user’s screen. All of the lessons we’ve had so far have focused on making sure that the individual elements of your layout are as flexible as possible, but sometimes you will need to actually change some of your CSS values to accommodate a specific screen size. These changes could be subtle shifts, such as adjusting margin, padding, or font-size to squeeze more content onto the screen, or they could be big obvious shifts in layout. The nature of the exact changes will depend on your design, but the underlying technique is the same.

-----

### 📝 Lesson Overview

  * You’ll learn how to implement media queries to create fully responsive websites that look great on any device.

-----

### 💻 Media Query Syntax

The basic syntax for media queries is as follows:

```css
body {
  margin: 24px;
}

@media (max-width: 600px) {
  body {
    margin: 8px;
  }
}
```

In the above example, the margin is changed based on screen size. Specifically, on all screens below or equal to 600px, the margin will be 8px, and on all screens above 600px, it will be 24px.

Really, that’s all there is to it. You can create some complex shifting layouts with just this knowledge alone. You can create an unlimited number of media queries in a single document (Click the ‘Edit on CodePen’ button so you can resize your screen and see the changes):

See the [Pen Media Queries 1 | CSS Responsiveness](https://www.google.com/search?q=https://codepen.io/TheOdinProjectExamples/pen/oNvLJJp) by TheOdinProject (@TheOdinProjectExamples) on CodePen.

You can also put any number of style definitions inside a media query:

See the [Pen Media Queries 2 | CSS Responsiveness](https://www.google.com/search?q=https://codepen.io/TheOdinProjectExamples/pen/XWYBqMq) by TheOdinProject (@TheOdinProjectExamples) on CodePen.

-----

### ↔️ Other Queries

In all of the above examples, our queries specify a **max-width** which will apply styles to any screen resolution below or equal to the specified value. Said another way: a max-width query will apply on any screen up to the defined max-width. It is also possible to define a **min-width**, which applies to any screen resolution above or equal to the given value. **max-height** and **min-height** are also valid.

-----

### ✋ Limit Media Queries

As mentioned earlier, it is possible to create an unlimited number of media queries for every possible screen size. However, it is best to minimize your media-query usage and rely more on the natural flexibility of your layouts. Consider the second embedded example above (“my cool site”). It only needs one media query to accommodate all desktop and mobile sizes, and there’s no real need to create more.

-----

### 📏 Common Breakpoints

‘Breakpoint’ is the term for the screen size that triggers your media query. You will find quite a lot of differing opinions on what exactly your breakpoints should be. In general, it’s helpful to think about the kinds of devices and screens that your users will be using.

  * **Mobile phones** are usually under 500px.
  * **Tablets** are often between 500px and 1000px.
  * Anything larger than **1000px** is likely to be a normal browser screen.
  * Super wide screens are also becoming more common, which means that your site could end up being viewed on a screen wider than 2000px\!

This does not mean that you should just start your project with media queries for each device. Each project is going to have different requirements based on the design you’re trying to achieve. As mentioned above, try to limit your breakpoints to just what you need. With many relatively basic layouts, you can get by with only one mobile-centric breakpoint somewhere around 500-600px. More complex layouts might benefit from doing a full-sized layout above 1200px, an altered “tablet” layout between 600px and 1200px and mobile below 600px. The real takeaway here is that it doesn’t really matter exactly where you set your breakpoints, just do what makes sense for your project.

-----

### 🔍 Zooming\!

In most browsers, zooming in on a webpage will change the effective resolution of that page. If your browser window is exactly 1000px wide, zooming in will cause the page to behave as if the screen is smaller, and will trigger media queries based on the simulated/zoomed screen resolution. Zooming out can be handy for debugging issues that arise on screens that are larger than your own computer screen. Forgetting that you’ve zoomed in or out on a webpage can cause some real confusion when breakpoints refuse to trigger at the correct points.

-----

### 🖨️ Print Styles

You’ll often see media queries defined with the `screen` keyword like so:

```css
@media screen and (max-width: 480px) {
}
```

This is not necessary, but it does point toward another very useful capability of media queries: changing styles based on the media type. Everything we’ve covered so far has been specifically intended for viewing on some kind of screen so specifying `screen` is redundant. However, it is possible to create a different set of styles for your website when it is sent to your printer or viewed in print-preview mode by using the `print` keyword.

```css
@media print {
  /* print styles go here! */
}
```

This is not something we’re going to focus on in our curriculum, but it may be something you want to consider taking advantage of in some cases. It’s fairly common to change some colors (i.e. make things black/white), and add `display: none` to hide elements that are useless in a printed environment (buttons, nav links, etc).

-----

### 📚 Assignment

  * Look through [Using media queries on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries). There are a few additional things you can do with media queries that might be worth knowing about, though their usage is much less common.

-----

### 🤔 Knowledge Check

  * How do you define a media query to create a mobile layout for your site?
  * What is the difference between max-width and min-width in a media query definition?

-----

### 🔗 Additional Resources

  * This [Media Query Tutorial on FreeCodeCamp](https://www.freecodecamp.org/news/media-query-css-example-max-and-min-screen-width-for-mobile-responsive-design/) covers the same items we’ve touched on here.