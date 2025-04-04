
  import * as React from "react"
  import * as LabelPrimitive from "@radix-ui/react-label"
  import { cva, type VariantProps } from "class-variance-authority"

  import { cn } from "@/lib/utils" // Assuming utils path

  const labelVariants = cva(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    // Custom styles for this project might be added here or in the component using it
    // Example: 'text-neutral-dark font-roboto'
  )

  const Label = React.forwardRef&lt;
    React.ElementRef&lt;typeof LabelPrimitive.Root&gt;,
    React.ComponentPropsWithoutRef&lt;typeof LabelPrimitive.Root&gt; &amp;
      VariantProps&lt;typeof labelVariants&gt;
  &gt;(({ className, ...props }, ref) => (
    &lt;LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...props}
    /&gt;
  ))
  Label.displayName = LabelPrimitive.Root.displayName

  export { Label }

  