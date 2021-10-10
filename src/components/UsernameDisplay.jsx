import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const UsernameDisplay = () => {

    const { username } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme}-theme-clr`}>
            {username}
        </div>
    );
}

export default UsernameDisplay;