/**
 * Represents a developer with a first and last name.
 *
 * @remarks
 * This class is used to encapsulate developer identity information in the Greetings bounded context.
 */
export class Developer {
  readonly #firstName: string;
  readonly #lastName: string;

  /**
   * Creates a new Developer instance.
   * @param firstName - The developer's first name.
   * @param lastName - The developer's last name.
   */
  constructor(firstName: string, lastName: string) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  /**
   * Gets the developer's full name.
   * @returns The concatenated first and last name, trimmed.
   */
  get fullName(): string {
    return `${this.#firstName} ${this.#lastName}`.trim();
  }
}
