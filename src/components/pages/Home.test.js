// Home.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

// Test 1: Ensure the homepage renders without crashing
test("renders homepage without crashing", () => {
  render(<Home />);
  const titleElement = screen.getByText(
    /Your guided path to programming enlightenment/i
  );
  expect(titleElement).toBeInTheDocument(); // Check that the title is in the document
});

// Test 2: Check if the "Begin journey" button is rendered
test("renders Begin journey button", () => {
  render(<Home />);
  const buttonElement = screen.getByRole("button", { name: /Begin journey/i });
  expect(buttonElement).toBeInTheDocument(); // Check that the button is in the document
});

// Test 3: Ensure the three feature sections are displayed with correct images
test("renders three feature sections with correct images", () => {
  render(<Home />);

  const boltImage = screen.getByAltText("bolt");
  expect(boltImage).toBeInTheDocument(); // Check that the bolt image is in the document

  const moneyImage = screen.getByAltText("money");
  expect(moneyImage).toBeInTheDocument(); // Check that the money image is in the document

  const userImage = screen.getByAltText("user");
  expect(userImage).toBeInTheDocument(); // Check that the user image is in the document
});

// Test 4: Check if the main logo image is rendered
test("renders the main logo image", () => {
  render(<Home />);
  const logoImage = screen.getByAltText("Centered");
  expect(logoImage).toBeInTheDocument(); // Check that the main logo image is in the document
});
