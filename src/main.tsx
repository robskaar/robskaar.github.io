import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import styles from "./main.module.css";
import IndexPage from "./Pages/IndexPage/IndexPage";
export default function Main() {
  return (
    <HashRouter>
      <div>
        <header>
          <ul className={styles.headerlist}>
            <div className={styles.iconwrapper}>
              {
                <a href="/">Home</a> //icon here
              }
            </div>

            <li>
              <NavLink to="/skills"></NavLink>Skills
            </li>
            <li>
              <NavLink to="/activity"></NavLink>Activity
            </li>
            <li>
              <NavLink to="/contact"></NavLink>Contact
            </li>
          </ul>
        </header>
        <main>
          <Route path="/" children={IndexPage()} />
          <Route path="/skills" children={<div>skills</div>} />
          <Route path="/activity" children={<div>activity</div>} />
          <Route path="/contact" children={<div>contact</div>} />
        </main>
        <footer>all rights reserved Robert Skaar</footer>
      </div>
    </HashRouter>
  );
}
