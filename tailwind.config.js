
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      // Add paths to all files that use Tailwind classes
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary-deep-purple': '#4A148C', // Primary Deep Purple
          'secondary-glowing-purple': '#D500F9', // Secondary Glowing Purple
          'accent-dark-blue': '#000051', // Accent Dark Blue
          'neutral-dark': '#263238', // Neutral Dark
          'neutral-medium': '#B388FF', // Neutral Medium (Adjusted from spec for better contrast/use)
          'neutral-light': '#ECEFF1', // Neutral Light
          // Add shades if needed, e.g., primary-deep-purple/90
          // Add semantic names based on Shadcn UI conventions if used
          background: '#FFFFFF', // Example background
          foreground: '#263238', // Example foreground text
          primary: {
            DEFAULT: '#4A148C',
            foreground: '#FFFFFF', // Text on primary bg
          },
          secondary: {
            DEFAULT: '#D500F9',
            foreground: '#FFFFFF', // Text on secondary bg (adjust if needed)
          },
          muted: {
             DEFAULT: '#ECEFF1', // Neutral Light as muted background
             foreground: '#263238', // Text on muted
          },
          accent: {
             DEFAULT: '#B388FF', // Neutral Medium as accent
             foreground: '#000051', // Text on accent
          },
          // ... other Shadcn UI color roles if needed (destructive, card, etc.)
          border: '#ECEFF1', // Example border color
          input: '#B388FF', // Example input border
          ring: '#D500F9', // Example focus ring color
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif'],
        },
        // Example animation for pulsing glow - can be triggered with GSAP or utilities
        keyframes: {
          pulseGlow: {
            '0%, 100%': { boxShadow: '0 0 5px 2px rgba(213, 0, 249, 0.4)', opacity: 0.7 },
            '50%': { boxShadow: '0 0 20px 8px rgba(213, 0, 249, 0.7)', opacity: 1 },
          },
        },
        animation: {
          'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
      },
      // Define container settings if needed, or rely on default
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
         screens: {
           sm: '640px',
           md: '768px',
           lg: '1024px',
           xl: '1280px',
           '2xl': '1536px',
         },
      },
    },
    plugins: [
       require('@tailwindcss/typography'), // If using typography plugin
       require('@tailwindcss/forms'), // If using forms plugin
       require('tailwindcss-animate'), // For Shadcn UI animations
    ],
  }
  