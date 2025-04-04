
  typescript
  import React from \'react\';
  import { Button } from \'@/components/ui/button\'; // Assuming Button component path
  import { ChevronLeft, ChevronRight } from \'lucide-react\';
  import { useWorkflowStore } from \'./store\';

  /**
   * Renders navigation controls (Previous/Next buttons) for the workflow.
   */
  export const WorkflowControls: React.FC = () => {
    const { currentStepIndex, steps, goToPreviousStep, goToNextStep } = useWorkflowStore();

    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === steps.length - 1;

    return (
      <div className="flex justify-center items-center space-x-4 mt-6 md:mt-8">
        <Button
          variant="outline"
          size="lg"
          onClick={goToPreviousStep}
          disabled={isFirstStep}
          aria-label="Previous workflow step"
          className={cn(
              "border-primary text-primary hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed",
              "flex items-center space-x-2" // Ensure icon and text align
          )}
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Previous Step</span>
        </Button>
        <span className="text-neutral-light font-medium">
          Step {currentStepIndex + 1} of {steps.length}
        </span>
        <Button
          variant="default" // Use default variant which should map to primary color
          size="lg"
          onClick={goToNextStep}
          disabled={isLastStep}
          aria-label="Next workflow step"
          className={cn(
              "bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed",
              "flex items-center space-x-2" // Ensure icon and text align
          )}
        >
           <span>Next Step</span>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    );
  };
  
  