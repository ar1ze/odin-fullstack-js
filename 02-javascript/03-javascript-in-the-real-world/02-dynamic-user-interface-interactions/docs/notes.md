# ⚡ Dynamic User Interface Interactions

### Introduction
JavaScript is a powerful language used for complex web applications, but it's also the "glue" for smaller website interactions like drop-downs and image sliders. This lesson is a chance to practice building these common components using techniques you already know, without needing a bloated framework.

---
### 📝 Lesson Overview
* Practice general techniques used by JavaScript programmers every day.

---
### 🔽 Drop-Down Menus
A dropdown is a list of items that appears when a user clicks a button.

**Typical Parts:**
1.  **The Button:** Toggles the visibility of the dropdown content on click.
2.  **The Content:** The list of items that appears. These items typically trigger an action (e.g., "Edit", "Delete") or link to another page.

---
### 🖼️ Image Carousel
Image carousels (or sliders) are common on online stores and news sites to showcase multiple items in a limited space.

**Typical Parts:**
* A container `div` that acts as the "picture frame."
* A much wider `div` inside the frame that contains all the images (slides).
* This inner strip of images moves behind the frame to show one slide at a time.

**Customization:**
* Auto-scroll
* Manual cycling (next/previous arrows)
* Navigation dots to skip to specific slides

---
### 🚀 Assignment

#### 1. Build a Dropdown Menu
* The menu should appear on either **click or hover**.
* Hard-code the menu items in HTML but **hide/reveal them using JavaScript** (by adding a class or setting the style directly).
* **Make the JavaScript reusable!** You should be able to have multiple dropdowns on one page using the same logic.
* *Bonus:* Bundle your code into a module and publish it to npm.

#### 2. Build an Image Carousel
* Create an image carousel with **arrows** on each side to advance forward or backward.
* It should **automatically move forward every 5 seconds**.
* It must have **navigation circles** at the bottom that indicate the current slide.
* The navigation circles should be **clickable** to advance to that specific slide.

**Implementation Tips:**
* Focus on the rotation logic, not perfecting image sizes.
* Use a container `div` (the "frame") and a very wide inner `div` (holding the slides).
* Position the inner `div` to show the correct slide.
* Build `next()` and `previous()` functions and connect them to the arrow buttons.
* Add navigation dots (circles) and fill in the one corresponding to the active slide.
* Make the dots clickable to jump to that slide.
* Use a timeout to advance the slide every 5 seconds.

---
### 🤔 Knowledge Check
* What are the two main parts that a dropdown menu consists of?
* When might you want to use dropdown menus in a website?
* What are the benefits of using image carousels?

---
### 🔗 Additional Resources
* It looks like this lesson doesn’t have any additional resources yet.