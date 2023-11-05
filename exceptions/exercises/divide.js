// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
function devide(numer, denom) {
    let num;
    if (denom === 0) {
        throw Error(`things can't be divided by 0 silly`)
    }
    return numer / denom;
};

// console.log(devide(2, 0));
console.log(devide(2, 2))