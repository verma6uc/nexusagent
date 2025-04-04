
  typescript
  import React, { useCallback, useMemo, useEffect, useRef } from \'react\';
  import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    ReactFlowProvider,
    Node,
    Edge,
    Position,
    ConnectionLineType,
    useReactFlow,
  } from \'reactflow\';
  import \'reactflow/dist/style.css\';
  import { useWorkflowStore } from \'./store\';
  import CustomNode from \'./CustomNode\';
  import { workflowStepsData } from \'./data\'; // Import data for layout calculation
  import { useMediaQuery } from \'react-responsive\'; // For responsive layout changes

  // Custom CSS for React Flow to match theme
  const reactFlowStyle = `
    .react-flow__node {
      font-family: 'Roboto', sans-serif; /* Body font */
    }
    .react-flow__controls-button {
      background-color: #263238; /* neutral-dark */
      border-bottom: 1px solid #000051; /* accent */
      fill: #ECEFF1; /* neutral-bg */
    }
    .react-flow__controls-button:hover {
      background-color: #4A148C; /* primary */
    }
    .react-flow__minimap {
       background-color: rgba(38, 50, 56, 0.8); /* neutral-dark with transparency */
       border-radius: 8px;
       overflow: hidden;
    }
     .react-flow__minimap-mask {
        fill: rgba(74, 20, 140, 0.2); /* primary with transparency */
    }
    .react-flow__minimap-node {
        fill: #D500F9; /* secondary */
        stroke: none;
    }
     .react-flow__background {
        background-color: #1a202c; /* Slightly darker than neutral-dark for contrast */
     }
     /* Ensure edges have correct z-index */
     .react-flow__edge {
        z-index: 1;
     }
     /* Ensure nodes are above edges */
     .react-flow__node {
        z-index: 10;
     }
  `;

  const nodeTypes = {
    customNode: CustomNode,
  };

  const WorkflowDiagramContent: React.FC = () => {
    const { fitView } = useReactFlow();
    const storeNodes = useWorkflowStore((state) => state.nodes);
    const storeEdges = useWorkflowStore((state) => state.edges);
    const setActiveStep = useWorkflowStore((state) => state.setActiveStep);
    const setStoreNodes = useWorkflowStore((state) => state.setNodes);
    const setStoreEdges = useWorkflowStore((state) => state.setEdges);

    const [nodes, setNodes, onNodesChange] = useNodesState(storeNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(storeEdges);

    const isMobile = useMediaQuery({ query: \'(max-width: 767px)\' }); // Tailwind's md breakpoint

    const nodeClickRef = useRef(setActiveStep); // Ref to prevent stale closure in node data

    useEffect(() => {
        nodeClickRef.current = setActiveStep;
    }, [setActiveStep]);

    // Update internal React Flow state when Zustand store changes
    useEffect(() => {
        // Recalculate layout based on screen size
        const nodeWidth = 250; // Approximate width including padding/margin
        const nodeHeight = 150; // Approximate height
        const horizontalGap = 100;
        const verticalGap = 100;

        const updatedNodes = storeNodes.map((node, index) => {
            const position = isMobile
                ? { x: 50, y: index * (nodeHeight + verticalGap) } // Vertical layout
                : { x: index * (nodeWidth + horizontalGap), y: 100 }; // Horizontal layout

             // Update node data including the onClick handler reference
             const updatedData = {
                 ...node.data,
                 onClick: nodeClickRef.current // Use the ref here
             };

            return {
                ...node,
                position,
                sourcePosition: isMobile ? Position.Bottom : Position.Right,
                targetPosition: isMobile ? Position.Top : Position.Left,
                data: updatedData, // Pass updated data including onClick
            };
        });

        const updatedEdges = storeEdges.map(edge => ({
             ...edge,
             type: 'smoothstep', // Ensure smooth edges
             markerEnd: { // Ensure marker styles are reapplied
                type: MarkerType.ArrowClosed,
                width: 20,
                height: 20,
                color: edge.style?.stroke || '#B388FF', // Use edge color or default
            },
        }));


        setNodes(updatedNodes);
        setEdges(updatedEdges);

        // Also update the store's nodes/edges if needed, though layout is view-specific
        // setStoreNodes(updatedNodes); // Optional: sync layout back to store if needed elsewhere
        // setStoreEdges(updatedEdges);

        // Fit view after layout change
        // Use a timeout to ensure nodes are rendered before fitting view
        const timer = setTimeout(() => {
            fitView({ padding: 0.2, duration: 500 });
        }, 100); // Adjust delay if needed

         return () => clearTimeout(timer);

    }, [storeNodes, storeEdges, isMobile, setNodes, setEdges, fitView]); // Rerun layout on screen size change


    const onConnect = useCallback(() => {
      // We don't allow manual connections in this demo
      console.log("Connection attempt blocked.");
    }, []);

    return (
      <div className="w-full h-[400px] md:h-[500px] lg:flex-grow bg-neutral-dark rounded-lg overflow-hidden relative border border-neutral-dark">
         <style>{reactFlowStyle}</style>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
          fitViewOptions={{ padding: 0.2, duration: 300 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnDrag={true} // Allow panning
          preventScrolling={false} // Allow page scroll when mouse is over the flow
          proOptions={{ hideAttribution: true }} // Hide React Flow attribution if you have a pro license
        >
          <Controls showInteractive={false} className="fill-neutral-bg" />
          <MiniMap nodeStrokeWidth={3} zoomable pannable />
           <Background color="#000051" gap={24} size={1} /> {/* Accent color for background dots */}
        </ReactFlow>
      </div>
    );
  };


  /**
   * Wrapper component providing the ReactFlowProvider context.
   */
  export const WorkflowDiagram: React.FC = () => {
      return (
          <ReactFlowProvider>
              <WorkflowDiagramContent />
          </ReactFlowProvider>
      )
  }
  
  