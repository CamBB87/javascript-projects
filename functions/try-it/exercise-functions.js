//making shapes

let hash = "";

function makeLine(size, length) {
    
    for (i = 0; i < length; i++) {

        hash += "\n";

        for (j = 0;j < size; j++){
            hash += "#";
        };

    };

    return hash;

};

console.log(makeLine(4, 7))



