import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import TestRenderer from "react-test-renderer";

// Import the necessary dependencies for creating a mocked Redux store
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "../../features/postSlice/postSlice"; //

describe("testing the Dashboard", () => {
  it("renders Dashboard component", () => {
    // Create a mocked Redux store using configureStore
    const store = configureStore({
      reducer: rootReducer, // Replace with your root reducer
    });

    render(
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>
    );

    //Building assumption varaibles
    const titleElement = screen.getByText("Welcome Back,");

    //running expectation
    expect(titleElement).toBe(titleElement);
  });

  it("test the children inside the Dashboard component", () => {
    // Create a mocked Redux store using configureStore
    const store = configureStore({
      reducer: rootReducer, // Replace with your root reducer
    });

    const dashboard = TestRenderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>
    ).toJSON();

    // Dashboard containers
    expect(dashboard.type);
    expect(dashboard.children[0].type).toBe("h2");
    expect(dashboard.children[1].type).toBe("div");
    expect(dashboard.children[2].type).toBe("div");
  });

  it("Snapshot", () => {
    // Create a mocked Redux store using configureStore
    const store = configureStore({
      reducer: rootReducer, // Replace with your root reducer
    });

    const dashBoard = TestRenderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>
    ).toJSON();

    expect(dashBoard).toMatchSnapshot();
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
