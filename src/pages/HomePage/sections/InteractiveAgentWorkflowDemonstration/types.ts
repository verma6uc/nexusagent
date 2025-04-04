
  typescript
  import { Node, Edge } from \'reactflow\';

  /**
   * Represents the comparative metrics between NexusAgent and traditional methods for a workflow step.
   */
  export interface ComparisonMetric {
    metric: string;
    nexusValue: string | number;
    traditionalValue: string | number;
    improvement?: string;
    unit?: string; // e.g., '%', 'hrs', 'days'
  }

  /**
   * Defines the structure for a single step in the interactive agent workflow.
   */
  export interface WorkflowStep {
    id: string;
    title: string;
    agent: \'Prospector\' | \'Analyst\' | \'Assistant\' | \'Strategist\';
    description: string;
    agentActions: string[];
    comparison: ComparisonMetric[];
    // Note: position is handled dynamically by react-flow layout or defined in data.ts
  }

  /**
   * Represents the state managed by Zustand for the interactive workflow.
   */
  export interface WorkflowState {
    steps: WorkflowStep[];
    currentStepIndex: number;
    nodes: Node[];
    edges: Edge[];
    setNodes: (nodes: Node[]) => void;
    setEdges: (edges: Edge[]) => void;
    setCurrentStepIndex: (index: number) => void;
    goToNextStep: () => void;
    goToPreviousStep: () => void;
    setActiveStep: (stepId: string) => void;
  }

  /**
   * Props for the CustomNode component used in React Flow.
   */
  export interface CustomNodeProps {
    id: string;
    data: {
      label: string;
      agent: string;
      isActive: boolean;
      onClick: (id: string) => void;
    };
  }
  
  