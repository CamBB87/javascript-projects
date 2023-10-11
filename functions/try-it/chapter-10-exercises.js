
//shapes with functions 

let hash = "";

function makeHashLine(length, lines) {
    for (i = 0; i < lines; i++) {
        hash += "\n"
        for (j = 0; j < length; j++) {
            hash += "#"
        }
    }
    return hash
}

console.log(makeHashLine(5 , 5))


// function makeLine(size) {
//     let line = '';
//     for (let i = 0; i < size; i++) {
//       line += '#';
//     }
//     return line;
//   }


// function makeRectangle(width, height) {
//     let rectangle = '';
//     for (let i = 0; i < height; i++) {
//       rectangle += (makeLine(width) + '\n');
//     }
//     return rectangle.slice(0, -1);
//   }




// console.log(makeRectangle(5,5))













