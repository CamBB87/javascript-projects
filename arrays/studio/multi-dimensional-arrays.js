const input = require(`readline-sync`);
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";




//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodSorted = food.split(`,`).sort();
let equipmentSorted = equipment.split(`,`).sort();
let petsSorted = pets.split(`,`).sort();
let sleepAidsSorted = sleepAids.split(`,`).sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodSorted, equipmentSorted, petsSorted, sleepAidsSorted];
console.log(`Hello Admiral, the team is ready to assit!! What would like to inspect first? \n dining hall: 1\n ${cargoHold[0].join(`, `)} \n cargo hold: 2\n ${cargoHold[1].join(`, `)} \n animal research: 3\n ${cargoHold[2].join(`, `)} \n sleeping pod: 4\n ${cargoHold[3].join(`, `)}`);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectHold = input.question(`\nwhat hold would you like to see? enter a number between 1-4: `);
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
let dumby = 1;
while (dumby == 1) {
    dumby = 0;
    if (selectHold - 1 < 4 && selectHold - 1 >= 0) {
    console.log(cargoHold[selectHold - 1]);
    } else {
    dumby = 1;
    console.log(`\ndumby try again`);
    selectHold = input.question(`\nwhat hold would you like to see? enter a number between 1-4: `);
    };
};

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
 

let selectItem = input.question(`\nwhat interests you? enter a number 1-4: `);
let dumbyTwo = 1;
while (dumbyTwo == 1) {
    dumbyTwo = 0;
    if (selectItem - 1 < 4 && selectItem - 1 >= 0) {
    console.log(`\n${cargoHold[selectHold - 1][selectItem - 1]}: wow isn't this exciting..`); //want to learn how to give the item a discription property of sorts??
    } else {
    dumbyTwo = 1;
    console.log(`\ndumby try again`);
    selectItem = input.question(`\nwhat item would you like to see? enter a number between 1-4: `);
    };
};