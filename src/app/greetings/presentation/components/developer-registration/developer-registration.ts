import {Component, computed, output, signal, Signal, ChangeDetectionStrategy} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/**
 * Represents the data payload for a developer registration.
 */
export interface RegistrationPayload {
  firstName: string;
  lastName: string;
}

/**
 * \component
 * Stereotype: Component
 *
 * Component for registering a developer using Angular signals for form state and validation.
 *
 * @remarks
 * Provides a form for entering a developer's first and last name, with validation and event emission for registration actions.
 */
@Component({
  selector: 'app-developer-registration',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './developer-registration.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './developer-registration.css'
})
export class DeveloperRegistration {
  /**
   * Signal for the developer's first name input.
   * @protected
   */
  protected firstName = signal<string>('');
  /**
   * Signal for the developer's last name input.
   * @protected
   */
  protected lastName = signal<string>('');

  /**
   * Signal for the validity of the registration form.
   * @protected
   */
  protected isFormValid: Signal<boolean> = computed(() =>
    this.firstName().trim().length >= 2 && this.lastName().trim().length >= 2
  );

  /**
   * Event emitted when a developer is registered with valid input.
   *
   * @event
   * @public
   */
  public developerRegistered = output<RegistrationPayload>();

  /**
   * Event emitted when the user chooses to defer registration.
   *
   * @event
   * @public
   */
  public registrationDeferred = output<void>();

  /**
   * Handles form submission to register a developer.
   * Emits the developerRegistered event with form values if valid.
   *
   * @returns void
   * @protected
   */
  protected submitRegistrationRequest(): void {
    if (this.isFormValid()) {
      this.developerRegistered.emit({
        firstName: this.firstName(),
        lastName: this.lastName()
      });
      this.clearFields();
    }
  }

  /**
   * Handles the "Later" action to defer registration.
   * Resets the form and emits the registrationDeferred event.
   *
   * @returns void
   * @protected
   */
  protected deferRegistration(): void {
    this.clearFields();
    this.registrationDeferred.emit();
  }

  /**
   * Handles the "Clear" action to reset the form fields.
   * Does not affect the current greeting state.
   * @protected
   */
  protected clearFields(): void {
    this.firstName.set('');
    this.lastName.set('');
  }
}
