# Browser & DevTools

Understanding how browsers render web pages and mastering Chrome DevTools for debugging, profiling, and inspecting web applications.

## Learning Objectives

- Understand the end-to-end browser rendering pipeline from HTML parsing to pixels on screen
- Navigate and use each major Chrome DevTools panel effectively
- Run Lighthouse audits and interpret the results
- Compare and choose between web storage APIs for different use cases

## Key Concepts

- DOM and CSSOM construction
- Render tree, layout, paint, and compositing
- DevTools panels and their purposes
- Client-side storage mechanisms

## Topics Covered

### How Browsers Work
- Parsing HTML and building the DOM
- Building the CSSOM from CSS
- Constructing the render tree
- Layout (reflow) — calculating element positions and sizes
- Paint — filling in pixels
- Compositing — layering and GPU acceleration

### Chrome DevTools
- **Elements** — inspect and modify DOM/CSS in real time
- **Console** — execute JavaScript, view logs and errors
- **Network** — monitor HTTP requests, timing, headers, payloads
- **Performance** — record and analyze runtime performance, flame charts
- **Application** — inspect storage, service workers, manifests
- **Sources** — debug JavaScript with breakpoints, view source maps

### Lighthouse Audits
- Performance, accessibility, best practices, SEO, and PWA categories
- Interpreting scores and recommendations
- Running audits from DevTools vs. CLI

### Web Storage APIs
- `localStorage` — persistent key-value storage, synchronous, ~5 MB limit
- `sessionStorage` — per-tab storage, cleared on tab close
- Cookies — server-accessible, size-limited, expiration control
- `IndexedDB` — client-side structured database for large datasets

## Prerequisites

- Basic HTML, CSS, and JavaScript knowledge

## Resources

TODO

## Exercises

TODO
