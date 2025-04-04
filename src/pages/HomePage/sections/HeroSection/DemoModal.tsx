
  import React, { useEffect, useRef } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { X } from 'lucide-react';
  import { useFocusTrap } from '../../../../hooks/useFocusTrap'; // Assuming hook exists

  interface DemoModalProps {
    isOpen: boolean;
    onClose: () =&gt; void;
    videoUrl: string; // Example: '/videos/nexus-demo.mp4'
  }

  /**
   * Modal component to display the product demo video.
   * Includes accessibility features like focus trapping and keyboard navigation.
   */
  export const DemoModal: React.FC&lt;DemoModalProps&gt; = ({ isOpen, onClose, videoUrl }) =&gt; {
    const modalRef = useRef&lt;HTMLDivElement | null&gt;(null);
    useFocusTrap(modalRef, isOpen); // Apply focus trap when modal is open

    // Handle Escape key press to close modal
    useEffect(() =&gt; {
      const handleKeyDown = (event: KeyboardEvent) =&gt; {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
      } else {
        document.removeEventListener('keydown', handleKeyDown);
      }

      // Cleanup listener on unmount or when isOpen changes
      return () =&gt; {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [isOpen, onClose]);

    return (
      &lt;AnimatePresence&gt;
        {isOpen &amp;&amp; (
          &lt;motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={onClose} // Close modal on backdrop click
            aria-modal="true"
            role="dialog"
            aria-labelledby="demo-modal-title"
          &gt;
            &lt;motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl bg-neutral-800 rounded-lg shadow-xl overflow-hidden"
              onClick={(e) =&gt; e.stopPropagation()} // Prevent closing when clicking inside modal content
            &gt;
              &lt;div className="absolute top-2 right-2 z-10"&gt;
                &lt;button
                  onClick={onClose}
                  className="p-2 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-secondary"
                  aria-label="Close demo video modal"
                &gt;
                  &lt;X size={24} /&gt;
                &lt;/button&gt;
              &lt;/div&gt;
              &lt;div className="aspect-video"&gt;
                {/* In a real app, use a more robust video player component */}
                &lt;video
                  controls
                  className="w-full h-full"
                  aria-describedby="video-description" // Add description element below if needed
                &gt;
                  &lt;source src={videoUrl} type="video/mp4" /&gt;
                  {/* Add track elements for captions/subtitles */}
                  &lt;track kind="captions" srcLang="en" src="/videos/captions_en.vtt" label="English Captions" /&gt;
                  Your browser does not support the video tag.
                  {/* Provide transcript link */}
                &lt;/video&gt;
              &lt;/div&gt;
              {/* Optional: Add a hidden description for screen readers */}
              {/* &lt;p id="video-description" className="sr-only"&gt;Product demo video showing NexusAgent features.&lt;/p&gt; */}
              {/* Optional: Add a link to the transcript */}
              {/* &lt;div className="p-4 text-center"&gt;
                &lt;a href="/transcript.txt" className="text-secondary hover:underline"&gt;View Transcript&lt;/a&gt;
              &lt;/div&gt; */}
            &lt;/motion.div&gt;
          &lt;/motion.div&gt;
        )}
      &lt;/AnimatePresence&gt;
    );
  };
  