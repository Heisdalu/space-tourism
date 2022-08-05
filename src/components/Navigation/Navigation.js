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
      <div className={style.line} arial-hidden></div>
      <div className={style.desktopNavigation}>
        <a href="/home">HOME</a>
        <a href="/home">DESTINATION</a>
        <a href="/home">CREW</a>
        <a href="/home">TECHNOLOGY</a>
      </div>
    </nav>
  );
};

export default Navigation;
