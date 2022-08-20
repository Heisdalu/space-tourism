import { Redirect, Route, useRouteMatch } from "react-router-dom";
import style from "./Technology.module.css";
import TechnologyNavigation from "./TechnologyNavigation";
import TechnologyImage from "./TechnologyImage";
import TechnologyContent from "./TechnologyContent";
import useBg from "../../hooks/use-Bg";
import { TECH_BG } from "../../lib/bg";

const Technology = () => {
  const { path, url } = useRouteMatch();

  useBg(TECH_BG)

  return (
    <div className={style.technologyContainer}>
      <h1 className={style.technologyHeader}>SPACE LAUNCH 101</h1>
      <div className={style.technologyMainBox}>
        <Route path={path} exact>
          <Redirect to={`${url}/launch-vehicle`} />
        </Route>

        <Route path={`${path}/:id`}>
          <TechnologyImage />
        </Route>

        <div className={style.technologyMainContent}>
          <TechnologyNavigation />

          <Route path={`${path}/:id`}>
            <TechnologyContent />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Technology;
