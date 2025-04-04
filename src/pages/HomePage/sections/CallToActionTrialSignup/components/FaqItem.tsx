
  import React, { useRef, useEffect } from 'react';
  import { ChevronDown } from 'lucide-react';
  import { motion, AnimatePresence } from 'framer-motion';

  /**
   * @typedef FaqItemProps
   * @property {string} question - The FAQ question.
   * @property {string} answer - The FAQ answer.
   * @property {boolean} isOpen - Whether the item is currently open.
   * @property {() => void} onToggle - Callback function to toggle the item's state.
   */
  interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
  }

  /**
   * FaqItem Component
   * Renders a single FAQ item with expand/collapse functionality.
   * Uses framer-motion for smooth animation.
   *
   * @param {FaqItemProps} props - Component properties.
   * @returns {JSX.Element} The rendered FAQ item.
   */
  export const FaqItem: React.FC&lt;FaqItemProps&gt; = ({ question, answer, isOpen, onToggle }) => {
    const contentRef = useRef&lt;HTMLDivElement&gt;(null);

    return (
      &lt;div className="border border-neutral-border rounded-lg overflow-hidden" style={{ borderColor: '#ECEFF1' }}&gt;
        &lt;button
          onClick={onToggle}
          className="flex justify-between items-center w-full p-4 md:p-5 text-left bg-white hover:bg-neutral-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-75"
          style={{ '--tw-ring-color': '#4A148C', backgroundColor: '#FFFFFF', '--tw-bg-opacity': isOpen ? '0.03' : '0' } as React.CSSProperties}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${question.replace(/\s+/g, '-')}`} // Create unique ID
        &gt;
          &lt;span className="text-base md:text-lg font-medium font-roboto text-neutral-content" style={{ color: '#263238' }}&gt;
            {question}
          &lt;/span&gt;
          &lt;ChevronDown
            className={`w-5 h-5 text-primary transition-transform duration-300 ease-in-out ${isOpen ? 'transform rotate-180' : ''}`}
            style={{ color: '#4A148C' }}
          /&gt;
        &lt;/button&gt;
        &lt;AnimatePresence initial={false}&gt;
          {isOpen &amp;&amp; (
            &lt;motion.div
              id={`faq-answer-${question.replace(/\s+/g, '-')}`}
              ref={contentRef}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto', marginTop: '1rem', marginBottom: '1rem' },
                collapsed: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }
              }}
              transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth cubic bezier easing
              className="overflow-hidden px-4 md:px-5"
              role="region"
              aria-labelledby={`faq-question-${question.replace(/\s+/g, '-')}`} // Needs corresponding id on button text span if needed
            &gt;
              &lt;p className="text-base font-roboto text-neutral-muted pb-4" style={{ color: '#B388FF' }}&gt;
                {answer}
              &lt;/p&gt;
            &lt;/motion.div&gt;
          )}
        &lt;/AnimatePresence&gt;
      &lt;/div&gt;
    );
  };

  