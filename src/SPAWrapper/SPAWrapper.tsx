import { Link, Routes, Route } from "react-router-dom";
import styles from "./SPAWrapper.module.css";
import Home from "../Pages/Home/Home";
import HamburgerMenu from "./Components/UI/HamburgerMenu";
import Portfolio from "../Pages/Portfolio/Portfolio";
export default function SPAWrapper() {

  return (
    <div
      className={`${styles.pagewrapper}`}
    >
      <nav id={styles.fullmenu}>
        <div className={styles.nav_menu}>
          <Link to="/portfolio">portfolio</Link> <Link to="/">blog</Link>
          <Link to="/">about</Link>
        </div>
        <HamburgerMenu></HamburgerMenu>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        </Routes>
      </main>
    </div>
  );
}
