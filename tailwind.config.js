
  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Theme Colors based on spec
          primary: {
            main: '#4A148C', // Purple - Sophisticated, Magician
            light: '#7C43BD',
            dark: '#1A0033',
          },
          secondary: {
            main: '#D500F9', // Magenta - Energetic, Magical Accent
            light: '#E060FF',
            dark: '#9E00B8',
          },
          accent: {
            main: '#000051', // Deep Blue - Forward-looking, Stable
            light: '#3F51B5', // Example light shade
            dark: '#000029', // Example dark shade
          },
          neutral: {
            dark: '#263238', // Dark Gray/Blue - Text, Backgrounds
            medium: '#546E7A', // Medium Gray
            light: '#B388FF', // Light Purple/Gray - Subtle Backgrounds, Highlights
            lighter: '#ECEFF1', // Very Light Gray/Off-white - Backgrounds
          },
          background: {
             main: '#1A1A2E', // Dark background for contrast, fits cosmic/magic theme
             light: '#2A2A4E',
             dark: '#0F0F1A',
          },
          text: {
             light: '#ECEFF1', // Light text for dark backgrounds
             dark: '#263238', // Dark text for light backgrounds
             medium: '#B0BEC5', // Medium contrast text
             primary: '#4A148C', // Use primary color for text highlights
             accent: '#D500F9', // Use secondary/accent for specific text highlights
             primary_accent: '#B388FF', // Use neutral-light for some headings or highlights
          }
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'], // For headlines
          roboto: ['Roboto', 'sans-serif'], // For body text
        },
        // Add subtle animations or gradients for the "magic" theme if desired
        // Example: Keyframes for floating effect
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
          }
        },
        animation: {
          float: 'float 3s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }
  