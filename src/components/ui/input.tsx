
  import * as React from "react"

  import { cn } from "@/lib/utils" // Assuming utils path

  export interface InputProps
    extends React.InputHTMLAttributes&lt;HTMLInputElement&gt; {}

  const Input = React.forwardRef&lt;HTMLInputElement, InputProps&gt;(
    ({ className, type, ...props }, ref) => {
      return (
        &lt;input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            // Custom styles for this project might be added here or in the component using it
            // Example: 'border-neutral-medium text-neutral-dark focus:border-primary-deep-purple focus:ring-primary-deep-purple/50'
            className
          )}
          ref={ref}
          {...props}
        /&gt;
      )
    }
  )
  Input.displayName = "Input"

  export { Input }

  