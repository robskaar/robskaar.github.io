import { useEffect, useState } from "react";
import PhoneAnimation from "../Portfolio/Components/PhoneAnimation/PhoneAnimation";
import styles from "./Home.module.css";

export default function Home() {
  const [roaring, setRoaring] = useState<boolean>(false);
  document.title = "Robert Skaar | Home";
  return (
    <div className={styles.indexPageWrapper}>

    </div>
  );
}
