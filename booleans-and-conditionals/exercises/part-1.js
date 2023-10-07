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
};

//prints all systems go to the terminal
if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
};

