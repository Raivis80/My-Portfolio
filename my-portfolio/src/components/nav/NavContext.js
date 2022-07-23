import React, { useReducer } from "react";


export const NavContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "setTab":
      return { ...state, tab: action.payload };
    case "setMenu":
      return { ...state, menuOpen: action.payload };
    default:
      return state;
  }
};

export const ContextWrapper = ({ children }) => {
  const tabs = ["home", "about", "projects", "contact"];
  const initialState = { tab: tabs[0], menuOpen: false };
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <NavContext.Provider
      value={{
        tabs,
        dispatch,
        state,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
