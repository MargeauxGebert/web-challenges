console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
const buttonUppercase = document.querySelector('[data-js="button-uppercase"]');

buttonUppercase.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

// console.clear();

// const input = document.querySelector('[data-js="first-input"]');
// const button = document.querySelector('[data-js="button-uppercase"]');

// button.addEventListener("click", () => {
//   input.value = input.value.toUpperCase();
// });
