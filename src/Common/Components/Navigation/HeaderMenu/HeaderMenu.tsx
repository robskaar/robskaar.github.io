import styles from "./HeaderMenu.module.css";

interface HeaderMenuProps{
  icon?:JSX.Element
}

export default function HeaderMenu(props:HeaderMenuProps) {
  return (
    <header>
      <ul className={styles.headerlist}>
        <div className={styles.iconwrapper}>
        {props.icon}
        </div>
        
        <li>Skills</li>
        <li>Activities</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}
