
  import React, { useRef, useEffect, useState } from 'react';
  import Lottie from 'react-lottie';
  import { useInView } from 'react-intersection-observer';
  import { motion, useMotionValue, useTransform } from 'framer-motion';

  // Assuming you have a Lottie animation JSON file at this path
  // In a real project, fetch this or import it appropriately
  // const animationData = require('/public/animations/agent-animation.json');

  interface AgentVisualizationProps {
    // You might need props to control the animation state if needed
  }

  /**
   * Component to display the Lottie animation for AI agents.
   * Includes lazy loading via react-intersection-observer and subtle parallax effect.
   */
  export const AgentVisualization: React.FC&lt;AgentVisualizationProps&gt; = () =&gt; {
    const [animationData, setAnimationData] = useState&lt;object | null&gt;(null);
    const [isLoading, setIsLoading] = useState(true);
    const { ref, inView } = useInView({
      triggerOnce: true, // Load only once when it enters the viewport
      threshold: 0.1, // Trigger when 10% is visible
    });

    const containerRef = useRef&lt;HTMLDivElement | null&gt;(null);
    // Parallax effect values
    const mouseX = useMotionValue(0.5); // Center initially
    const mouseY = useMotionValue(0.5); // Center initially

    const rotateX = useTransform(mouseY, [0, 1], [-5, 5]); // Tilt up/down
    const rotateY = useTransform(mouseX, [0, 1], [5, -5]); // Tilt left/right

    useEffect(() =&gt; {
      const fetchAnimation = async () =&gt; {
        try {
          // Adjust the path as per your project structure and how you serve static assets
          const response = await fetch('/animations/agent-animation.json');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setAnimationData(data);
        } catch (error) {
          console.error("Failed to load Lottie animation:", error);
          // Optionally set a fallback state or image
        } finally {
          setIsLoading(false);
        }
      };

      if (inView) {
        fetchAnimation();
      }
    }, [inView]);

    // Handle mouse move for parallax effect
    const handleMouseMove = (event: React.MouseEvent&lt;HTMLDivElement, MouseEvent&gt;) =&gt; {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (event.clientX - left) / width;
        const y = (event.clientY - top) / height;
        mouseX.set(x);
        mouseY.set(y);
    };

    // Reset parallax on mouse leave
    const handleMouseLeave = () =&gt; {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      &lt;div
        ref={ref}
        className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-full flex items-center justify-center"
        aria-label="Animated visualization of AI agents processing information"
        role="img"
      &gt;
        {/* Container for parallax effect */}
        &lt;motion.div
            ref={containerRef}
            className="w-full h-full"
            style={{
                perspective: 1000, // Needed for 3D rotation
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        &gt;
            &lt;motion.div
                className="w-full h-full transition-transform duration-200 ease-out"
                style={{ rotateX, rotateY }}
            &gt;
                {(isLoading &amp;&amp; inView) &amp;&amp; (
                &lt;div className="absolute inset-0 flex items-center justify-center text-neutral-400"&gt;
                    Loading Animation...
                &lt;/div&gt;
                )}
                {(!isLoading &amp;&amp; animationData &amp;&amp; inView) &amp;&amp; (
                &lt;Lottie options={defaultOptions} height="100%" width="100%" /&gt;
                )}
                {!inView &amp;&amp; (
                // Optional: Placeholder before loading starts
                &lt;div className="w-full h-full bg-neutral-800/30 rounded-lg"&gt;&lt;/div&gt;
                )}
            &lt;/motion.div&gt;
        &lt;/motion.div&gt;
      &lt;/div&gt;
    );
  };
  