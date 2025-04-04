
  typescript
  import { WorkflowStep } from \'./types\';
  import { MarkerType } from \'reactflow\';

  /**
   * Sample data defining the steps of the interactive agent workflow demonstration.
   */
  export const workflowStepsData: WorkflowStep[] = [
    {
      id: \'1\',
      title: \'Lead Identification\',
      agent: \'Prospector\',
      description: \'NexusAgent Prospector scans multiple data sources to identify high-potential leads based on your Ideal Customer Profile (ICP).\',
      agentActions: [
        \'Analyzes market trends and competitor activities.\',
        \'Identifies companies matching ICP criteria (size, industry, location, tech stack).\',
        \'Finds key decision-makers within target companies.\',
        \'Scores leads based on likelihood to convert.\',
      ],
      comparison: [
        { metric: \'Lead Volume\', nexusValue: \'+150%\', traditionalValue: \'Baseline\', improvement: \'\', unit: \'%\' },
        { metric: \'Lead Quality Score\', nexusValue: \'85\', traditionalValue: \'60\', improvement: \'+42%\', unit: \'%\' },
        { metric: \'Time Spent Prospecting\', nexusValue: \'2 hrs\', traditionalValue: \'10 hrs\', improvement: \'-80%\', unit: \' / week\' },
      ],
    },
    {
      id: \'2\',
      title: \'Data Enrichment & Analysis\',
      agent: \'Analyst\',
      description: \'The Analyst agent gathers deep insights on qualified leads, enriching profiles and identifying key talking points.\',
      agentActions: [
        \'Aggregates data from CRM, social media, news articles, and financial reports.\',
        \'Identifies recent company news, funding rounds, or strategic shifts.\',
        \'Analyzes connections and potential referral paths.\',
        \'Generates summaries and personalized outreach angles.\',
      ],
      comparison: [
        { metric: \'Data Completeness\', nexusValue: \'95%\', traditionalValue: \'70%\', improvement: \'+36%\', unit: \'%\' },
        { metric: \'Time to Qualify\', nexusValue: \'5 min\', traditionalValue: \'30 min\', improvement: \'-83%\', unit: \' / lead\' },
        { metric: \'Personalization Relevance\', nexusValue: \'High\', traditionalValue: \'Medium\', unit: \'\' },
      ],
    },
    {
      id: \'3\',
      title: \'Personalized Outreach\',
      agent: \'Assistant\',
      description: \'The Assistant agent drafts hyper-personalized outreach messages and manages initial communication sequences.\',
      agentActions: [
        \'Generates multiple email/LinkedIn message drafts based on Analyst insights.\',
        \'Schedules outreach sequences according to best practices.\',
        \'Tracks open rates, click-through rates, and replies.\',
        \'Alerts sales reps when a lead engages.\',
      ],
      comparison: [
        { metric: \'Reply Rate\', nexusValue: \'18%\', traditionalValue: \'8%\', improvement: \'+125%\', unit: \'%\' },
        { metric: \'Meeting Booked Rate\', nexusValue: \'5%\', traditionalValue: \'2%\', improvement: \'+150%\', unit: \'%\' },
        { metric: \'Time Spent on Outreach Prep\', nexusValue: \'1 hr\', traditionalValue: \'5 hrs\', improvement: \'-80%\', unit: \' / week\' },
      ],
    },
    {
      id: \'4\',
      title: \'Deal Strategy & Nurturing\',
      agent: \'Strategist\',
      description: \'The Strategist agent analyzes deal progression, suggests next steps, and orchestrates nurturing campaigns for stalled leads.\',
      agentActions: [
        \'Monitors engagement signals across all touchpoints.\',
        \'Identifies potential roadblocks or objections.\',
        \'Recommends optimal follow-up actions and content.\',
        \'Triggers automated nurturing sequences for leads not ready to buy.\',
      ],
      comparison: [
        { metric: \'Sales Cycle Length\', nexusValue: \'45 days\', traditionalValue: \'60 days\', improvement: \'-25%\', unit: \'\' },
        { metric: \'Deal Win Rate\', nexusValue: \'35%\', traditionalValue: \'25%\', improvement: \'+40%\', unit: \'%\' },
        { metric: \'Lead Nurturing Engagement\', nexusValue: \'High\', traditionalValue: \'Low\', unit: \'\' },
      ],
    },
  ];

  /**
   * Initial nodes for React Flow based on workflowStepsData.
   * Positions are set for a default horizontal layout. Responsive adjustments might override these.
   */
  export const initialNodes = workflowStepsData.map((step, index) => ({
    id: step.id,
    type: \'customNode\', // Use our custom node type
    position: { x: index * 300, y: 100 }, // Basic horizontal layout
    data: {
      label: step.title,
      agent: step.agent,
      isActive: index === 0, // Initially, the first node is active
      // onClick will be passed down from the main component via the store action
    },
  }));

  /**
   * Initial edges connecting the nodes sequentially for React Flow.
   */
  export const initialEdges = workflowStepsData.slice(0, -1).map((step, index) => ({
    id: `e${step.id}-${workflowStepsData[index + 1].id}`,
    source: step.id,
    target: workflowStepsData[index + 1].id,
    type: \'smoothstep\',
    animated: false, // Animation controlled by active state
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: \'#B388FF\', // Neutral light color for arrows
    },
    style: {
        strokeWidth: 2,
        stroke: \'#B388FF\', // Default edge color
    },
  }));

  
  