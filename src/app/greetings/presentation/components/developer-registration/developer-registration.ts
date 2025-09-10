import {Component, computed, EventEmitter, Output, signal, Signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
  styleUrl: './developer-registration.css'
})
export class DeveloperRegistration {
  /**
   * Signal for the developer's first name input.
   * @public
   */
  firstName = signal<string>('');
  /**
   * Signal for the developer's last name input.
   * @public
   */
  lastName = signal<string>('');

  /**
   * Signal for the validity of the registration form.
   * @public
   */
  isFormValid: Signal<boolean> = computed(() =>
    this.firstName().trim().length >= 2 && this.lastName().trim().length >= 2
  );

  /**
   * Event emitted when a developer is registered with valid input.
   *
   * @event
   * @public
   */
  @Output() public developerRegistered = new EventEmitter<{ firstName: string, lastName: string }>();

  /**
   * Event emitted when the user chooses to defer registration.
   *
   * @event
   * @public
   */
  @Output() public registrationDeferred = new EventEmitter<void>();

  /**
   * Handles form submission to register a developer.
   * Emits the developerRegistered event with form values if valid.
   *
   * @returns void
   * @public
   */
  public submitRegistrationRequest(): void {
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
   * @public
   */
  public deferRegistration(): void {
    this.clearFields();
    this.registrationDeferred.emit();
  }

  /**
   * Handles the "Clear" action to reset the form fields.
   * Does not affect the current greeting state.
   * @public
   */
  public clearFields(): void {
    this.firstName.set('');
    this.lastName.set('');
  }
}
