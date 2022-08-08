/* eslint-disable jsx-a11y/anchor-is-valid */
import style from "./Destination.module.css";
import Moon_Webp from "../../assets/moon1.webp";
import Moon_Png from "../../assets/moon2.png";

const Destination = () => {
  return (
    <div className={style.destinationContainer}>
      <h1 className={style.title}>PICK YOUR DESTINATION</h1>
      <div className={style.destinationContent}>
        <figure className={style.planetImage}>
          <picture>
            <source srcSet={Moon_Webp} />
            <img src={Moon_Png} alt="the moon" />
          </picture>
        </figure>

        <div className={style.destinationMain}>
          <nav className={style.navigation}>
            <div className={style.navLinkBox}>
              <a href="#" className={style.navLink}>
                MOON
              </a>
            </div>

            <div className={style.navLinkBox}>
              <a href="#" className={style.navLink}>
                MARS
              </a>
            </div>

            <div className={style.navLinkBox}>
              <a href="#" className={style.navLink}>
                EUROPA
              </a>
            </div>

            <div className={style.navLinkBox}>
              <a href="#" className={style.navLink}>
                TITAN
              </a>
            </div>
          </nav>

          <section className={style.destnationDetailBox}>
            <div className={style.mainDetail}>
              <h1 className={style.mainDetailTitle}>MOON</h1>
              <p className={style.mainDetailContent}>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
            </div>
            <div className={style.subDetailBox}>
              <section className={style.subDetail}>
                <h2 className={style.subDetailTitle}>AVG. DISTANCE</h2>
                <p className={style.subDetailValue}>384,400KM</p>
              </section>
              <section className={style.subDetail}>
                <h2 className={style.subDetailTitle}>Est. travel time</h2>
                <p className={style.subDetailValue}>3 DAYS</p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Destination;
