// crew mobile webp format
import douglas_mobile_webp from "../assets/crew/douglas-mobile.webp";
import mark_mobile_webp from "../assets/crew/mark-mobile.webp";
import victor_mobile_webp from "../assets/crew/victor-mobile.webp";
import ansari_mobile_webp from "../assets/crew/ansari-mobile.webp";

//crew mobile png format
import douglas_mobile_png from "../assets/crew/douglas-mobile.png";
import mark_mobile_png from "../assets/crew/mark-mobile.png";
import victor_mobile_png from "../assets/crew/victor-mobile.png";
import ansari_mobile_png from "../assets/crew/ansari-mobile.png";

// crew desktop webp foramt
import douglas_desktop_webp from "../assets/crew/douglas-desktop.webp";
import mark_desktop_webp from "../assets/crew/mark desktop.webp";
import victor_desktop_webp from "../assets/crew/victor-desktop.webp";
import ansari_desktop_webp from "../assets/crew/ansari-desktop.webp";

// crew desktop png format
import douglas_desktop_png from "../assets/crew/douglas-desktop.png";
import mark_desktop_png from "../assets/crew/mark-desktop.png";
import victor_desktop_png from "../assets/crew/victor-desktop.png";
import ansari_desktop_png from "../assets/crew/ansari-desktop.png";

export const crewData = [
  {
    id: "douglas",
    name: "DOUGLAS HURLEY",
    job: "COMMANDER",
    detail:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    images: {
      mobile_webp: douglas_mobile_webp,
      mobile_png: douglas_mobile_png,
      desktop_webp: douglas_desktop_webp,
      desktop_png: douglas_desktop_png,
    },
  },
  {
    id: "mark",
    name: "MARK SHUTTLEWORTH",
    job: "MISSION SPECIALIST",
    detail:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    images: {
      mobile_webp: mark_mobile_webp,
      mobile_png: mark_mobile_png,
      desktop_webp: mark_desktop_webp,
      desktop_png: mark_desktop_png,
    },
  },
  {
    id: "victor",
    name: "VICTOR GLOVER",
    job: "PILOT",
    detail:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    images: {
      mobile_webp: victor_mobile_webp,
      mobile_png: victor_mobile_png,
      desktop_webp: victor_desktop_webp,
      desktop_png: victor_desktop_png,
    },
  },
  {
    id: "ansari",
    name: "ANOUSHEH ANSARI",
    job: "FLIGHT ENGINEER",
    detail:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    images: {
      mobile_webp: ansari_mobile_webp,
      mobile_png: ansari_mobile_png,
      desktop_webp: ansari_desktop_webp,
      desktop_png: ansari_desktop_png,
    },
  },
];
