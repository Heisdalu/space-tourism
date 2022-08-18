import style from "./Navigation.module.css";
import Logo from "../../assets/Logo";
import exitLogo from '../../assets/exit.svg'
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
        <button className={style.exitBtn}>
          <img src={exitLogo} alt="" />
        </button>
        <span className={style.NavLinkContainer}>
          <NavLink
            to="/home"
            className={`${style.link} ${style.home_btn}`}
            activeClassName={style.activeLink}
          >
            HOME
          </NavLink>
        </span>

        <span className={style.NavLinkContainer}>
          <NavLink
            to="/destination"
            className={`${style.link} ${style.dest_btn}`}
            activeClassName={style.activeLink}
          >
            DESTINATION
          </NavLink>
        </span>

        <span className={style.NavLinkContainer}>
          <NavLink
            to="/crew"
            className={`${style.link} ${style.crew_btn}`}
            activeClassName={style.activeLink}
          >
            CREW
          </NavLink>
        </span>

        <span className={style.NavLinkContainer}>
          <NavLink
            to="/technology"
            className={`${style.link} ${style.tech_btn}`}
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
