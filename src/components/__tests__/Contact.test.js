import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => { //grouping of test cases
  //"it" is alias of "test"
  it("Should load Contact Us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument(); //Assertion
  });

  it("Should load Button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument(); //Assertion
  });

  //Querying
  test("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes);
    expect(inputBoxes.length).not.toBe(3);
  });
});
