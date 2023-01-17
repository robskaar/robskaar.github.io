import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SPAWrapper from "./SPAWrapper/SPAWrapper";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SPAWrapper></SPAWrapper>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
