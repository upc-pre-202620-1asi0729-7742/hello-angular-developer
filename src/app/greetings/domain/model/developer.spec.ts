/**
 * Unit tests for the Developer entity.
 *
 * @remarks
 * Ensures correct instantiation and behavior of the Developer class.
 */
import {Developer} from './developer';

/**
 * Test suite for the Developer class.
 */
describe('Developer', () => {
  it('should create an instance with default empty values and NO ID', () => {
    const developer = new Developer();
    expect(developer).toBeTruthy();
    expect(developer.id).toBeNull();
    expect(developer.isRegistered).toBeFalse();
    expect(developer.fullName).toBe('Anonymous Developer');
  });

  it('should create a registered developer with first and last name', () => {
    const developer = new Developer('John', 'Doe');
    expect(developer.id).not.toBeNull();
    expect(developer.isRegistered).toBeTrue();
    expect(developer.fullName).toBe('John Doe');
    expect(developer.firstName).toBe('John');
    expect(developer.lastName).toBe('Doe');
  });

  it('should not have an ID if only partially named', () => {
    const dev1 = new Developer('John', '');
    const dev2 = new Developer('', 'Doe');
    expect(dev1.id).toBeNull();
    expect(dev2.id).toBeNull();
  });

  it('should generate a valid UUIDv7 ID when fully named', () => {
    const developer = new Developer('John', 'Doe');
    expect(developer.id).not.toBeNull();
    // UUIDv7 format check: 8-4-4-4-12 hex chars and version 7
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(developer.id).toMatch(uuidRegex);
  });

  it('should compare entities for equality based on identity', () => {
    const dev1 = new Developer('John', 'Doe');
    const dev2 = new Developer('John', 'Doe');

    // Note: Since we removed the id parameter, we can't force two instances to have the same ID anymore
    // except by checking they are different or by mocking the generator, but here they should be different.
    expect(dev1.equals(dev2)).toBeFalse();
    expect(dev1.equals(dev1)).toBeTrue();
    expect(dev1.equals(null)).toBeFalse();
  });

  it('should validate name length correctly', () => {
    expect(Developer.isValidName('Jo')).toBeTrue();
    expect(Developer.isValidName('J')).toBeFalse();
    expect(Developer.isValidName('  J  ')).toBeFalse();
  });

  it('should validate registration data correctly', () => {
    expect(Developer.isValidForRegistration('John', 'Doe')).toBeTrue();
    expect(Developer.isValidForRegistration('J', 'Doe')).toBeFalse();
    expect(Developer.isValidForRegistration('John', 'D')).toBeFalse();
  });
});
