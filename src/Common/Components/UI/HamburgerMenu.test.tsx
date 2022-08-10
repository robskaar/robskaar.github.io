import { render, screen } from "@testing-library/react";
import HamburgerMenu from "./HamburgerMenu";


test("renders a clickable hamburger menu in low width viewports", () => {
    global.innerWidth = 500
  render(<HamburgerMenu />);
  const hamburgerMenu = screen.getByRole("menu");
  expect(hamburgerMenu).toBeInTheDocument();
});
