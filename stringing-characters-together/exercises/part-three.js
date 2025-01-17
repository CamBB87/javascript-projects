//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(`${language.slice(0,1)}${language.slice(4,5)}`);
//2. Without using slice(), use method chaining to accomplish the same thing.
let JS = language.replace(`ava`, ``).replace(`cript`, ``);
console.log(`The abbreviation for '${language}' is '${JS}'.`);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
function excitement(num){
    let excite = "";
    for (i = 0; i < num; i++) {
        excite += "!";
    };
    return excite;
}
let cat = "   cat   ";
cat = cat.trim().replace(`t`, `     `).replace(` `, `t`).replace(` `, `!`).replace(` `, `!`).replace(` `, `!`).replace(` `, `!`).toUpperCase();
console.log(cat);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(`${notTitleCase.slice(0,1).toUpperCase()}${notTitleCase.slice(1,5)} ${notTitleCase.slice(6,7).toUpperCase()}${notTitleCase.slice(7,notTitleCase.length)}`);