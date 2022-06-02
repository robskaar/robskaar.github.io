import styles from "./HeaderMenu.module.css";
import HeaderIcon from "../../../Assets/HeaderIcon";
export default function HeaderMenu() {
  return (
    <header>
      <ul className={styles.headerlist}>
        <div className={styles.iconwrapper}>
          <HeaderIcon />
        </div>
        <li>Speakings</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}
