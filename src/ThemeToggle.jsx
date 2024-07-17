import React from "react";
import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <div className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon"></BsFillMoonFill>
        ) : (
          <BsFillSunFill className="toggle-icon"></BsFillSunFill>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
