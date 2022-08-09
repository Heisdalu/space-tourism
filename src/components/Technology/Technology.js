import style from "./Technology.module.css";
import mobileWep from "../../assets/01.webp";
import TechnologyNavigation from "./TechnologyNavigation";
import desktopPng from "../../assets/launch-vehicle-desktop.png";
import TechnologyImage from "./TechnologyImage";
import TechnologyContent from "./TechnologyContent";

const Technology = (props) => {
  return (
    <div className={style.technologyContainer}>
      <h1 className={style.technologyHeader}>SPACE LAUNCH 101</h1>
      <div className={style.technologyMainBox}>
      
        <TechnologyImage mobileWep={mobileWep} desktopPng={desktopPng} />

        <div className={style.technologyMainContent}>
          <TechnologyNavigation />

          {/* <div className={style.contentBox}>
            <h1 className={style.contentHeader}>
              <span className={style.contentTitle}>THE TERMINOLOGY…</span>
              <span className={style.contentSubtitle}>LAUNCH VEHICLE</span>
            </h1>

            <p className={style.content}>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div> */}
          <TechnologyContent />
        </div>
      </div>
    </div>
  );
};

export default Technology;
