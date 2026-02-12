# Build Tools & Bundling

Understanding the modern JavaScript toolchain: package managers, module systems, bundlers, transpilers, and code quality tools that power professional front-end development.

## Learning Objectives

- Manage project dependencies with npm, yarn, or pnpm
- Understand package.json structure and semantic versioning
- Differentiate between CommonJS and ES Module systems
- Compare modern bundlers (Webpack, Vite, esbuild) and their trade-offs
- Configure transpilation with Babel and the TypeScript compiler
- Set up linting and formatting for consistent code quality

## Key Concepts

- Package management and dependency resolution
- Module systems and their interoperability
- Bundling, tree-shaking, and code splitting
- Transpilation and source maps
- Linting and formatting enforcement

## Topics Covered

### Package Managers
- **npm** — Node's default package manager, `package-lock.json`
- **yarn** — deterministic installs, `yarn.lock`, workspaces
- **pnpm** — content-addressable storage, efficient disk usage, strict module resolution

### package.json and Semantic Versioning
- `dependencies` vs. `devDependencies` vs. `peerDependencies`
- Semantic versioning: `MAJOR.MINOR.PATCH`
- Version ranges: `^` (compatible), `~` (patch-level), exact versions
- Scripts field and lifecycle hooks

### Module Systems
- **CommonJS (CJS)** — `require()` / `module.exports`, synchronous, Node.js default
- **ES Modules (ESM)** — `import` / `export`, static analysis, tree-shakeable
- Interoperability challenges and migration strategies

### Bundlers Overview
- **Webpack** — mature ecosystem, extensive plugin/loader system, complex configuration
- **Vite** — ESM-based dev server, fast HMR, Rollup for production builds
- **esbuild** — written in Go, extremely fast, limited plugin API
- Core concepts: entry points, output, loaders/plugins, tree-shaking, chunk splitting

### Transpilation
- **Babel** — JavaScript compiler, presets (env, react), plugins, polyfills
- **TypeScript compiler (tsc)** — type checking and transpilation, `tsconfig.json`
- When to use Babel vs. tsc vs. bundler-native transpilation

### Source Maps
- What source maps are and why they matter for debugging
- Source map types (inline, external, hidden)
- Configuring source maps for development vs. production

### Linting and Formatting
- **ESLint** — pluggable linting, rules, configs (airbnb, standard), custom rules
- **Prettier** — opinionated code formatter, integration with ESLint
- Editor integration and pre-commit hooks (husky + lint-staged)

### Task Runners
- npm scripts as a task runner
- Combining tools in build pipelines
- Parallel and sequential task execution

## Prerequisites

- Basic JavaScript and Node.js familiarity
- Command line basics

## Resources

TODO

## Exercises

TODO
