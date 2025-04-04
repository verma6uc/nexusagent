
  import * as React from "react"
  import { Slot } from "@radix-ui/react-slot"
  import { cva, type VariantProps } from "class-variance-authority"

  import { cn } from "@/lib/utils" // Assuming utils exists

  const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          // Added secondary and accent variants based on theme
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/90",
          accent:
            "bg-accent text-accent-foreground hover:bg-accent/90",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
          // Custom variant for Hero Section secondary CTA (if needed, otherwise use 'accent')
          // heroSecondary: "bg-accent text-accent-foreground hover:bg-accent/90",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8 text-base", // Adjusted lg size
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )

  export interface ButtonProps
    extends React.ButtonHTMLAttributes&lt;HTMLButtonElement&gt;,
      VariantProps&lt;typeof buttonVariants&gt; {
    asChild?: boolean
  }

  const Button = React.forwardRef&lt;HTMLButtonElement, ButtonProps&gt;(
    ({ className, variant, size, asChild = false, ...props }, ref) =&gt; {
      const Comp = asChild ? Slot : "button"
      return (
        &lt;Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        /&gt;
      )
    }
  )
  Button.displayName = "Button"

  export { Button, buttonVariants }
  