import { NavLink, useRouteMatch } from "react-router-dom";

import style from "./TechnologyNavigation.module.css";

const TechnologyNavigation = () => {
  const { url } = useRouteMatch();

  return (
    <nav className={style.navBox}>
      <NavLink
        to={`${url}/launch-vehicle`}
        className={style.link}
        activeClassName={style.activeLink}
      >
        1
      </NavLink>

      <NavLink
        to={`${url}/spaceport`}
        className={style.link}
        activeClassName={style.activeLink}
      >
        2
      </NavLink>

      <NavLink
        to={`${url}/space-capsule`}
        className={style.link}
        activeClassName={style.activeLink}
      >
        3
      </NavLink>
    </nav>
  );
};

export default TechnologyNavigation;
