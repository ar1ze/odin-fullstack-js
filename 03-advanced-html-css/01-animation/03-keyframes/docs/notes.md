# 🎬 Keyframes

## 🆚 Animations vs. Transitions

While both animate elements, CSS animations offer more power and flexibility than transitions.

  * **Loops 🔁**: Animations are designed for looping. Transitions can loop, but it's not their primary purpose.
  * **Triggers ⚡**: Transitions need a trigger (like `:hover` or a JavaScript class change). Animations can start automatically as soon as the page loads.
  * **Flexibility 🤸**: Transitions are a simple A-to-B change. Animations allow for multiple steps and more complex sequences using **keyframes**.

**Rule of thumb**: Use transitions for simple state changes (e.g., hover effects). Use animations for more complex, multi-step sequences.

## ⚙️ Animation Properties

Defining an animation involves two parts: configuring the animation properties on the element and defining the keyframes.

### Longhand Configuration

These properties are set on the element you want to animate.

  * `animation-duration`: How long one cycle of the animation takes (e.g., `2s`).
  * `animation-name`: A custom name that links the element to a `@keyframes` rule (e.g., `change-color`).
  * `animation-iteration-count`: How many times the animation should repeat (e.g., `infinite` or `3`).
  * `animation-direction`: The direction of the animation on subsequent cycles (e.g., `alternate` makes it play forwards, then backwards).

<!-- end list -->

```css
#ball {
  animation-duration: 2s;
  animation-name: change-color;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

### Shorthand Configuration

You can combine all the properties into a single `animation` declaration.

```css
#ball {
  /* duration | name | iteration-count | direction */
  animation: 2s change-color infinite alternate;
}
```

## 🔑 Keyframes

The `@keyframes` at-rule defines the steps of an animation sequence. It's linked to an element via the `animation-name`.

  * Keyframes use percentages (`%`) to mark points in the animation's timeline.
  * `from` is an alias for `0%`.
  * `to` is an alias for `100%`.
  * You can add as many intermediate steps (e.g., `50%`) as you need to create complex sequences.

<!-- end list -->

```css
@keyframes change-color {
  /* Start of the animation (0%) */
  from {
    background-color: red;
  }

  /* Middle of the animation (50%) */
  50% {
    transform: scale(2);
    background-color: blue;
  }

  /* End of the animation (100%) */
  to {
    background-color: green;
  }
}
```

## 💻 Assignment

1.  Code along with the MDN article for using CSS animations.
2.  Read the `@keyframes` reference on MDN.
3.  Read the interactive guide to keyframes.
4.  Complete the exercises in the CSS exercises repository:
      * `01-button-hover`
      * `02-pop-up`
      * `03-dropdown-menu`

## 🧠 Knowledge Check

  * What are the longhand and shorthand notations for CSS animations?
  * How do you add keyframes to an animation?
  * When would you use an animation over a transition (and vice versa)?