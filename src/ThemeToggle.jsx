import React from "react";
import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <div className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon"></BsFillSunFill>
        ) : (
          <BsFillMoonFill className="toggle-icon"></BsFillMoonFill>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
