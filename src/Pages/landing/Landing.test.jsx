import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Landing from "./Landing";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
    expect(screen.getByText("Read An Article Today!")).toBeInTheDocument();
  });
});
