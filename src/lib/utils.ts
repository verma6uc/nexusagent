
  import { type ClassValue, clsx } from "clsx"
  import { twMerge } from "tailwind-merge"

  /**
   * @function cn
   * @description Utility function to merge Tailwind CSS classes conditionally.
   * Combines clsx and twMerge for robust class name generation.
   * @param {...ClassValue[]} inputs - Class values to merge.
   * @returns {string} The merged class names.
   */
  export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs))
  }

  // Add any other general utility functions needed across the application here.

  /**
   * @function formatNumber
   * @description Formats a number with commas as thousands separators.
   * @param {number} value - The number to format.
   * @returns {string} The formatted number string.
   */
  export function formatNumber(value: number): string {
    return value.toLocaleString('en-US');
  }

  /**
    * @function getInitials
    * @description Gets the initials from a name string.
    * @param {string} name - The full name.
    * @returns {string} The initials (e.g., "JD" for "John Doe").
    */
  export function getInitials(name: string = ''): string {
      return name
          .split(' ')
          .map((n) => n[0])
          .filter((_, i, arr) => i === 0 || i === arr.length - 1) // Get first and last initial
          .join('')
          .toUpperCase();
  }

  