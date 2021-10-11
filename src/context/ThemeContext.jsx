import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'he' : 'en')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        toggleLanguage
      }}
    >
      <div className={`${theme}-theme-bg`} style={{direction: language === "en" ? 'ltr' : 'rtl', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
