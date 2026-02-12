# Version Control & Workflow

Git essentials, branching strategies, collaborative workflows, and CI/CD fundamentals for professional software development.

## Learning Objectives

- Use advanced Git operations: branching, merging, rebasing, and cherry-picking
- Compare Git workflow models and choose the right one for a team
- Write effective pull requests and conduct code reviews
- Follow the conventional commits specification for consistent commit messages
- Understand CI/CD pipelines and GitHub Actions basics

## Key Concepts

- Git branching and history management
- Workflow models for team collaboration
- Pull request and code review culture
- Commit message conventions
- Continuous integration and deployment

## Topics Covered

### Git Essentials
- **Branching** — creating, switching, and deleting branches
- **Merging** — fast-forward vs. three-way merge, resolving conflicts
- **Rebasing** — linear history, interactive rebase, when to rebase vs. merge
- **Cherry-pick** — applying specific commits to another branch
- **Stashing** — temporarily shelving uncommitted changes
- **Reset and revert** — undoing changes safely

### Git Workflow Models
- **Feature branches** — one branch per feature, merge into main
- **GitFlow** — develop, feature, release, and hotfix branches
- **Trunk-based development** — short-lived branches, frequent integration
- Choosing a model based on team size and release cadence

### Pull Request Best Practices
- Writing clear PR titles and descriptions
- Keeping PRs small and focused
- Using draft PRs for work in progress
- Linking PRs to issues
- Requesting and responding to reviews

### Conventional Commits Specification
- Format: `type(scope): description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Breaking changes: `BREAKING CHANGE` footer or `!` after type
- Benefits: automated changelogs, semantic versioning, clear history

### CI/CD Overview
- **Continuous Integration (CI)** — automated build and test on every push
- **Continuous Delivery (CD)** — automated deployment to staging/production
- Pipeline stages: lint, test, build, deploy
- Benefits: faster feedback, reduced integration risk, reliable releases

### GitHub Actions Basics
- Workflow files (`.github/workflows/*.yml`)
- Triggers: push, pull_request, schedule, manual dispatch
- Jobs, steps, and actions
- Common actions: checkout, setup-node, cache
- Environment variables and secrets

### Code Review Practices
- What to look for: correctness, readability, performance, security
- Giving constructive feedback
- Approving, requesting changes, and commenting
- Automated checks as a first pass (linting, tests, type checking)

## Prerequisites

- Basic Git knowledge (clone, add, commit, push, pull)
- A GitHub account

## Resources

TODO

## Exercises

TODO
