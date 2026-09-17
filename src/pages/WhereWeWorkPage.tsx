import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WhereWeWorkView } from '../components/views/WhereWeWorkView';

interface WhereWeWorkPageProps {
  onOpenMembership: (track: 'family' | 'tech', subtype?: string) => void;
}

export const WhereWeWorkPage: React.FC<WhereWeWorkPageProps> = ({ onOpenMembership }) => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge="Field Operations"
        title="Where We Work: Nigeria cum Africa"
        subtitle="Explore our active regional consultation councils, problem baseline diagnostics, grassroots interventions, and Project Director Secretariat desk."
        breadcrumb="Where We Work"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        <WhereWeWorkView onOpenMembership={onOpenMembership} />
      </div>
    </div>
  );
};
