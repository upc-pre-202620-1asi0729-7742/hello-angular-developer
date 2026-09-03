# Architecture Decision Records (ADRs)

This document records the significant architectural decisions made during the development of the `hello-angular-developer` application.

---

## ADR 001: Adoption of Domain-Driven Design (DDD)

### Status
Accepted

### Context
The application needs to maintain a clear separation between business logic and presentation concerns to ensure maintainability and scalability.

### Decision
Implement a layered architecture organized by Bounded Contexts:
- **Greetings Bounded Context**: The primary business domain, containing:
    - **Domain Layer**: Entities (`Developer`) that encapsulate business rules.
    - **Presentation Layer**: Angular components (`DeveloperGreeting`, `DeveloperRegistration`) and application orchestrator (`App`).
- **Shared Kernel Bounded Context**: A supportive context containing common utilities and domain concepts shared across the system, such as `generateUuid`.

### Consequences
- Business rules are strictly encapsulated within the `Greetings` domain.
- The `Shared Kernel` provides infrastructure-agnostic utilities to the domain.
- Components are "dumb" presenters or application orchestrators (`App`).
- Enhanced testability of core logic without Angular overhead.

---

## ADR 002: Angular v22 Signal-Based State Management

### Status
Accepted

### Context
Modern Angular (v17+) emphasizes reactive programming via Signals for better performance and developer experience.

### Decision
Use Angular Signals for all internal component state and data flow within the `Greetings` presentation layer:
- `signal()` for local state.
- `input()` and `output()` for component communication.
- `ChangeDetectionStrategy.OnPush` for all components.

### Consequences
- Granular change detection and improved performance.
- Reduced reliance on manual lifecycle hooks and Zone.js.
- Type-safe two-way binding using `[(ngModel)]` with signals.

---

## ADR 003: Time-Ordered Identity Generation (UUIDv7)

### Status
Accepted

### Context
Entities require unique identifiers. Standard UUIDv4 lacks temporal ordering, which can impact database indexing performance in larger systems.

### Decision
Use UUIDv7 (RFC 9562) for the `Developer` entity's identity. The generation logic resides in the `Shared Kernel` (`generateUuid`), while its consumption is governed by the `Greetings` domain invariants. The `uuid` package is used as the underlying infrastructure.

### Consequences
- Time-ordered IDs facilitate sorting and indexing.
- Infrastructure details (UUID version) are encapsulated in the `Shared Kernel` and can be changed without affecting the `Greetings` domain model.

---

## ADR 004: Conditional Entity Identity

### Status
Accepted

### Context
A `Developer` instance might exist in an "Anonymous" or "Invalid" state before registration is complete within the `Greetings` context.

### Decision
The `Developer` entity (in `Greetings` domain) only generates and assigns an `id` when its domain invariants for registration (`isValidForRegistration`) are met.

### Consequences
- The presence of an `id` serves as a marker for a "registered" domain state.
- Prevents the creation of persistent identities for transient or invalid data.
