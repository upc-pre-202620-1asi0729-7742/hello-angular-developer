# Hello Angular Developer (hello-angular-developer)

## Overview

This project is an application designed to introduce modern Angular v22 concepts and capabilities with Domain-Driven Design (DDD) principles. It demonstrates the use of Standalone Components, Signals, and a layered architecture organized by Bounded Contexts.

## Key Features

- **Angular v22 Integration**: Leverages Standalone Components, Signals, and the latest control flow.
- **Domain-Driven Design (DDD)**: Implements a layered architecture with clearly defined Bounded Contexts.
- **Signal-Based Reactivity**: Utilizes Angular Signals for state management and reactive data flow.
- **Time-Ordered Identity**: Implements UUIDv7 for domain entity identity within the Shared Kernel.
- **Strict TypeScript**: Ensures type safety across domain and presentation layers.

## Architecture & Design

The application follows Domain-Driven Design principles, organized into two main Bounded Contexts:

1.  **Greetings Bounded Context**: The core business domain responsible for developer registration and greeting logic.
    - **Domain Layer**: Encapsulates business rules and invariants in the `Developer` entity.
    - **Presentation Layer**: Orchestrates user interaction using Signal-based components.
2.  **Shared Kernel Bounded Context**: Provides infrastructure-agnostic utilities, such as identity generation, shared across the system.

## Documentation

- **Architecture Decision Records (ADRs)**: Refer to [docs/adrs.md](docs/adrs.md) for detailed records of architectural choices.
- **User Stories & RTM**: See [docs/user-stories.md](docs/user-stories.md) for functional requirements and the Requirements Traceability Matrix.
- **Class Diagram**: Review [docs/class-diagram.puml](docs/class-diagram.puml) for a structural overview of the system.

## Prerequisites

- **Node.js**: v22.0.0 or higher
- **npm**: v10.0.0 or higher
- **Angular CLI**: `npm install -g @angular/cli`

## Setup & Execution

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Start the development server**:
    ```bash
    ng serve
    ```
3.  **Run tests**:
    ```bash
    npm test
    ```
4.  **Access the application**: Navigate to `http://localhost:4200/` in your browser.
