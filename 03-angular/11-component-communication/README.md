# Component Communication

## Learning Objectives
- Pass data from parent to child components using @Input
- Emit events from child to parent components using @Output and EventEmitter
- Share data between unrelated components through services
- Access child components and projected content with ViewChild and ContentChild
- Implement the shared service pattern with BehaviorSubject
- Use signal-based inputs (input()), outputs (output()), and model inputs (model())

## Key Concepts
Angular components frequently need to exchange data with each other. Parent-to-child communication uses @Input bindings, while child-to-parent communication uses @Output with EventEmitter. For components that do not share a direct parent-child relationship, shared services backed by BehaviorSubject provide a pub/sub mechanism. Angular's signal-based APIs (input(), output(), model()) offer a modern alternative that integrates with the reactivity system and simplifies common communication patterns.

## Topics Covered
- @Input and @Output decorators
- EventEmitter
- Service-mediated communication
- ViewChild/ContentChild for parent-child access
- Shared service pattern with BehaviorSubject
- Signal inputs (input())
- Signal outputs (output())
- Model inputs (model())

## Prerequisites
- 03-angular/02-components-and-templates
- 03-angular/05-services-and-di
- 03-angular/09-rxjs-and-observables

## Resources
- TODO: Add resources

## Exercises
- TODO: Add exercises
