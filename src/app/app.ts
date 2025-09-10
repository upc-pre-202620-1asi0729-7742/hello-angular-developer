import {Component, signal} from '@angular/core';
import {DeveloperGreeting} from './greetings/presentation/components/developer-greeting/developer-greeting';
import {DeveloperRegistration} from './greetings/presentation/components/developer-registration/developer-registration';

/**
 * The root application component.
 *
 * @remarks
 * Hosts the registration and greeting components, manages the state of the currently registered developer, and handles registration events.
 */
@Component({
  selector: 'app-root',
  imports: [DeveloperRegistration, DeveloperGreeting],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /**
   * Application title signal.
   * @readonly
   */
  protected readonly title = signal('hello-angular-developer');

  /**
   * First name of the registered developer, empty if anonymous.
   * @public
   */
  public firstName: string = '';

  /**
   * Last name of the registered developer, empty if anonymous.
   * @public
   */
  public lastName: string = '';

  /**
   * Handles the developer registration event.
   * Updates the firstName and lastName properties with the registered values.
   *
   * @param developer - Object containing firstName and lastName.
   * @public
   */
  public updateRegisteredDeveloperInfo(developer: { firstName: string, lastName: string }): void {
    this.firstName = developer.firstName;
    this.lastName = developer.lastName;
  }

  /**
   * Handles the "Later" action to defer registration.
   * Resets firstName and lastName to empty, reverting to anonymous state.
   * @public
   */
  public resetRegisteredDeveloperInfo(): void {
    this.firstName = '';
    this.lastName = '';
  }
}
