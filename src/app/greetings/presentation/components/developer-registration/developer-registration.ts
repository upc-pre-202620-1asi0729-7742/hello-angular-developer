import {Component, computed, output, signal, Signal, ChangeDetectionStrategy} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Developer} from '../../../domain/model/developer';

/**
 * Stereotype: Entry Point / Input Adapter Component
 *
 * Component for registering a developer using Angular signals for form state and validation.
 *
 * @remarks
 * Acts as the entry point for developer data collection. It manages local form state
 * and emits a `Developer` domain entity once registration invariants are met.
 */
@Component({
  selector: 'app-developer-registration',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './developer-registration.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './developer-registration.css'
})
export class DeveloperRegistration {
  static readonly EMPTY_NAME = '';
  /**
   * Signal for the developer's first name input.
   * @protected
   */
  protected firstName = signal<string>(DeveloperRegistration.EMPTY_NAME);
  /**
   * Signal for the developer's last name input.
   * @protected
   */
  protected lastName = signal<string>(DeveloperRegistration.EMPTY_NAME);

  /**
   * Signal for the validity of the registration form.
   * @protected
   */
  protected isFormValid: Signal<boolean> = computed(() =>
    Developer.isValidForRegistration(this.firstName(), this.lastName())
  );

  /**
   * Validation for first name.
   * @protected
   */
  protected isFirstNameValid = computed(() =>
    this.firstName().trim().length === 0 || Developer.isValidName(this.firstName())
  );

  /**
   * Validation for last name.
   * @protected
   */
  protected isLastNameValid = computed(() =>
    this.lastName().trim().length === 0 || Developer.isValidName(this.lastName())
  );

  /**
   * Event emitted when a developer is registered with valid input.
   *
   * @event
   * @public
   */
  public developerRegistered = output<Developer>();

  /**
   * Event emitted when the user chooses to defer registration.
   *
   * @event
   * @public
   */
  public registrationDeferred = output<void>();

  /**
   * Handles form submission to register a developer.
   * Emits the developerRegistered event with a Developer instance if valid.
   *
   * @returns void
   * @protected
   */
  protected submitRegistrationRequest(): void {
    if (this.isFormValid()) {
      this.developerRegistered.emit(new Developer(
        this.firstName(),
        this.lastName()
      ));
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
    this.firstName.set(DeveloperRegistration.EMPTY_NAME);
    this.lastName.set(DeveloperRegistration.EMPTY_NAME);
  }
}
