import { render, screen } from "@testing-library/react";
import IndexPage from "./IndexPage";

test("renders learn react link", () => {
  render(<IndexPage />);
  const linkElement = screen.getByText(
    /Currently creating my portfolio so stay tuned for changes/i
  );
  expect(linkElement).toBeInTheDocument();
});
