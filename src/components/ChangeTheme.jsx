import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ChangeTheme = () => {

    const { language, theme, toggleTheme } = useContext(ThemeContext);

    return ( 
        <div className={`${theme}-theme-clr`}>
            <button className={`${theme}-theme-button`} onClick={toggleTheme}>{language === "en" ? (theme === "light" ? "dark" : "light") : (theme === "light" ? "כהה" : "בהיר")}</button>
        </div>
     );
}
 
export default ChangeTheme;