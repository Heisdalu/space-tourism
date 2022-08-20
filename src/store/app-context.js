import React, { useCallback, useReducer } from "react";
import { HOME_BG, CHANGE_BG } from "../lib/bg";

const AppContext = React.createContext({
  bgClass: "",
  changeBg: () => {},
});

// app reducer
const AppReducer = (state, action) => {
  if (action.type === CHANGE_BG) {
    return {
      ...state,
      bgClass: action.class,
    };
  }

  return state;
};

// initial state
const initialState = {
  bgClass: HOME_BG,
  changeBg: () => {},
};

export const AppProvider = ({ children }) => {
  const [state, dispatchState] = useReducer(AppReducer, initialState);

  const changeBgHandler = useCallback((type, value) => {
      dispatchState({ type: type, class: value });
  }, []);

  const Appstate = {
    bgClass: state.bgClass,
    changeBg: changeBgHandler,
  };

  return <AppContext.Provider value={Appstate}>{children}</AppContext.Provider>;
};

export default AppContext;
