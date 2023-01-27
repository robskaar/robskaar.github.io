import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./HamburgerMenu.module.css";

interface HamburgerMenuProps {}

export default function HamburgerMenu(props: HamburgerMenuProps) {
  const [hamburgerToggled, setHamburgerToggled] = useState<boolean>(false);

  return (
    <>
      <div
        className={`${styles.button_container} ${
          hamburgerToggled ? styles.active : undefined
        }`}
        onClick={() => {
          setHamburgerToggled(!hamburgerToggled);
        }}
        id="toggle"
      >
        <span className={styles.top}></span>
        <span className={styles.middle}></span>
        <span className={styles.bottom}></span>
      </div>
      <div
        role="menu"
        className={`${styles.overlay} ${hamburgerToggled ? styles.open : ""}`}
        id="overlay"
      >
        <nav className={styles.overlay_menu}>
          <ul>
            <li>
              <Link
                onClick={() => {
                  setHamburgerToggled(!hamburgerToggled);
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setHamburgerToggled(!hamburgerToggled);
                }}
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setHamburgerToggled(!hamburgerToggled);
                }}
                to="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setHamburgerToggled(!hamburgerToggled);
                }}
                to="/"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
