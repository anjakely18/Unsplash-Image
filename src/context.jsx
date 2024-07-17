import { createContext, useContext, useEffect, useState } from "react";

//Create a context
const AppContext = createContext();

//Provider component
const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  useContext(AppContext);
};

export { AppProvider, useGlobalContext };
