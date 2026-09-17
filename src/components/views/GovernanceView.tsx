import React, { useState } from 'react';
import type { BoardCategory } from '../../types';
import { BOARD_MEMBERS, GOVERNANCE_COUNTS, SUB_COMMITTEES } from '../../data/ocpiData';
import { SparkleStar, DiamondTwinkle, HalftoneWaveGrid } from '../DecorativeOrnaments';
import { ScrollReveal } from '../ScrollReveal';

export const GovernanceView: React.FC = () => {
  const [filter, setFilter] = useState<BoardCategory>('all');
  const [selectedMember, setSelectedMember] = useState<typeof BOARD_MEMBERS[0] | null>(null);

  const filteredMembers = filter === 'all'
    ? BOARD_MEMBERS
    : BOARD_MEMBERS.filter(m => m.category === filter);

  const subCommitteeImages = [
    "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop", // HR & Finance
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop", // Research & Programme
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"  // Education & Community
  ];

  // Badges tailored per category / role (matching Image 1's floating tilted badges)
  const getFloatingBadge = (category: string, index: number) => {
    const badges: Record<string, string[]> = {
      executive: ['Growing future leaders', 'Field operations', 'Driving innovation', 'Empowering youth', 'Strategic execution', 'Policy & governance'],
      'non-executive': ['Reigniting the passion', 'Ethics & standards', 'Institutional trust', 'Empirical review', 'Continental strategy', 'Scientific rigor'],
      trustee: ['Bridging the divide', 'Fiduciary oversight', 'Legal trusteeship', 'Quality assurance', 'Community stewardship', 'Public advocacy']
    };
    const list = badges[category] || ['Civic leadership', 'Community impact'];
    return list[index % list.length];
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-4 sm:py-6 relative">
      
      {/* Governance Stats Strip */}
      <ScrollReveal animation="fade-up">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="py-2">
            <div className="font-display font-bold text-3xl sm:text-5xl text-[#1B96D8] mb-1 sm:mb-2">
              {GOVERNANCE_COUNTS.totalBoard}
            </div>
            <div className="text-xs font-bold text-slate-900 font-sans">
              Total Board of Directors
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-normal font-sans">Full statutory governing council</div>
          </div>

          <div className="py-2">
            <div className="font-display font-bold text-3xl sm:text-5xl text-[#8FC02A] mb-1 sm:mb-2">
              {GOVERNANCE_COUNTS.executive}
            </div>
            <div className="text-xs font-bold text-slate-900 font-sans">
              Executive Board
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-normal font-sans">Operational portfolio directors</div>
          </div>

          <div className="py-2">
            <div className="font-display font-bold text-3xl sm:text-5xl text-[#1B96D8] mb-1 sm:mb-2">
              {GOVERNANCE_COUNTS.nonExecutive}
            </div>
            <div className="text-xs font-bold text-slate-900 font-sans">
              Non-Executive Board
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-normal font-sans">Strategic oversight &amp; ethics</div>
          </div>

          <div className="py-2">
            <div className="font-display font-bold text-3xl sm:text-5xl text-[#8FC02A] mb-1 sm:mb-2">
              {GOVERNANCE_COUNTS.trustees}
            </div>
            <div className="text-xs font-bold text-slate-900 font-sans">
              Specialists &amp; Trustees
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-normal font-sans">Quality assurance &amp; legal trust</div>
          </div>
        </div>
      </ScrollReveal>

      {/* Sub-Committees */}
      <div className="relative space-y-6 sm:space-y-8">
        
        <HalftoneWaveGrid className="-top-12 -left-20 w-[500px] h-[300px] hidden sm:block" opacity={0.2} />

        <ScrollReveal animation="fade-up">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold text-[#1B96D8] block mb-1.5 sm:mb-2 font-sans">
              Standing Oversight
            </span>
            <h3 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl text-slate-900 leading-tight">
              Governance Sub-Committees
            </h3>
            <p className="font-sans text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
              Three standing statutory sub-committees provide continuous oversight across human capital, scientific integrity, and community outreach.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SUB_COMMITTEES.map((sc, scIdx) => (
            <ScrollReveal key={sc.id} animation="fade-up" delay={scIdx * 150} duration={750}>
              <div 
                className="relative h-[440px] xs:h-[480px] sm:h-[520px] rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-end p-5 sm:p-8 group shadow-xl hover:shadow-2xl transition-all duration-500 select-none"
              >
                <img 
                  src={subCommitteeImages[scIdx % subCommitteeImages.length]} 
                  alt={sc.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

                <div className="relative z-10 space-y-2 sm:space-y-2.5">
                  <span className="text-xs font-bold text-[#1B96D8] block font-sans">
                    Statutory Sub-Committee 0{scIdx + 1}
                  </span>
                  <h4 className="font-display font-bold text-white text-xl sm:text-2xl leading-snug">
                    {sc.name}
                  </h4>
                  <p className="font-sans text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
                    {sc.desc}
                  </p>
                  <div className="pt-2 text-xs text-[#8FC02A] font-bold">
                    Chair: <span className="text-white font-medium">{sc.lead}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* =========================================================================
          BOARD MEMBERS SECTION (Exact Match to User Reference Image 1 Layout)
          ========================================================================= */}
      <div className="relative space-y-8 sm:space-y-12 pt-4 sm:pt-6">
        
        <HalftoneWaveGrid className="-top-12 -right-20 w-[550px] h-[350px] hidden sm:block" opacity={0.25} />
        <SparkleStar color="#f59e0b" size={28} className="hidden sm:block absolute -top-6 right-16 animate-pulse" />
        <DiamondTwinkle color="#1B96D8" size={24} className="hidden sm:block absolute top-12 left-1/3" />

        <ScrollReveal animation="fade-up">
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <div>
              <span className="text-xs font-bold text-[#8FC02A] block mb-1.5 sm:mb-2 font-sans">
                28 Council Members
              </span>
              <h3 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl text-slate-900 leading-tight">
                Board of Directors &amp; Trustees
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all font-sans ${
                  filter === 'all'
                    ? 'bg-[#1B96D8] text-white shadow-md'
                    : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All ({GOVERNANCE_COUNTS.totalBoard})
              </button>

              <button
                onClick={() => setFilter('executive')}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all font-sans ${
                  filter === 'executive'
                    ? 'bg-[#1B96D8] text-white shadow-md'
                    : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Executive ({GOVERNANCE_COUNTS.executive})
              </button>

              <button
                onClick={() => setFilter('non-executive')}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all font-sans ${
                  filter === 'non-executive'
                    ? 'bg-[#1B96D8] text-white shadow-md'
                    : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Non-Executive ({GOVERNANCE_COUNTS.nonExecutive})
              </button>

              <button
                onClick={() => setFilter('trustee')}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all font-sans ${
                  filter === 'trustee'
                    ? 'bg-[#1B96D8] text-white shadow-md'
                    : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Trustees ({GOVERNANCE_COUNTS.trustees})
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Column Grid: Image 1 Style (Deep Navy Card with Downward Pointer Notch + Info Below) */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
          {filteredMembers.map((member, idx) => {
            const badgeText = getFloatingBadge(member.category, idx);
            const tiltAngles = ['-rotate-12', '-rotate-6', '-rotate-8', '-rotate-10'];
            const tiltClass = tiltAngles[idx % tiltAngles.length];

            return (
              <ScrollReveal key={member.name} animation="fade-up" delay={(idx % 4) * 100} duration={650}>
                <div 
                  className="flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* WRAPPER FOR TOP NAVY CARD + SPEECH BUBBLE POINTER */}
                    <div className="relative group/card cursor-pointer" onClick={() => setSelectedMember(member)}>
                      {/* Deep Navy Rounded Card Container */}
                      <div className="relative aspect-[4/5] sm:h-[350px] rounded-[30px] bg-[#0c1e38] shadow-xl overflow-hidden flex items-end justify-center group-hover/card:-translate-y-1.5 transition-all duration-300">
                        
                        {/* Monogram / Crest Watermark Pattern in Dark Navy Background */}
                        <div className="absolute inset-0 opacity-15 pointer-events-none select-none flex items-center justify-center">
                          <svg className="w-full h-full text-white" viewBox="0 0 120 120" fill="currentColor">
                            <pattern id={`monogram-${idx}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                              <text x="20" y="26" fontSize="16" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" fill="currentColor">OC</text>
                              <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
                            </pattern>
                            <rect width="100%" height="100%" fill={`url(#monogram-${idx})`} />
                          </svg>
                        </div>

                        {/* Member Portrait */}
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-700" 
                          loading="lazy" 
                        />

                        {/* Dark gradient at the base to seamlessly ground the portrait */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e38] via-[#0c1e38]/20 to-transparent pointer-events-none" />

                        {/* Floating Tilted Glassmorphism Badge (Image 1 Style) */}
                        <div className={`absolute z-10 top-10 left-3.5 ${tiltClass} transition-transform group-hover/card:scale-105`}>
                          <div className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/35 shadow-lg text-white font-sans text-[11px] font-semibold tracking-wide select-none">
                            {badgeText}
                          </div>
                        </div>
                      </div>

                      {/* Downward Speech Bubble Pointer Triangle sitting directly below the navy card */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-[#0c1e38] z-20 pointer-events-none drop-shadow-sm group-hover/card:-translate-y-1.5 transition-transform duration-300" />
                    </div>

                    {/* BOTTOM CONTENT: Positioned directly underneath the speech bubble pointer on clean page background */}
                    <div className="pt-6 space-y-2 px-1">
                      
                      {/* Bullet Dot + Name */}
                      <h4 className="font-display font-bold text-slate-900 text-lg sm:text-xl tracking-tight leading-snug flex items-baseline gap-2">
                        <span className="text-[#1B96D8] text-lg font-black shrink-0 leading-none">&bull;</span>
                        <span className="hover:text-[#1B96D8] transition-colors cursor-pointer" onClick={() => setSelectedMember(member)}>
                          {member.name}
                        </span>
                      </h4>

                      {/* Role / Portfolio in Brand Blue */}
                      <div className="text-xs font-semibold text-[#1B96D8] font-sans">
                        {member.role}
                      </div>

                      {/* Bio Description */}
                      <p className="font-sans text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal line-clamp-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-3 px-1">
                    <button 
                      onClick={() => setSelectedMember(member)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B96D8] hover:text-[#147cb5] group/btn transition-colors font-sans"
                    >
                      <span>Find out more</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                    </button>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Member Profile Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-[28px] sm:rounded-[36px] max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative border border-slate-200 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg transition-colors"
            >
              &times;
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-2 sm:pt-0">
              <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#0c1e38] shrink-0 shadow-lg">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-center sm:text-left">
                <span className="text-xs font-bold text-[#1B96D8] font-sans">
                  {selectedMember.category} Portfolio &bull; Verified Council Member
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                  {selectedMember.name}
                </h3>
                <div className="text-sm font-semibold text-[#8FC02A]">
                  {selectedMember.role}
                </div>
                <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-normal pt-1">
                  {selectedMember.bio}
                </p>
                <div className="pt-3 sm:pt-4">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#1B96D8] text-white text-xs font-bold hover:bg-[#147cb5] transition-all shadow-md font-sans"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
