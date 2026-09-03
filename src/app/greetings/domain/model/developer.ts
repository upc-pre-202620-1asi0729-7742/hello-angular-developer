import {generateUuid} from '../../../shared/domain/uuid';

/**
 * Represents a developer with a first and last name.
 *
 * @remarks
 * This class serves as an **Entity** within the Greetings bounded context,
 * encapsulating developer identity and protecting domain invariants.
 * It is immutable by design, using ECMAScript private fields to ensure integrity.
 */
export class Developer {
  /**
   * Unique identifier for the developer entity.
   * @private
   */
  readonly #id: string | null;
  /**
   * Internal first name state.
   * @private
   */
  readonly #firstName: string;
  /**
   * Internal last name state.
   * @private
   */
  readonly #lastName: string;

  /**
   * Domain invariant: Minimum length required for a valid name.
   * @private
   */
  private static readonly MINIMUM_NAME_LENGTH = 2;
  /**
   * Fallback label for unregistered developers.
   * @private
   */
  private static readonly ANONYMOUS_LABEL = 'Anonymous Developer';

  /**
   * Creates a new Developer instance.
   * @param firstName - The developer's first name.
   * @param lastName - The developer's last name.
   */
  constructor(firstName: string = '', lastName: string = '') {
    this.#firstName = firstName.trim();
    this.#lastName = lastName.trim();
    this.#id = Developer.isValidForRegistration(this.#firstName, this.#lastName) ? generateUuid() : null;
  }

  /**
   * Gets the developer's unique identifier.
   */
  get id(): string | null {
    return this.#id;
  }

  /**
   * Gets the developer's first name.
   */
  get firstName(): string {
    return this.#firstName;
  }

  /**
   * Gets the developer's last name.
   */
  get lastName(): string {
    return this.#lastName;
  }

  /**
   * Gets the developer's full name.
   *
   * @remarks
   * Logic for determining the "Anonymous" state is encapsulated here to prevent
   * business rule leakage into the presentation layer.
   *
   * @returns The concatenated first and last name, or 'Anonymous Developer' if not registered.
   */
  get fullName(): string {
    return !this.isRegistered ? Developer.ANONYMOUS_LABEL : `${this.#firstName} ${this.#lastName}`.trim();
  }

  /**
   * Indicates if the developer is considered registered (has at least one name field).
   */
  get isRegistered(): boolean {
    return this.#id !== null;
  }

  /**
   * Validates if a name is valid according to domain rules (invariants).
   * @param name - The name to validate.
   * @returns True if the name meets the minimum length requirement.
   */
  static isValidName(name: string): boolean {
    return name.trim().length >= Developer.MINIMUM_NAME_LENGTH;
  }

  /**
   * Validates if the registration data is valid.
   */
  static isValidForRegistration(firstName: string, lastName: string): boolean {
    return this.isValidName(firstName) && this.isValidName(lastName);
  }

  /**
   * Compares this developer with another entity for equality based on identity.
   *
   * @param other - The other developer to compare with.
   * @returns True if both entities have the same identity.
   */
  equals(other: Developer | null | undefined): boolean {
    return other === null || other === undefined ? false : this.#id === other.id;
  }

  static DEFAULT_DEVELOPER = new Developer();
}
