import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import { Outlet } from "react-router-dom";
import ThemeContext from "./ThemeContext";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <div className={`${mode ? 'more-dark' : 'light'} parent-container`}>
        <Nav />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
