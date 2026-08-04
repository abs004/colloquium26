export const event = {
  edition: "Colloquium'26",
  tagline: "The Future is Agentic",
  description:
    "COLLOQUIUM'26 explores the next chapter of Artificial Intelligence through the lens of Agentic AI — autonomous AI systems, human-AI collaboration, AI security, responsible innovation, and intelligent workflows. Expert talks, panel discussions, networking, and a hands-on workshop.",
  date: "Saturday, 15 August 2026",
  time: "9:30 AM – 1:30 PM",
  venue: "EQUIPO Business Solutions Private Limited, Thiruvananthapuram",
  venueBlurb:
    "Join us at EQUIPO Business Solutions Private Limited, Thiruvananthapuram, for an engaging day of expert sessions, panels, and networking focused on the future of Agentic AI.",
  registerUrl: "#register",
};

export type Speaker = {
  name: string;
  role: string;
  initials: string;
  accent: "amber" | "coral" | "emerald" | "blue";
  image?: string;
  imagePosition?: string;
};

export const speakers: Speaker[] = [
  { name: "Anup G Prasad", role: "Lead AI Engineer, Equipo Health Inc", initials: "AP", accent: "blue", image: "/images/assets/speakers/anup-g-prasad.png" },
  { name: "Sameen Sardar", role: "CMO & Co-Founder, Tenztro Pvt Ltd", initials: "SS", accent: "coral" },
  { name: "Kiran S Raj", role: "Lead Data Scientist, Qualys", initials: "KR", accent: "emerald", image: "/images/assets/speakers/kiran-s-raj.jpeg" },
  { name: "Fincy M Yousuff", role: "Vice President, Growth, Equipo Health Inc", initials: "FY", accent: "amber", image: "/images/assets/speakers/fincy.png", imagePosition: "top" },
  { name: "Gregory Kurien", role: "Junior Software Engineer, Lektik Consulting", initials: "GK", accent: "coral", image: "/images/assets/speakers/gregory-kurien.jpeg" },
  { name: "Neeraj V Ipe", role: "Team Lead, Accenture Song", initials: "NI", accent: "emerald", image: "/images/assets/speakers/neeraj-v-ipe.png" },
  { name: "Sai Pramod V V N S", role: "Software Engineer, Verteil", initials: "SP", accent: "blue", image: "/images/assets/speakers/sai-pramod.jpeg" },
  { name: "Sneha C", role: "Software Engineer, Verteil", initials: "SC", accent: "amber", image: "/images/assets/speakers/sneha-c.jpeg" },
];

export type ScheduleItem = {
  time: string;
  title: string;
  detail: string;
  speaker?: string;
  role?: string;
  panelists?: { name: string; role: string }[];
};

export const schedule: ScheduleItem[] = [
  { time: "8:30 AM", title: "Registration", detail: "Badge pickup and networking" },
  { time: "9:30 AM", title: "Inauguration", detail: "Opening ceremony" },
  { time: "9:50 AM", title: "Tea Break", detail: "Short refreshment break" },
  { time: "10:00 AM", title: "Expert Session", detail: "\"The Autonomous Workforce: Redefining Human-AI Collaboration\"", speaker: "Anup G Prasad", role: "Lead AI Engineer, Equipo Health Inc" },
  { time: "10:45 AM", title: "Networking Session", detail: "Interactive networking", speaker: "Sameen Sardar", role: "CMO & Co-Founder, Tenztro Pvt Ltd" },
  { time: "11:00 AM", title: "Workshop", detail: "\"Agentic Workflows and Orchestration\"", speaker: "Kiran S Raj", role: "Lead Data Scientist, Qualys" },
  {
    time: "12:00 PM",
    title: "Panel Discussion",
    detail: "\"Sustainability in the Age of AI\"",
    panelists: [
      { name: "Gregory Kurien (Moderator)", role: "Junior Software Engineer, Lektik Consulting" },
      { name: "Neeraj V Ipe", role: "Team Lead, Accenture Song" },
      { name: "Sai Pramod V V N S", role: "Software Engineer, Verteil" },
      { name: "Sneha C", role: "Software Engineer, Verteil" },
      { name: "Fincy M Yousuff", role: "Vice President, Growth, Equipo Health Inc" }
    ]
  },
  { time: "1:00 PM", title: "Closing Ceremony + Group Photo", detail: "Event wrap-up" },
  { time: "1:30 PM", title: "Lunch", detail: "Networking lunch" }
];

export type Sponsor = { name: string; logo?: string };
export const sponsors: Sponsor[] = [
  { name: "GDG Cloud Kochi", logo: "/images/assets/sponsors/gdg-cloud-kochi.png" },
  { name: "Equipo", logo: "/images/assets/sponsors/equipo-logo.png" },
];

export const socials = {
  facebook: "#",
  instagram: "#",
  twitter: "#",
  linkedin: "#",
};
