# Testing Fundamentals

Core testing concepts and strategies for writing reliable, maintainable tests. Covers the testing pyramid, TDD, assertion patterns, mocking, code coverage, and an overview of popular test runners.

## Learning Objectives

- Understand the testing pyramid and when to use each test type
- Apply test-driven development (TDD) workflow
- Write assertions using common patterns (expect, assert)
- Use mocking techniques (stubs, spies, fakes) to isolate units under test
- Measure and interpret code coverage
- Compare popular test runners and choose the right one for a project

## Key Concepts

- Testing pyramid and test categories
- Red-green-refactor TDD cycle
- Assertion and matcher APIs
- Test doubles (mocks, stubs, spies, fakes)
- Code coverage metrics
- Writing testable, decoupled code

## Topics Covered

### Testing Pyramid
- **Unit tests** — test individual functions/modules in isolation, fast, many
- **Integration tests** — test interactions between modules, moderate speed, moderate count
- **End-to-end (E2E) tests** — test full user flows through the application, slow, few
- Trade-offs: speed vs. confidence, cost of maintenance

### Test-Driven Development (TDD)
- The red-green-refactor cycle
  1. **Red** — write a failing test for the desired behavior
  2. **Green** — write the minimum code to make the test pass
  3. **Refactor** — improve the code while keeping tests green
- Benefits: design feedback, regression safety, documentation
- When TDD works well and when to adapt the approach

### Assertion Patterns
- **expect style** — `expect(value).toBe(expected)`, chainable matchers
- **assert style** — `assert.equal(actual, expected)`, straightforward
- Common matchers: equality, truthiness, exceptions, async assertions
- Custom matchers for domain-specific testing

### Mocking Concepts
- **Stubs** — replace a function with a predetermined return value
- **Spies** — wrap a function to record calls, arguments, and return values
- **Fakes** — lightweight implementations (e.g., in-memory database)
- When to mock vs. when to use real implementations
- Avoiding over-mocking and brittle tests

### Code Coverage
- Coverage metrics: line, branch, function, statement
- Setting coverage thresholds
- Coverage as a guide, not a goal — high coverage does not guarantee quality
- Identifying untested edge cases

### Test Runners Overview
- **Jest** — zero-config, built-in mocking and assertions, snapshot testing
- **Vitest** — Vite-native, Jest-compatible API, fast ESM support
- **Karma** — browser-based test runner, framework-agnostic
- **Jasmine** — BDD-style, built-in assertions and spies
- **Mocha** — flexible, requires external assertion/mocking libraries (Chai, Sinon)

### Writing Testable Code
- Dependency injection and inversion of control
- Pure functions and minimal side effects
- Separating logic from I/O
- Avoiding tight coupling and global state

## Prerequisites

- Solid JavaScript fundamentals
- Basic understanding of functions and modules

## Resources

TODO

## Exercises

TODO
