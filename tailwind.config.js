
  /** @type {import('tailwindcss').Config} */
  const defaultTheme = require('tailwindcss/defaultTheme');

  module.exports = {
    darkMode: ["class"], // Or 'media' based on preference
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}', // Make sure src is included
      './index.html',
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          // NexusAgent Theme Colors (as defined in project details)
          primary: {
            DEFAULT: '#4A148C', // Deep Purple
            foreground: '#ECEFF1', // Light text on primary
          },
          secondary: {
            DEFAULT: '#D500F9', // Bright Magenta/Purple
            foreground: '#FFFFFF', // White text on secondary
          },
          accent: {
            DEFAULT: '#000051', // Deep Navy Blue
            foreground: '#ECEFF1', // Light text on accent
          },
          destructive: {
            DEFAULT: '#F44336', // Red for destructive actions
            foreground: '#FFFFFF',
          },
          muted: {
            DEFAULT: '#B388FF', // Lighter Purple/Lavender (for subtle elements)
            foreground: '#263238', // Dark text on muted
          },
          background: '#ECEFF1', // Light Gray/Off-white background
          foreground: '#263238', // Dark Gray/Blue text
          card: '#FFFFFF', // White card background
          'card-foreground': '#263238', // Text on cards
          popover: '#FFFFFF',
          'popover-foreground': '#263238',
          border: '#B388FF', // Use muted color for borders
          input: '#B388FF', // Use muted color for input borders
          ring: '#D500F9', // Use secondary color for focus rings

          // Neutrals (Derived for text/bg variations)
          'neutral-50': '#f8fafc', // Example light neutral
          'neutral-100': '#ECEFF1', // Provided neutral
          'neutral-200': '#e2e8f0',
          'neutral-300': '#B388FF', // Provided neutral
          'neutral-400': '#94a3b8',
          'neutral-500': '#64748b',
          'neutral-600': '#475569',
          'neutral-700': '#334155',
          'neutral-800': '#263238', // Provided neutral
          'neutral-900': '#1e293b',
          'neutral-950': '#0f172a', // Example dark neutral
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          // Define Poppins and Roboto
          poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
          roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
          // Add other custom animations if needed
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [require("tailwindcss-animate")], // Ensure animate plugin is included
  }
  