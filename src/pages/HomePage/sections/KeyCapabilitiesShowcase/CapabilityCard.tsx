
  import React, { forwardRef } from 'react';
  import { animated, useSpring } from '@react-spring/web';

  interface CapabilityCardProps {
    icon: React.ComponentType&lt;React.SVGProps&lt;SVGSVGElement&gt;&gt;;
    title: string;
    description: string;
    onClick: () => void;
  }

  /**
   * @description A card component displaying a single capability.
   * Includes icon, title, description, and handles click events.
   * Applies hover/focus effects.
   */
  export const CapabilityCard = forwardRef&lt;HTMLButtonElement, CapabilityCardProps&gt;(
    ({ icon: Icon, title, description, onClick }, ref) => {
      const [props, api] = useSpring(() => ({
        transform: 'scale(1)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        config: { tension: 300, friction: 15 },
      }));

      // Reduced motion check
      const prefersReducedMotion = typeof window !== 'undefined' &amp;&amp; window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const handleMouseEnter = () => {
        if (!prefersReducedMotion) {
          api.start({
            transform: 'scale(1.03)',
            boxShadow: '0 10px 15px -3px rgba(74, 20, 140, 0.3), 0 4px 6px -2px rgba(74, 20, 140, 0.15)', // Enhanced shadow with primary color hint
          });
        }
      };

      const handleMouseLeave = () => {
        if (!prefersReducedMotion) {
          api.start({
            transform: 'scale(1)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          });
        }
      };

      // Animation for the icon (subtle float/pulse)
      const iconAnimation = useSpring({
        loop: { reverse: true },
        from: { y: 0 },
        to: { y: -5 },
        config: { duration: 1500, tension: 120, friction: 14 },
        delay: Math.random() * 500, // Stagger start times slightly
      });


      return (
        &lt;animated.button
          ref={ref}
          style={prefersReducedMotion ? {} : props}
          className="group relative flex flex-col items-center text-center p-6 md:p-8 bg-gradient-to-br from-neutral-light to-neutral-lighter rounded-lg shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-accent focus-visible:ring-offset-background-main transition-shadow duration-300 ease-in-out h-full cursor-pointer overflow-hidden border border-transparent hover:border-secondary-main"
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleMouseEnter} // Apply hover effect on focus too
          onBlur={handleMouseLeave}
          aria-label={`Learn more about ${title}`}
        &gt;
          {/* Subtle background element for theme */}
          &lt;div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"&gt;
            {/* Example: Abstract geometric pattern or subtle gradient overlay */}
            {/* &lt;svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"&gt; ... &lt;/svg&gt; */}
          &lt;/div&gt;

          &lt;div className="relative z-10 flex flex-col items-center h-full"&gt;
            &lt;animated.div
              style={prefersReducedMotion ? {} : iconAnimation}
              className="mb-4 text-primary-main" // Use primary color for icon
            &gt;
              &lt;Icon className="w-12 h-12 md:w-16 md:h-16" /&gt;
            &lt;/animated.div&gt;
            &lt;h3 className="text-xl md:text-2xl font-poppins font-medium mb-2 text-text-dark"&gt;
              {title}
            &lt;/h3&gt;
            &lt;p className="text-base font-roboto text-text-medium flex-grow"&gt;
              {description}
            &lt;/p&gt;
            &lt;span className="mt-4 text-sm font-roboto text-secondary-main group-hover:underline"&gt;
              Learn More
            &lt;/span&gt;
          &lt;/div&gt;
        &lt;/animated.button&gt;
      );
    }
  );

  CapabilityCard.displayName = 'CapabilityCard';
  