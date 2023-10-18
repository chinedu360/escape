import { render, screen } from "@testing-library/react";
import Sidebar from "../Siderbar";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for routing-related tests
import { vi, describe, it, expect } from "vitest";
import TestRenderer from "react-test-renderer";

describe("Sidebar.jsx", () => {
  it("test the children inside the Sidebar component", () => {
    const sidebar = TestRenderer.create(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    ).toJSON();

    //sidebar containers
    expect(sidebar.type).toBe("div");
    expect(sidebar.children[0].type).toBe("div");
  });

  it("Snapshot", () => {
    const sidebar = TestRenderer.create(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    ).toJSON();

    expect(sidebar).toMatchSnapshot();
  });
});
