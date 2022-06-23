import { render, screen } from "@testing-library/react";
import IndexPage from "./IndexPage";

test("renders learn react link", () => {
  render(<IndexPage />);
  const linkElement = screen.getByText(
    /hi/i
  );
  expect(linkElement).toBeInTheDocument();
});
