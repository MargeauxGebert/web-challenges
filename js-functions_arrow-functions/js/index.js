console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};
console.log("What time is it? " + getCurrentHour());

const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};

console.log("The vector lenght is: " + getVectorLength(1, 4, 7).toFixed(2));

const cleanInput = (string) => {
  return string.toLowerCase().trim();
};
console.log("it's not written in uppercase: " + cleanInput("MANGO"));

/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}
console.log(`It's ${isOddAndSmall(5)}!`);

const add3 = (a, b, c) => a + b + c;

const repeat10 = (string) => string.repeat(10);
