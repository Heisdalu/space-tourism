import style from "./Layout.module.css";
import Navigation from "../Navigation/Navigation";
import React, { useContext, useCallback } from "react";
import AppContext from "../../store/app-context";
import { useMemo } from "react";

const Layout = (props) => {
  // window.addEventListener("load", (e) => {
  //   console.log(e);
  // });
  const {bgClass} = useContext(AppContext);
  console.log(bgClass);
  
  return (
    <div className={`${style["main-wrapper"]} ${style[bgClass]} `}>
      <Navigation />
      <div className={style.subWrapper}>{props.children}</div>
    </div>  
  );
};

export default Layout;
