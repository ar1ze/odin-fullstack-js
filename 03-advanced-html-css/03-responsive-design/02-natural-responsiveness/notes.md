# 🍃 Natural Responsiveness

### Introduction

The first step to making responsive websites is using techniques that are naturally flexible. In a later lesson, you’ll learn how to completely rearrange items on a page based on screen size, but in most cases, it’s preferable to rely on tools like flexbox and grid to make your pages work on a wide range of screens first.

-----

### 📝 Lesson Overview

  * You’ll learn a few tips for keeping your sites naturally responsive.

-----

### Not Everything Needs CSS

Plain HTML, with no CSS, is responsive. Visit [this HTML-only page with no CSS](https://html-only.netlify.app/) and shrink your browser down to the size of a phone. It works perfectly\! You could read that site on an Apple Watch.

It’s not realistic for every website you create to be as basic as plain text on a page, but it is important to keep in mind that most of the elements you’re using to build your project are responsive until you change that with CSS. If you approach your project with this mindset and do your best to maintain that natural responsiveness, you might find that there isn’t that much extra you need to do to make your sites properly responsive.

The rest of this lesson is a list of tips you can use to maintain natural responsiveness.

### The Viewport Meta Tag

When mobile phones first started getting web browsers, most websites were not optimized for such small screen resolutions. To get around this, most phone browsers simulated a larger screen and displayed a zoomed-out version of the page. These days, however, we almost never want that behavior so we have to specify that we want our websites to be viewed at the actual non-zoomed screen resolution.

For this reason, you should add this snippet into the `<head>` of your HTML file in just about every project you work on.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

It sets the initial width of the webpage to the size of the actual screen you’re viewing it on, and telling it not to zoom in or out. Easy\!

You have most likely already been using this tag if you’ve been using Emmet to generate HTML boilerplate for you. (`!` + ENTER)

### Avoid Fixed Width and Height

The number one enemy of flexibility is a **fixed width** on an element. If you put `width: 600px` on anything, then it will never be able to shrink below that width, which ruins your chances of getting that thing to fit on most phone screens. Likewise, sticking a **fixed height** on an element can cause issues if the contents of that element run out of room.

Obviously, the context will determine what works in a given situation, but an easy fix in many cases is replacing `width` or `height` with **`max-width`** or **`min-height`** (`min-width` and `max-height` are also valid and may be useful depending on the context).

In the following example, notice how the fixed `width` causes our div to overflow the screen\! Change it to `max-width` and watch it shrink down to fit the preview screen\! Click ‘Fork on CodePen’, then ‘Save’, and navigate to the ‘Open Live View in a New Window’ icon at the bottom to see it in full window size. Try changing the size of the window to see how `max-width` works. When a `max-width` is defined, the element will not exceed that width but will shrink if the screen is too small to accommodate it.

See the [Pen max-width | CSS Responsiveness](https://www.google.com/search?q=https://codepen.io/TheOdinProjectExamples/pen/poLqgqB) by TheOdinProject (@TheOdinProjectExamples) on CodePen.

This example shown below demonstrates the problem with static heights. On a full-sized screen, the text would fit inside the pink box just fine, but here on this cramped embed, it overflows\! What we want here is for the div to be `300px` in most cases, but to grow instead of causing an overflow when the text gets cramped. In this case changing `height: 300px` to `min-height: 300px` will fix the issue.

See the [Pen height | CSS Responsiveness](https://www.google.com/search?q=https://codepen.io/TheOdinProjectExamples/pen/bGwqNLy) by TheOdinProject (@TheOdinProjectExamples) on CodePen.

### Avoid Heights Altogether

In most cases, you should avoid setting a height altogether. There are some exceptions to this rule (headers and footers perhaps) but you should prefer using `margin` and `padding` to increase space around your content. Using `margin` and `padding` will keep your elements flexible no matter what the content inside does.

### When Fixed Widths Are Appropriate

There are cases when a fixed width is appropriate. It’s hard to make a universal rule, but, in general, the smaller your widths, the more acceptable it is to make them fixed. For example, a `32px` icon on your page isn’t going to benefit from using `max-width` because you probably don’t want it to shrink. Likewise, a `250px` sidebar probably needs to always be `250px`. As with anything, you need to consider your options and pick what seems to be the most appropriate.

### Use Flex and Grid

Here’s a statement so obvious that it sounds like a joke: flexbox was created to enable the creation of flexible layouts. Using flex and grid doesn’t necessarily guarantee perfect responsiveness, but they are really helpful tools. You’ve already learned about the relevant properties here, but things like `flex-wrap` and grid’s `minmax`, `auto-fill` and similar properties can make some impressively responsive layouts without much extra work.

-----

### 📚 Assignment

  * Read [“Using the viewport meta tag”](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) on MDN to get a little more background and detail about the viewport meta tag and the nature of screen resolutions.
  * [Using Percentages in CSS](https://www.google.com/search?q=https://www.digitalocean.com/community/tutorials/css-using-percentages-in-css) is an article that tackles another common pitfall. Don’t focus too much on the `@media` parts, as we will cover media queries very soon.
  * [minmax() in auto-fill repeating tracks](https://www.google.com/search?q=https://css-tricks.com/minmax-in-auto-fill-repeating-tracks/) demonstrates a really nice responsive grid feature.

-----

### 🤔 Knowledge Check

The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

  * What is natural responsiveness?
  * Why should you avoid fixed width?
  * Why should you avoid fixed height?
  * In what situations might it be appropriate to use a fixed height or width?
  * Why should you avoid percentages?

-----

### 🔗 Additional Resources

This section contains helpful links to related content. It isn’t required, so consider it supplemental.

  * It looks like this lesson doesn’t have any additional resources yet. Help us expand this section by contributing to our curriculum.