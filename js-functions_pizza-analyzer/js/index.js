console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);

  updatePizzaDisplay(pizza1);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

// Task 1: Define the function `calculatePizzaGain` here

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = (Math.PI / 4) * diameter1 ** 2;
  const area2 = (Math.PI / 4) * diameter2 ** 2;
  const pizzaGain = ((area2 - area1) / area1) * 100;

  output.textContent = Math.round(pizzaGain);
}
// Task 2: Define the function `updatePizzaDisplay` here
function updatePizzaDisplay(pizzaElement, newSize) {
  const newDispaySize = (newSize / 24) * 100;
  pizzaElement.style.width = newDispaySize + "px";
}
// Task 3: Define the function `updateOutputColor` here
