//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require(`readline-sync`);



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

let startingFuelLevel = input.question(`enter fuel level: `);
while (startingFuelLevel < 5000 || startingFuelLevel > 30000) {
  startingFuelLevel = input.question(`pff no way, enter the real number (5000 - 30000): `);
};



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
let crew = input.question(`how many people are you taking?: `)
while (crew <= 0 || crew > 7) { 
  crew = input.question(`dude that can't be how many people there are, we only hole 1 - 7 people on here: `)
};

  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let altitude = 0;
while (startingFuelLevel >= 0) {
  altitude += 50;
  startingFuelLevel -= 100 * crew;
};

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitude} km.`)
if (altitude >= 2000) {
  console.log(`you in space fren`)
} else { 
  console.log(`need more power to go beyond`)
}

