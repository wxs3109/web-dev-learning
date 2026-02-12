# Angular

A comprehensive guide to the Angular framework. This pillar covers everything from project setup through advanced patterns like state management, change detection, testing, and performance optimization.

## Prerequisites

Before starting Angular, complete:
- 01-html-css (all modules) — you'll write HTML templates and CSS styles in every component
- 02-javascript-typescript (all modules) — Angular uses TypeScript exclusively

## Setup

Install the Angular CLI globally:
```bash
npm install -g @angular/cli
```

Create a new project:
```bash
ng new my-app
cd my-app
ng serve
```

## Modules

| # | Module | Topics |
|---|---|---|
| 01 | Getting Started | CLI, project structure, NgModule, standalone components |
| 02 | Components & Templates | @Component, data binding, ng-content, ViewChild |
| 03 | Directives | *ngIf, *ngFor, @if/@for, custom directives |
| 04 | Pipes | Built-in pipes, custom pipes, pure vs impure |
| 05 | Services & DI | @Injectable, providedIn, injection tokens |
| 06 | Routing | Router, params, lazy loading, guards |
| 07 | Forms | Template-driven, reactive forms, validators |
| 08 | HTTP Client | HttpClient, interceptors, error handling |
| 09 | RxJS & Observables | Subjects, operators, async pipe |
| 10 | State Management | Service state, NgRx, Angular Signals |
| 11 | Component Communication | @Input/@Output, shared services, signal I/O |
| 12 | Lifecycle & Change Detection | Hooks, OnPush, zone.js, signals |
| 13 | Testing | Jasmine/Jest, TestBed, e2e |
| 14 | Performance & Best Practices | Lazy loading, AOT, bundle analysis, SSR |

## Recommended Order
Follow the modules sequentially. Modules 01-08 form the core; 09-14 are intermediate to advanced.
