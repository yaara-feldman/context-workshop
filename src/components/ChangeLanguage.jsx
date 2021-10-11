import { useThemeContext } from "../context/ThemeContext";

const ChangeLanguage = () => {

    const { theme, toggleLanguage, language } = useThemeContext();

    return ( 
        <div className={`${theme}-theme-clr`}>
            <button className={`${theme}-theme-button`} onClick={toggleLanguage}>{language === "en" ? "hebrew" : "אנגלית"}</button>
        </div>
     );
}
 
export default ChangeLanguage;