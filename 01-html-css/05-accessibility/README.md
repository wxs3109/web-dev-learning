# Accessibility

## Learning Objectives
- Apply ARIA roles and attributes to enhance accessibility when native semantics are insufficient
- Write descriptive and meaningful alt text for images
- Ensure full keyboard navigation support for interactive elements
- Manage focus order and visibility for dynamic content
- Test pages with screen readers and browser accessibility tools
- Understand and apply WCAG guideline levels (A, AA, AAA)

## Key Concepts
Web accessibility (a11y) ensures that websites are usable by everyone, including people with visual, auditory, motor, or cognitive disabilities. Accessibility is not an add-on feature; it is a fundamental quality of well-built web pages. This module covers the techniques, standards, and testing approaches needed to build inclusive web experiences.

## Topics Covered
- The accessibility tree and how browsers expose it to assistive technology
- ARIA roles: `role="banner"`, `role="navigation"`, `role="alert"`, `role="dialog"`, etc.
- ARIA attributes: `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-hidden`, `aria-live`
- Writing effective alt text (descriptive, decorative, complex images)
- Keyboard navigation: tab order, `tabindex`, focus indicators
- Focus management for modals, menus, and single-page app navigation
- Skip navigation links
- Color contrast requirements (WCAG AA minimum ratios)
- Screen reader testing with NVDA, VoiceOver, or Narrator
- Browser DevTools accessibility audits (Lighthouse, axe)
- WCAG 2.1 principles: Perceivable, Operable, Understandable, Robust

## Prerequisites
- 01-html-fundamentals
- 02-semantic-html
- 03-forms-and-validation

## Examples

| File | Concepts |
| --- | --- |
| [01-semantics-aria-alt-text.html](examples/01-semantics-aria-alt-text.html) | accessibility tree mindset, ARIA roles/attributes, alt text patterns, aria-live alerts |
| [02-keyboard-and-focus.html](examples/02-keyboard-and-focus.html) | keyboard navigation, focus indicators, skip links, tabindex, dialog focus management |
| [03-contrast-testing-wcag.html](examples/03-contrast-testing-wcag.html) | WCAG contrast basics, screen reader checklist, DevTools audits, WCAG POUR principles |

## Resources
- [MDN: Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [MDN: ARIA guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [WebAIM: Alternative Text](https://webaim.org/techniques/alttext/)
- [WebAIM: Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [W3C: WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)

## Exercises
- TODO: Add exercises
