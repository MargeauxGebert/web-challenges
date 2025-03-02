// Change this value to test different "weather" conditions.
// const weather = "sunny";

// switch (weather) {
//   case "rainy":
//     console.log("It's raining, put on your rain boots!");
//     break;
//   case "sunny":
//     console.log("The sun is shining bright!");
//     break;
//   case "snowy":
//     console.log("I smell snow, meet me for a snowball fight!");
//     break;
//   default:
//     console.log("I'm not sure what the weather is like.");
// }

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
// const weather = "sunny";
// const temperature = 12;

// switch (true) {
//   case "rainy":
//     console.log("It's raining, put on your rain boots!");
//     break;
//   case "sunny":
//     console.log("The sun is shining bright!");
//     break;
//   case temperature > 20:
//   case "sunny":
//     console.log("The sun is shining bright & it's warm!");
//     break;
//   case temperature > 0:
//   case "sunny":
//     console.log("Sunny, but chilly!");
//   case "snowy":
//     console.log("I smell snow, meet me for a snowball fight!");
//     break;
//   case temperature <= 0:
//   case "snowy":
//     console.log("Freezing cold");
//     break;
//   default:
//     console.log("I'm not sure what the weather is like.");
// }

// Chat GPT Solution
// const weather = "snowy";
// const temperature = 0;

// switch (true) {
//   case weather === "rainy":
//     console.log("It's raining, put on your rain boots!");
//     break;
//   case weather === "sunny" && temperature > 20:
//     console.log("The sun is shining bright & it's warm!");
//     break;
//   case weather === "sunny" && temperature <= 20:
//     console.log("Sunny, but chilly!");
//     break;
//   case weather === "snowy" && temperature > 0:
//     console.log("I smell snow, meet me for a snowball fight!");
//     break;
//   case weather === "snowy" && temperature <= 0:
//     console.log("Freezing cold");
//     break;
//   default:
//     console.log("I'm not sure what the weather is like.");
// }

const weather = "snowy";
const temperature = -1;

switch (weather) {
  case "rainy":
    console.log("It's raining, put on your rain boots!");
    break;
  case "sunny":
    if (temperature > 20) {
      console.log("The sun is shining bright and it's warm!");
    } else {
      console.log("The sun is shining bright, but it's a bit chilly!");
    }
    break;
  case "snowy":
    if (temperature <= 0) {
      console.log("It's freezing cold and snows. Get your gloves!");
    } else {
      console.log("I smell snow, meet me for a snowball fight!");
    }
    break;
  default:
    console.log("I'm not sure what the weather is like.");
}
