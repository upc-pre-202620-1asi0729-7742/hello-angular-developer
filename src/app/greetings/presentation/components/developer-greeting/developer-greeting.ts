import {Component, computed, input} from '@angular/core';
import {Developer} from '../../../domain/model/developer';

/**
 * \component
 * Stereotype: Component
 *
 * Component for greeting a developer by name.
 *
 * @remarks
 * Displays a personalized greeting if the developer's name is provided, otherwise defaults to 'Anonymous Developer'.
 */
@Component({
  selector: 'app-developer-greeting',
  standalone: true,
  templateUrl: './developer-greeting.html',
  styleUrl: './developer-greeting.css'
})
export class DeveloperGreeting {
  /**
   * The developer's first name to greet.
   * @public
   */
  firstName = input<string>('');
  /**
   * The developer's last name to greet.
   * @public
   */
  lastName = input<string>('');

  /**
   * Computes the full name of the developer or returns a default label if not provided.
   *
   * @returns The full name or 'Anonymous Developer'.
   * @public
   */
  fullName = computed(() => {
    if (!this.firstName() && !this.lastName()) {
      return 'Anonymous Developer';
    }
    const developer = new Developer(this.firstName(), this.lastName());
    return developer.fullName;
  });

  /**
   * Indicates if the developer is considered registered (has at least one name field).
   *
   * @returns True if either first or last name is provided.
   * @public
   */
  isRegistered = computed(() => !!this.firstName() || !!this.lastName());
}
