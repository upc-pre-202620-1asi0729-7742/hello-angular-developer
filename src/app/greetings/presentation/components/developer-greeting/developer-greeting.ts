import {Component, computed, input, ChangeDetectionStrategy} from '@angular/core';
import {Developer} from '../../../domain/model/developer';

/**
 * Stereotype: Presenter Component
 *
 * Component for greeting a developer by name.
 *
 * @remarks
 * A "dumb" component that displays a personalized greeting based on the `Developer`
 * domain entity provided as input. It delegates all name formatting and registration
 * logic to the domain layer.
 */
@Component({
  selector: 'app-developer-greeting',
  standalone: true,
  templateUrl: './developer-greeting.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './developer-greeting.css'
})
export class DeveloperGreeting {
  /**
   * The developer entity to greet.
   * @public
   */
  developer = input<Developer>(Developer.DEFAULT_DEVELOPER);

  /**
   * Computes the full name of the developer or returns a default label if not provided.
   *
   * @returns The full name or 'Anonymous Developer'.
   * @protected
   */
  protected fullName = computed(() => this.developer().fullName);

  /**
   * Indicates if the developer is considered registered (has at least one name field).
   *
   * @returns True if either the first or last name is provided.
   * @protected
   */
  protected developerIsRegistered = computed(() => this.developer().isRegistered);

  /**
   * Gets the developer's unique identifier.
   *
   * @returns The developer's ID or null if not registered.
   * @protected
   */
  protected developerId = computed(() => this.developer().id);
}
