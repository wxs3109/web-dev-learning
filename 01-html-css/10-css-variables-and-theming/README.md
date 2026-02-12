# CSS Variables and Theming

## Learning Objectives
- Define and use CSS custom properties (variables) with the --var syntax
- Access custom property values using the var() function with fallbacks
- Understand how custom properties scope and inherit through the DOM
- Implement dark and light theme switching using CSS variables
- Organize design tokens for consistent, maintainable styling

## Key Concepts
CSS custom properties (variables) allow you to define reusable values that can be updated dynamically, scoped to specific elements, and changed with media queries or JavaScript. They are the foundation of modern theming systems and design token architectures. This module covers how to use variables effectively for scalable, themeable stylesheets.

## Topics Covered
- Declaring custom properties with `--property-name` syntax
- Using `var(--property-name)` to reference values
- Providing fallback values: `var(--color, #000)`
- Scope: defining variables on `:root` vs. specific selectors
- Inheritance of custom properties through the DOM tree
- Overriding variables in descendant elements or media queries
- Dynamic updates with JavaScript (`element.style.setProperty()`)
- Dark/light theme implementation with `prefers-color-scheme` and a toggle class
- Design tokens concept: colors, spacing, typography, shadows as variables
- Organizing variables in a dedicated custom properties file
- Combining custom properties with `calc()` for computed values

## Prerequisites
- 06-css-fundamentals

## Resources
- TODO: Add resources

## Exercises
- TODO: Add exercises
