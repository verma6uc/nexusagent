
  import { type ClassValue, clsx } from "clsx"
  import { twMerge } from "tailwind-merge"

  /**
   * Combines multiple class names or class value arrays into a single string,
   * merging Tailwind CSS classes and resolving conflicts intelligently.
   *
   * @param {...ClassValue[]} inputs - Class names or class value arrays to combine.
   * @returns {string} The merged class name string.
   */
  export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs))
  }
  