import { render, screen } from "@testing-library/react";
import SkillsPage from "./SkillsPage";
test("renders learn react link", () => {
  render(<SkillsPage />);
  const linkElement = screen.getByText(
    /Currently creating my portfolio so stay tuned for changes/i
  );
  expect(linkElement).toBeInTheDocument();
});
