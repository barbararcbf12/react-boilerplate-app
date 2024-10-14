import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render <App> component without props", () => {
  render(<App/>);
  const title = screen.getByText(/App's name/i);
  expect(title).toBeInTheDocument();
});