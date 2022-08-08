import style from "./Crew.module.css";
import douglasWebp from "../../assets/douglas.webp";
import douglasJpg from "../../assets/douglas.png";
import douglasJDesktopWebp from "../../assets/douglas-desktop.webp";
import lol from "../../assets/douglas-desktop.png";
import CrewImage from "./CrewImage";
import CrewNavigation from "./CrewNavigation";
import CrewContent from "./CrewContent";

const Crew = () => {
  return (
    <div className={style.crewContainer}>
      <h1 className={style.crewHeader}>MEET YOUR CREW</h1>

      <CrewImage
        desktopImage={douglasJDesktopWebp}
        mobileImage={douglasWebp}
        defaultImage= {douglasJpg}
      />

      <div className={style.crewMainBox}>
        <CrewNavigation />

       <CrewContent />
      </div>
    </div>
  );
};

export default Crew;
