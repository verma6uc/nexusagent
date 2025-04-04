
  import React, { useState, useEffect, useRef } from 'react';
  import { SignupForm, SignupFormData } from './components/SignupForm';
  import { FaqAccordion } from './components/FaqAccordion';
  import { Button } from '@/components/ui/button'; // Assuming Button component exists
  import { motion } from 'framer-motion'; // Using framer-motion for simpler animations
  import Confetti from 'react-confetti';
  import { useWindowSize } from 'react-use'; // Helper hook for confetti

  // Placeholder icons - replace with actual icons/images
  const PlaceholderLogo = ({ className }: { className?: string }) => (
    <div className={`h-10 w-24 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-500 ${className}`}>Logo</div>
  );
  const PlaceholderBadge = ({ className }: { className?: string }) => (
    <div className={`h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-500 ${className}`}>Badge</div>
  );
  const PlaceholderScreenshot = ({ className }: { className?: string }) => (
    <div className={`aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg shadow-lg flex items-center justify-center text-gray-500 p-4 ${className}`}>
      <p className="text-center text-sm">Animated Product Screenshot Placeholder</p>
    </div>
  );


  /**
   * @typedef CallToActionTrialSignupProps
   * @property {string} [id] - Optional ID for the section.
   */
  interface CallToActionTrialSignupProps {
    id?: string;
  }

  /**
   * CallToActionTrialSignup Section Component
   *
   * @param {CallToActionTrialSignupProps} props - Component properties.
   * @returns {JSX.Element} The rendered Call to Action and Trial Signup section.
   */
  export const CallToActionTrialSignup: React.FC<CallToActionTrialSignupProps> = ({ id }) => {
    const [isSignupSuccess, setIsSignupSuccess] = useState(false);
    const { width, height } = useWindowSize();
    const containerRef = useRef&lt;HTMLDivElement&gt;(null);

    const faqItems = [
      {
        question: 'How long does implementation take?',
        answer: 'Most clients are up and running within 1-2 business days. Our onboarding process is designed for speed and simplicity.',
      },
      {
        question: 'Can I migrate my existing data?',
        answer: 'Absolutely. We offer tools and support to help you easily migrate your data from your existing CRM or spreadsheets.',
      },
      {
        question: 'How secure is my data?',
        answer: 'Data security is our top priority. We employ industry-standard encryption, regular backups, and comply with major security certifications like ISO 27001.',
      },
      {
        question: 'What happens after the 14-day trial?',
        answer: 'You\'ll have the option to choose a paid plan that fits your needs. We\'ll notify you before your trial ends. If you choose not to continue, your account will be deactivated, but we can provide an export of your data upon request.',
      }
    ];

    const handleSignupSuccess = (data: SignupFormData) => {
      console.log('Signup successful:', data);
      setIsSignupSuccess(true);
      // Optionally hide confetti after a few seconds
      setTimeout(() => setIsSignupSuccess(false), 8000); // Hide after 8 seconds
    };

    return (
      &lt;section
        id={id}
        className="py-16 md:py-24 bg-gradient-to-b from-neutral-100 to-white overflow-hidden" // Use neutral background
        aria-labelledby="cta-heading"
      &gt;
        {isSignupSuccess &amp;&amp; &lt;Confetti width={width} height={height} recycle={false} numberOfPieces={300} /&gt;}
        &lt;div className="container mx-auto px-4"&gt;
          &lt;motion.div
            ref={containerRef}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // Subtle floating effect (can be enhanced with GSAP if needed)
            // whileHover={{ y: -5 }} // Example hover effect
            className="bg-white rounded-xl shadow-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden" // Main card container
          &gt;
            &lt;div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"&gt;
              {/* Left Column: Content & Form */}
              &lt;div&gt;
                &lt;h2
                  id="cta-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-4 font-poppins text-center lg:text-left"
                  style={{ color: '#4A148C' }} // Primary color
                &gt;
                  Experience the Magic of AI-Powered CRM
                &lt;/h2&gt;
                &lt;p className="text-lg md:text-xl text-neutral-content mb-8 font-roboto text-center lg:text-left" style={{ color: '#263238' }}&gt;
                  14 Days to Transform Your Customer Relationships. No credit card required.
                &lt;/p&gt;

                &lt;SignupForm onSubmitSuccess={handleSignupSuccess} /&gt;

                &lt;div className="mt-8 text-center lg:text-left"&gt;
                  &lt;p className="text-sm text-neutral-muted mb-4 font-roboto" style={{ color: '#B388FF' }}&gt;Or explore other options:&lt;/p&gt;
                  &lt;div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"&gt;
                    &lt;Button variant="outline" className="border-accent text-accent hover:bg-accent/10" style={{ borderColor: '#000051', color:'#000051' }}&gt;
                      Schedule Demo
                    &lt;/Button&gt;
                    &lt;Button variant="link" className="text-accent hover:underline" style={{ color:'#000051' }}&gt;
                      Download Resources
                    &lt;/Button&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;

              {/* Right Column: Trust & Visuals */}
              &lt;div className="space-y-8"&gt;
                &lt;div&gt;
                  &lt;h3 className="text-lg font-semibold text-primary-dark mb-4 font-roboto text-center lg:text-left" style={{ color: '#4A148C' }}&gt;Trusted by Leading Companies&lt;/h3&gt;
                  &lt;div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"&gt;
                    &lt;PlaceholderLogo /&gt;
                    &lt;PlaceholderLogo /&gt;
                    &lt;PlaceholderLogo /&gt;
                    &lt;PlaceholderBadge /&gt; {/* Security Badge */}
                  &lt;/div&gt;
                &lt;/div&gt;

                &lt;PlaceholderScreenshot className="w-full" /&gt;

                &lt;div&gt;
                   &lt;h3 className="text-lg font-semibold text-primary-dark mb-4 font-roboto text-center lg:text-left" style={{ color: '#4A148C' }}&gt;Quick Implementation&lt;/h3&gt;
                   &lt;div className="relative pt-1"&gt;
                      &lt;div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200"&gt;
                        &lt;div style={{ width: '100%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-secondary to-primary"&gt;&lt;/div&gt;
                      &lt;/div&gt;
                      &lt;p className="text-sm text-neutral-content font-roboto text-center lg:text-left" style={{ color: '#263238' }}&gt;Get started in minutes, fully operational in days.&lt;/p&gt;
                   &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;

            {/* FAQ Section */}
            &lt;div className="mt-16 pt-12 border-t border-neutral-border" style={{ borderColor: '#ECEFF1' }}&gt;
              &lt;h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-8 font-poppins text-center" style={{ color: '#4A148C' }}&gt;
                Frequently Asked Questions
              &lt;/h3&gt;
              &lt;FaqAccordion items={faqItems} /&gt;
            &lt;/div&gt;

             {/* Optional: Subtle decorative element */}
             &lt;div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-tl from-secondary/10 to-primary/5 rounded-full opacity-50 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(213,0,249,0.1) 0%, rgba(74,20,140,0.0) 70%)' }}&gt;&lt;/div&gt;
             &lt;div className="absolute -top-20 -left-20 w-56 h-56 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-full opacity-40 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(213,0,249,0.1) 0%, rgba(74,20,140,0.0) 70%)' }}&gt;&lt;/div&gt;

          &lt;/motion.div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    );
  };
  