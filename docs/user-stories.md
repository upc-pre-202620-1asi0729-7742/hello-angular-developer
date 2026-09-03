# User Stories for Hello Angular Developer

This document describes the current functionality of the `hello-angular-developer` application within the `greetings` bounded context. The stories below reflect the actual behavior implemented in the Angular components and domain model as of the current codebase.

---

## Requirements Traceability Matrix

| ID        | Requirement / User Story     | Bounded Contexts | Technical Components                                 |
|:----------|:-----------------------------|:-----------------|:-----------------------------------------------------|
| **US001** | Default anonymous greeting   | `greetings`      | `Developer` (Entity), `DeveloperGreeting`            |
| **US002** | Valid name registration      | `greetings`, `shared` | `Developer` (Entity), `DeveloperRegistration`, `App`, `generateUuid` |
| **US003** | Defer registration ("Later") | `greetings`      | `DeveloperRegistration`, `App`                       |
| **US004** | Clear form fields            | `greetings`      | `DeveloperRegistration`                              |

---

## US001: Displaying the default anonymous greeting

As a visitor to the application,
I want to see a default greeting when no developer has been registered,
so that I understand the app is ready for a developer registration flow.

### Acceptance Criteria

- **Scenario: Visitor opens the app for the first time**
  - **Given** the application has just started,
  - **When** no developer name has been registered,
  - **Then** the greeting displays "Hello Anonymous Developer." and no additional registration message is shown.

---

## US002: Registering a developer with valid names

As a visitor to the application,
I want to register my first and last name,
so that I receive a personalized greeting as a registered Angular developer.

### Acceptance Criteria

- **Scenario: Visitor registers a valid full name**
  - **Given** the visitor has not yet registered a developer,
  - **When** the visitor enters a first name and a last name that are at least two characters long, such as "Jane" and "Smith",
  - **Then** the "Register" action becomes enabled, the form is submitted, the fields are cleared, and the greeting updates to "Hello Jane Smith. Now You are an Angular Developer with ID: <uuid-v7>!".

- **Scenario: Visitor submits incomplete or invalid name data**
  - **Given** the visitor is entering a registration,
  - **When** a first name or last name is shorter than two characters or empty,
  - **Then** the field-specific validation message is shown: "First name must be at least 2 characters." or "Last name must be at least 2 characters.", and the "Register" button remains disabled.

---

## US003: Deferring the registration with "Later"

As a visitor to the application,
I want to choose "Later" when I do not want to keep a pending registration,
so that the form is reset and the app returns to the anonymous greeting state.

### Acceptance Criteria

- **Scenario: Visitor defers registration before any successful registration**
  - **Given** the visitor has entered some text into the form but has not yet registered a developer,
  - **When** the visitor clicks "Later",
  - **Then** both form fields are cleared and the greeting remains "Hello Anonymous Developer.".

- **Scenario: Visitor defers registration after a registered developer exists**
  - **Given** the current greeting shows a registered developer, such as "Hello Jane Smith. Now You are an Angular Developer with ID: <uuid-v7>!",
  - **When** the visitor enters a different name and clicks "Later",
  - **Then** the form is cleared and the application resets to the anonymous greeting state.

---

## US004: Clearing the form without changing the current greeting

As a visitor to the application,
I want to clear the current input without affecting the current developer state,
so that I can reset the form while keeping the existing greeting if one is already registered.

### Acceptance Criteria

- **Scenario: Visitor clears the form before registration**
  - **Given** the visitor has typed values into the fields but has not submitted them,
  - **When** the visitor clicks "Clear",
  - **Then** the form fields are emptied and the greeting remains "Hello Anonymous Developer.".

- **Scenario: Visitor clears the form after registration**
  - **Given** a developer is currently registered and the greeting displays a personalized message,
  - **When** the visitor enters a different name and clicks "Clear",
  - **Then** the form is cleared and the current greeting stays unchanged.

