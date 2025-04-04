
  import React from 'react';
  import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

  /**
   * @interface SplitScreenComparisonProps
   * @description Props for the SplitScreenComparison component.
   * @property {React.ReactNode} leftItem - The content (e.g., image, component) for the left side.
   * @property {string} leftLabel - Label for the left side.
   * @property {React.ReactNode} rightItem - The content for the right side.
   * @property {string} rightLabel - Label for the right side.
   */
  interface SplitScreenComparisonProps {
    leftItem: React.ReactNode;
    leftLabel: string;
    rightItem: React.ReactNode;
    rightLabel: string;
  }

  /**
   * @function SplitScreenComparison
   * @description A component using react-compare-slider to show a before/after comparison.
   * @param {SplitScreenComparisonProps} props - The component props.
   * @returns {React.ReactElement} The rendered SplitScreenComparison.
   */
  const SplitScreenComparison: React.FC&lt;SplitScreenComparisonProps&gt; = ({
    leftItem,
    leftLabel,
    rightItem,
    rightLabel,
  }) => {
    // Note: react-compare-slider handles its own accessibility for the slider interaction.
    // We ensure labels are provided for context.
    // Consider adding off-screen text or ARIA attributes if the visual content isn't self-explanatory.

    return (
      &lt;div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-xl border border-neutral-medium"&gt;
        &lt;ReactCompareSlider
          itemOne={
            &lt;div className="relative w-full h-full"&gt;
              {leftItem}
              &lt;div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded font-roboto"&gt;
                {leftLabel}
              &lt;/div&gt;
            &lt;/div&gt;
          }
          itemTwo={
             &lt;div className="relative w-full h-full"&gt;
              {rightItem}
              &lt;div className="absolute bottom-2 right-2 bg-primary-deep-purple bg-opacity-80 text-white text-sm px-2 py-1 rounded font-roboto"&gt;
                {rightLabel}
              &lt;/div&gt;
            &lt;/div&gt;
          }
          style={{ width: '100%', height: '100%' }}
          // Customize slider appearance
          handle={
            &lt;div style={{ width: '4px', height: '100%', backgroundColor: '#D500F9' /* Secondary Glowing Purple */ }} className="opacity-75 hover:opacity-100 transition-opacity duration-200"&gt;
              &lt;div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary-glowing-purple flex items-center justify-center text-white shadow-lg cursor-grab"&gt;
                &lt;svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"&gt;
                  &lt;path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /&gt;
                &lt;/svg&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          }
        /&gt;
      &lt;/div&gt;
    );
  };

  export default SplitScreenComparison;
  