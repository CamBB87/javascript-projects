// Declare and initialize the variables for exercise 1 here:


let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady =	true;
let crewStatus =	spaceSuitsOn && shuttleCabinReady;
let computerStatusCode =	200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}


if (crewStatus === true) {
   console.log(`crew is ready`)
} else {
   console.log(`crew is not ready`)
}


if (computerStatusCode === 200) {
   console.log(`pc is rebooting`);
} else if (computerStatusCode === 400) {
   console.log(`Success! Computer online.`);
} else {
   console.log(`I think it is smoking`);
};


if (shuttleSpeed > 17500) {
   console.log(`You're going super fast!!`);
} else if (shuttleSpeed < 8000) {
   console.log(`You're falling back to earth dumby`);
} else {
console.log(`kind of cruising right now going: ${shuttleSpeed}`);
};

//prints all systems go to the terminal
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

//prints all systems go to the terminal
if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}









































/*console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('LaunchCode'));*/

// let expression1 = 5 > 7; //returns false
// let expression2 = 30 > 25; //returns true


// console.log(expression1 || expression2);





// const input = require('readline-sync');

// // instantiate variables 
// let hoursInWeek = 168;

// let sleepHours = 56;
// let workHours = 40;
// let miscHours = 21;
// let studyHours = 18;

// // create variable to reduce clutter
// let necessities = sleepHours + workHours + miscHours + studyHours;

// // instantiate hours spent gaming on teh daily, then multiply by 7 to update leisureHours
// let dailyGaming = Number(input.question("How many hours a day would you like to spend playing Baldur's Gate 3? "));
// let leisureHours = dailyGaming * 7;

// // give user feedback
// console.log("\nGotcha. You want to spend at least " + dailyGaming + " hours a day playing Baldur's Gate. That comes out to " + leisureHours + " hours spent across seven daily gaming sessions.\n");

// // additional feedback based on whether they have exceeded total hours in a week
// if (necessities + leisureHours > hoursInWeek) {
//   console.log("I think you need to reconsider your priorities. There are only " + hoursInWeek + " hours in a week, and with all your other obligations you only have " + (hoursInWeek - necessities) + " hours throughout the week to spend on leisurely activities.");
// } else {
//   console.log("Cool. That sounds like a balanced schedule. You'll have about " + (hoursInWeek -necessities + leisureHours) + " hours leftover to spend how you'd like.");
// }
