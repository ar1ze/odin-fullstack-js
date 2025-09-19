# ✅ Form Validation

### Intermediate HTML and CSS Course

> Validations are rules that constrain user input in a form. They are vital for good user experience, providing immediate feedback to users and helping protect your backend systems from receiving incorrect data. This lesson covers built-in HTML validation attributes.

## 📖 Lesson Overview

-----

  - Understand what form validations are and why they are important.
  - Learn how to use basic built-in HTML validation attributes.
  - Learn how to style inputs based on their validation state using CSS.

## 📌 Built-in HTML Validations

-----

HTML provides several attributes that you can add to your form controls to enable instant, browser-handled validation.

### `required`

This boolean attribute specifies that an input field must be filled out before the form can be submitted.

> **UX Tip**: Always visually indicate which fields are required, typically by adding an asterisk (`*`) to the label.

```html
<label for="email">Email:*</label>
<input type="email" id="email" name="email" required>
```

### Text Length Validations

  - **`minlength`**: Sets the minimum number of characters required for a text-based input.
  - **`maxlength`**: Sets the maximum number of characters allowed. The browser will prevent the user from typing more characters than this limit.

<!-- end list -->

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" minlength="3" maxlength="15" required>
```

### Number Range Validations

These attributes work on number-based inputs like `type="number"` or `type="date"`.

  - **`min`**: Sets the minimum acceptable numeric value.
  - **`max`**: Sets the maximum acceptable numeric value.

<!-- end list -->

```html
<label for="quantity">Quantity (1-5):</label>
<input type="number" id="quantity" name="quantity" min="1" max="5">
```

### Pattern Validation

The `pattern` attribute allows you to validate an input against a **regular expression (regex)**. This is useful for enforcing specific formats, such as for a zip code or credit card number.

> **UX Tip**: When using `pattern`, provide a `placeholder` or text hint to show users the expected format.

```html
<label for="zip">US Zip Code:</label>
<input type="text" id="zip" name="zip" pattern="[0-9]{5}(-[0-9]{4})?" placeholder="12345 or 12345-6789">
```

## 🎨 Styling Validations

-----

You can use CSS pseudo-classes to style form controls based on whether their current value is valid or invalid.

  - **:valid**: Targets an input when its data is valid according to its validation rules.
  - **:invalid**: Targets an input when its data is invalid.

<!-- end list -->

```css
/* Style for valid inputs */
input:valid {
  border: 2px solid green;
}

/* Style for invalid inputs */
input:invalid {
  border: 2px solid red;
}
```

## 💡 Conclusion and Next Steps

-----

Built-in HTML validations are quick and powerful, but they have limitations.

  - **Limitations**: You cannot easily customize error messages or perform complex checks (like comparing two fields, e.g., "password" and "confirm password"). These tasks require **JavaScript**.
  - **Security**: Client-side validation is a user experience feature, **not a security measure**. Malicious users can bypass it. You must **always** perform **server-side validation** to ensure the integrity and security of the data you receive.

## ✍️ Assignment

-----

  - **Read**: [MDN’s Client-Side Form Validation Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation). (Skip the JavaScript section for now).
  - **Read**: [SitePoint’s Guide to HTML Forms and Constraint Validation](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/). (Skip the JavaScript sections).
  - **Read**: Silo Creativo’s article on [Improving UX in forms](https://www.google.com/search?q=https://www.silocreativo.com/en/form-ux-user-experience/).

## 🤔 Knowledge Check

-----

  - What does the `required` validation do?
  - What attributes can you use for checking text length?
  - How can you validate the minimum and maximum of numeric inputs?
  - What can you use the `pattern` validation for?
  - What CSS pseudo-classes are available for styling valid and invalid inputs?

## 📚 Additional Resources

-----

  - [10 Guidelines for form validation design](https://www.google.com/search?q=https://uxdesign.cc/10-guidelines-for-form-validation-design-b522d0505294).
  - [MDN’s regular expression syntax cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet).