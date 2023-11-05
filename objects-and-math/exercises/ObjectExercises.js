let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   step: () => {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   step: () => {return Math.floor(Math.random()*11)}
};

let ape = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   step: () => {return Math.floor(Math.random()*11)}
};

let pup = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   step: () => {return Math.floor(Math.random()*11)}
};

let grade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   step: () => {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.
ape.astronautID = 3;
salamander.astronautID = 2;
superChimpOne.astronautID = 1;
grade.astronautID = 5;
pup.astronautID = 4;
// Create an array to hold the animal objects.
let arr = [superChimpOne, salamander, ape, pup, grade];
// Print out the relevant information about each animal.
function crewReports(obj) {
   return console.log(`${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`);
};
console.log(crewReports(superChimpOne))
// Start an animal race!


function fitnessTest(arr){
   let results = [], numSteps, turns;
   for (let i = 0; i < arr.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += arr[i].step();
       turns++;
       };
       results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   };
   return results;
  };


  console.log(fitnessTest(arr))