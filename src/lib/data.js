import Moon_Webp from "../assets/destination/moon1.webp";
import Moon_Png from "../assets/destination/moon2.png";
import Mars_Webp from "../assets/destination/mars.webp";
import Mars_Png from "../assets/destination/mars.png";
import Europa_Webp from "../assets/destination/europa.webp";
import Europa_Png from "../assets/destination/europa.png";
import Titan_Webp from "../assets/destination/titan.webp";
import Titan_Png from "../assets/destination/titan.png";

export const destinationContent = [
  {
    id: "moon",
    title: "MOON",
    content:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384400 KM",
    time: "3 DAYS",
    images: {
      webp: Moon_Webp,
      png: Moon_Png,
    },
  },
  {
    id: "mars",
    title: "MARS",
    content:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time: "9 MONTHS",
    images: {
      webp: Mars_Webp,
      png: Mars_Png,
    },
  },
  {
    id: "europa",
    title: "EUROPA",
    content:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",

    distance: "628 MIL. KM",
    time: "3 YEARS",
    images: {
      webp: Europa_Webp,
      png: Europa_Png,
    },
  },
  {
    id: "titan",
    title: "TITAN",
    content:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time: "7 YEARS",
    images: {
      webp: Titan_Webp,
      png: Titan_Png,
    },
  },
];
