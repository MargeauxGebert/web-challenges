console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 13;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("You have to pay 2 euro per hotdog");
} else if (numberOfHotdogs > 4 && numberOfHotdogs < 100) {
  console.log("You have to pay 1.50 euro per hotdog");
} else if (numberOfHotdogs > 99 && numberOfHotdogs < 1000000) {
  console.log("You have to pay 1 euro per hotdog");
} else {
  console.log("You have to pay 0.10 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// // Part 5: Greeting
// const userName = "Archibald";

// const greeting = "Hello " + "//enter your code here" + "!";

// console.log(greeting);
