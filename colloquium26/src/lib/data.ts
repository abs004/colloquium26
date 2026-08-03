export const event = {
  edition: "Colloquium'26",
  tagline: "For professionals, by professionals",
  date: "TBA, 2026",
  time: "09:00 AM – 02:00 PM",
  venue: "Venue to be announced",
  venueBlurb:
    "This year's venue is still being finalized. Colloquium'26 will once again bring together IEEE and non-IEEE professionals for a day of talks, networking, and hands-on exposure to emerging technology.",
  registerUrl: "#register",
};

export type Speaker = {
  name: string;
  role: string;
  initials: string;
  accent: "amber" | "coral" | "emerald" | "blue";
  image?: string;
};

export const speakers: Speaker[] = [
  { name: "Anup G Prasad", role: "TITLE HERE", initials: "AP", accent: "blue", image: "/images/assets/speakers/anup-g-prasad.png" },
  { name: "Fincy", role: "TITLE HERE", initials: "F", accent: "amber", image: "/images/assets/speakers/fincy.jpeg" },
  { name: "Gregory Kurien", role: "TITLE HERE", initials: "GK", accent: "coral", image: "/images/assets/speakers/gregory-kurien.jpeg" },
  { name: "Neeraj V Ipe", role: "TITLE HERE", initials: "NI", accent: "emerald", image: "/images/assets/speakers/neeraj-v-ipe.png" },
  { name: "Sai Pramod V V N S", role: "TITLE HERE", initials: "SP", accent: "blue", image: "/images/assets/speakers/sai-pramod.jpeg" },
  { name: "Sneha C", role: "TITLE HERE", initials: "SC", accent: "amber", image: "/images/assets/speakers/sneha-c.jpeg" },
];

export type ScheduleItem = {
  time: string;
  title: string;
  detail: string;
};

export const schedule: ScheduleItem[] = [
  { time: "09:00 AM", title: "Registration & Check-in", detail: "Badge pickup and networking coffee" },
  { time: "09:30 AM", title: "Opening Remarks", detail: "IEEE Computer Society Kerala Chapter" },
  { time: "10:00 AM", title: "Keynote Session", detail: "Speaker to be announced" },
  { time: "11:15 AM", title: "Panel Discussion", detail: "Topic to be announced" },
  { time: "12:30 PM", title: "Lunch & Networking", detail: "Open floor for connections" },
  { time: "01:30 PM", title: "Closing Session", detail: "Awards and closing remarks" },
];

export const sponsors: string[] = ["SPONSOR", "SPONSOR", "SPONSOR", "SPONSOR"];

export const socials = {
  facebook: "#",
  instagram: "#",
  twitter: "#",
  linkedin: "#",
};
