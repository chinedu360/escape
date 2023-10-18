import { render, screen } from "@testing-library/react";
import LandingLayout from "../LandingLayout";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for routing-related tests
import { vi, describe, it, expect } from "vitest";
import TestRenderer from "react-test-renderer";

describe("LandingLayout.jsx", () => {
  it("test the children inside the LandingLayout component", () => {
    const landingLayout = TestRenderer.create(
      <MemoryRouter>
        <LandingLayout />
      </MemoryRouter>
    ).toJSON();

    //landingLayout containers
    expect(landingLayout.type).toBe("div");
    expect(landingLayout.children[0].type).toBe("div");
    expect(landingLayout.children[1].type).toBe("main");
  });

  it("Snapshot", () => {
    const landingLayout = TestRenderer.create(
      <MemoryRouter>
        <LandingLayout />
      </MemoryRouter>
    ).toJSON();

    expect(landingLayout).toMatchSnapshot();
  });
});
