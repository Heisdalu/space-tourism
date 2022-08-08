import style from './CrewContent.module.css';

const CrewContent = (props) => {
    return (
      <section className={style.crewMainContent}>
        <h1 className={style.crewTitle}>
          <span className={style.crewSubtitle}>COMMANDER</span>
          <span className={style.crewName}>DOUGLAS HURLEY</span>
        </h1>

        <p className={style.crewDetail}>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </section>
    );
}

export default CrewContent