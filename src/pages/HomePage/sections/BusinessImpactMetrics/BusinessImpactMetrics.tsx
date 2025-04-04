
  import React, { Suspense, lazy, useRef, useEffect, useState } from 'react';
  import { useInView } from 'react-intersection-observer';
  import { gsap } from 'gsap';
  import MetricCounterCard from './components/MetricCounterCard';
  import MiniCaseStudyCard from './components/MiniCaseStudyCard';
  import RoiCalculatorTeaser from './components/RoiCalculatorTeaser';

  // Lazy load the comparison slider
  const SplitScreenComparison = lazy(() => import('./components/SplitScreenComparison'));

  /**
   * @interface BusinessImpactMetricsProps
   * @description Props for the BusinessImpactMetrics component. Currently none, but defined for future extensibility.
   */
  interface BusinessImpactMetricsProps {}

  // Mock data - replace with actual data source if needed
  const metricsData = [
    { value: 37, suffix: '%', label: 'Increase in sales team productivity', id: 'metric-1' },
    { value: 42, suffix: '%', label: 'Reduction in manual data entry', id: 'metric-2' },
    { value: 28, suffix: '%', label: 'Improvement in lead conversion rates', id: 'metric-3' },
    { value: 3.5, suffix: 'x', label: 'Faster customer inquiry response time', decimals: 1, id: 'metric-4' },
  ];

  const caseStudiesData = [
    {
      id: 'cs-1',
      title: 'SaaS Startup Sees Rapid Growth',
      industry: 'Technology',
      metric: '+45% Lead Conversion',
      description: 'Leveraging AI agents for lead qualification led to a significant jump in conversions within 6 months.',
      link: '/case-studies/saas-startup',
    },
    {
      id: 'cs-2',
      title: 'E-commerce Retailer Boosts Efficiency',
      industry: 'Retail',
      metric: '-50% Support Ticket Volume',
      description: 'Automated customer service inquiries resolved common issues instantly, freeing up human agents.',
      link: '/case-studies/ecommerce-retailer',
    },
    {
      id: 'cs-3',
      title: 'Financial Services Firm Enhances Compliance',
      industry: 'Finance',
      metric: '99.9% Data Accuracy',
      description: 'AI-driven data entry and validation minimized errors and improved regulatory compliance reporting.',
      link: '/case-studies/financial-services',
    },
  ];

  /**
   * @function BusinessImpactMetrics
   * @description Section displaying key business impact metrics, comparisons, case studies, and an ROI calculator teaser.
   * @returns {React.ReactElement} The rendered BusinessImpactMetrics section.
   */
  const BusinessImpactMetrics: React.FC&lt;BusinessImpactMetricsProps&gt; = () => {
    const sectionRef = useRef&lt;HTMLDivElement&gt;(null);
    const headlineRef = useRef&lt;HTMLHeadingElement&gt;(null);
    const metricsGridRef = useRef&lt;HTMLDivElement&gt;(null);
    const comparisonRef = useRef&lt;HTMLDivElement&gt;(null);
    const caseStudiesRef = useRef&lt;HTMLDivElement&gt;(null);
    const roiTeaserRef = useRef&lt;HTMLDivElement&gt;(null);

    const [sectionInViewRef, sectionInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    // Animation effect for the section elements
    useEffect(() => {
      if (sectionInView &amp;&amp; sectionRef.current) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

        tl.fromTo(headlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 0.2 })
          .fromTo(metricsGridRef.current?.children || [], { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.15 }, "-=0.6")
          .fromTo(comparisonRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1 }, "-=0.5")
          .fromTo(caseStudiesRef.current?.children || [], { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1 }, "-=0.4")
          .fromTo(roiTeaserRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.5");
      }
    }, [sectionInView]);

    // Combine refs for the Intersection Observer
    const setRefs = (node: HTMLDivElement | null) => {
        sectionRef.current = node;
        sectionInViewRef(node);
    };

    const handleRoiSubmit = (data: { currentMetric: string; potentialImprovement: string }) => {
      console.log('ROI Teaser Submitted:', data);
      // Add logic to handle submission, e.g., redirect or show modal
      alert('Thank you! We\'ll calculate your potential ROI.');
    };

    return (
      &lt;section
        ref={setRefs}
        id="business-impact"
        className="py-16 md:py-24 bg-gradient-to-b from-neutral-light via-white to-neutral-light overflow-hidden"
        aria-labelledby="business-impact-heading"
      &gt;
        &lt;div className="container mx-auto px-4"&gt;
          &lt;h2
            id="business-impact-heading"
            ref={headlineRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-center mb-12 md:mb-16 text-primary-deep-purple"
          &gt;
            Measurable Magic for Your Business
          &lt;/h2&gt;

          &lt;!-- KPI Counters Grid --&gt;
          &lt;div
            ref={metricsGridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-24"
            role="list"
          &gt;
            {metricsData.map((metric, index) => (
              &lt;MetricCounterCard
                key={metric.id}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                decimals={metric.decimals}
                animationDelay={index * 0.1} // Slight delay stagger
                role="listitem"
              /&gt;
            ))}
          &lt;/div&gt;

          &lt;!-- Split Screen Comparison --&gt;
          &lt;div ref={comparisonRef} className="mb-16 md:mb-24"&gt;
             &lt;h3 className="text-2xl md:text-3xl font-semibold font-poppins text-center mb-8 text-accent-dark-blue"&gt;
                Before &amp; After: See the NexusAgent Difference
             &lt;/h3&gt;
            &lt;Suspense fallback={&lt;div className="text-center p-8 text-neutral-medium"&gt;Loading Comparison...&lt;/div&gt;}&gt;
              &lt;SplitScreenComparison
                // Replace with actual image paths or components
                leftItem={&lt;img src="/placeholder-before.png" alt="Traditional CRM Process" className="w-full h-full object-cover"/&gt;}
                leftLabel="Traditional CRM"
                rightItem={&lt;img src="/placeholder-after.png" alt="NexusCRM Agent Assisted Process" className="w-full h-full object-cover"/&gt;}
                rightLabel="NexusCRM + AI Agent"
              /&gt;
            &lt;/Suspense&gt;
          &lt;/div&gt;

          &lt;!-- Mini Case Studies --&gt;
          &lt;div className="mb-16 md:mb-24"&gt;
            &lt;h3 className="text-2xl md:text-3xl font-semibold font-poppins text-center mb-8 text-accent-dark-blue"&gt;
              Real Results Across Industries
            &lt;/h3&gt;
            &lt;div
              ref={caseStudiesRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              role="list"
            &gt;
              {caseStudiesData.map((study) => (
                &lt;MiniCaseStudyCard
                  key={study.id}
                  title={study.title}
                  industry={study.industry}
                  metric={study.metric}
                  description={study.description}
                  link={study.link}
                  role="listitem"
                /&gt;
              ))}
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;!-- ROI Calculator Teaser --&gt;
          &lt;div ref={roiTeaserRef}&gt;
            &lt;RoiCalculatorTeaser onSubmit={handleRoiSubmit} /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    );
  };

  export default BusinessImpactMetrics;

  