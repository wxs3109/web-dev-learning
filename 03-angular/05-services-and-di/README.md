# Services and Dependency Injection

## Learning Objectives
- Create services with the @Injectable decorator
- Configure service scope using providedIn options (root, component-level, module-level)
- Define and use injection tokens with InjectionToken
- Understand the hierarchical injector system
- Use different provider types (useClass, useValue, useFactory, useExisting)
- Distinguish between singleton and transient service instances

## Key Concepts
Services encapsulate reusable business logic, data access, and shared state that components should not manage directly. Angular's dependency injection system creates and delivers service instances to components and other services that request them. The hierarchical injector tree determines service scope and lifetime, with providedIn: 'root' creating application-wide singletons and component-level providers creating per-component instances. Injection tokens allow injecting non-class values like configuration objects.

## Topics Covered
- @Injectable decorator
- providedIn options (root, component-level, module-level)
- Injection tokens (InjectionToken)
- Hierarchical injectors
- Provider types (useClass, useValue, useFactory, useExisting)
- Singleton vs transient services

## Prerequisites
- 03-angular/01-getting-started
- 03-angular/02-components-and-templates

## Resources
- TODO: Add resources

## Exercises
- TODO: Add exercises
