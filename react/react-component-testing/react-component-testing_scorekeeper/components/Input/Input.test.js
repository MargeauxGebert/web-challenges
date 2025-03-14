import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input labelText="label" placeholder="game" name="name" />);

  const labelElement = screen.getByText("label");
  const inputElement = screen.getByPlaceholderText("game");

  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("placeholder", "game");
});

test("calls callback on every user input", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();
  
    render(<Input labelText="Name" name="name-input" onChange={handleChange} />);
  
    const inputElement = screen.getByLabelText("Name");
  
  expect(inputElement).toBeInTheDocument();

  expect(handleChange).toHaveBeenCalledTimes(0);
 
  await user.type(inputElement, "Domino");

  expect(handleChange).toHaveBeenCalledTimes(6)
});
