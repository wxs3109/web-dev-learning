# CSS Layout

## Learning Objectives

- Understand normal document flow and how elements are positioned by default
- Use CSS positioning (static, relative, absolute, fixed, sticky) to place elements precisely
- Build one-dimensional layouts with Flexbox
- Build two-dimensional layouts with CSS Grid
- Choose the right layout method for a given design requirement

## Key Concepts

Layout is how elements are arranged on the page. CSS provides several powerful layout mechanisms, from basic positioning to Flexbox and Grid. Mastering these tools allows you to implement virtually any design. This module covers each layout method in depth and when to reach for each one.

## Topics Covered

- Normal flow: how block and inline elements stack
- The `position` property: `static`, `relative`, `absolute`, `fixed`, `sticky`
- Offset properties: `top`, `right`, `bottom`, `left`
- Stacking context and `z-index`
- Flexbox container properties: `display: flex`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`, `gap`
- Flexbox item properties: `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`, `order`
- CSS Grid container properties: `display: grid`, `grid-template-columns`, `grid-template-rows`, `grid-template-areas`, `gap`, `justify-items`, `align-items`
- CSS Grid item properties: `grid-column`, `grid-row`, `grid-area`, `justify-self`, `align-self`
- Grid functions: `repeat()`, `minmax()`, `auto-fit`, `auto-fill`, `fr` units
- Multi-column layout with `column-count` and `column-gap`
- Common layout patterns: holy grail, sidebar, card grid, sticky footer

## Prerequisites

- 06-css-fundamentals

## Examples

| File | Concepts |
| --- | --- |
| [01-normal-flow-and-positioning.html](examples/01-normal-flow-and-positioning.html) | normal document flow, `position` (`static`, `relative`, `absolute`, `fixed`, `sticky`), offset properties (`top`/`right`/`bottom`/`left`), `z-index` and stacking context |
| [02-flexbox-container.html](examples/02-flexbox-container.html) | `display: flex`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`, `gap` |
| [03-flexbox-items.html](examples/03-flexbox-items.html) | `flex-grow`, `flex-shrink`, `flex-basis`, `flex` shorthand, `align-self`, `order` |
| [04-grid-basics.html](examples/04-grid-basics.html) | `display: grid`, `grid-template-columns`/`rows`/`areas`, `fr` units, `repeat()`, `minmax()`, `auto-fit`/`auto-fill`, `grid-column`/`grid-row`, `justify-items`/`align-items`, `justify-self`/`align-self` |
| [05-layout-patterns.html](examples/05-layout-patterns.html) | multi-column layout (`column-count`, `column-gap`), holy grail layout, sidebar layout, responsive card grid, sticky footer |

## Resources

- TODO: Add resources

## Exercises

- TODO: Add exercises
