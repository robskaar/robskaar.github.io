import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SPAWrapper from "./SPAWrapper/SPAWrapper";
import "./index.css";

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

