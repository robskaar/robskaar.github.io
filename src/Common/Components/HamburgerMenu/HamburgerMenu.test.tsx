import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";


test("renders a clickable hamburger menu in low width viewports", () => {
    global.innerWidth = 500
    
  render(<BrowserRouter><HamburgerMenu /></BrowserRouter>);
  const hamburgerMenu = screen.getByRole("menu");
  expect(hamburgerMenu).toBeInTheDocument();
});
