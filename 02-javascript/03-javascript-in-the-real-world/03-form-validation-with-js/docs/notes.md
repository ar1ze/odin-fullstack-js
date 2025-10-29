# 📋 Form Validation with JavaScript

### Introduction
Forms (sign-up, contact, search) are a crucial part of most websites. This lesson covers the **Constraint Validation API**, a method for validating forms on the frontend using JavaScript, building on what you've already learned with HTML5 and CSS.

---
### 📝 Lesson Overview
* Understand the importance of validation in HTML forms.
* Understand the Constraint Validation API for more control over form validation.
* Add validation using only JavaScript.

---
### 📚 Assignment
1.  Read this [tutorial on Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) (covering the constraint validation API).
2.  Review the [Constraint Validation docs](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).
3.  (Optional Reference) [W3Schools' page on the validation API](https://www.w3schools.com/js/js_validation_api.asp) offers a concise format.

> **Note:** Form inputs are typically validated on submission, but you can use these API functions to check validity at any time (e.g., when a user clicks or tabs out of an input).

---
### 💻 Projects

#### 1. Warmup
* Go back to your **'Library' project** and add validation.
* Display a custom error message for empty fields on submission (e.g., "The author name must be filled!").
* Remember to use a **git branch** for this new feature.

#### 2. A Little More Practice
Build a browser form that collects:
* Email
* Country
* Postal Code
* Password
* Password Confirmation

**Requirements:**
* Use **live inline validation** (validate as the user types, not just on submission).
* Invalid fields should be highlighted in red and show an error message.
* The form doesn't need to submit. Show an error message if the submit button is pushed with active errors.
* The `<form>` element must have the `novalidate` attribute to let JavaScript handle all validation.
* You can still use different `<input>` types, but must use JavaScript to check and report validity.
* If the form is valid and "submitted," give the user a high five.

**Steps:**
1.  Set up a blank HTML document.
2.  **Plan your solution first!** Whiteboard the objects and functions you'll need.
3.  Write the form elements.
4.  Add JavaScript to check validation as the user progresses (e.g., when they leave a field).
5.  Test all possible cases.
6.  Use the `:valid` and `:invalid` CSS pseudo-classes to style the validation states.

---
### 🤔 Knowledge Check
* What is the importance of validating HTML forms before submitting them to a server?
* What are the two types of client-side form validation?
* How does the JavaScript Constraint Validation API provide more control and customization of form validation?

---
### 🔗 Additional Resources
* It looks like this lesson doesn’t have any additional resources yet.