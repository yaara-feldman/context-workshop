import ChangeLanguage from "./ChangeLanguage";
import ChangeTheme from "./ChangeTheme";

const Buttons = () => {


    return (
        <div style={{display: 'flex'}}>
            <ChangeTheme />
            <ChangeLanguage />
        </div>
    );
}

export default Buttons;