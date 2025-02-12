console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.

console.log("Your current age is: " + currentAge);

const livedDays = currentAge * 365;
const remainingDays = (80 * 365) - livedDays;
const livedDaysPercantage = livedDays / (livedDays + remainingDays) * 100 ;
let sleepingDays = Math.round((livedDays * (8 / 24 * 100)) / 100, 0);

console.log("The total number of days you have lived is " + livedDays + " .");
console.log("The days you have left if you get 80 years old are " + remainingDays + " .");
console.log("This means you have lived " + livedDaysPercantage + "% of your expected life.")
console.log("And you have slept " + sleepingDays + " days until now.")