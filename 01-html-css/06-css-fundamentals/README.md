# CSS Fundamentals

## Learning Objectives
- Write CSS selectors of varying specificity to target HTML elements
- Explain how the cascade, specificity, and inheritance determine which styles apply
- Use the box model to control element sizing, padding, borders, and margins
- Apply the display property to control layout behavior
- Choose the appropriate CSS unit for different use cases

## Key Concepts
CSS (Cascading Style Sheets) controls the visual presentation of HTML documents. Understanding selectors, the cascade, and the box model is essential before moving to any layout or styling technique. This module establishes the core mental model for how CSS works and how styles are resolved.

## Topics Covered
- Linking stylesheets and the `<style>` element
- Type selectors, class selectors, and ID selectors
- Attribute selectors (`[type="text"]`, `[href^="https"]`)
- Pseudo-classes: `:hover`, `:focus`, `:first-child`, `:nth-child()`, `:not()`
- Pseudo-elements: `::before`, `::after`, `::first-line`, `::placeholder`
- Combinators: descendant, child (`>`), adjacent sibling (`+`), general sibling (`~`)
- Specificity calculation and the `!important` escape hatch
- The cascade: origin, specificity, and source order
- Inheritance and the `inherit`, `initial`, `unset`, `revert` keywords
- The box model: `content-box` vs. `border-box`
- Margin, padding, border, and how they affect element size
- The `display` property: `block`, `inline`, `inline-block`, `none`
- CSS units: `px`, `em`, `rem`, `%`, `vw`, `vh`, `ch`

## Prerequisites
- 01-html-fundamentals
- 02-semantic-html

## Examples

| File | Concepts |
| --- | --- |
| [01-selectors-and-pseudo.html](examples/01-selectors-and-pseudo.html) | style linking via `<style>`, type/class/id/attribute selectors, pseudo-classes, pseudo-elements |
| [02-combinators-cascade-specificity.html](examples/02-combinators-cascade-specificity.html) | combinators, cascade, specificity, source order, `!important` |
| [03-inheritance-and-box-model.html](examples/03-inheritance-and-box-model.html) | inheritance keywords (`inherit`, `initial`, `unset`, `revert`), content-box vs border-box, spacing impact |
| [04-display-and-units.html](examples/04-display-and-units.html) | display values (`block`, `inline`, `inline-block`, `none`), unit choices (`px`, `em`, `rem`, `%`, `vw`, `vh`, `ch`) |

## Resources
- [MDN: CSS first steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- [MDN: CSS selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
- [MDN: Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [MDN: The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [MDN: Values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

## Exercises
- TODO: Add exercises
