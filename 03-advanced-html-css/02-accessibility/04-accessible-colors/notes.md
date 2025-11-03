## 🎨 Accessible Colors

### Introduction
Using the wrong color combination or relying **solely on color** to convey information can make your website difficult to perceive and understand for some users. You don't have to limit your color choices, but you do need to be careful when using them.

---
### 📝 Lesson Overview
* Understand what a contrast ratio is.
* Know how to check contrast ratios.
* Understand why color alone should not be used to convey information.

---
### 🌗 Color Contrast
A **contrast ratio** is the difference in brightness between two colors, expressed as a ratio.
* **Lowest Ratio (1:1):** White text on a white background.
* **Highest Ratio (21:1):** Black text on a white background.

This applies to both text and images of text.

#### Conformance Levels (WCAG)
* **Level AA (Minimum):**
    * **Normal text:** At least **4.5:1**
    * **Large text:** At least **3:1** (Large text is 18pt/24px or 14pt/18.66px if bold)
* **Level AAA (Enhanced):**
    * **Normal text:** At least **7:1**
    * **Large text:** At least **4.5:1**

#### Exceptions (No ratio required)
* **Incidental text:** Text in a complex image (like a photo) or text that is purely decorative.
* **Inactive components:** Text on a disabled button.
* **Logos:** Text that is part of a logo or brand name.

#### How to Check Contrast Ratios
You don't need to calculate this yourself! Use these tools:

* **[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/):** A fantastic tool. Just enter the hex codes for your foreground and background colors.
* **Browser Dev Tools:**
    1.  **Element Picker:** In the Elements tab, use the element picker tool and hover over an element. The tooltip will show the contrast ratio.
    2.  **Styles Pane:** Select an element, go to the `color` property in the Styles pane, and click the color picker tool to see the contrast ratio.

---
### ℹ️ Conveying Information
You should **never use color alone to convey information**. Users with color blindness (like achromatopsia, or total color blindness) may not be able to perceive the information at all.

**Example:** A form indicates required fields using red text.
* **Bad:** Relying *only* on the red color. A color-blind user won't know which fields are required.
* **Good:** Indicating required fields with **red text *and* an asterisk (\*)**. This provides a visual cue that doesn't depend on color.

---
### 🤔 Knowledge Check
* What is a contrast ratio?
* What are two ways you can check a contrast ratio using your dev tools?
* What should you avoid when conveying information to users?