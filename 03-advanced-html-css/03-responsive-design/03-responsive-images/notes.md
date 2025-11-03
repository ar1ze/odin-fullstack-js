# 🏞️ Responsive Images

## Introduction

Images require special care on responsive websites. This lesson presents a few issues that arise when working with responsive images and the options you have when dealing with them.

-----

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

  * You’ll learn how to make your images behave properly when resizing them with CSS.
  * You’ll learn how to serve up different images based on screen size.

-----

## The basics

The most basic problem you are going to face when working with responsive images is the **aspect ratio** or the relationship between width and height. If you shrink the width of an image on smaller screens and do not manipulate the height, the image will appear distorted\!

The solution to this issue is incredibly easy, and we’ve already mentioned it in an earlier lesson: don’t define both a width and a height. If an image is given a flexible width, and the height is set to `auto`, then it should retain its aspect ratio correctly.

-----

## background-size, background-position and object-fit

What if you don’t want your image to shrink (in both height and width)? `background-size` and `object-fit` are two properties that can provide a little more flexibility (pun intended) with how aspect ratios are handled.

**`background-position`** and **`background-size`** are properties that work on elements with a background image, and do not work on normal `img` tags. You’ll see some examples and specifics in the reading assignment later, but you can get quite a lot of control over the display and placement of background images by working with these properties. For example, `background-position: center` will make sure the image is always centered in its container, even if the container is too small to fit the whole image. `background-size: cover` will resize the image so that it is always completely filling its container while cropping as little as possible.

Here’s a little demo you can play with:

See the [Pen background | CSS Responsiveness](https://www.google.com/search?q=https://codepen.io/TheOdinProjectExamples/pen/VwEzjWb) by TheOdinProject (@TheOdinProjectExamples) on [CodePen](https://codepen.io).

**`object-fit`** works similarly, but is meant for `img` tags. With the `object-fit` property you can specify a width and height for your images and then tell an image how it is supposed to fit itself to those dimensions. The default value for `object-fit` is `fill`, which stretches the image to fit the dimensions, but much like `background-size` you can also tell it to `cover` or `contain` the image.

Here’s a demo of `object-fit` on an image. Open this one up on CodePen and resize the browser to see how the image reacts.

See the [Pen object-fit](https (https://www.google.com/search?q=https://codepen.io/TheOdinProjectExamples/pen/vYPyGbr):/codepen.io/TheOdinProjectExamples/pen/vYPyGbr) by TheOdinProject (@TheOdinProjectExamples) on [CodePen](https://codepen.io).

-----

## Even more control\!

It is also possible to literally use different images for different screen sizes. This gives you the most control over exactly how your images are displayed at various resolutions. For example, instead of just trusting `object-fit` to keep the subject of a photograph in a frame, you could present a cropped version of it on smaller screens. There are two ways of achieving this, but the most flexible is using the **`<picture>` tag**, which you’ll learn more about in the assignment.

-----

## Assignment

  * First check out the docs for [`background-size`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/en-US/docs/Web/CSS/background-size%5D\(https://developer.mozilla.org/en-US/docs/Web/CSS/background-size\)), [`background-position`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/en-US/docs/Web/CSS/background-position%5D\(https://developer.mozilla.org/en-US/docs/Web/CSS/background-position\)), and [`object-fit`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/en-US/docs/Web/CSS/object-fit%5D\(https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit\)). The demos on those pages should make their usage clear.
  * MDN’s [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) is an introduction to serving up responsive images in HTML.
  * CSS Tricks’s [Guide to the Responsive Images Syntax in HTML](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/) is a great article that goes into more depth on how to actually implement responsive images.

-----

## Knowledge check

The following questions are an opportunity to reflect on key topics in this lesson. If you can’t answer a question, click on it to review the material, but keep in mind you are not expected to memorize or master this knowledge.

  * What is the main difference between `object-fit` and `background-size`?
  * How can you define a width and a height on an `img` without distorting it?
  * Why would you want to provide different images at different screen resolutions?
  * When would you want to use an `img` with a `srcset` vs a `picture`?

-----

## Additional resources

This section contains helpful links to related content. It isn’t required, so consider it supplemental.

  * [Responsive Images 101](https://cloudfour.com/thinks/responsive-images-101-definitions/) is a good series of articles if you need another source.
  * [Responsive Images Done Right](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/) gives some more insight into the inner workings of the picture element and responsive images.
  * [The anatomy of responsive images](https://jakearchibald.com/2015/anatomy-of-responsive-images/) by Jake Archibald has some great visuals that can help to grasp the `srcset` and `sizes` properties of responsive images.
  * [The Responsive Image Breakpoints Generator](https://responsivebreakpoints.com/) is a nice way to automate responsive images so you don’t have to hand write them.
  * This article about [Automating Art Direction With The Responsive Image Breakpoints Generator](https://www.google.com/search?q=https://www.smashingmagazine.com/2021/10/automating-art-direction-responsive-image-breakpoints-generator/) explains how the responsive image breakpoints generator works.
  * This article on [Descriptive Syntaxes](https://www.google.com/search?q=https://alistapart.com/article/responsive-images-in-practice/%23descriptive-syntaxes) explains device pixel ratio (DPR) in detail and how to serve higher resolution images to devices with sharper displays.