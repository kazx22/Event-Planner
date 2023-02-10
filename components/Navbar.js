import React from "react";
import styles from "../styles/main.module.css";
const Navbar = ({ click, clickAll }) => {
  return (
    <>
      <ul className={styles.navbar}>
        <li>
          <button onClick={clickAll}>All Projects</button>
        </li>
        <li>
          <button onClick={click}>Filtered Projects</button>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
