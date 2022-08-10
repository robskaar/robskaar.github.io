import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.css";
import IndexPage from "./Pages/IndexPage/IndexPage";
import reportWebVitals from "./reportWebVitals";
import styles from "./index.module.css";
import HamburgerMenu from "./Common/Components/UI/HamburgerMenu";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(

  <React.StrictMode>
    <BrowserRouter>
      <div className={styles.pagewrapper}>
        <nav id={styles.fullmenu}>
          <Link className={styles.nav_logo} to="/">
            RS
          </Link>
          <div className={styles.nav_menu}>
            <Link to="/">portfolio</Link> <Link to="/">blog</Link>
            <Link to="/">about</Link>
          </div>
          <HamburgerMenu></HamburgerMenu>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<IndexPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
