
  import React from 'react';
  import { HeroSection } from './sections/HeroSection/HeroSection';
  import { KeyCapabilitiesShowcase } from './sections/KeyCapabilitiesShowcase/KeyCapabilitiesShowcase';
  import { InteractiveAgentWorkflowDemonstration } from './sections/InteractiveAgentWorkflowDemonstration';
  import BusinessImpactMetrics from './sections/BusinessImpactMetrics/BusinessImpactMetrics';
  import { CallToActionTrialSignup } from './sections/CallToActionTrialSignup/CallToActionTrialSignup';

  /**
   * HomePage Component
   * 
   * @description The main landing page of the NexusAgent website, composed of multiple
   * sections that guide the user through the product's value proposition, capabilities,
   * workflow demonstration, business impact, and call-to-action.
   * 
   * @returns {JSX.Element} The assembled HomePage component
   */
  const HomePage: React.FC = () => {
    return (
      <>
        {/* Hero Section - Introduction and primary CTAs */}
        <HeroSection />
        
        {/* Key Capabilities - Showcase the main AI agent capabilities */}
        <KeyCapabilitiesShowcase />
        
        {/* Interactive Workflow - Demonstrate how the agents work together */}
        <InteractiveAgentWorkflowDemonstration />
        
        {/* Business Impact - Metrics and case studies */}
        <BusinessImpactMetrics />
        
        {/* CTA Section - Convert visitors to trial signups */}
        <CallToActionTrialSignup id="signup" />
      </>
    );
  };

  export default HomePage;
  