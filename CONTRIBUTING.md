# Contributing to Hello Angular Developer

Thank you for your interest in contributing to the **Hello Angular Developer** project! This document outlines the standards and workflows we follow to maintain high code quality and architectural integrity.

## Table of Contents
- [Architectural Principles](#architectural-principles)
  - [Domain-Driven Design (DDD)](#domain-driven-design-ddd)
  - [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
  - [Angular v22 & Signals](#angular-v22--signals)
- [Development Workflow](#development-workflow)
  - [Git Flow](#git-flow)
  - [Conventional Commits](#conventional-commits)
  - [Semantic Versioning](#semantic-versioning)
- [Coding Standards](#coding-standards)
- [Documentation](#documentation)
- [Testing](#testing)

---

## Architectural Principles

### Domain-Driven Design (DDD)
We strictly follow a layered architecture organized by Bounded Contexts.
- **Greetings Context**: Contains the core business logic (Developer entity).
- **Shared Kernel**: Contains cross-cutting utilities (UUID generation).
- **Layers**: Maintain a strict separation between the **Domain Layer** (pure business logic, no framework dependencies) and the **Presentation Layer** (Angular components).

### Object-Oriented Programming (OOP)
- **Encapsulation**: Use ECMAScript private fields (`#`) for internal state.
- **Invariants**: Domain entities must protect their own integrity. State transitions (like assigning an ID) should only happen when invariants are met.
- **Identity**: Entities are identified by a unique ID (UUIDv7) and compared using identity-based equality (`equals()` method).

### Angular v22 & Signals
- **Reactivity**: Use Angular Signals (`signal`, `input`, `output`, `model`) for all state management.
- **Performance**: All components must use `ChangeDetectionStrategy.OnPush`.
- **Standalone**: All components, directives, and pipes are standalone.

---

## Development Workflow

### Git Flow
We follow a simplified Git Flow model:
- `main`: Reflects the latest stable production state.
- `develop`: The main branch for ongoing development.
- `feature/*`: Short-lived branches for specific features or bug fixes.
- `release/*`: Preparation for new production releases.

### Conventional Commits
Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
`type(scope): description`

**Types:**
- `feat`: A new feature.
- `fix`: A bug fix.
- `docs`: Documentation only changes.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `chore`: Changes to the build process or auxiliary tools and libraries.

**Scopes:** `greetings`, `shared`, `core`, `docs`.

### Semantic Versioning
The project adheres to [Semantic Versioning (SemVer)](https://semver.org/): `MAJOR.MINOR.PATCH`.
- **MAJOR**: Incompatible API changes.
- **MINOR**: Add functionality in a backwards-compatible manner.
- **PATCH**: Backwards-compatible bug fixes.

---

## Coding Standards
- Follow the naming conventions defined in the project:
  - **Constants**: `UPPER_SNAKE_CASE` for global/static readonly constants.
  - **Variables/Methods**: `lowerCamelCase`.
  - **Classes**: `UpperCamelCase`.
- Use TypeScript's strict mode.
- Avoid `$any` type casting.

---

## Documentation
- **Architecture Decisions**: New significant architectural choices must be documented in `docs/adrs.md`.
- **Traceability**: Ensure functional requirements are mapped in the Requirement Traceability Matrix (RTM) within `docs/user-stories.md`.
- **Changelog**: Update `CHANGELOG.md` for every release following the "Keep a Changelog" format.

---

## Testing
- **Behavioral Tests**: Domain entities must have comprehensive unit tests (`.spec.ts`) covering all invariants and business rules.
- **Verification**: Run `npm test` before submitting any pull request. All tests must pass.
