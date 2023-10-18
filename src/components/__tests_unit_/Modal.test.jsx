import { render, screen } from "@testing-library/react";
import Modal from "../Modal";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for routing-related tests
import { vi, describe, it, expect } from "vitest";
import TestRenderer from "react-test-renderer";

describe("Modal.jsx", () => {
  it("test the children inside the Modal component", () => {
    const modal = TestRenderer.create(
      <MemoryRouter>
        <Modal />
      </MemoryRouter>
    ).toJSON();

    console.log(modal.children[0].children[0]);

    //modal containers
    expect(modal.type).toBe("div");
    expect(modal.children[0].type).toBe("div");
    expect(modal.children[0].children[0].type).toBe("div");
    expect(modal.children[0].children[1].type).toBe("div");
    expect(modal.children[0].children[2].type).toBe("div");
  });

  it("Snapshot", () => {
    const modal = TestRenderer.create(
      <MemoryRouter>
        <Modal />
      </MemoryRouter>
    ).toJSON();

    expect(modal).toMatchSnapshot();
  });
});
