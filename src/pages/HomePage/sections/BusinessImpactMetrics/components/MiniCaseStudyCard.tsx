
  import React from 'react';
  import { ArrowRight } from 'lucide-react'; // Assuming lucide-react is available

  /**
   * @interface MiniCaseStudyCardProps
   * @description Props for the MiniCaseStudyCard component.
   * @property {string} title - The title of the case study.
   * @property {string} industry - The industry vertical.
   * @property {string} metric - The key success metric highlighted.
   * @property {string} description - A short description of the case study.
   * @property {string} [link] - Optional URL for the full case study.
   * @property {string} [role] - ARIA role attribute.
   */
  interface MiniCaseStudyCardProps {
    title: string;
    industry: string;
    metric: string;
    description: string;
    link?: string;
    role?: string;
  }

  /**
   * @function MiniCaseStudyCard
   * @description A card component displaying a concise summary of a case study.
   * @param {MiniCaseStudyCardProps} props - The component props.
   * @returns {React.ReactElement} The rendered MiniCaseStudyCard.
   */
  const MiniCaseStudyCard: React.FC&lt;MiniCaseStudyCardProps&gt; = ({
    title,
    industry,
    metric,
    description,
    link,
    role
  }) => {
    const CardContent = () => (
      &lt;&gt;
        &lt;span className="inline-block bg-neutral-medium bg-opacity-20 text-accent-dark-blue text-xs font-semibold px-2 py-0.5 rounded mb-2 font-roboto"&gt;
          {industry}
        &lt;/span&gt;
        &lt;h4 className="text-lg font-semibold font-poppins text-primary-deep-purple mb-2"&gt;{title}&lt;/h4&gt;
        &lt;p className="text-xl font-bold text-secondary-glowing-purple mb-3 font-poppins"&gt;{metric}&lt;/p&gt;
        &lt;p className="text-sm text-neutral-dark font-roboto mb-4 flex-grow"&gt;{description}&lt;/p&gt;
        {link &amp;&amp; (
          &lt;div className="mt-auto flex items-center text-secondary-glowing-purple hover:text-primary-deep-purple transition-colors duration-200 text-sm font-semibold"&gt;
            Read More &lt;ArrowRight className="ml-1 w-4 h-4" /&gt;
          &lt;/div&gt;
        )}
      &lt;/&gt;
    );

    const commonClasses = "flex flex-col bg-white p-6 rounded-lg shadow-md border border-neutral-light h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:border-secondary-glowing-purple/50 focus-within:ring-2 focus-within:ring-secondary-glowing-purple focus-within:ring-offset-2 outline-none";

    return link ? (
      &lt;a
        href={link}
        target="_blank" // Consider opening in new tab or handling navigation differently
        rel="noopener noreferrer"
        className={`${commonClasses} group`}
        role={role || 'article'} // Use article role for semantic structure
        aria-label={`Case Study: ${title}`}
      &gt;
        &lt;CardContent /&gt;
      &lt;/a&gt;
    ) : (
      &lt;div
        className={commonClasses}
        role={role || 'article'}
        aria-label={`Case Study: ${title}`}
        tabIndex={0} // Make focusable if not a link
      &gt;
        &lt;CardContent /&gt;
      &lt;/div&gt;
    );
  };

  export default MiniCaseStudyCard;

  