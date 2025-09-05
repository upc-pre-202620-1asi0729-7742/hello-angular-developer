import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

/**
 * Component for registering a developer.
 *
 * @remarks
 * Provides a form for entering a developer's first and last name, with validation and event emission for registration actions.
 */
@Component({
  selector: 'app-developer-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './developer-registration.html',
  styleUrl: './developer-registration.css'
})
export class DeveloperRegistration {
  /**
   * Form group for developer registration with validation.
   * Requires firstName and lastName with a minimum length of 2.
   * @public
   */
  public developerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

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
    if (this.developerForm.valid) {
      const firstName = this.developerForm.value.firstName ?? '';
      const lastName = this.developerForm.value.lastName ?? '';
      this.developerRegistered.emit({ firstName, lastName });
      this.developerForm.reset();
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
    this.developerForm.reset();
    this.registrationDeferred.emit();
  }

  /**
   * Handles the "Clear" action to reset the form.
   * Does not affect the current greeting state.
   * @public
   */
  public clearFields(): void {
    this.developerForm.reset();
  }
}
