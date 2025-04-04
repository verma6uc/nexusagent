
  import React, { useState } from 'react';
  import { motion } from 'framer-motion';
  import { Button } from '../../../../components/ui/button'; // Assuming path is correct
  import { AgentVisualization } from './AgentVisualization';
  import { DemoModal } from './DemoModal';
  import { useTypedEffect } from './useTypedEffect';

  /**
   * Hero Section for the Homepage.
   * Features a headline, dynamic subheadline, tagline, AI agent visualization, and CTAs.
   */
  export const HeroSection: React.FC = () =&gt; {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Strings for the typed effect in the subheadline
    const typedStrings = [
      'handling inquiries 24/7.',
      'analyzing customer data instantly.',
      'providing actionable insights.',
      'automating routine tasks.',
      'personalizing interactions.',
    ];
    const typedElementRef = useTypedEffect(typedStrings, { typeSpeed: 60, backSpeed: 40 });

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2, // Stagger animation of children
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
        },
      },
    };

    const handleOpenModal = () =&gt; setIsModalOpen(true);
    const handleCloseModal = () =&gt; setIsModalOpen(false);

    return (
      &lt;section className="relative w-full bg-gradient-to-br from-primary via-primary/90 to-accent/80 text-neutral-100 overflow-hidden"&gt;
        {/* Optional: Background pattern - could be SVG or another subtle element */}
        {/* &lt;div className="absolute inset-0 opacity-10 bg-[url('/path/to/neural-network.svg')] bg-cover" aria-hidden="true"&gt;&lt;/div&gt; */}

        &lt;motion.div
          className="container mx-auto px-4 py-16 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        &gt;
          {/* Text Content */}
          &lt;motion.div className="flex flex-col items-center lg:items-start text-center lg:text-left" variants={itemVariants}&gt;
            &lt;motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-medium font-poppins mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-300"
              variants={itemVariants}
            &gt;
              Meet the Future of CRM: AI Agents at Your Service
            &lt;/motion.h1&gt;
            &lt;motion.p
              className="text-lg md:text-xl font-poppins text-neutral-200 mb-6"
              variants={itemVariants}
            &gt;
              NexusAgent transforms your business by {/* Typed effect target */}
              &lt;span ref={typedElementRef} className="text-secondary font-semibold"&gt;&lt;/span&gt;
            &lt;/motion.p&gt;
            &lt;motion.p
              className="text-base md:text-lg font-roboto text-neutral-300 mb-8"
              variants={itemVariants}
            &gt;
              Transform Your Customer Relationships with Intelligent Automation
            &lt;/motion.p&gt;
            &lt;motion.div
              className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start"
              variants={itemVariants}
            &gt;
              &lt;Button
                size="lg"
                variant="secondary" // Use secondary color for primary action
                className="font-roboto text-base md:text-lg transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-105"
                onClick={() =&gt; console.log('Start Free Trial Clicked')} // Replace with actual navigation/action
              &gt;
                Start Free Trial
              &lt;/Button&gt;
              &lt;Button
                size="lg"
                variant="accent" // Use accent color for secondary action
                className="font-roboto text-base md:text-lg transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-105"
                onClick={handleOpenModal}
                aria-haspopup="dialog"
              &gt;
                Watch Demo
              &lt;/Button&gt;
            &lt;/motion.div&gt;
          &lt;/motion.div&gt;

          {/* Visualization */}
          &lt;motion.div
            className="w-full h-full flex items-center justify-center lg:order-last order-first" // Stack visualization first on mobile/tablet
            variants={itemVariants} // Apply item animation variant
          &gt;
            &lt;AgentVisualization /&gt;
          &lt;/motion.div&gt;
        &lt;/motion.div&gt;

        {/* Demo Modal */}
        &lt;DemoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          videoUrl="/videos/nexus-demo-placeholder.mp4" // Replace with actual video path
        /&gt;

        {/* Accessibility: Reduce motion preference */}
        &lt;style jsx global&gt;{`
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
            .typed-cursor {
                display: none;
            }
          }
        `}&lt;/style&gt;
      &lt;/section&gt;
    );
  };
  