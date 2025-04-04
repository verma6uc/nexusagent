
  import { useRef, useEffect } from 'react';

  /**
   * A hook to trap focus within a designated container element when active.
   * @param isActive Whether the focus trap should be active.
   * @returns A ref to attach to the container element.
   */
  export function useFocusTrap&lt;T extends HTMLElement&gt;(isActive: boolean): React.RefObject&lt;T&gt; {
    const containerRef = useRef&lt;T&gt;(null);
    const previouslyFocusedElement = useRef&lt;HTMLElement | null&gt;(null);

    useEffect(() => {
      if (!isActive || !containerRef.current) {
        return;
      }

      // Save the element that had focus before the trap activated
      previouslyFocusedElement.current = document.activeElement as HTMLElement;

      const focusableElements = containerRef.current.querySelectorAll&lt;HTMLElement&gt;(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Focus the first element when the trap activates
      firstElement?.focus();

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key !== 'Tab') {
          return;
        }

        if (event.shiftKey) { // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            event.preventDefault();
          }
        } else { // Tab
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            event.preventDefault();
          }
        }
      };

      const currentRef = containerRef.current; // Capture ref value
      currentRef.addEventListener('keydown', handleKeyDown);

      return () => {
        currentRef.removeEventListener('keydown', handleKeyDown);
        // Restore focus to the previously focused element when the trap deactivates
        previouslyFocusedElement.current?.focus();
      };
    }, [isActive]);

    return containerRef;
  }
  