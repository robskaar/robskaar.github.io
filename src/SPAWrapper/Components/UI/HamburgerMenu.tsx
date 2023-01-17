import { useState } from "react";

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
