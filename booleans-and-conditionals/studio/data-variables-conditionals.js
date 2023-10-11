// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7
let astronautStatus = "Ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "Clear";
let preparedForLiftOff = true 

let allClear = 0;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7){
    allClear += 1
} else if (astronautCount > 7) {
    allClear += 0
};

// add logic below to verify all astronauts are ready

if (astronautStatus === "Ready"){
    allClear += 1
} else if(astronautCount !== "Ready"){
    allClear += 0
};

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg < maximumMassLimit){
    allClear += 1
} else if (totalMassKg >= maximumMassLimit){
    allClear += 0
};

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximumFuelTemp) {
    allClear += 1
} else if (fuelTempCelsius < minimumFuelTemp && fuelTempCelsius > maximumFuelTemp){
    allClear += 0
};

// add logic below to verify the fuel level is at 100%

if (fuelLevel === "100%"){
    allClear += 1
} else if (fuelLevel !== "100%") {
    allClear += 0
}

// add logic below to verify the weather status is clear

if (weatherStatus === "clear"){
    allClear += 1
} else if (weatherStatus !== "clear"){
    allClear += 0
}

// Verify shuttle launch can proceed based on above conditions


//allClear = 6 if all if statements are true 
if (allClear === 6){
    console.log("All systems are a go!")
} else {
    console.log("oops someone forgot to plug in the shuttle battery last night.")
}

console.log("Date: " + date);
console.log("Time: " + time);
console.log("Astronuat Count: " + astronautCount);
console.log("Crew Mass: " + crewMassKg);
console.log("Fuel Mass: " + fuelMassKg);
console.log("Shuttle Mass: " + shuttleMassKg);
console.log("Total Mass: " + totalMassKg);
console.log("Fuel Temperature: " + fuelTempCelsius);
console.log("Weather Status: " + weatherStatus);
console.log("Have a safe trip!!")