# Semantic HTML

## Learning Objectives
- Distinguish between semantic and non-semantic HTML elements
- Structure a page using landmark elements like header, nav, main, and footer
- Choose the correct semantic element for a given content type
- Understand how semantic HTML improves SEO and accessibility

## Key Concepts
Semantic HTML uses elements that convey meaning about the content they contain, rather than just its presentation. Using semantic elements makes your pages more accessible to screen readers, improves search engine indexing, and produces cleaner, more maintainable code. This module focuses on choosing the right element for the right job.

## Topics Covered
- `<header>` and `<footer>` for page and section headers/footers
- `<nav>` for navigation blocks
- `<main>` for the primary content area
- `<section>` for thematic groupings of content
- `<article>` for self-contained, independently distributable content
- `<aside>` for tangentially related content (sidebars, callouts)
- `<figure>` and `<figcaption>` for illustrations and diagrams
- `<time>`, `<address>`, and `<mark>` for specific content types
- Implicit ARIA landmark roles of semantic elements
- How semantic structure benefits SEO and accessibility
- When to use `<div>` vs. a semantic alternative

## Prerequisites
- 01-html-fundamentals

## Examples

| File | Concepts |
| --- | --- |
| [01-landmark-layout.html](examples/01-landmark-layout.html) | header, nav, main, section, footer landmarks |
| [02-section-article-aside.html](examples/02-section-article-aside.html) | section, article, aside content structure |
| [03-semantic-content-tags.html](examples/03-semantic-content-tags.html) | figure, figcaption, time, mark, address, semantic meaning |

## Exercises

| File | Task |
| --- | --- |
| [01-semantic-landmarks.html](exercises/01-semantic-landmarks.html) | Build a basic semantic layout using landmark elements |
| [02-article-structure.html](exercises/02-article-structure.html) | Create a mini news page with section/article/time/aside |
| [03-semantic-page-challenge.html](exercises/03-semantic-page-challenge.html) | Capstone: build a complete event page with semantic elements |
| [04-div-vs-semantic-refactor.html](exercises/04-div-vs-semantic-refactor.html) | Refactor generic div-based markup into semantic elements |

## Resources

- [MDN: Semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [MDN: HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN: HTML landmark elements](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/landmark_role)
