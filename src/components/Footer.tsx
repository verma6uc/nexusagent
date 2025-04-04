
  import React from 'react'
  import { NavLink } from 'react-router-dom'

  const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    return (
      <footer className="border-t border-border/40 bg-background">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <div>
            © {currentYear} NexusAgent. All rights reserved.
          </div>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <NavLink to="/privacy-policy" className="hover:text-foreground/80 transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms-of-service" className="hover:text-foreground/80 transition-colors">
              Terms of Service
            </NavLink>
            {/* Add other relevant footer links */}
          </nav>
        </div>
      </footer>
    )
  }

  export default Footer
  