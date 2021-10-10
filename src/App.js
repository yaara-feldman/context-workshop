import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

import UsernameChanger from "./components/UsernameChanger";
import UsernameDisplay from "./components/UsernameDisplay";

import './App.css';
import Buttons from "./components/Buttons";

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <UsernameChanger />
        <UsernameDisplay />
        <Buttons />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;