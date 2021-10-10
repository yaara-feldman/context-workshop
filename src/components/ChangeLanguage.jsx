import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ChangeLanguage = () => {

    const { theme, toggleLanguage, language } = useContext(ThemeContext);

    return ( 
        <div className={`${theme}-theme-clr`}>
            <button className={`${theme}-theme-button`} onClick={toggleLanguage}>{language === "en" ? "hebrew" : "אנגלית"}</button>
        </div>
     );
}
 
export default ChangeLanguage;