
  import React from 'react'
  import { NavLink, Link } from 'react-router-dom' // Import Link for the logo
  import { cn } from '@/lib/utils' // Assuming you have this utility from Shadcn setup

  // Simple SVG Logo Placeholder
  const Logo = () => (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="hsl(var(--primary))"/>
      <path d="M50 15L81.65 32.5V67.5L50 85L18.35 67.5V32.5L50 15Z" fill="hsl(var(--secondary))" fillOpacity="0.8"/>
      <path d="M50 25L70 35V65L50 75L30 65V35L50 25Z" fill="hsl(var(--primary-foreground))" fillOpacity="0.6"/>
    </svg>
  );


  const Navbar: React.FC = () => {
    const navItems = [
      // Removed explicit 'Home' item as logo serves this purpose,
      // or keep it if design requires explicit 'Home' link.
      // If kept, ensure its path is "/"
      // { name: 'Home', path: '/' },
      { name: 'Capabilities', path: '/capabilities' },
      { name: 'Experience', path: '/experience' },
      { name: 'Intelligence', path: '/intelligence' },
      { name: 'Success Stories', path: '/success-stories' },
    ]

    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4">
          <div className="mr-4 flex items-center">
            {/* Use Link for the logo to navigate to home */}
            <Link to="/" className="mr-6 flex items-center space-x-2" aria-label="NexusAgent Home">
              <Logo />
              <span className="font-bold font-heading text-lg text-primary">NexusAgent</span>
            </Link>
          </div>
          <nav className="flex items-center gap-4 text-sm lg:gap-6 flex-grow">
            {/* Explicit Home link using NavLink */}
             <NavLink
                key="Home"
                to="/"
                className={({ isActive }) =>
                  cn(
                    'transition-colors hover:text-foreground/80',
                    isActive ? 'text-foreground font-medium' : 'text-foreground/60'
                  )
                }
                end // Use 'end' prop for root path matching
              >
                Home
              </NavLink>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'transition-colors hover:text-foreground/80',
                    isActive ? 'text-foreground font-medium' : 'text-foreground/60'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
           {/* Placeholder for potential action buttons (e.g., Login, Sign Up) */}
           <div className="flex items-center justify-end space-x-2">
              {/* Example Button (requires Shadcn Button component) */}
              {/* <Button variant="ghost">Login</Button> */}
              {/* <Button>Sign Up</Button> */}
           </div>
        </div>
      </header>
    )
  }

  export default Navbar
  