
  typescript
  import { create } from \'zustand\';
  import { immer } from \'zustand/middleware/immer\';
  import { workflowStepsData, initialNodes, initialEdges } from \'./data\';
  import { WorkflowState } from \'./types\';
  import { Node, Edge, MarkerType } from \'reactflow\';

  /**
   * Zustand store for managing the state of the interactive workflow demonstration.
   */
  export const useWorkflowStore = create<WorkflowState>()(
    immer((set, get) => ({
      steps: workflowStepsData,
      currentStepIndex: 0,
      nodes: initialNodes.map((node, index) => ({
        ...node,
        data: {
          ...node.data,
          isActive: index === 0, // Ensure initial active state is correct
        },
      })),
      edges: initialEdges.map((edge) => ({
        ...edge,
        animated: false, // Ensure initial animation state is correct
      })),

      setNodes: (nodes: Node[]) => set((state) => {
          state.nodes = nodes;
      }),

      setEdges: (edges: Edge[]) => set((state) => {
          state.edges = edges;
      }),

      setCurrentStepIndex: (index: number) => set((state) => {
        if (index >= 0 && index < state.steps.length) {
          state.currentStepIndex = index;
          const activeStepId = state.steps[index].id;

          // Update node active state
          state.nodes = state.nodes.map(node => ({
            ...node,
            data: {
              ...node.data,
              isActive: node.id === activeStepId,
            },
          }));

          // Update edge animation state
          state.edges = state.edges.map(edge => ({
            ...edge,
            animated: edge.source === activeStepId, // Animate edge originating from the active node
            style: {
              ...edge.style,
              stroke: edge.source === activeStepId ? \'#D500F9\' : \'#B388FF\', // Highlight active edge path
              strokeWidth: edge.source === activeStepId ? 3 : 2,
            },
             markerEnd: {
                ...(edge.markerEnd as object), // Keep existing marker properties
                color: edge.source === activeStepId ? \'#D500F9\' : \'#B388FF\',
            }
          }));
        }
      }),

      goToNextStep: () => {
        const currentIndex = get().currentStepIndex;
        const totalSteps = get().steps.length;
        if (currentIndex < totalSteps - 1) {
          get().setCurrentStepIndex(currentIndex + 1);
        }
      },

      goToPreviousStep: () => {
        const currentIndex = get().currentStepIndex;
        if (currentIndex > 0) {
          get().setCurrentStepIndex(currentIndex - 1);
        }
      },

      setActiveStep: (stepId: string) => {
        const stepIndex = get().steps.findIndex(step => step.id === stepId);
        if (stepIndex !== -1) {
          get().setCurrentStepIndex(stepIndex);
        }
      },
    }))
  );

  
  