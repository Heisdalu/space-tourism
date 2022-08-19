import style from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  // window.addEventListener("load", (e) => {
  //   console.log(e);
  // });

  return (
    <div className={`${style["main-wrapper"]} ${style.home}`}>
      <Navigation />
      <div className={style.subWrapper}>{props.children}</div>
    </div>
  );
};

export default Layout;
