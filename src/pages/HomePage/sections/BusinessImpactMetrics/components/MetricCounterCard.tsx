
  import React, { useRef, useEffect, useState } from 'react';
  import { useInView } from 'react-intersection-observer';
  import CountUp from 'react-countup';
  import { gsap } from 'gsap';

  /**
   * @interface MetricCounterCardProps
   * @description Props for the MetricCounterCard component.
   * @property {number} value - The target numerical value for the counter.
   * @property {string} [suffix=''] - Optional suffix to display after the value (e.g., '%', 'x').
   * @property {string} label - The descriptive label for the metric.
   * @property {number} [decimals=0] - Number of decimal places for the counter.
   * @property {number} [animationDelay=0] - Delay before the animation starts (in seconds).
   * @property {string} [role] - ARIA role attribute.
   */
  interface MetricCounterCardProps {
    value: number;
    suffix?: string;
    label: string;
    decimals?: number;
    animationDelay?: number;
    role?: string;
  }

  /**
   * @function MetricCounterCard
   * @description A card component displaying an animated numerical counter for a key metric.
   * @param {MetricCounterCardProps} props - The component props.
   * @returns {React.ReactElement} The rendered MetricCounterCard.
   */
  const MetricCounterCard: React.FC&lt;MetricCounterCardProps&gt; = ({
    value,
    suffix = '',
    label,
    decimals = 0,
    animationDelay = 0,
    role
  }) => {
    const cardRef = useRef&lt;HTMLDivElement&gt;(null);
    const [startCount, setStartCount] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const { ref: inViewRef, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5, // Start animation when 50% visible
    });

    // Trigger count up when in view
    useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => {
          setStartCount(true);
        }, animationDelay * 1000); // Apply delay
        return () => clearTimeout(timer);
      }
    }, [inView, animationDelay]);

    // Pulsing glow effect animation using GSAP on hover/focus
    useEffect(() => {
      if (cardRef.current) {
        gsap.killTweensOf(cardRef.current.querySelector('.glow-element')); // Kill previous tweens
        if (isHovered) {
          gsap.to(cardRef.current.querySelector('.glow-element'), {
            boxShadow: '0 0 15px 5px rgba(213, 0, 249, 0.6), 0 0 30px 10px rgba(213, 0, 249, 0.4)', // #D500F9 glow
            scale: 1.03,
            duration: 0.5,
            ease: 'power2.out',
          });
           gsap.to(cardRef.current.querySelector('.glow-element'), {
             boxShadow: '0 0 25px 8px rgba(213, 0, 249, 0.7), 0 0 40px 15px rgba(213, 0, 249, 0.5)',
             repeat: -1,
             yoyo: true,
             duration: 1.5,
             ease: 'sine.inOut',
             delay: 0.5, // Start pulsing after initial scale
           });
        } else {
          gsap.to(cardRef.current.querySelector('.glow-element'), {
            boxShadow: '0 0 0px 0px rgba(213, 0, 249, 0)',
            scale: 1,
            duration: 0.3,
            ease: 'power2.in',
          });
        }
      }
    }, [isHovered]);

    // Combine refs for Intersection Observer and GSAP
    const setRefs = (node: HTMLDivElement | null) => {
      cardRef.current = node;
      inViewRef(node);
    };

    return (
      &lt;div
        ref={setRefs}
        className="glow-element relative bg-white p-6 rounded-lg shadow-md border border-neutral-light transition-transform duration-300 ease-in-out transform hover:shadow-lg focus-within:shadow-lg focus-within:ring-2 focus-within:ring-secondary-glowing-purple focus-within:ring-offset-2 outline-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0} // Make focusable
        role={role}
        aria-label={`${label}: ${value}${suffix}`}
      &gt;
         {/* Optional: Add a subtle background pattern or gradient */}
         {/* &lt;div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-20 rounded-lg"&gt;&lt;/div&gt; */}

        &lt;div className="relative z-10 text-center"&gt;
          &lt;div
            className="text-4xl lg:text-5xl font-bold font-poppins text-primary-deep-purple mb-2"
            aria-hidden="true" // Hide from screen reader as value is in aria-label
          &gt;
            {startCount ? (
              &lt;CountUp
                start={0}
                end={value}
                duration={2.5} // Animation duration
                decimals={decimals}
                suffix={suffix}
                enableScrollSpy={false} // We use react-intersection-observer instead
                preserveValue={true} // Keep value after animation
              /&gt;
            ) : (
              `0${suffix}` // Initial state before animation
            )}
          &lt;/div&gt;
          &lt;p className="text-base font-roboto text-neutral-dark"&gt;
            {label}
          &lt;/p&gt;
          {/* Hidden span for screen readers to announce the final value clearly */}
           &lt;span className="sr-only" aria-live="polite"&gt;
             {startCount ? `${label}: ${value}${suffix}` : `${label}: Loading...`}
           &lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    );
  };

  export default MetricCounterCard;
  