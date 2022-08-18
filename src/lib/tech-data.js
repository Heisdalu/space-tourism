// mobile webp format
import launch_mobile_webp from "../assets/tech/launch-vehicle-mobile.webp";
import spaceport_mobile_webp from "../assets/tech/spaceport-mobile.webp";
import spacecapsule_mobile_webp from "../assets/tech/spacecapsule-mobile.webp";

// desktop png format
import launch_mobile_png from "../assets/tech/launch-vehicle-mobile.png";
import spaceport_mobile_png from "../assets/tech/spaceport-mobile.png";
import spacecapsule_mobile_png from "../assets/tech/spacecapsule-mobile.png";

// desktop webp format
import launch_desktop_webp from "../assets/tech/launch-vehicle-desktop.webp";
import spaceport_desktop_webp from "../assets/tech/spaceport-desktop.webp";
import spacecapsule_desktop_webp from "../assets/tech/spacecapsule-desktop.webp";

// desktop png format
import launch_desktop_png from "../assets/tech/launch-vehicle-desktop.png";
import spaceport_desktop_png from "../assets/tech/spaceport-desktop.png";
import spacecapsule_desktop_png from "../assets/tech/spaceport-desktop.png";

export const techData = [
  {
    id: "launch-vehicle",
    title: "LAUNCH VEHICLE",
    detail:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    images: {
      mobile_webp: launch_mobile_webp,
      mobile_png: launch_mobile_png,
      desktop_webp: launch_desktop_webp,
      desktop_png: launch_desktop_png,
    },
  },
  {
    id: "spaceport",
    title: "SPACEPORT",
    detail:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    images: {
      mobile_webp: spaceport_mobile_webp,
      mobile_png: spaceport_mobile_png,
      desktop_webp: spaceport_desktop_webp,
      desktop_png: spaceport_desktop_png,
    },
  },
  {
    id: "space-capsule",
    title: "SPACE CAPSULE",
    detail:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    images: {
      mobile_webp: spacecapsule_mobile_webp,
      mobile_png: spacecapsule_mobile_png,
      desktop_webp: spacecapsule_desktop_webp,
      desktop_png: spacecapsule_desktop_png,
    },
  },
];
