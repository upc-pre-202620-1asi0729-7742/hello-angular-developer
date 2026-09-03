import { v7 as uuidv7 } from 'uuid';

/**
 * Utility for generating UUID v7 identifiers.
 * UUID v7 is time-ordered, which is beneficial for database indexing and sorting.
 *
 * @remarks
 * This implementation uses the `uuid` package which follows the RFC 9562 specification.
 */
export function generateUuid(): string {
  return uuidv7();
}
