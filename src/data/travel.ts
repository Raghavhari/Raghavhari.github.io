import { ordinalFromEnd } from "@/lib/refIds";

export type TravelSpan = "tall" | "wide" | "default";

export type TravelEntry = {
  place: string;
  note: string;
  date: string;
  image: string;
  span: TravelSpan;
};

export const travel: TravelEntry[] = [
  {
    place: "Pondicherry",
    note: "Beach, French signs, and people pretending it's Europe. Still hot.",
    date: "Mar 2026",
    image: "/Pondi.jpg",
    span: "tall",
  },
  {
    place: "Singapore",
    note: "So clean it feels illegal to exist. Your wallet will suffer.",
    date: "Aug 2023",
    image: "/Singapore.jpg",
    span: "wide",
  },
  {
    place: "South Kasilash",
    note: "Climbed for peace, got sweat, pain, and life choices questioned.",
    date: "Feb 2025",
    image: "/Velligiri.jpg",
    span: "tall",
  },
  {
    place: "Munnar",
    note: "Tea everywhere. You’ll romanticize it until leeches show up.",
    date: "May 2024",
    image: "/Munnar.jpg",
    span: "default",
  },
  {
    place: "Koramangala",
    note: "Traffic, cafes, startups. Mostly traffic.",
    date: "Sep 2025",
    image: "/Bangalore.JPG",
    span: "default",
  },
  {
    place: "Goa",
    note: "Came for peace, found crowds, overpriced shacks, and loud playlists.",
    date: "Oct 2019",
    image: "/Goa.jpg",
    span: "default",
  },
];

export const railByIndex = [
  "from-blue via-blue/35 to-transparent",
  "from-violet via-violet/35 to-transparent",
  "from-cyan via-cyan/30 to-transparent",
  "from-success via-success/30 to-transparent",
] as const;

export function frameRef(i: number) {
  return `TRV-${ordinalFromEnd(i, travel.length)}`;
}

export function spanLabel(s: TravelSpan) {
  switch (s) {
    case "tall":
      return "Portrait";
    case "wide":
      return "Panorama";
    default:
      return "Standard";
  }
}
