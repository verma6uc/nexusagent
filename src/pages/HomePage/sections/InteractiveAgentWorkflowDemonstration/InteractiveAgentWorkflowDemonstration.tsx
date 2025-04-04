
  typescript
  import React from 'react';
  import { WorkflowDiagram } from './WorkflowDiagram';
  import { WorkflowStepDetails } from './WorkflowStepDetails';
  import { WorkflowControls } from './WorkflowControls';
  import { cn } from '@/lib/utils'; // Assuming utility for classnames

  /**
   * @description InteractiveAgentWorkflowDemonstration section for the Homepage.
   * Displays an interactive flowchart demonstrating the NexusAgent workflow.
   * Allows users to step through the process and see agent actions and comparative metrics.
   * Uses React Flow for the diagram, Zustand for state management, and Framer Motion for animations.
   */
  export const InteractiveAgentWorkflowDemonstration: React.FC = () => {
    return (
      <section
        id="workflow-demonstration"
        aria-labelledby="workflow-heading"
        className="py-16 md:py-24 bg-gradient-to-b from-neutral-dark to-[#1a202c] text-neutral-bg overflow-hidden" // Dark background matching theme
      >
        <div className="container mx-auto px-4">
          <h2
             id="workflow-heading"
             className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-secondary to-pink-500"
           >
             See Your New AI Team in Action
          </h2>
          <p className="text-lg md:text-xl text-neutral-light text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            Follow a typical customer journey and witness how NexusAgent\'s specialized AI agents collaborate seamlessly to drive results faster than ever before.
          </p>

          {/* Layout container: Flex column on small screens, flex row on large screens */}
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Workflow Diagram takes full width on small, grows on large */}
             <div className="lg:flex-grow lg:w-2/3 xl:w-3/4">
                <WorkflowDiagram />
             </div>

            {/* Step Details takes full width on small, fixed width on large */}
            <WorkflowStepDetails />
          </div>

          {/* Controls below the diagram/details */}
          <WorkflowControls />

        </div>
      </section>
    );
  };
  
  