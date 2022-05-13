import { render, screen } from "@testing-library/react";
import Landing from "./Landing";

test("renders learn react link", () => {
  render(<Landing />);
  const linkElement = screen.getByText(
    /Currently creating my portfolio so stay tuned for changes/i
  );
  expect(linkElement).toBeInTheDocument();
});
