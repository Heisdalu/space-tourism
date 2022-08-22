import { useEffect, useContext } from "react";
import { CHANGE_BG } from "../lib/bg";
import AppContext from "../store/app-context";

// change background pic of different component
const useBg = (value) => {
  const { changeBg } = useContext(AppContext);
  useEffect(() => {
    changeBg(CHANGE_BG, value);
  }, [changeBg, value]);
};

export default useBg;
