const input = require('readline-sync');
let str = "LaunchCode";
let pigLatin = "";
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

function makePigLatin(word) {
    pigLatin = word.slice(3, word.length);
    pigLatin += word.slice(0, 3);
    return pigLatin;
};
console.log(makePigLatin(str))

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`original word ${str}, when the pigs get to it ${makePigLatin(str)}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userWord = input.question(`please enter a word: `);
let letterDi = input.question(`please enter the number of letters you want to put at the end: `);
function customPigs(word) {
    pigLatin = word.slice(letterDi, userWord.length);
    pigLatin += word.slice(0, letterDi);
    return pigLatin;
}

//console.log(customPigs(userWord))
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userWord.length < letterDi) {
    console.log(`cannot add that many letters to the end, so here is your word in regular pig latin: ${makePigLatin(userWord)}`);
} else { 
    console.log(`your word ${userWord}, your word with letters displaced ${customPigs(userWord)}`);
};
