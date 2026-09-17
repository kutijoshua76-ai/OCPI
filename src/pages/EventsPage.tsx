import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { EventsView } from '../components/views/EventsView';

export const EventsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        badge="Public Affairs & Honors"
        title="News, Events & Awards"
        subtitle="Stay informed on upcoming Community Open Labs, advisory clinics @ JEOLINKS, the Teaching with Technology Awards, and Pan-African round tables."
        breadcrumb="Events & Awards"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
        <EventsView />
      </div>
    </div>
  );
};
