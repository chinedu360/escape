import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for routing-related tests
import { vi, describe, it, expect } from "vitest";
import TestRenderer from "react-test-renderer";

describe("Header.jsx", () => {
  it("test the children inside the Header component", () => {
    const header = TestRenderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ).toJSON();

    //Header containers
    expect(header.children[0].type).toBe("div");
    expect(header.children[1].type).toBe("div");
  });

  it("Snapshot", () => {
    const header = TestRenderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ).toJSON();

    expect(header).toMatchSnapshot();
  });
});
