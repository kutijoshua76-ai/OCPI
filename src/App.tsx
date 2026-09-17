import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageLoader } from './components/PageLoader';
import { HomePage } from './pages/HomePage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { WhatWeDoPage } from './pages/WhatWeDoPage';
import { WhereWeWorkPage } from './pages/WhereWeWorkPage';
import { ResearchPage } from './pages/ResearchPage';
import { EventsPage } from './pages/EventsPage';
import { MediaPage } from './pages/MediaPage';
import { MembershipPage } from './pages/MembershipPage';
import { DonateModal } from './components/DonateModal';

export function App() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenMembership = (track: 'family' | 'tech' = 'family', subtype?: string) => {
    const params = new URLSearchParams();
    params.set('track', track);
    if (subtype) params.set('subtype', subtype);
    navigate(`/join?${params.toString()}`);
  };

  const handleOpenDonate = () => {
    setDonateModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#1B96D8] selection:text-white">
      {/* Brand Page Loading Curtain Animation */}
      <PageLoader />
      
      {/* Global Header with dedicated nav links & mega-menus */}
      <Header
        onOpenMembership={handleOpenMembership}
        onOpenDonate={handleOpenDonate}
      />

      {/* Main Routed Page Content */}
      <main className="flex-grow relative z-0 isolate">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onOpenMembership={handleOpenMembership} />} 
          />
          <Route 
            path="/who-we-are" 
            element={<WhoWeArePage />} 
          />
          <Route 
            path="/what-we-do" 
            element={
              <WhatWeDoPage 
                onOpenDonate={handleOpenDonate} 
                onOpenMembership={handleOpenMembership} 
              />
            } 
          />
          <Route 
            path="/where-we-work" 
            element={<WhereWeWorkPage onOpenMembership={handleOpenMembership} />} 
          />
          <Route 
            path="/research" 
            element={<ResearchPage onOpenMembership={handleOpenMembership} />} 
          />
          <Route 
            path="/events" 
            element={<EventsPage />} 
          />
          <Route 
            path="/media" 
            element={<MediaPage />} 
          />
          <Route 
            path="/join" 
            element={<MembershipPage />} 
          />
          <Route 
            path="/membership" 
            element={<MembershipPage />} 
          />
          <Route 
            path="/join-our-family" 
            element={<MembershipPage />} 
          />
          <Route 
            path="*" 
            element={<HomePage onOpenMembership={handleOpenMembership} />} 
          />
        </Routes>
      </main>

      {/* Comprehensive Down-Side Footer */}
      <Footer
        onOpenMembership={handleOpenMembership}
        onOpenDonate={handleOpenDonate}
      />

      {/* Direct Giving Donation Modal */}
      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
      />

    </div>
  );
}

export default App;
