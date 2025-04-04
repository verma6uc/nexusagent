
  import React, { useEffect, useRef } from 'react';
  import { useTransition, animated } from '@react-spring/web';
  import { Capability } from './types';
  import { useFocusTrap } from '../../../../hooks/useFocusTrap'; // Assuming a focus trap hook exists

  interface CapabilityModalProps {
    isOpen: boolean;
    onClose: () => void;
    capability: Capability;
  }

  /**
   * @description Modal component to display detailed capability information.
   * Includes animations, accessibility features (focus trap), and close handling.
   */
  export const CapabilityModal: React.FC&lt;CapabilityModalProps&gt; = ({ isOpen, onClose, capability }) => {
    const modalRef = useRef&lt;HTMLDivElement | null&gt;(null);
    const focusTrapRef = useFocusTrap<HTMLDivElement>(isOpen); // Use the focus trap hook

    // Reduced motion check
    const prefersReducedMotion = typeof window !== 'undefined' &amp;&amp; window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Animation for the modal overlay and content
    const transitions = useTransition(isOpen, {
      from: { opacity: 0, transform: 'scale(0.9)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0.9)' },
      config: { tension: 280, friction: 25 },
      reverse: isOpen, // Ensures leave animation runs correctly
    });

    // Handle Escape key press
    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
      } else {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = ''; // Restore scrolling
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = ''; // Ensure scrolling is restored on unmount
      };
    }, [isOpen, onClose]);

    const { title, detailedContent } = capability;
    const modalId = `capability-modal-${capability.id}`;
    const modalTitleId = `${modalId}-title`;
    const modalDescriptionId = `${modalId}-description`;

    return transitions(
      (styles, item) =>
        item &amp;&amp; (
          &lt;div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            aria-labelledby={modalTitleId}
            aria-describedby={modalDescriptionId}
            aria-modal="true"
            role="dialog"
          &gt;
            {/* Overlay */}
            &lt;animated.div
              style={prefersReducedMotion ? { opacity: styles.opacity } : styles}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={onClose} // Close modal on overlay click
            /&gt;

            {/* Modal Content */}
            &lt;animated.div
              ref={focusTrapRef} // Apply focus trap ref here
              style={prefersReducedMotion ? { opacity: styles.opacity } : styles}
              className="relative z-10 w-full max-w-2xl bg-gradient-to-br from-neutral-light to-neutral-lighter rounded-lg shadow-xl p-6 md:p-8 max-h-[85vh] overflow-y-auto"
            &gt;
              &lt;button
                onClick={onClose}
                className="absolute top-4 right-4 text-text-medium hover:text-primary-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent rounded-full p-1 transition-colors"
                aria-label="Close modal"
              &gt;
                &lt;svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"&gt;
                  &lt;path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /&gt;
                &lt;/svg&gt;
              &lt;/button&gt;

              &lt;h2 id={modalTitleId} className="text-2xl md:text-3xl font-poppins font-medium mb-4 text-primary-main"&gt;
                {detailedContent.heading} ({title})
              &lt;/h2&gt;

              &lt;div id={modalDescriptionId} className="space-y-4 font-roboto text-text-dark"&gt;
                {detailedContent.paragraphs.map((p, index) => (
                  &lt;p key={index}&gt;{p}&lt;/p&gt;
                ))}

                {detailedContent.useCases &amp;&amp; detailedContent.useCases.length > 0 &amp;&amp; (
                  &lt;div className="mt-6"&gt;
                    &lt;h4 className="text-lg font-medium font-poppins mb-2 text-primary-accent"&gt;Key Use Cases:&lt;/h4&gt;
                    &lt;ul className="list-disc list-inside space-y-1 text-text-medium"&gt;
                      {detailedContent.useCases.map((useCase, index) => (
                        &lt;li key={index}&gt;{useCase}&lt;/li&gt;
                      ))}
                    &lt;/ul&gt;
                  &lt;/div&gt;
                )}
              &lt;/div&gt;
            &lt;/animated.div&gt;
          &lt;/div&gt;
        )
    );
  };
  