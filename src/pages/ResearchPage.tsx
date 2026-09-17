import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ResearchView } from '../components/views/ResearchView';

interface ResearchPageProps {
  onOpenMembership: (track: 'family' | 'tech', subtype?: string) => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ onOpenMembership }) => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge="Scientific Arm"
        title="Joint Research Group (JRG)"
        subtitle="Empirical field research, policy briefs, 7 specialized investigative units, and academic fellow collaborations spanning prominent African universities."
        breadcrumb="Research (JRG)"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        <ResearchView onOpenMembership={onOpenMembership} />
      </div>
    </div>
  );
};
