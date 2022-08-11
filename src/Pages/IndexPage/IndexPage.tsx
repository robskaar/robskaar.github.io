import { useState } from "react";
import styles from "./IndexPage.module.css";
export default function IndexPage() {
  const [timer, setTime] = useState(0);
  return (
    <div className={styles.indexPageWrapper}>
      <h1 className={styles.h1}>
        Hi there
        <span className={styles.wave}>👋</span>
      </h1>
      <h2 className={styles.typeFirst}>I'm a web developer</h2>
      <h3> I combine</h3>
      <div>
        <div>UX</div>
        <div>Accesibility</div>
        <div>Responsive Design</div>
      </div>
      <h3>To realize your dreams</h3>
    </div>
  );
}
