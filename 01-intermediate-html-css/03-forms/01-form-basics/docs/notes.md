# 📝 Form Basics

### Intermediate HTML and CSS Course

> Forms are a critical part of the web, acting as the primary way for users to send data to a website's backend. This lesson covers the essential HTML elements for building them.

## 📖 Lesson Overview

-----

  - Learn to create forms with fundamental HTML elements.
  - Get a basic understanding of the challenges of styling forms.

## 🧱 Core Form Elements

-----

These are the foundational pieces for building any web form.

### The `<form>` Element

The `<form>` tag is a container that wraps all the interactive form controls.

  - **`action` attribute**: A URL that specifies where to send the form data when it is submitted.
  - **`method` attribute**: The HTTP method to use.
      - `GET`: Used for retrieving data from a server (e.g., a search query).
      - `POST`: Used for sending data to change something on the server (e.g., creating a new user account).

### The `<label>` Element

A `<label>` provides a descriptive caption for a form control.

  - **Accessibility**: Use the `for` attribute on the label and a matching `id` attribute on the input. This links them, so clicking the label focuses the input field.

    ```html
    <label for="first_name">First Name:</label>
    <input type="text" id="first_name">
    ```

### Key Input Attributes

  - **`name` attribute**: **This is the most important attribute.** It provides a name (or "key") for the input's data when it's sent to the server. **If an input has no `name`, its data will not be submitted.**
  - **`placeholder` attribute**: Displays temporary text in an input field to guide the user.

## ⌨️ Common Input Types

-----

The `<input>` element is highly versatile, changing its appearance and behavior based on the `type` attribute.

### `type="text"`

A single-line text field for general input like names.

### `type="email"`

A specialized text field for email addresses. It provides basic validation and a more convenient keyboard on mobile devices.

### `type="password"`

A text field that masks the characters as they are entered.

### `type="number"`

A field that only accepts numbers.

### `type="date"`

Renders a date-picker calendar for the user.

### `<textarea>`

Used for multi-line text input, like comments or reviews. It is a separate element, not a type of `<input>`.

  - Use `rows` and `cols` attributes to set its initial size.

## 🖱️ Selection and Action Elements

-----

These elements allow users to choose from predefined options or trigger form actions.

### Select Dropdown

Use the `<select>` element to create a dropdown list. Each choice is an `<option>` element inside the `<select>`.

  - The `value` attribute on each `<option>` is what gets sent to the server.
  - Use the `selected` attribute to set a default option.
  - Use `<optgroup>` to group related options.

### Radio Buttons (`type="radio"`)

Used when a user must select **only one** option from a list.

  - All radio buttons in a group **must have the same `name` attribute** to be linked.
  - Use the `checked` attribute to set a default selection.

### Checkboxes (`type="checkbox"`)

Used when a user can select **zero or more** options from a list. They can also be used for a single true/false toggle (e.g., "Sign up for newsletter").

  - Use the `checked` attribute to make a checkbox selected by default.

### Buttons (`<button>`)

Buttons trigger actions. Their behavior is determined by the `type` attribute.

  - **`type="submit"`**: Submits the form data to the server. **This is the default type for a `<button>` inside a `<form>`**.
  - **`type="reset"`**: Clears all data from the form fields.
  - **`type="button"`**: A generic button with no default action, typically used with JavaScript.

## 🗂️ Organizing and Styling Forms

-----

### `<fieldset>` and `<legend>`

For large forms, you can group related controls inside a `<fieldset>` element. The `<legend>` element provides a caption for the group.

```html
<fieldset>
  <legend>Contact Details</legend>
  </fieldset>
```

### A Note on Styling

Styling forms can be challenging due to two main issues:

1.  **Inconsistent Default Styles**: Each browser has its own default look for form controls. You must override these defaults to create a consistent design.
2.  **Hard-to-Style Elements**: While text-based inputs are easy to style, elements like checkboxes, radio buttons, and especially date pickers are notoriously difficult or impossible to style with CSS alone, often requiring JavaScript solutions.

## ✍️ Assignment

-----

  - **MDN Basics**: Read and follow along with MDN's guides on [Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form) and [How to structure a web form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form).
  - **MDN Controls**: Read about [The Different Form Controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls).
  - **MDN Styling**: Read the tutorials on [Form Styling](https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms).
  - **Guide**: Read the [internetingishard guide to forms](https://www.google.com/search?q=https://www.internetingishard.com/html-and-css/forms/).

## ✅ Knowledge Check

-----

  - What is the `<form>` element for, and what are its two essential attributes?
  - What is the purpose of the `name` attribute?
  - What are the three main ways to let users select from predefined options?
  - What are the three types of buttons in HTML?
  - What are the two most challenging aspects of styling forms?

## 📚 Additional Resources

-----

  - [Web.dev’s Form Course](https://web.dev/learn/forms/)