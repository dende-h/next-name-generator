import React from "react";
import { render, screen } from "@testing-library/react";
import ThemeGenerator from "../ThemeGenerator";


test("renders ThemeGenerator component", () => {
  render(<ThemeGenerator />);
  const textElement = screen.getByText(/テーマジェネレーター/i);
  expect(textElement).toBeInTheDocument();
});
