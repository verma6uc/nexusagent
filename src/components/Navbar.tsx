
  import React from \'react\'
  import { NavLink, Link } from \'react-router-dom\' // Import Link for the logo
  import { cn } from \'@/lib/utils\' // Assuming you have this utility from Shadcn setup

  // Simple SVG Logo Placeholder
  const Logo = () =&gt; (
    &lt;svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;
      &lt;path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="hsl(var(--primary))"/&gt;
      &lt;path d="M50 15L81.65 32.5V67.5L50 85L18.35 67.5V32.5L50 15Z" fill="hsl(var(--secondary))" fillOpacity="0.8"/&gt;
      &lt;path d="M50 25L70 35V65L50 75L30 65V35L50 25Z" fill="hsl(var(--primary-foreground))" fillOpacity="0.6"/&gt;
    &lt;/svg&gt;
  );


  const Navbar: React.FC = () =&gt; {
    const navItems = [
      // Removed explicit 'Home' item as logo serves this purpose,
      // or keep it if design requires explicit 'Home' link.
      // If kept, ensure its path is "/"
      // { name: 'Home', path: '/' },
      { name: \'Capabilities\', path: \'/capabilities\' },
      { name: \'Experience\', path: \'/experience\' },
      { name: \'Intelligence\', path: \'/intelligence\' },
      { name: \'Success Stories\', path: \'/success-stories\' },
    ]

    return (
      &lt;header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"&gt;
        &lt;div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4"&gt;
          &lt;div className="mr-4 flex items-center"&gt;
            {/* Use Link for the logo to navigate to home */}
            &lt;Link to="/" className="mr-6 flex items-center space-x-2" aria-label="NexusAgent Home"&gt;
              &lt;Logo /&gt;
              &lt;span className="font-bold font-heading text-lg text-primary"&gt;NexusAgent&lt;/span&gt;
            &lt;/Link&gt;
          &lt;/div&gt;
          &lt;nav className="flex items-center gap-4 text-sm lg:gap-6 flex-grow"&gt;
            {/* Explicit Home link using NavLink */}
             &lt;NavLink
                key="Home"
                to="/"
                className={({ isActive }) =&gt;
                  cn(
                    \'transition-colors hover:text-foreground/80\',
                    isActive ? \'text-foreground font-medium\' : \'text-foreground/60\'
                  )
                }
                end // Use 'end' prop for root path matching
              &gt;
                Home
              &lt;/NavLink&gt;
            {navItems.map((item) =&gt; (
              &lt;NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =&gt;
                  cn(
                    \'transition-colors hover:text-foreground/80\',
                    isActive ? \'text-foreground font-medium\' : \'text-foreground/60\'
                  )
                }
              &gt;
                {item.name}
              &lt;/NavLink&gt;
            ))}
          &lt;/nav&gt;
           {/* Placeholder for potential action buttons (e.g., Login, Sign Up) */}
           &lt;div className="flex items-center justify-end space-x-2"&gt;
              {/* Example Button (requires Shadcn Button component) */}
              {/* &lt;Button variant="ghost"&gt;Login&lt;/Button&gt; */}
              {/* &lt;Button&gt;Sign Up&lt;/Button&gt; */}
           &lt;/div&gt;
        &lt;/div&gt;
      &lt;/header&gt;
    )
  }

  export default Navbar
  