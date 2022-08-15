import style from "./Navigation.module.css";
import Logo from "../../assets/Logo";
import { NavLink, Link } from "react-router-dom";
import Hamburger from "../../assets/Hamburger";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <NavLink to="/home" className={style.home}>
        <Logo />
      </NavLink>

      <Link to="/menu" className={style.hamburger}>
        <Hamburger />
      </Link>

      <div className={style.line} arial-hidden="true"></div>
      <div className={style.desktopNavigation}>
        <span className={style.NavLinkContainer}>
          <NavLink
            to="/home"
            className={style.link}
            activeClassName={style.activeLink}
          >
            HOME
          </NavLink>
        </span>

        <span className={style.NavLinkContainer}>
          <NavLink
            to="/destination"
            className={style.link}
            activeClassName={style.activeLink}
          >
            DESTINATION
          </NavLink>
        </span>

        <span className={style.NavLinkContainer}>
          <NavLink
            to="/crew"
            className={style.link}
            activeClassName={style.activeLink}
          >
            CREW
          </NavLink>
        </span>

        <span className={style.NavLinkContainer}>
          <NavLink
            to="/technology"
            className={style.link}
            activeClassName={style.activeLink}
          >
            TECHNOLOGY
          </NavLink>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
