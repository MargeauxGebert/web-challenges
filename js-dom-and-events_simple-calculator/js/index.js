console.clear();

let operand1 = 12;
let operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
addButton.addEventListener("click", () => {
  const addResult = operand1 + operand2;
  console.log(addResult);
});

subtractButton.addEventListener("click", () => {
  const subtractResult = operand1 - operand2;
  console.log(subtractResult);
});

multiplyButton.addEventListener("click", () => {
  const multiplyResult = operand1 * operand2;
  console.log(multiplyResult);
});

divideButton.addEventListener("click", () => {
  const divideResult = operand1 / operand2;
  console.log(divideResult);
});

exponentButton.addEventListener("click", () => {
  const exponentResult = operand1 ** operand2;
  console.log(exponentResult);
});

moduloButton.addEventListener("click", () => {
  const moduloResult = operand1 % operand2;
  console.log(moduloResult);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const operand1IncreaseOne = document.querySelector(
  '[data-js="increase-by-one"]'
);
const operand1IncreaseFive = document.querySelector(
  '[data-js="increase-by-five"]'
);
const operand1DecreaseOne = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const operand1DecreaseFive = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const operand1MultiplyTwo = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const operand1DivideTwo = document.querySelector('[data-js="divide-by-two"]');

operand1IncreaseOne.addEventListener("click", () => {
  operand1 = operand1 + 1;
  console.log(operand1);
});

operand1IncreaseFive.addEventListener("click", () => {
  operand1 = operand1 + 5;
  console.log(operand1);
});

operand1DecreaseOne.addEventListener("click", () => {
  operand1 = operand1 - 1;
  console.log(operand1);
});

operand1DecreaseFive.addEventListener("click", () => {
  operand1 = operand1 - 5;
  console.log(operand1);
});

operand1MultiplyTwo.addEventListener("click", () => {
  operand1 = operand1 * 2;
  console.log(operand1);
});

operand1DivideTwo.addEventListener("click", () => {
  operand1 = operand1 / 2;
  console.log(operand1);
});
// --^-- write your code here --^--
