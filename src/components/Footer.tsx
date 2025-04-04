
  import React from 'react'
  import { Link } from 'react-router-dom' // Use Link for internal navigation

  const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
      <footer className="border-t border-border/40 bg-background">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <div>
            © {currentYear} NexusAgent. All rights reserved.
          </div>
          <nav className="flex gap-4 mt-4 md:mt-0">
            {/* Use Link instead of NavLink for simple footer links unless active styling is needed */}
            <Link to="/" className="hover:text-foreground/80 transition-colors">
              Home
            </Link>
            <Link to="/privacy-policy" className="hover:text-foreground/80 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-foreground/80 transition-colors">
              Terms of Service
            </Link>
            {/* Add other relevant footer links */}
          </nav>
        </div>
      </footer>
    )
  }

  export default Footer
  