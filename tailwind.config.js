
  javascript
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    darkMode: ["class"], // Or 'media' if you prefer OS-level dark mode
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}', // Make sure this includes your components directory
    ],
    prefix: "",
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
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))", // Should map to light/default background
          foreground: "hsl(var(--foreground))", // Should map to light/default text
          primary: {
            DEFAULT: "#4A148C", // Primary Purple
            foreground: "#ECEFF1", // Text on primary (Neutral BG)
          },
          secondary: {
            DEFAULT: "#D500F9", // Secondary Magenta/Pink
            foreground: "#263238", // Text on secondary (Neutral Dark) - Ensure contrast
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "#000051", // Accent Dark Blue
            foreground: "#ECEFF1", // Text on accent (Neutral BG)
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          // Custom additions based on theme spec
          'neutral-dark': '#263238', // Dark Blue-Gray
          'neutral-light': '#B388FF', // Light Purple/Lavender
          'neutral-bg': '#ECEFF1',   // Very Light Gray/Off-white
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          // Add potential glow or pulse animations if needed
           'glow': {
             '0%, 100%': { boxShadow: '0 0 5px theme(colors.secondary.DEFAULT)' },
             '50%': { boxShadow: '0 0 20px theme(colors.secondary.DEFAULT)' },
           },
           'subtle-pulse': {
             '0%, 100%': { transform: 'scale(1)', opacity: 1 },
             '50%': { transform: 'scale(1.03)', opacity: 0.9 },
           }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "glow": "glow 2s ease-in-out infinite",
          "subtle-pulse": "subtle-pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        },
         fontFamily: {
           heading: ['Poppins', 'sans-serif'], // Poppins for headings
           body: ['Roboto', 'sans-serif'],     // Roboto for body text
         },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  
  