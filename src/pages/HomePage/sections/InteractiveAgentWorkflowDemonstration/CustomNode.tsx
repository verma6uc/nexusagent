
  typescript
  import React, { memo } from \'react\';
  import { Handle, Position, NodeProps } from \'reactflow\';
  import { cn } from \'@/lib/utils\'; // Assuming you have a utility for classnames
  import { CustomNodeProps } from \'./types\';

  // Agent colors mapping (adjust as needed)
  const agentColors: { [key: string]: string } = {
    Prospector: \'bg-purple-600 border-purple-400\',
    Analyst: \'bg-blue-600 border-blue-400\',
    Assistant: \'bg-teal-600 border-teal-400\',
    Strategist: \'bg-indigo-600 border-indigo-400\',
  };

  const agentTextColors: { [key: string]: string } = {
      Prospector: \'text-purple-100\',
      Analyst: \'text-blue-100\',
      Assistant: \'text-teal-100\',
      Strategist: \'text-indigo-100\',
  }

  /**
   * Custom Node component for React Flow to represent workflow stages.
   */
  const CustomNode: React.FC<NodeProps<CustomNodeProps[\'data\']>> = ({ id, data }) => {
    const { label, agent, isActive, onClick } = data;

    return (
      <div
        onClick={() => onClick(id)}
        onKeyDown={(e) => { if (e.key === \'Enter\' || e.key === \' \') onClick(id); }}
        role="button"
        tabIndex={0}
        aria-label={`Workflow stage: ${label}. Agent: ${agent}. ${isActive ? \'Currently active.\' : \'Click or press Enter to view details.\'}`}
        className={cn(
          \'p-4 rounded-lg border-2 shadow-md cursor-pointer transition-all duration-300 w-48 min-h-[100px] flex flex-col justify-center items-center text-center\',
          \'bg-neutral-dark text-neutral-bg\', // Base dark theme from tailwind.config.js (assuming neutral-dark, neutral-bg exist)
          agentColors[agent] || \'bg-gray-700 border-gray-500\', // Agent-specific color or fallback
          {
            \'border-secondary scale-105 shadow-lg shadow-secondary/30 ring-2 ring-secondary ring-offset-2 ring-offset-neutral-dark\': isActive, // Highlight active node using secondary color
            \'hover:shadow-md hover:border-neutral-light hover:scale-[1.02]\': !isActive, // Hover effect for inactive nodes
          }
        )}
        style={{
           // Add subtle glow using box-shadow for active state
           boxShadow: isActive ? `0 0 15px 5px rgba(213, 0, 249, 0.4)` : undefined, // #D500F9 secondary
        }}
      >
        <div className={cn("text-xs font-semibold uppercase mb-1 px-2 py-0.5 rounded", agentColors[agent], agentTextColors[agent])}>{agent}</div>
        <div className="text-sm font-medium text-neutral-bg">{label}</div>

        {/* Handles for connecting edges */}
        <Handle
            type="target"
            position={Position.Left}
            className="!bg-primary !w-3 !h-3"
            isConnectable={true}
        />
        <Handle
            type="source"
            position={Position.Right}
            className="!bg-primary !w-3 !h-3"
            isConnectable={true}
        />
         {/* Add hidden handles for vertical layout on mobile */}
         <Handle
            type="target"
            position={Position.Top}
            className="!bg-primary !w-3 !h-3 sm:hidden" // Hide on sm and up
            isConnectable={true}
        />
        <Handle
            type="source"
            position={Position.Bottom}
            className="!bg-primary !w-3 !h-3 sm:hidden" // Hide on sm and up
            isConnectable={true}
        />
      </div>
    );
  };

  export default memo(CustomNode);
  
  