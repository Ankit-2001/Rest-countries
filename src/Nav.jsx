import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons"; // Import the moon icon

function Nav(props) {
  const styles = {
    color: props.mode ? "#FFFFFF" : "#000000",
    backgroundColor: props.mode ? "hsl(209, 23%, 22%)" : "#FFFFFF",
  };
  return (
    <div className="navbar"style={styles} >
      <h1>Where in the world?</h1>
      <button
        className="dark-mode-btn"
        onClick={() => props.handleClick()}
        style={styles}
      >
        <FontAwesomeIcon icon={faMoon} /> Dark Mode
      </button>
    </div>
  );
}

export default Nav;
