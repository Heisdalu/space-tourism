import style from "./Navigation.module.css";
import Logo from "../../assets/Logo";
import exitLogo from "../../assets/exit.svg";
import { NavLink, Link } from "react-router-dom";
import HamburgerLogo from "../../assets/hamburger.svg";
import { useState } from "react";

const Navigation = () => {
  const [isActive, setActive] = useState(false);

  const activeClass = isActive ? "" : style.activeNav;

  const toggleNav = () => {
    setActive(true);
    console.log('dddd');
  };

  const removeNav = () => {
    setActive(false)
  }

  console.log(isActive);


  
  return (
    <nav className={style.navigation}>
      <NavLink to="/home" className={style.home}>
        <Logo />
      </NavLink>

      <button className={style.hamburger} onClick={toggleNav}>
        <img src={HamburgerLogo} alt="" />
      </button>

      <div className={style.line} arial-hidden="true"></div>
      <div className={`${style.desktopNavigation} ${activeClass}`}>
        <button className={style.exitBtn} onClick={removeNav}>
          <img src={exitLogo} alt="" />
        </button>

        <span className={style.NavLinkContainer} onClick={removeNav}>
          <NavLink
            to="/home"
            className={`${style.link} ${style.home_btn}`}
            activeClassName={style.activeLink}
          >
            HOME
          </NavLink>
        </span>

        <span className={style.NavLinkContainer} onClick={removeNav}>
          <NavLink
            to="/destination"
            className={`${style.link} ${style.dest_btn}`}
            activeClassName={style.activeLink}
          >
            DESTINATION
          </NavLink>
        </span>

        <span className={style.NavLinkContainer} onClick={removeNav}>
          <NavLink
            to="/crew"
            className={`${style.link} ${style.crew_btn}`}
            activeClassName={style.activeLink}
          >
            CREW
          </NavLink>
        </span>

        <span className={style.NavLinkContainer} onClick={removeNav}>
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
