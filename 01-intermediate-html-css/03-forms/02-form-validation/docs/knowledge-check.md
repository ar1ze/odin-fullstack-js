### Knowledge Check Answers 🎯

-----

**Question: What does the `required` validation do?**

**Answer:** The **`required`** attribute ensures that an input field must be filled out before the form can be successfully submitted.
**Why:** It's a simple way to prevent users from submitting a form with crucial information missing. If the field is empty, the browser will stop the submission and show a default error message.
**Example:** `<label for="email">Email:</label><input type="email" id="email" required>`

-----

**Question: What validations can you use for checking text length?**

**Answer:** You can use the **`minlength`** and **`maxlength`** attributes.
**Why:** `minlength` sets the minimum number of characters required, while `maxlength` sets the maximum number of characters allowed. This is useful for things like usernames or passwords.
**Example:** `<input type="password" minlength="8" maxlength="16">`

-----

**Question: How can you validate the minimum and maximum of numeric inputs?**

**Answer:** You use the **`min`** and **`max`** attributes.
**Why:** For inputs with `type="number"`, these attributes define the acceptable range of values. The browser may also provide stepper arrows to increment or decrement the value within these limits.
**Example:** `<input type="number" name="quantity" min="1" max="99">`

-----

**Question: What can you use the pattern validation for?**

**Answer:** You use the `pattern` attribute to validate input against a **regular expression (regex)**.
**Why:** This allows you to enforce complex and specific formats that other attributes can't handle, such as custom password requirements (e.g., must contain a number and a symbol) or country-specific postal codes.
**Example:** `<input type="text" pattern="[A-Z]{3}[0-9]{3}" title="Three uppercase letters followed by three numbers">`

-----

**Question: What pseudo CSS selectors are available for styling valid and invalid inputs?**

**Answer:** You can use the **`:valid`** and **`:invalid`** pseudo-classes.
**Why:** These selectors let you apply CSS styles to an input based on whether its current value passes its validation rules. This provides instant visual feedback to the user as they fill out the form.
**Example:**

```css
/* Style for an input that fails validation */
input:invalid {
  border-color: red;
}

/* Style for an input that passes validation */
input:valid {
  border-color: green;
}
```