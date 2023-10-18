import { render, screen } from "@testing-library/react";
import DashboardLayout from "../DashboardLayout";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for routing-related tests
import { vi, describe, it, expect } from "vitest";
import TestRenderer from "react-test-renderer";

describe("DashboardLayout.jsx", () => {
  it("test the children inside the DashboardLayout component", () => {
    const dashboardLayout = TestRenderer.create(
      <MemoryRouter>
        <DashboardLayout />
      </MemoryRouter>
    ).toJSON();

    //dashboardLayout containers
    expect(dashboardLayout.type).toBe("div");
    expect(dashboardLayout.children[0].type).toBe("div");
    expect(dashboardLayout.children[1].type).toBe("aside");
    expect(dashboardLayout.children[2].type).toBe("main");
  });

  it("Snapshot", () => {
    const dashboardLayout = TestRenderer.create(
      <MemoryRouter>
        <DashboardLayout />
      </MemoryRouter>
    ).toJSON();

    expect(dashboardLayout).toMatchSnapshot();
  });
});
