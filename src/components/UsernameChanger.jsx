import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const UsernameChanger = () => {

    const { setUsername } = useContext(UserContext);
    const { theme, language } = useContext(ThemeContext);

    const [text, setText] = useState("");

    return (
        <div className={`${theme}-theme-clr`}>
            {language === "en" ? "what is your name?" : "איך קוראים לך?"}<br /><br />
            <input value={text} onChange={e => setText(e.target.value)} /><br />
            <button className={`${theme}-theme-button`} onClick={() => setUsername(text)}>{language === "en" ? "change" : "החלפ/י"}</button>
        </div>
    );
}

export default UsernameChanger;