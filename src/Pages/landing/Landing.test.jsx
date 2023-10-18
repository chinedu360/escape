import { render, screen } from "@testing-library/react";
import Landing from "./Landing";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for routing-related tests
import { vi, describe, it, expect } from "vitest";
import TestRenderer from "react-test-renderer";

describe("testing the Landing/Home Page", () => {
  it("renders landing component", () => {
    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );

    //Building assumption varaibles
    const titleElement = screen.getByText("Read An Article Today!");
    const buttonElement = screen.getByText("Read More");

    //running expectation
    expect(titleElement).toBe(titleElement);
    expect(buttonElement).toBeInTheDocument();
  });

  it("test the children inside the Landing component", () => {
    const landing = TestRenderer.create(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    ).toJSON();

    //landing containers
    expect(landing.children[0].type).toBe("div");
    expect(landing.children[1].type).toBe("button");
  });

  it("Snapshot", () => {
    const landing = TestRenderer.create(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    ).toJSON();

    expect(landing).toMatchSnapshot();
  });
});

// test("navigates to dashboard on button click", () => {
//   const mock = vi.fn();
//   mock.mockImplementation("react-router-dom", () => ({
//     ...vi.importActual("react-router-dom"),
//     useNavigate: () => mock,
//   }));

//   render(
//     <MemoryRouter>
//       <Landing />
//     </MemoryRouter>
//   );

//   const buttonElement = screen.getByText("Read More");
//   expect(buttonElement).toBeInTheDocument();

//   buttonElement.click();

//   // Make assertions on mock
//   // Make assertions on mock
//   // expect(mock.calls?.length).toBe(1); // Check the number of calls
//   expect(mock?.calls[0][0]).toBe("/dashboard"); // Check the first call arguments
// });
