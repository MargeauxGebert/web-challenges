console.clear();

// EXERCISE 1
// Modify the array `exampleArray` so that it contains a number and a string.

const exampleArray = [26, "Margeaux"];

console.log(exampleArray[0]);

// EXERCISE 2
// Nest an array inside `nestedArray`. After completing this, `nestedArray` should contain an array as one of its elements.

const nestedArray = ["example", 10, true, [10, 34, 89]];

console.log(nestedArray[3][1]);

// EXERCISE 3
// Change the value of `firstNumber` to equal the first value in the `numbers` array using bracket notation.

const numbers = [20, 10, 50];

const firstNumber = 33;

numbers[0] = firstNumber;

console.log(numbers);

// EXERCISE 4
// Update the first fruit in `fruits` to be "mango" instead of "apple".

const fruits = ["apple", "banana", "grapefruit"];

fruits[0] = "mango";

console.log(fruits);

// EXERCISE 5
// Set the value of `nestedNumber` to the fourth number in the `nestedNumbers` array using bracket notation.

const nestedNumbers = [10, [20, 30, [40, 50]]];

const nestedNumber = 44;

nestedNumbers[1][2][0] = nestedNumber;

console.log(nestedNumbers);

// EXERCISE 6
// Use the `.push()` array method to add "rat" to the end of `petsWithPush`.

const petsWithPush = ["dog", "cat", "rabbit"];

petsWithPush.push("rat");

console.log(petsWithPush);

// EXERCISE 7
// Use the `.pop()` method to remove the last item from `fruitsWithPop`.

const fruitsWithPop = ["apple", "banana", "mango"];

fruitsWithPop.pop("mango");

console.log(fruitsWithPop);

// EXERCISE 8
// Use the `.unshift()` array method to add "hamster" to the beginning of `unshiftedPets`.

const unshiftedPets = ["dog", "cat", "rabbit"];

unshiftedPets.unshift("hamster");

console.log(unshiftedPets);

// EXERCISE 9
// Use the `.shift()` method to remove the first item from `shiftedFruits`.

const shiftedFruits = ["apple", "banana", "mango"];

shiftedFruits.shift([0]);

console.log(shiftedFruits);

export {
  exampleArray,
  nestedArray,
  firstNumber,
  fruits,
  nestedNumber,
  petsWithPush,
  fruitsWithPop,
  unshiftedPets,
  shiftedFruits,
};
