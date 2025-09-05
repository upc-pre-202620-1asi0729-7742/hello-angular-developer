# User Stories for Hello Angular Developer

This document outlines the user stories and acceptance criteria for the `hello-angular-developer` project, reflecting the current functionality within the `greetings` bounded context. Each story is written from a single visitor’s perspective ("I") and uses the Given-When-Then format for acceptance criteria, focusing on behavior rather than user interface elements.

---

## US001: Displaying an Anonymous Greeting by Default

As a visitor to the application,  
I want to see a default greeting when no developer is registered,  
so that I understand the app’s purpose without immediate action.

### Acceptance Criteria

- **Scenario: Visitor opens the app for the first time**
  - **Given** the visitor has just opened the application,
  - **When** no developer name has been registered,
  - **Then** the greeting displays "Hello Anonymous Developer".

---

## US002: Registering a Developer with a Name

As a visitor to the application,  
I want to register my name as a developer,  
so that I receive a personalized greeting acknowledging my Angular developer status.

### Acceptance Criteria

- **Scenario: Visitor registers a valid name**
  - **Given** the visitor has not yet registered a name,
  - **When** the visitor submits a first name (e.g., "Jane") and last name (e.g., "Smith") each at least two characters long,
  - **Then** the greeting updates to "Hello Jane Smith. Now You are an Angular Developer!", and the input fields are cleared.

- **Scenario: Visitor submits an invalid name**
  - **Given** the visitor has not yet registered a name,
  - **When** the visitor submits a first name or last name shorter than two characters (e.g., "J" or "S") or leaves a field empty,
  - **Then** the registration is not accepted, and an error is indicated for each invalid field until corrected.

---

## US003: Deferring Registration with "Later"

As a visitor to the application,  
I want to defer registering my name,  
so that I can remain anonymous without committing to a name.

### Acceptance Criteria

- **Scenario: Visitor defers registration without prior registration**
  - **Given** the visitor has not registered a name and has entered some input,
  - **When** the visitor chooses to defer registration,
  - **Then** the input fields are cleared, and the greeting remains "Hello Anonymous Developer".

- **Scenario: Visitor defers registration after registering a name**
  - **Given** the visitor has registered a name (e.g., "Jane Smith") and the greeting shows "Hello Jane Smith. Now You are an Angular Developer!",
  - **When** the visitor enters a new name (e.g., "John Doe") and chooses to defer registration,
  - **Then** the input fields are cleared, and the greeting reverts to "Hello Anonymous Developer".

---

## US004: Clearing the Form with "Clear"

As a visitor to the application,  
I want to clear my input without affecting the current greeting,  
so that I can start over without committing or reverting.

### Acceptance Criteria

- **Scenario: Visitor clears input without prior registration**
  - **Given** the visitor has not registered a name and has entered some input (e.g., "Alice Bob"),
  - **When** the visitor chooses to clear the input,
  - **Then** the input fields are cleared, and the greeting remains "Hello Anonymous Developer".

- **Scenario: Visitor clears input after registering a name**
  - **Given** the visitor has registered a name (e.g., "Jane Smith") and the greeting shows "Hello Jane Smith. Now You are an Angular Developer!",
  - **When** the visitor enters a new name (e.g., "John Doe") and chooses to clear the input,
  - **Then** the input fields are cleared, and the greeting remains "Hello Jane Smith. Now You are an Angular Developer!".

---
