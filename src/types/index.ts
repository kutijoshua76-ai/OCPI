export type ViewTab = 
  | 'welcome' 
  | 'governance' 
  | 'what-we-do' 
  | 'where-we-work' 
  | 'research' 
  | 'events' 
  | 'media';

export type BoardCategory = 'all' | 'executive' | 'non-executive' | 'trustee';

export interface BoardMember {
  name: string;
  role: string;
  category: 'executive' | 'non-executive' | 'trustee';
  bio: string;
  image: string;
}

export interface SubCommittee {
  id: string;
  name: string;
  desc: string;
  lead: string;
}

export interface ResearchUnit {
  id: string;
  name: string;
  iconName: string;
  focus: string;
  lead: string;
  publicationsCount: number;
}

export interface AcademicStaff {
  name: string;
  title: string;
  campus: string;
  unit: string;
}

export interface UpcomingEvent {
  title: string;
  category: string;
  date: string;
  location: string;
  desc: string;
}

export interface Publication {
  title: string;
  type: string;
  pages: string;
  date: string;
  desc: string;
}
