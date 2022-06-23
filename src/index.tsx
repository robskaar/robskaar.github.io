import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.css";
import IndexPage from "./Pages/IndexPage/IndexPage";
import SkillsPage from "./Pages/Skills/SkillsPage";
import reportWebVitals from "./reportWebVitals";
import styles from "./index.module.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className={styles.pagewrapper}>
        <nav>
          <Link className={styles.nav_logo} to="/">
            Robert Skaar
          </Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="skills" element={<SkillsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
