import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import styles from './index.module.css'
import "./index.css";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import HamburgerMenu from "./Common/Components/HamburgerMenu/HamburgerMenu";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
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
    </HashRouter>
  </React.StrictMode>
);
