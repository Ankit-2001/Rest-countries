import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon,faSun } from "@fortawesome/free-regular-svg-icons"; // Import the moon icon
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Nav() {
  const {mode,setMode} = useContext(ThemeContext);

  return (
    <div className={`${mode ? "dark" : "light"} navbar`}>
      <h1>Where in the world?</h1>
      <button
        className={`${mode ? "dark" : "light"} dark-mode-btn`}
        onClick={() => setMode((prev) => !prev)}
      >
        {mode ? (
          <>
            <FontAwesomeIcon icon={faSun} /> Light mode
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMoon} /> Dark mode
          </>
        )}
      </button>
    </div>
  );
}

export default Nav;
