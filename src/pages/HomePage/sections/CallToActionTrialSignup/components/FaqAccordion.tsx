
  import React, { useState } from 'react';
  import { FaqItem } from './FaqItem';

  /**
   * @typedef FaqItemData
   * @property {string} question - The FAQ question.
   * @property {string} answer - The FAQ answer.
   */
  interface FaqItemData {
    question: string;
    answer: string;
  }

  /**
   * @typedef FaqAccordionProps
   * @property {FaqItemData[]} items - Array of FAQ items.
   */
  interface FaqAccordionProps {
    items: FaqItemData[];
  }

  /**
   * FaqAccordion Component
   * Renders a list of FAQ items in an accordion style.
   *
   * @param {FaqAccordionProps} props - Component properties.
   * @returns {JSX.Element} The rendered FAQ accordion.
   */
  export const FaqAccordion: React.FC&lt;FaqAccordionProps&gt; = ({ items }) => {
    const [openIndex, setOpenIndex] = useState&lt;number | null&gt;(null);

    const handleToggle = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      &lt;div className="space-y-4 max-w-3xl mx-auto"&gt;
        {items.map((item, index) => (
          &lt;FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          /&gt;
        ))}
      &lt;/div&gt;
    );
  };
  