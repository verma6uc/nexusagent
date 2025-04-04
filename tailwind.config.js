
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    darkMode: ["class"], // Or 'media' based on preference
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}', // Make sure this includes your project structure
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
          // NexusAgent Theme Palette
          'primary': '#4A148C',        // Deep Purple (Magician - Transformative, Visionary)
          'primary-dark': '#311B92',   // Deeper Purple for contrast/hover
          'secondary': '#D500F9',      // Vivid Magenta (Magician - Enchanting, Powerful)
          'accent': '#000051',        // Dark Blue (Sage - Wise, Trustworthy) - For trust elements, secondary CTAs
          'neutral': {
             DEFAULT: '#ECEFF1',     // Light Grey-Blue (Background)
             'background': '#FFFFFF', // White for cards/clean areas
             'content': '#263238',    // Dark Grey-Blue (Body Text)
             'muted': '#B388FF',      // Light Purple (Muted Text, Hints) - Adjusted from provided #B388FF
             'border': '#CFD8DC',     // Lighter Grey-Blue for borders - Adjusted from #ECEFF1
          },
          // Shadcn UI Semantic Colors (Map your theme)
          border: 'var(--border)', // Use CSS variables or map directly
          input: 'var(--input)', // Use CSS variables or map directly
          ring: 'var(--ring)', // Use CSS variables or map directly (e.g., #4A148C)
          background: 'var(--background)', // e.g., #FFFFFF or #ECEFF1
          foreground: 'var(--foreground)', // e.g., #263238
          primary: { // For Shadcn components
            DEFAULT: "hsl(var(--primary))", // Map to #4A148C
            foreground: "hsl(var(--primary-foreground))", // e.g., white #FFFFFF
          },
          secondary: { // For Shadcn components
            DEFAULT: "hsl(var(--secondary))", // Map to #D500F9
            foreground: "hsl(var(--secondary-foreground))", // e.g., white #FFFFFF
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))", // e.g., a red color
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))", // Map to #B388FF or a grey
            foreground: "hsl(var(--muted-foreground))", // e.g., #263238
          },
          accent: { // For Shadcn components
             DEFAULT: "hsl(var(--accent))", // Map to #000051 or a subtle hover grey/purple
             foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))", // Map to #FFFFFF
            foreground: "hsl(var(--card-foreground))", // Map to #263238
          },
        },
        fontFamily: {
           poppins: ['Poppins', 'sans-serif'],
           roboto: ['Roboto', 'sans-serif'],
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
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
           "subtle-float": {
             '0%, 100%': { transform: 'translateY(0)' },
             '50%': { transform: 'translateY(-8px)' },
           }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
           "subtle-float": "subtle-float 5s ease-in-out infinite",
        },
         boxShadow: {
           'glow-primary': '0 0 20px 5px rgba(74, 20, 140, 0.4)', // Example glow for Primary #4A148C
           'glow-secondary': '0 0 25px 8px rgba(213, 0, 249, 0.5)', // Example glow for Secondary #D500F9
         }
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  