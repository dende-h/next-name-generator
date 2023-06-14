import React from "react";
import { render, screen } from "@testing-library/react";
import NameGenerator from "../NameGenerator/NameGenerator";


test("renders NameGenerator component", () => {
  render(<NameGenerator />);
  const textElement = screen.getByText(/名前ジェネレーター/i);
  expect(textElement).toBeInTheDocument();
});
