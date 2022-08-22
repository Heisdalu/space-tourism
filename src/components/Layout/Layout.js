import React, { useContext } from "react";
import style from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import AppContext from "../../store/app-context";

const Layout = (props) => {
  const { bgClass } = useContext(AppContext);
  
  return (
    <div className={`${style["main-wrapper"]} ${style[bgClass]} `} >
      <Navigation />
      <div className={style.subWrapper}>{props.children}</div>
    </div>
  );
};

export default Layout;
