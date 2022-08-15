import style from "./Layout.module.css";
import Navigation from '../Navigation/Navigation'
// import Destination from "./components/Destination/Destination";
// import Crew from "./components/Crew/Crew";
// import Technology from "./components/Technology/Technology";

const Layout = (props) => {
  return (
    <div className={style["main-wrapper"]}>
      <Navigation />
      <div className={style.subWrapper}>{props.children}</div>
    </div>
  );
};

export default Layout;
