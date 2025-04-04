
  import React, { useState } from 'react';
  import { useForm, SubmitHandler } from 'react-hook-form';
  import { yupResolver } from '@hookform/resolvers/yup';
  import * as yup from 'yup';
  import { Input } from '@/components/ui/input'; // Assuming Input component exists
  import { Button } from '@/components/ui/button'; // Assuming Button component exists
  import { Label } from '@/components/ui/label'; // Assuming Label component exists
  import { Loader2, CheckCircle } from 'lucide-react'; // Icons

  /**
   * @typedef SignupFormData
   * @property {string} email - User's email address.
   * @property {string} companyName - User's company name.
   */
  export interface SignupFormData {
    email: string;
    companyName: string;
  }

  /**
   * @typedef SignupFormProps
   * @property {(data: SignupFormData) => void} onSubmitSuccess - Callback function when form submits successfully.
   */
  export interface SignupFormProps {
    onSubmitSuccess: (data: SignupFormData) => void;
  }

  // Validation Schema
  const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address').required('Email is required'),
    companyName: yup.string().required('Company name is required').min(2, 'Company name must be at least 2 characters'),
  }).required();

  /**
   * SignupForm Component
   * Handles the trial signup form submission and validation.
   *
   * @param {SignupFormProps} props - Component properties.
   * @returns {JSX.Element} The rendered signup form.
   */
  export const SignupForm: React.FC<SignupFormProps> = ({ onSubmitSuccess }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState&lt;string | null&gt;(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm&lt;SignupFormData&gt;({
      resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler&lt;SignupFormData&gt; = async (data) => {
      setIsLoading(true);
      setSubmitError(null);
      setIsSuccess(false);

      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
        // Replace with actual API call
        console.log('Submitting data:', data);
        // Assuming API call is successful
        setIsLoading(false);
        setIsSuccess(true);
        onSubmitSuccess(data);
        reset(); // Clear form fields on success
        // Optionally hide success state after a delay
        setTimeout(() => setIsSuccess(false), 5000);
      } catch (error) {
        setIsLoading(false);
        setSubmitError('An error occurred during signup. Please try again.');
        console.error('Signup failed:', error);
      }
    };

    // Potential auto-detection of company domain (basic example)
    // const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    //   const email = e.target.value;
    //   if (email.includes('@') && !getValues('companyName')) {
    //     const domain = email.split('@')[1].split('.')[0];
    //     setValue('companyName', domain.charAt(0).toUpperCase() + domain.slice(1)); // Basic capitalization
    //   }
    // };

    return (
      &lt;form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate&gt;
        &lt;div className="space-y-2"&gt;
          &lt;Label htmlFor="email" className="font-roboto text-sm font-medium text-neutral-content" style={{ color: '#263238' }}&gt;Work Email&lt;/Label&gt;
          &lt;Input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register('email')}
            // onBlur={handleEmailBlur} // Uncomment for domain auto-detect
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
            className={`w-full font-roboto ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-neutral-border focus:border-primary focus:ring-primary'}`}
            style={{ borderColor: errors.email ? '' : '#ECEFF1', '--tw-ring-color': errors.email ? '' : '#4A148C' } as React.CSSProperties}
          /&gt;
          {errors.email &amp;&amp; &lt;p id="email-error" className="text-sm text-red-600 mt-1 font-roboto" role="alert"&gt;{errors.email.message}&lt;/p&gt;}
        &lt;/div&gt;

        &lt;div className="space-y-2"&gt;
          &lt;Label htmlFor="companyName" className="font-roboto text-sm font-medium text-neutral-content" style={{ color: '#263238' }}&gt;Company Name&lt;/Label&gt;
          &lt;Input
            id="companyName"
            type="text"
            placeholder="Your Company Inc."
            {...register('companyName')}
            aria-invalid={errors.companyName ? "true" : "false"}
            aria-describedby="companyName-error"
            className={`w-full font-roboto ${errors.companyName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-neutral-border focus:border-primary focus:ring-primary'}`}
             style={{ borderColor: errors.companyName ? '' : '#ECEFF1', '--tw-ring-color': errors.companyName ? '' : '#4A148C' } as React.CSSProperties}
          /&gt;
          {errors.companyName &amp;&amp; &lt;p id="companyName-error" className="text-sm text-red-600 mt-1 font-roboto" role="alert"&gt;{errors.companyName.message}&lt;/p&gt;}
        &lt;/div&gt;

        {submitError &amp;&amp; &lt;p className="text-sm text-red-600 font-roboto" role="alert"&gt;{submitError}&lt;/p&gt;}

        &lt;div&gt;
           &lt;Button
            type="submit"
            disabled={isLoading || isSuccess}
            className="w-full font-roboto font-semibold text-lg py-3 px-6 transition-all duration-300 ease-in-out relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed
                       bg-gradient-to-r from-secondary to-primary text-white
                       hover:from-primary hover:to-secondary
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            style={{ '--tw-gradient-from': '#D500F9', '--tw-gradient-to': '#4A148C', '--tw-ring-color': '#4A148C' } as React.CSSProperties}
          &gt;
             {/* Concentrated glow effect on hover/focus */}
            &lt;span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-focus:opacity-10 transition-opacity duration-300 rounded-md"
                  style={{ filter: 'blur(15px)', background: 'radial-gradient(circle, rgba(213,0,249,0.7) 0%, rgba(213,0,249,0) 70%)' }}&gt;&lt;/span&gt;

            &lt;span className="relative z-10 flex items-center justify-center"&gt;
              {isLoading ? (
                &lt;&gt;
                  &lt;Loader2 className="mr-2 h-5 w-5 animate-spin" /&gt; Processing...
                &lt;/&gt;
              ) : isSuccess ? (
                &lt;&gt;
                  &lt;CheckCircle className="mr-2 h-5 w-5" /&gt; Success! Welcome Aboard!
                &lt;/&gt;
              ) : (
                'Start Your Free 14-Day Trial'
              )}
            &lt;/span&gt;
          &lt;/Button&gt;
          {isSuccess &amp;&amp; &lt;div aria-live="polite" className="sr-only"&gt;Signup successful. Welcome aboard.&lt;/div&gt;}
           {isLoading &amp;&amp; &lt;div aria-live="polite" className="sr-only"&gt;Processing signup.&lt;/div&gt;}
           {submitError &amp;&amp; &lt;div aria-live="assertive" className="sr-only"&gt;{submitError}&lt;/div&gt;}
        &lt;/div&gt;
         &lt;p className="text-xs text-neutral-muted text-center font-roboto" style={{ color: '#B388FF' }}&gt;
            By signing up, you agree to our Terms of Service and Privacy Policy.
          &lt;/p&gt;
      &lt;/form&gt;
    );
  };
  