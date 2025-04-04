
  import React from 'react';

  export interface Capability {
    id: string;
    icon: React.ComponentType&lt;React.SVGProps&lt;SVGSVGElement&gt;&gt;;
    title: string;
    description: string;
    detailedContent: {
      heading: string;
      paragraphs: string[];
      useCases?: string[]; // Optional list of use cases
    };
  }
  