# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Contribution Guidelines**: Added `CONTRIBUTING.md` to guide contributors on how to submit collaborative changes, report issues, and propose new features.

## [1.1.0] - 2026-09-02

### Added
- **Domain-Driven Design (DDD)**: Implemented a layered architecture with `Greetings` and `Shared Kernel` bounded contexts.
- **Developer Entity**: Core domain entity representing a developer with time-ordered identity (UUIDv7).
- **UUIDv7 Identity**: Integration of the `uuid` package for time-ordered identifiers in the Shared Kernel.
- **Architecture Documentation**: Added Architecture Decision Records (ADRs) in `docs/adrs.md`.
- **Requirements Traceability**: Added a Requirements Traceability Matrix (RTM) to `docs/user-stories.md`.
- **Angular v22 Features**: Adoption of Standalone Components and Signal-based state management.

### Changed
- **Reactivity Model**: Refactored all components to use Angular Signals (`signal`, `input`, `output`) and `OnPush` change detection.
- **Identity Generation**: Moved identity generation logic from components to the `Developer` domain entity.
- **Project Structure**: Reorganized codebase into `domain` and `presentation` layers within bounded contexts.
- **Documentation**: Updated `README.md`, `class-diagram.puml`, and `user-stories.md` to reflect the modern Angular and DDD architecture.

### Removed
- Obsolete manual event handling and standard primitive state properties in favor of Angular Signals.
- Redundant logic in presentation components, now encapsulated within the Domain layer.

## [1.0.0] - 2026-09-02

### Added
- Initial project structure for a simple Angular application.
- `Developer` entity, `DeveloperGreeting`, and `DeveloperRegistration` components.
- Basic user stories and class diagram.
- MIT License.
