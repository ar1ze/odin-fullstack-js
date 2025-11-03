### Knowledge Check Answers 🎯

***

**Question: What is a contrast ratio?**

**Answer:** A contrast ratio measures the difference in brightness between two colors, usually a foreground color (like text) and its background color.

**Why:** This is crucial for readability. A high ratio (like black text on a white background, 21:1) is easy to read, while a low ratio (like light gray text on a white background) can be impossible for users with visual impairments to see.

**Remember:** Think of it as a **readability score** for your color combinations.

***

**Question: What are two ways you can check a contrast ratio using your dev tools?**

**Answer:** You can use the **Element Picker** to hover over an element (the ratio will appear in its tooltip), or you can click the color swatch in the **Styles pane** to open the color picker tool, which also shows the ratio.

**Why:** These tools are built directly into the browser to help you find and fix accessibility issues quickly without needing external tools.

***

**Question: What should you avoid when conveying information to users?**

**Answer:** You must avoid using **color as the only way** to convey important information.

**Why:** Users with color blindness or other visual impairments may not be able to perceive the color difference. If color is the only cue, they will miss the information completely.

**Example:**
* **Bad:** Making required form fields *only* red.
* **Good:** Making required fields red *and* adding an asterisk (`*`) or the word "Required." The asterisk provides a non-color-based way to get the same information.