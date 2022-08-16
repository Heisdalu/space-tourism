/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, useParams, useRouteMatch } from "react-router-dom";
import style from "./DestinationNavigation.module.css";

const DestinationNavigation = () => {
  const { url } = useRouteMatch();

  return (
    <nav className={style.navigation}>
      <div className={style.navLinkBox}>
        <NavLink
          to={`${url}/moon`}
          className={style.navLink}
          activeClassName={style.activeNavLink}
        >
          MOON
        </NavLink>
      </div>

      <div className={style.navLinkBox}>
        <NavLink
          to={`${url}/mars`}
          className={style.navLink}
          activeClassName={style.activeNavLink}
        >
          MARS
        </NavLink>
      </div>

      <div className={style.navLinkBox}>
        <NavLink
          to={`${url}/europa`}
          className={style.navLink}
          activeClassName={style.activeNavLink}
        >
          EUROPA
        </NavLink>
      </div>

      <div className={style.navLinkBox}>
        <NavLink
          to={`${url}/titan`}
          className={style.navLink}
          activeClassName={style.activeNavLink}
        >
          TITAN
        </NavLink>
      </div>
    </nav>
  );
};

export default DestinationNavigation;
