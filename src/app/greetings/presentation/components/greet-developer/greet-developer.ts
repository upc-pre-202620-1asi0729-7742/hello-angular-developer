import {Component, Input} from '@angular/core';
import {Developer} from '../../../domain/model/developer';

/**
 * Component for greeting a developer by name.
 *
 * @remarks
 * Displays a personalized greeting if the developer's name is provided, otherwise defaults to 'Anonymous Developer'.
 */
@Component({
  selector: 'app-greet-developer',
  imports: [],
  templateUrl: './greet-developer.html',
  styleUrl: './greet-developer.css'
})
export class GreetDeveloper {
  /**
   * The developer's first name to greet.
   */
  @Input() firstName!: string;
  /**
   * The developer's last name to greet.
   */
  @Input() lastName!: string;

  /**
   * Computes the full name of the developer or returns a default label if not provided.
   *
   * @returns The full name or 'Anonymous Developer'.
   * @protected
   */
  protected get fullName(): string {
    if (!this.firstName && !this.lastName)
      return 'Anonymous Developer';
    let developer = new Developer(this.firstName, this.lastName);
    return developer.fullName;
  }

  /**
   * Indicates if the developer is considered registered (has at least one name field).
   *
   * @returns True if either first or last name is provided.
   * @public
   */
  public get isRegistered(): boolean {
    return !!this.firstName || !!this.lastName;
  }
}
