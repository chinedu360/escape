import { render, screen } from "@testing-library/react";
import TableComp from "../TableComp";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for routing-related tests
import { vi, describe, it, expect } from "vitest";
import TestRenderer from "react-test-renderer";

describe("TableComp.jsx", () => {
  it("test the children inside the TableComp component", () => {
    const header = TestRenderer.create(
      <MemoryRouter>
        <TableComp />
      </MemoryRouter>
    ).toJSON();
    console.log(
      header.children[1].children[0].children[0].children[0].children[2]
    );
    //Header containers
    expect(header.type).toBe("div");
    expect(header.props.className).toBe(
      "m-2 rounded-lg bg-white shadow-lg h-70vh overflow-y-scroll"
    );
    expect(header.children[0].type).toBe("h2");
    expect(header.children[1].type).toBe("div");
    expect(header.children[1].children[0].type).toBe("table");
    expect(header.children[1].children[0].children[0].type).toBe("thead");
    expect(header.children[1].children[0].children[1].type).toBe("tbody");
    expect(header.children[1].children[0].children[0].children[0].type).toBe(
      "tr"
    );
    expect(
      header.children[1].children[0].children[0].children[0].children[0].type
    ).toBe("th");
    expect(
      header.children[1].children[0].children[0].children[0].children[2].type
    ).toBe("th");
    expect(
      header.children[1].children[0].children[0].children[0].children[2]
        .children[0]
    ).toBe("Description");
    expect(header.children[2].type).toBe("div");
    expect(header.children[2].props.className).toBe(
      "undefined flex p-5 items-center cursor-pointer space-x-1"
    );
  });

  it("Snapshot", () => {
    const header = TestRenderer.create(
      <MemoryRouter>
        <TableComp />
      </MemoryRouter>
    ).toJSON();

    expect(header).toMatchSnapshot();
  });
});
