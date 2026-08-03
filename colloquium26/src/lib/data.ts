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
};

export const speakers: Speaker[] = [
  { name: "Speaker Name", role: "Title, Organization", initials: "SN", accent: "blue" },
  { name: "Speaker Name", role: "Title, Organization", initials: "SN", accent: "amber" },
  { name: "Speaker Name", role: "Title, Organization", initials: "SN", accent: "coral" },
  { name: "Speaker Name", role: "Title, Organization", initials: "SN", accent: "emerald" },
  { name: "Speaker Name", role: "Title, Organization", initials: "SN", accent: "blue" },
  { name: "Speaker Name", role: "Title, Organization", initials: "SN", accent: "amber" },
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
