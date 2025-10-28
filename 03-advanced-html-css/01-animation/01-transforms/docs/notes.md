# 🌀 Transforms

## 📝 Introduction

The `transform` property is a powerful CSS tool used to change the appearance of elements (like rotating, scaling, or moving them) **without affecting the normal document flow**. It is very commonly used for creating animations.

## 📚 Lesson Overview

  * How to use 2D transforms.
  * How to use 3D transforms.
  * How to chain multiple transforms together.
  * The performance benefits of using the `transform` property.

## 📐 Two-Dimensional Transforms

These functions alter an element on a 2D plane.

  * 🔄 **Rotate**: Rotates an element.
    ```css
    .element { transform: rotate(45deg); }
    ```
  * 🔍 **Scale**: Resizes an element. `scaleX()` and `scaleY()` resize on a single axis.
    ```css
    .element { transform: scale(1.5); }
    ```
  * 삐 **Skew**: Skews or slants an element. `skewX()` and `skewY()` skew on a single axis.
    ```css
    .element { transform: skew(20deg); }
    ```
  * ↔️ **Translate**: Moves an element. `translateX()` and `translateY()` move on a single axis.
    ```css
    .element { transform: translate(50px, 100px); }
    ```

## 🔗 Chaining Multiple Transforms

You can apply multiple transform functions by listing them in the `transform` property, separated by spaces.

  * **⚠️ The Order Matters\!** Composite transforms are applied from **right to left**.

    ```css
    /* This will translate first, then rotate the element */
    .element { transform: rotate(45deg) translate(200%); }

    /* This will rotate first, then translate the element */
    .element { transform: translate(200%) rotate(45deg); }
    ```

    These two declarations will produce very different results.

## 🧊 Three-Dimensional Transforms

To create a 3D effect, you need to use the `perspective` function.

  * **👁️ Perspective**: Sets the distance from the user to the z=0 plane, creating a sense of depth.
      * `perspective()` **must be declared first** (leftmost) when chaining transforms.
    <!-- end list -->
    ```css
    .element { transform: perspective(500px) rotateY(45deg); }
    ```
  * **3D Functions**: `rotate`, `scale`, and `translate` also have 3D variations.
      * `rotateX()`, `rotateY()`, `rotateZ()`
      * `scaleZ()`
      * `translateZ()`
      * `translateZ()` is often used with `perspective()` to create the illusion of an object moving closer or farther away.

## 🧮 Matrix

  * The `matrix()` and `matrix3d()` functions can combine all transform functions into one.
  * They are rarely used or written by hand because they are complex and hard to read. It's better to use the individual transform functions.

## ✨ Benefits of Transforms

  * **🚀 Performance**: Transforms are highly optimized. They occur during the **composition** phase of the browser's rendering process, which is less computationally expensive than properties that trigger layout or paint recalculations.
  * **💪 Hardware Acceleration**: Transforms can be offloaded to the device's GPU, making animations smoother, especially on mobile devices.

## 💻 Assignment

  * Review the MDN demonstration of `rotate3d`.
  * Learn more about `perspective` in CSS.
  * Explore the MDN demonstration using `translate3d`.
  * Read "The World of CSS Transforms" by Josh Comeau.

## 🧠 Knowledge Check

  * What are the four main functions of the `transform` property? (rotate, scale, skew, translate)
  * Which function can be used to move an object through space? (translate)
  * Which function can be used to make an object larger or smaller? (scale)
  * What additional function is required for 3D transforms? (perspective)