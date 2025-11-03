### Knowledge Check Answers 🎯

***

**Question: What are three rules you should follow in order to provide meaningful links?**

**Answer:** You should:
1.  Use descriptive text that indicates where the link goes (not "click here").
2.  Indicate if the link opens or downloads a file (e.g., "PDF, 1MB").
3.  Indicate if the link opens in a new tab.

**Why:** This provides clear context, especially for screen reader users who often navigate by pulling up a list of all links on a page.

**Example:**
* **Bad:** `<a href="...">Click here</a>`
* **Good:** `<a href="...">2021 Sign Up Statistics (PDF, 1MB)</a>`
* **Good:** `<a href="...">GitHub (opens in new tab)</a>`

***

**Question: What information should you inform users of in order to provide meaningful error messages in forms?**

**Answer:** You should inform the user **what** input caused the error and, when possible, **how to fix it** or why it occurred.

**Why:** Vague messages like "Invalid input" are frustrating and inaccessible. A specific message tells the user exactly where the problem is and what they need to do to correct it.

**Example:**
* **Bad:** `Error: Invalid input.`
* **Best:** `Error: 'JohnSmith@@test.com' is not valid. Example of a valid email: example@yourdomain.com.`

***

**Question: When should you use the empty string/null value for the `alt` attribute?**

**Answer:** You should use an empty string (`alt=""`) when an image is purely **decorative** and provides no meaningful content or function.

**Why:** This null value tells screen readers to completely ignore the image, reducing "noise" for the user. If you omit the `alt` attribute entirely, the screen reader might confusingly announce the image's file name (e.g., "blue-divider.png").

**Remember:** If an image is just **decoration**, use `alt=""` to tell screen readers to **skip it**.