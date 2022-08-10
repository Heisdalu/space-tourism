import style from "./Navigation.module.css";
import Logo from "../../assets/Logo";
import Hamburger from "../../assets/Hamburger";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <a href="/home" className={style.home}>
        <Logo />
      </a>
      <a href="/home" className={style.hamburger}>
        <Hamburger />
      </a>
      <div className={style.line} arial-hidden="true"></div>
      <div className={style.desktopNavigation}>
        <a href="/home" className={style.link}>
          HOME
        </a>
        <a href="/home" className={style.link}>
          DESTINATION
        </a>
        <a href="/home" className={style.link}>
          CREW
        </a>
        <a href="/home" className={style.link}>
          TECHNOLOGY
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
