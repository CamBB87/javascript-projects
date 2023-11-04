//making shapes

let hash = "";

// function makeLine(size, length) {
//     for (i = 0; i < length; i++) {
//         hash += "\n";
//         for (j = 0;j < size; j++){
//             hash += "#";
//         };
//     };
//     return hash;
// };

// console.log(makeLine(4, 4))


function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  };


  function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  };

//   console.log(makeRectangle(4, 4));


  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  };
  
//   console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpace, numChar) {
    let line = ``;
    for (let i = 0; i < numSpace; i++) {
        line += ` `;
    };
    line += makeLine(numChar);
    for (let i = 0; i < numSpace; i++) {
        line += ` `;
    };
    
    return line;
};



  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  };

//   console.log(makeIsoscelesTriangle(5))
function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeDiamond(height) {
    let diamond = ``;
    let upsideDown = ``;
    diamond += makeIsoscelesTriangle(height);
    upsideDown += makeIsoscelesTriangle(height);
    diamond += `\n${reverse(upsideDown)}`;
    return diamond;
};
console.log(makeDiamond(5))