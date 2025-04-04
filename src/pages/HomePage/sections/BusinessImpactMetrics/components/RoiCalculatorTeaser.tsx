
  import React, { useState } from 'react';
  import { Input } from '@/components/ui/input'; // Assuming path alias is set up
  import { Button } from '@/components/ui/button'; // Assuming path alias is set up
  import { Label } from '@/components/ui/label'; // Assuming path alias is set up
  import { Calculator } from 'lucide-react';

  /**
   * @interface RoiCalculatorTeaserProps
   * @description Props for the RoiCalculatorTeaser component.
   * @property {(data: { currentMetric: string; potentialImprovement: string }) => void} onSubmit - Callback function when the form is submitted.
   */
  interface RoiCalculatorTeaserProps {
    onSubmit: (data: { currentMetric: string; potentialImprovement: string }) => void;
  }

  /**
   * @function RoiCalculatorTeaser
   * @description A small form teasing an ROI calculation.
   * @param {RoiCalculatorTeaserProps} props - The component props.
   * @returns {React.ReactElement} The rendered RoiCalculatorTeaser.
   */
  const RoiCalculatorTeaser: React.FC&lt;RoiCalculatorTeaserProps&gt; = ({ onSubmit }) => {
    const [currentMetric, setCurrentMetric] = useState('');
    const [potentialImprovement, setPotentialImprovement] = useState('');

    const handleSubmit = (event: React.FormEvent&lt;HTMLFormElement&gt;) => {
      event.preventDefault();
      onSubmit({ currentMetric, potentialImprovement });
      // Optionally clear fields after submission
      // setCurrentMetric('');
      // setPotentialImprovement('');
    };

    return (
      &lt;div className="bg-gradient-to-r from-primary-deep-purple to-accent-dark-blue p-8 md:p-12 rounded-lg shadow-xl text-white"&gt;
        &lt;div className="max-w-3xl mx-auto text-center"&gt;
          &lt;Calculator className="w-10 h-10 mx-auto mb-4 text-secondary-glowing-purple" /&gt;
          &lt;h3 className="text-2xl md:text-3xl font-bold font-poppins mb-4"&gt;Estimate Your Potential ROI&lt;/h3&gt;
          &lt;p className="text-base md:text-lg font-roboto text-neutral-light mb-8"&gt;
            Curious about the impact NexusAgent could have? Enter a couple of your current metrics to get a preliminary estimate.
          &lt;/p&gt;

          &lt;form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-end"&gt;
            &lt;div className="text-left"&gt;
              &lt;Label htmlFor="currentMetric" className="block text-sm font-medium mb-1 text-neutral-light font-roboto"&gt;
                Your Current Metric (e.g., Leads/Month)
              &lt;/Label&gt;
              &lt;Input
                id="currentMetric"
                type="text" // Use text to allow units, or number if strictly numerical
                placeholder="e.g., 500 Leads"
                value={currentMetric}
                onChange={(e) => setCurrentMetric(e.target.value)}
                required
                className="bg-white bg-opacity-10 border-neutral-medium placeholder-neutral-light text-white focus:ring-secondary-glowing-purple focus:border-secondary-glowing-purple"
                aria-label="Your Current Metric (e.g., Leads per Month)"
              /&gt;
            &lt;/div&gt;
            &lt;div className="text-left"&gt;
              &lt;Label htmlFor="potentialImprovement" className="block text-sm font-medium mb-1 text-neutral-light font-roboto"&gt;
                Target Improvement (e.g., %)
              &lt;/Label&gt;
              &lt;Input
                id="potentialImprovement"
                type="text" // Use text to allow units like %
                placeholder="e.g., 20%"
                value={potentialImprovement}
                onChange={(e) => setPotentialImprovement(e.target.value)}
                required
                 className="bg-white bg-opacity-10 border-neutral-medium placeholder-neutral-light text-white focus:ring-secondary-glowing-purple focus:border-secondary-glowing-purple"
                aria-label="Target Improvement (e.g., percentage)"
              /&gt;
            &lt;/div&gt;
            &lt;Button
              type="submit"
              variant="secondary" // Assuming a secondary variant exists with appropriate styling
              className="w-full bg-secondary-glowing-purple hover:bg-opacity-90 text-primary-deep-purple font-semibold py-3 md:py-2.5" // Adjusted padding for consistency
            &gt;
              Calculate Estimate
            &lt;/Button&gt;
          &lt;/form&gt;
          &lt;p className="text-xs text-neutral-medium mt-4 font-roboto"&gt;
            This provides a basic estimate. Contact us for a detailed ROI analysis.
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    );
  };

  export default RoiCalculatorTeaser;
  