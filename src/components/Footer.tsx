
  import React from \'react\'
  import { Link } from \'react-router-dom\' // Use Link for internal navigation

  const Footer: React.FC = () =&gt; {
    const currentYear = new Date().getFullYear()

    return (
      &lt;footer className="border-t border-border/40 bg-background"&gt;
        &lt;div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60"&gt;
          &lt;div&gt;
            © {currentYear} NexusAgent. All rights reserved.
          &lt;/div&gt;
          &lt;nav className="flex gap-4 mt-4 md:mt-0"&gt;
            {/* Use Link instead of NavLink for simple footer links unless active styling is needed */}
            &lt;Link to="/privacy-policy" className="hover:text-foreground/80 transition-colors"&gt;
              Privacy Policy
            &lt;/Link&gt;
            &lt;Link to="/terms-of-service" className="hover:text-foreground/80 transition-colors"&gt;
              Terms of Service
            &lt;/Link&gt;
            {/* If a Home link is desired in the footer: */}
            {/* &lt;Link to="/" className="hover:text-foreground/80 transition-colors"&gt;
              Home
            &lt;/Link&gt; */}
            {/* Add other relevant footer links */}
          &lt;/nav&gt;
        &lt;/div&gt;
      &lt;/footer&gt;
    )
  }

  export default Footer
  