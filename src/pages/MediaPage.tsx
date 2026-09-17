import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { MediaView } from '../components/views/MediaView';

export const MediaPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge="Press & Archives"
        title="Publications & Media Bureau"
        subtitle="Download audited community reports, evidence-based policy briefs, verified biographical registers, and request press access from our Lagos bureau."
        breadcrumb="Media & Publications"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        <MediaView />
      </div>
    </div>
  );
};
