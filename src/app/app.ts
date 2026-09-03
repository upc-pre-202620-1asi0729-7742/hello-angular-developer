import {Component, signal, ChangeDetectionStrategy} from '@angular/core';
import {DeveloperGreeting} from './greetings/presentation/components/developer-greeting/developer-greeting';
import {
  DeveloperRegistration
} from './greetings/presentation/components/developer-registration/developer-registration';
import {Developer} from './greetings/domain/model/developer';

/**
 * The root application component acting as an **Application Orchestrator**.
 *
 * @remarks
 * Coordinates the interaction between the `DeveloperRegistration` (Entry Point) and
 * `DeveloperGreeting` (Presenter) within the Greetings bounded context.
 * It manages the reactive state of the currently registered developer using signals.
 */
@Component({
  selector: 'app-root',
  imports: [DeveloperRegistration, DeveloperGreeting],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.css'
})
export class App {
  /**
   * Application title signal.
   * @readonly
   */
  protected readonly title = signal('hello-angular-developer');

  /**
   * The registered developer entity.
   * @protected
   */
  protected registeredDeveloper = signal<Developer>(Developer.DEFAULT_DEVELOPER);

  /**
   * Handles the developer registration event.
   * Updates the registeredDeveloper signal with the new entity.
   *
   * @param developer - The registered Developer entity.
   * @protected
   */
  protected updateRegisteredDeveloperInfo(developer: Developer): void {
    this.registeredDeveloper.set(developer);
  }

  /**
   * Handles the "Later" action to defer registration.
   * Resets registeredDeveloper to an anonymous state.
   * @protected
   */
  protected resetRegisteredDeveloperInfo(): void {
    this.registeredDeveloper.set(Developer.DEFAULT_DEVELOPER);
  }
}
