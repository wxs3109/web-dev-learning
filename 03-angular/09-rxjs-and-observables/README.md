# RxJS and Observables

## Learning Objectives
- Understand Observable basics including subscribing and unsubscribing
- Distinguish between Subject types (Subject, BehaviorSubject, ReplaySubject, AsyncSubject)
- Apply transformation operators (map, switchMap, mergeMap, concatMap, exhaustMap)
- Apply filtering operators (filter, distinctUntilChanged, debounceTime, take, takeUntil)
- Combine streams with combination operators (combineLatest, forkJoin, merge, concat)
- Implement subscription management patterns to prevent memory leaks
- Use the async pipe for automatic subscription handling in templates
- Explain the difference between hot and cold observables

## Key Concepts
RxJS is a reactive programming library that Angular uses extensively for handling asynchronous operations, event streams, and data flow. Observables represent a stream of values over time that consumers subscribe to. Operators transform, filter, and combine these streams in a declarative pipeline. Proper subscription management is critical to avoid memory leaks, and Angular's async pipe provides a template-level solution that automatically subscribes and unsubscribes.

## Topics Covered
- Observable basics (subscribe, unsubscribe)
- Subject types (Subject, BehaviorSubject, ReplaySubject, AsyncSubject)
- Transformation operators (map, switchMap, mergeMap, concatMap, exhaustMap)
- Filtering operators (filter, distinctUntilChanged, debounceTime, take, takeUntil)
- Combination operators (combineLatest, forkJoin, merge, concat)
- Subscription management patterns
- Async pipe
- Hot vs cold observables

## Prerequisites
- 03-angular/01-getting-started
- 02-javascript-typescript (Promises, async/await)

## Resources
- TODO: Add resources

## Exercises
- TODO: Add exercises
