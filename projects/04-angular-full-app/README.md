# Angular CRUD Application

Build a full-featured Angular application (e.g., task manager, book library, or expense tracker). This project brings together all Angular concepts including components, routing, forms, HTTP integration, state management, and testing.

## Features to Implement

- **CRUD operations** — create, read, update, and delete resources through a clean UI
- **Multiple routes with lazy loading** — at least 3-4 routes (e.g., list view, detail view, create/edit form, settings) with lazy-loaded feature modules
- **Reactive forms with validation** — use Angular reactive forms with built-in and custom validators, showing inline error messages
- **HTTP client integration** — connect to a backend API (use json-server or a mock API) for all data operations
- **Global state management** — manage shared application state using a service-based store, NgRx, or Angular signals
- **Unit tests for services and components** — write meaningful unit tests covering services, components, and key user interactions

## Skills Practiced

This project draws from the following learning modules:

| Module | Topic |
|---|---|
| 03-angular/01-14 | All Angular modules (components, templates, directives, pipes, routing, forms, HTTP, services, testing, etc.) |
| 02-js-ts/11-14 | TypeScript (types, interfaces, generics, advanced patterns) |
| 03-angular/09 | RxJS (observables, operators, subjects) |

## Technical Requirements

- Generate the project with the Angular CLI (`ng new`)
- Organize code into feature modules with lazy-loaded routes
- Use reactive forms (not template-driven) for all forms
- Use Angular HttpClient for API communication; handle loading, success, and error states
- Implement at least one shared service that manages state and is consumed by multiple components
- Write unit tests using Jasmine/Karma (or Jest) with meaningful assertions — aim for test coverage on all services and at least the main components
- Use TypeScript strict mode and proper typing throughout (no `any` where avoidable)

## Stretch Goals

- **Authentication guard** — add a login flow with a route guard that protects certain pages
- **Dark mode with Angular signals** — implement a theme toggle using Angular signals for reactive state
- **PWA setup** — configure the app as a Progressive Web App with service worker support (`ng add @angular/pwa`)
- **E2E tests** — add end-to-end tests using Cypress or Playwright
