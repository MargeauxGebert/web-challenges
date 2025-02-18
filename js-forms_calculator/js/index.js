console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const numberA = form.elements.numberA.value;
  const numberB = form.elements.numberB.value;
  // const operatorAdd = form.elements.addition.checked;
  // console.log(operatorAdd);
  if (form.elements.addition.checked === true) {
    // const resultAdd = add(Number(numberA), Number(numberB));
    result = add(Number(numberA), Number(numberB));
  } else if (form.elements.subtraction.checked === true) {
    result = subtract(Number(numberA), Number(numberB));
  } else if (form.elements.multiplication.checked === true) {
    result = multiply(Number(numberA), Number(numberB));
  } else {
    result = divide(Number(numberA), Number(numberB));
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
