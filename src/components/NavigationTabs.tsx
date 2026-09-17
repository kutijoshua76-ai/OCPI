import React from 'react';
import type { ViewTab } from '../types';
import { Home, Users, Zap, Globe, BookOpen, Calendar, Newspaper } from 'lucide-react';

interface NavigationTabsProps {
  currentView: ViewTab;
  onSelectView: (view: ViewTab) => void;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({ currentView, onSelectView }) => {
  const tabs: { id: ViewTab; label: string; icon: React.ReactNode }[] = [
    { id: 'welcome', label: 'Welcome & Overview', icon: <Home className="w-4 h-4" /> },
    { id: 'governance', label: 'Governance & Board (28)', icon: <Users className="w-4 h-4" /> },
    { id: 'what-we-do', label: 'What We Do', icon: <Zap className="w-4 h-4" /> },
    { id: 'where-we-work', label: 'Where We Work (Africa)', icon: <Globe className="w-4 h-4" /> },
    { id: 'research', label: 'Research & JRG (7 Units)', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'events', label: 'News, Events & Awards', icon: <Calendar className="w-4 h-4" /> },
    { id: 'media', label: 'Media & Publications', icon: <Newspaper className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-20 z-40 bg-white backdrop-blur-md border-b border-gray-200 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {tabs.map((tab) => {
            const isActive = currentView === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectView(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
