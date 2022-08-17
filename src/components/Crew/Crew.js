import { Redirect, Route, useRouteMatch } from "react-router-dom";
import style from "./Crew.module.css";
import CrewImage from "./CrewImage";
import CrewNavigation from "./CrewNavigation";
import CrewContent from "./CrewContent";

const Crew = () => {
  const { path } = useRouteMatch();

  return (
    <div className={style.crewContainer}>
      <h1 className={style.crewHeader}>MEET YOUR CREW</h1>

      <Route path={path} exact>
        <Redirect to={`${path}/douglas`} />
      </Route>

      <Route path={`${path}/:name`}>
        <CrewImage />
      </Route>

      <div className={style.crewMainBox}>
        <CrewNavigation />

        <Route path={`${path}/:name`}>
          <CrewContent />
        </Route>
      </div>
    </div>
  );
};

export default Crew;
