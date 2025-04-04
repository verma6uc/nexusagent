
  import { useEffect, useRef } from 'react';
  import Typed from 'typed.js';
  import type { TypedOptions } from 'typed.js';

  /**
   * Custom hook to initialize and manage a Typed.js instance.
   * @param strings - Array of strings to type.
   * @param options - Typed.js configuration options.
   * @returns A ref object to attach to the target HTML element.
   */
  export const useTypedEffect = (strings: string[], options?: Partial&lt;TypedOptions&gt;) =&gt; {
    const typedElementRef = useRef&lt;HTMLElement | null&gt;(null);
    const typedInstanceRef = useRef&lt;Typed | null&gt;(null);

    useEffect(() =&gt; {
      if (!typedElementRef.current) return;

      const defaultOptions: TypedOptions = {
        strings: strings,
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 1500,
        smartBackspace: true,
        ...options,
      };

      typedInstanceRef.current = new Typed(typedElementRef.current, defaultOptions);

      // Cleanup function to destroy Typed instance on unmount
      return () =&gt; {
        if (typedInstanceRef.current) {
          typedInstanceRef.current.destroy();
          typedInstanceRef.current = null;
        }
      };
    }, [strings, options]); // Re-run effect if strings or options change

    return typedElementRef;
  };
  