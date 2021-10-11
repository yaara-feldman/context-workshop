import { useThemeContext } from "../context/ThemeContext";
import { useUserContext } from "../context/UserContext";

const UsernameDisplay = () => {

    const { username } = useUserContext();
    const { theme } = useThemeContext();

    return (
        <div className={`${theme}-theme-clr`}>
            {username}
        </div>
    );
}

export default UsernameDisplay;