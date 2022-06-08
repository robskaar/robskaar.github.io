import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.css";
import IndexPage from "./Pages/IndexPage/IndexPage";
import SkillsPage from "./Pages/Skills/SkillsPage";
import reportWebVitals from "./reportWebVitals";
import styles from "./app.module.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/skills">skills</Link>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
