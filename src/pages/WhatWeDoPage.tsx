import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WhatWeDoView } from '../components/views/WhatWeDoView';

interface WhatWeDoPageProps {
  onOpenDonate: () => void;
  onOpenMembership: (track: 'family' | 'tech', subtype?: string) => void;
}

export const WhatWeDoPage: React.FC<WhatWeDoPageProps> = ({
  onOpenDonate,
  onOpenMembership
}) => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge="Operations & Programs"
        title="What We Do: Operational Pillars"
        subtitle="Discover our holistic model integrating rapid emergency response, community-owned social enterprises, and catalytic investments in education and technology."
        breadcrumb="What We Do"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        <WhatWeDoView
          onOpenDonate={onOpenDonate}
          onOpenMembership={onOpenMembership}
        />
      </div>
    </div>
  );
};
