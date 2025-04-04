
  typescript
  import React from \'react\';
  import { motion, AnimatePresence } from \'framer-motion\';
  import { useWorkflowStore } from \'./store\';
  import { CheckCircle } from 'lucide-react'; // Example icon

  /**
   * Displays the detailed information for the currently selected workflow step.
   */
  export const WorkflowStepDetails: React.FC = () => {
    const { steps, currentStepIndex } = useWorkflowStore();
    const currentStep = steps[currentStepIndex];

    if (!currentStep) return null;

    // Agent color mapping for background/border highlights
    const agentHighlightColors: { [key: string]: string } = {
        Prospector: 'border-purple-500 bg-purple-900/20',
        Analyst:    'border-blue-500 bg-blue-900/20',
        Assistant:  'border-teal-500 bg-teal-900/20',
        Strategist: 'border-indigo-500 bg-indigo-900/20',
    };

    return (
      <div className="mt-8 md:mt-12 lg:mt-0 lg:ml-8 lg:w-1/3 xl:w-1/4 flex-shrink-0" role="region" aria-live="polite" aria-atomic="true" aria-labelledby="step-details-heading">
         {/* AnimatePresence ensures smooth transition when step changes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id} // Key change triggers animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`p-6 rounded-lg border ${agentHighlightColors[currentStep.agent] || 'border-neutral-dark'} bg-neutral-dark/50 shadow-lg`}
          >
            <h3 id="step-details-heading" className="text-xl md:text-2xl font-semibold font-heading text-neutral-bg mb-3">
              {currentStep.title}
            </h3>
            <p className="text-base text-neutral-light mb-4">
              <strong className='text-secondary'>{currentStep.agent} Agent:</strong> {currentStep.description}
            </p>

            <h4 className="text-lg font-medium font-heading text-neutral-bg mb-2">Key Actions:</h4>
            <ul className="list-none space-y-2 mb-4">
              {currentStep.agentActions.map((action, index) => (
                <li key={index} className="flex items-start text-sm text-neutral-light">
                   <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-secondary flex-shrink-0" />
                   <span>{action}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-medium font-heading text-neutral-bg mb-2">Impact vs. Traditional:</h4>
             <div className="space-y-2">
                {currentStep.comparison.map((comp, index) => (
                    <div key={index} className="text-sm bg-neutral-dark/30 p-2 rounded">
                        <p className="font-medium text-neutral-light">{comp.metric}:</p>
                        <div className="flex justify-between items-baseline text-neutral-light">
                           <span>NexusAgent: <strong className="text-secondary">{comp.nexusValue}{comp.unit}</strong></span>
                           <span className="text-xs text-neutral-500">(Trad: {comp.traditionalValue}{comp.unit})</span>
                           {comp.improvement && <span className="text-green-400 text-xs font-bold">{comp.improvement}</span>}
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };
  
  