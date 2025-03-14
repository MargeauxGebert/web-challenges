import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Mango" score={5} />);

  const playerName = screen.getByText("Mango");
  expect(playerName).toBeInTheDocument();

  const playerScore = screen.getByText(5);
  expect(playerScore).toBeInTheDocument();

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const Decrease = jest.fn();
  const Increase = jest.fn();
  const user = userEvent.setup();

  render(
    <Player onDecreasePlayerScore={Decrease} onIncreasePlayerScore={Increase} />
  );

  const buttonDecrease = screen.getByRole("button", { name: "Decrease Score" });

  expect(Decrease).toHaveBeenCalledTimes(0);
  await user.click(buttonDecrease);
  expect(Decrease).toHaveBeenCalledTimes(1);

  const buttonIncrease = screen.getByRole("button", { name: "Increase Score" });

  expect(Increase).toHaveBeenCalledTimes(0);
  await user.click(buttonIncrease);
  expect(Increase).toHaveBeenCalledTimes(1);
});
