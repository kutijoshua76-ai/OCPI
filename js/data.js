// Data store for One Community Platform Initiative (OCPI)

const OCPI_DATA = {
  stats: [
    { number: "28", label: "Board Members & Trustees", icon: "users" },
    { number: "7", label: "JRG Specialized Research Units", icon: "book-open" },
    { number: "18+", label: "African Communities Reached", icon: "globe" },
    { number: "12,500+", label: "Youth & Fellows Empowered", icon: "award" }
  ],

  governance: {
    counts: {
      totalBoard: 28,
      nonExecutive: 11,
      executive: 14,
      trustees: 7,
      management: 9,
      subCommittees: 3
    },
    subCommittees: [
      {
        id: "hr-finance",
        name: "Human Resource & Finance",
        desc: "Oversees fiscal discipline, organizational staffing, remuneration, and annual audit integrity.",
        lead: "Dr. A. O. Bello (FCA)"
      },
      {
        id: "research-prog",
        name: "Research & Programme Development",
        desc: "Sets methodological standards, evaluates grassroots interventions, and oversees JRG research outputs.",
        lead: "Prof. E. K. Mensah (PhD)"
      },
      {
        id: "edu-community",
        name: "Education & Community Service",
        desc: "Steers grassroots outreach, scholarship disbursement, minority integration, and community open labs.",
        lead: "Hon. (Mrs.) C. Nnamdi"
      }
    ],
    members: [
      {
        name: "Amb. Dr. Solomon Adebayo",
        role: "Founder & Executive Chairperson",
        category: "executive",
        bio: "Veteran development economist and civic innovator with over 25 years leading grassroots transformation across West Africa.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Dr. Funmilayo Adeleke",
        role: "Executive Director of Field Operations",
        category: "executive",
        bio: "Specialist in rural infrastructure delivery and participatory development planning.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Engr. Kabir Mohammed",
        role: "Director of Technology & Open Labs",
        category: "executive",
        bio: "Pioneer in appropriate rural technology, low-bandwidth networks, and community fabrication hubs.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Prof. Grace Onyango",
        role: "Non-Executive Board Chair",
        category: "non-executive",
        bio: "Emeritus Professor of Sociology and Gender Studies, advising on equity and minority inclusion.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Chief David Chukwuma (SAN)",
        role: "Non-Executive Director (Legal & Ethics)",
        category: "non-executive",
        bio: "Senior Advocate with focus on civic rights, institutional transparency, and statutory compliance.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Dr. Alistair Vance",
        role: "Non-Executive Director (International Grants)",
        category: "non-executive",
        bio: "Former bilateral aid director advising on multilateral financing and institutional alignment.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Lady Folashade Balogun",
        role: "Associate Quality Specialist & Senior Trustee",
        category: "trustee",
        bio: "Quality assurance fellow overseeing program standards and institutional accreditation.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Alhaji Mustapha Danjuma",
        role: "Trustee (Community Endowment Fund)",
        category: "trustee",
        bio: "Custodian of community trusts, agricultural cooperatives, and socioeconomic micro-funds.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
      }
    ]
  },

  researchUnits: [
    {
      id: "development",
      name: "Development Resource Unit",
      icon: "building",
      focus: "Sustainable infrastructure, rural electrification, clean water access, and eco-habitat solutions.",
      lead: "Dr. T. Danladi",
      publicationsCount: 24
    },
    {
      id: "educational",
      name: "Educational Resource Unit",
      icon: "graduation-cap",
      focus: "EdTech integration in underserved primary schools, indigenous pedagogy, and teacher digital training.",
      lead: "Prof. (Mrs.) R. Okafor",
      publicationsCount: 38
    },
    {
      id: "agricultural",
      name: "Agricultural Resource Unit",
      icon: "sprout",
      focus: "Smallholder crop yield resilience, post-harvest solar cold chains, and cooperative value chains.",
      lead: "Dr. J. K. Agbaje",
      publicationsCount: 42
    },
    {
      id: "social-dev",
      name: "Social Development Unit",
      icon: "heart-handshake",
      focus: "Marginalized minority integration, civic vulnerability tracking, and rural community emergency buffers.",
      lead: "Dr. Miriam Essien",
      publicationsCount: 31
    },
    {
      id: "knowledge-mgmt",
      name: "Knowledge Management Unit",
      icon: "database",
      focus: "Pan-African open-access civic repository, statistical data aggregation, and policy whitepapers.",
      lead: "M. S. Al-Hassan (MSc)",
      publicationsCount: 56
    },
    {
      id: "technology",
      name: "Technology Resource Unit",
      icon: "cpu",
      focus: "Decentralized mesh networks, open-source hardware, and digital literacy frameworks for youth.",
      lead: "Engr. Victor Nwosu",
      publicationsCount: 29
    },
    {
      id: "food-security",
      name: "Food Security & Nutrition Unit",
      icon: "apple",
      focus: "Child nutritional health indices, biofortified crops, and food emergency contingency systems.",
      lead: "Dr. Kemi Solarin",
      publicationsCount: 35
    }
  ],

  academicStaff: [
    { name: "Prof. E. K. Mensah", title: "Lead Research Fellow", campus: "University of Lagos Campus", unit: "Research & Program Lead" },
    { name: "Dr. Amina Yusuf", title: "Senior Research Fellow", campus: "Ahmadu Bello University Campus", unit: "Agricultural Resource" },
    { name: "Dr. Chidi Ekwueme", title: "Senior Fellow (EdTech)", campus: "University of Nigeria Nsukka", unit: "Educational Resource" },
    { name: "Dr. Tariq Sanusi", title: "Research Fellow", campus: "University of Ibadan Campus", unit: "Development Resource" },
    { name: "Dr. Fatima Garba", title: "Fellow in Public Health", campus: "Bayero University Kano", unit: "Food Security & Nutrition" },
    { name: "Engr. Paul Oladipo", title: "Lead Systems Researcher", campus: "FUTA Akure Campus", unit: "Technology Resource" }
  ],

  upcomingEvents: [
    {
      title: "Community Open Labs & Tech Fabrication Workshop",
      category: "Upcoming Event",
      date: "Oct 14 - 16, 2026",
      location: "JEOLINKS Innovation Hub, Lagos",
      desc: "Hands-on drop-in sessions for community builders, youth tinkerers, and grassroots entrepreneurs to build open hardware prototypes."
    },
    {
      title: "Consulting Support Clinic @ JEOLINKS",
      category: "Advisory Clinic",
      date: "Nov 03, 2026",
      location: "JEOLINKS Corporate Center & Virtual",
      desc: "One-on-one strategic business diagnostics, institutional grants advisory, and compliance clinics for community enterprises."
    },
    {
      title: "Annual Teaching with Technology Awards (TTA 2026)",
      category: "Summit & Awards",
      date: "Dec 05, 2026",
      location: "Continental Convention Hall, Abuja",
      desc: "Celebrating educators who have transformed low-resource classrooms through grassroots technology integration."
    },
    {
      title: "Pan-African Community Conference & Round Table",
      category: "Year-Round Event",
      date: "Jan 22, 2027",
      location: "Accra & Hybrid",
      desc: "Annual multilateral dialogue uniting grassroots leaders, policy makers, and philanthropic investors."
    }
  ],

  publications: [
    {
      title: "OCPI Annual Community & Financial Sustainability Report 2025/2026",
      type: "Annual Report",
      pages: "64 Pages",
      date: "August 2026",
      desc: "Audited programmatic expenditure, milestones achieved across 18 regional hubs, and independent trustee governance reviews."
    },
    {
      title: "Eradicating Extreme Minority Barriers: Field Insights from Rural Nigeria",
      type: "JRG Policy Brief",
      pages: "32 Pages",
      date: "July 2026",
      desc: "Evidence-based strategies for integrating historically excluded linguistic and geographic demographics into civic programs."
    },
    {
      title: "Grassroots Socioeconomic Tech Applications in Decentralized Communities",
      type: "Technical Whitepaper",
      pages: "48 Pages",
      date: "May 2026",
      desc: "A framework for sustainable solar-powered community open labs and offline learning repositories."
    }
  ],

  whereWeWork: {
    region: "Nigeria cum Africa",
    problemOutline: "Persistent infrastructural gaps, acute youth underemployment, and technological isolation of minority grassroots communities.",
    ourSolution: "Decentralized community-owned platforms, accredited skills fellowships, and technology-driven social enterprises supported by rigorous JRG research.",
    milestones: [
      "18 Regional Consultation Councils active across 6 geopolitical zones",
      "Over 3,400 certified fellows graduated through structured accredited training",
      "7 Community Open Labs operational in rural and semi-urban learning centers",
      "Direct technical advisory delivered to over 450 cooperative societies"
    ],
    contact: {
      title: "Project Director's Office",
      address: "JEOLINKS Corporate Complex, Plot 14 Commercial Avenue, Yaba, Lagos, Nigeria",
      email: "director@ocpinitiative.net",
      website: "www.ocpinitiative.net",
      tel: "+234 (0) 1 453 8890 / +234 (0) 803 000 7891"
    }
  }
};
