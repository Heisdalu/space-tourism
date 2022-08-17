import { NavLink, useRouteMatch } from "react-router-dom";
import style from "./CrewNavigation.module.css";

const CrewNavigation = () => {
  const { url } = useRouteMatch();

  return (
    <nav className={style.crewNavigation}>
      <NavLink
        to={`${url}/douglas`}
        className={style.navBtn}
        activeClassName={style.activeBtn}
      ></NavLink>

      <NavLink
        to={`${url}/mark`}
        className={style.navBtn}
        activeClassName={style.activeBtn}
      ></NavLink>

      <NavLink
        to={`${url}/victor`}
        className={style.navBtn}
        activeClassName={style.activeBtn}
      ></NavLink>

      <NavLink
        to={`${url}/ansari`}
        className={style.navBtn}
        activeClassName={style.activeBtn}
      ></NavLink>
    </nav>
  );
};

export default CrewNavigation;
