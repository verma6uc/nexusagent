
  import React, { useState, useRef, useEffect } from 'react';
  import { useInView } from 'react-intersection-observer';
  import { useTransition, animated } from '@react-spring/web';
  import { CapabilityCard } from './CapabilityCard';
  import { CapabilityModal } from './CapabilityModal';
  import { Capability } from './types';
  import { ProspectorIcon, AnalystIcon, AssistantIcon, StrategistIcon } from './icons'; // Assuming icons are defined here

  // Define the data for the capabilities
  const capabilitiesData: Capability[] = [
    {
      id: 'prospector',
      icon: ProspectorIcon,
      title: 'The Prospector',
      description: 'Unearths high-potential leads matching your ideal customer profile.',
      detailedContent: {
        heading: 'Automated Lead Discovery',
        paragraphs: [
          'The Prospector agent scans vast data sources, including social networks, industry databases, and news feeds, to identify potential customers exhibiting buying signals.',
          'It learns from your successful conversions to refine its search criteria, ensuring a constantly improving stream of qualified leads delivered directly to your pipeline.',
        ],
        useCases: [
          'Finding niche market opportunities.',
          'Identifying companies undergoing growth or change.',
          'Targeting specific job titles or decision-makers.',
        ],
      },
    },
    {
      id: 'analyst',
      icon: AnalystIcon,
      title: 'The Analyst',
      description: 'Provides deep insights into market trends and customer behavior.',
      detailedContent: {
        heading: 'Data-Driven Insights Engine',
        paragraphs: [
          'The Analyst agent processes your sales data, customer interactions, and external market information to reveal hidden patterns and actionable insights.',
          'Understand conversion bottlenecks, predict sales trends, and identify opportunities for upselling or cross-selling based on robust data analysis.',
        ],
        useCases: [
          'Sales forecasting and performance analysis.',
          'Customer segmentation and behavior modeling.',
          'Competitor analysis and market positioning.',
        ],
      },
    },
    {
      id: 'assistant',
      icon: AssistantIcon,
      title: 'The Assistant',
      description: 'Automates routine tasks and manages communications efficiently.',
      detailedContent: {
        heading: 'Intelligent Task Automation',
        paragraphs: [
          'The Assistant agent handles repetitive administrative tasks like scheduling meetings, sending follow-up emails, logging activities, and updating records.',
          'It can draft personalized email responses, manage your calendar based on priorities, and ensure no lead falls through the cracks, freeing up your time for strategic selling.',
        ],
        useCases: [
          'Automated email sequencing and follow-ups.',
          'Intelligent meeting scheduling.',
          'CRM data entry and maintenance.',
        ],
      },
    },
    {
      id: 'strategist',
      icon: StrategistIcon,
      title: 'The Strategist',
      description: 'Develops optimal sales strategies and guides your next best actions.',
      detailedContent: {
        heading: 'Strategic Sales Guidance',
        paragraphs: [
          'The Strategist agent analyzes the entire sales landscape, considering lead scores, deal stages, historical data, and market conditions to recommend the most effective actions.',
          'Receive personalized guidance on which deals to prioritize, the best engagement tactics to use, and how to navigate complex sales cycles for maximum win probability.',
        ],
        useCases: [
          'Deal prioritization and risk assessment.',
          'Next-best-action recommendations.',
          'Sales playbook optimization.',
        ],
      },
    },
  ];

  /**
   * @description Key Capabilities Showcase section for the homepage.
   * Displays core AI agent capabilities in a grid layout with interactive cards and modals.
   */
  export const KeyCapabilitiesShowcase: React.FC = () => {
    const [selectedCapability, setSelectedCapability] = useState&lt;Capability | null&gt;(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Intersection observer for scroll-triggered animations
    const { ref: sectionRef, inView: sectionInView } = useInView({
      triggerOnce: true, // Only trigger once
      threshold: 0.2, // Trigger when 20% of the section is visible
    });

    // Ref for managing focus after modal closes
    const cardRefs = useRef&lt;(HTMLButtonElement | null)[]&gt;([]);
    const previouslyFocusedElement = useRef&lt;HTMLElement | null&gt;(null);

    // Animation for the section title
    const titleTransition = useTransition(sectionInView, {
      from: { opacity: 0, transform: 'translateY(30px)' },
      enter: { opacity: 1, transform: 'translateY(0px)' },
      config: { duration: 500 },
    });

    // Staggered animation for the capability cards
    const cardTransitions = useTransition(sectionInView ? capabilitiesData : [], {
      from: { opacity: 0, transform: 'translateY(50px) scale(0.95)' },
      enter: { opacity: 1, transform: 'translateY(0px) scale(1)' },
      trail: 150, // Stagger delay in ms
      config: { tension: 280, friction: 25 },
    });

    // Reduced motion check
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleCardClick = (capability: Capability, index: number) => {
      previouslyFocusedElement.current = cardRefs.current[index];
      setSelectedCapability(capability);
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
      // Defer setting selectedCapability to null until after animation
      setTimeout(() => {
        setSelectedCapability(null);
        // Restore focus to the card that opened the modal
        previouslyFocusedElement.current?.focus();
      }, 300); // Match modal animation duration
    };

    // Optional: Add background gradient shift on scroll (more complex, requires scroll listener)
    // For simplicity, a static gradient or subtle animation can be applied via CSS/Tailwind

    return (
      &lt;section
        ref={sectionRef}
        className="py-16 md:py-24 bg-gradient-to-br from-background-light via-background-main to-background-dark text-text-light overflow-hidden" // Example gradient
        aria-labelledby="capabilities-headline"
      &gt;
        &lt;div className="container mx-auto px-4"&gt;
          {titleTransition(
            (styles, item) =>
              item &amp;&amp; (
                &lt;animated.h2
                  id="capabilities-headline"
                  style={prefersReducedMotion ? {} : styles}
                  className="text-3xl md:text-4xl lg:text-5xl font-medium font-poppins text-center mb-12 md:mb-16 text-primary-accent" // Use Poppins for headline
                &gt;
                  Your AI Team Members That Never Sleep
                &lt;/animated.h2&gt;
              )
          )}

          &lt;div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10"&gt;
            {cardTransitions((styles, capability, _, index) => (
              &lt;animated.div style={prefersReducedMotion ? {} : styles}&gt;
                &lt;CapabilityCard
                  ref={(el) => (cardRefs.current[index] = el)} // Assign ref to each card button
                  icon={capability.icon}
                  title={capability.title}
                  description={capability.description}
                  onClick={() => handleCardClick(capability, index)}
                /&gt;
              &lt;/animated.div&gt;
            ))}
          &lt;/div&gt;
        &lt;/div&gt;

        {selectedCapability &amp;&amp; (
          &lt;CapabilityModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            capability={selectedCapability}
          /&gt;
        )}
      &lt;/section&gt;
    );
  };
  