var fs = require("fs");
var text = fs.readFileSync("./input2.txt").toString('utf-8');
var textByLine = text.split("\n")

function codes(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split(' ');
        let word2 = word[0].split('-');
        let word3 = word[1].split(':');
        let word4 = word[2]
        let letter = 0;
        for (let j = 0; j < word4.length; j++) {
            if (word4.charAt(j) === word3[0]) {
                letter++
            }
        }
        if (letter >= word2[0] && letter <= word2[1]) {
            result++
        }
    }
    console.log(`Ilość poprawnych haseł wynosi ${result}.`)
    return result;
}

codes(textByLine);


function codes2(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split(' ');
        let word2 = word[0].split('-');
        let position1 = word2[0];
        let position2 = word2[1];
        let word3 = word[1].split(':');
        let word4 = word[2]
        if (word4.charAt(position1-1) === word3[0] && word4.charAt(position2-1) !== word3[0]) {
                result++
            }
        else if(word4.charAt(position1-1) !== word3[0] && word4.charAt(position2-1) === word3[0]) {
                result++
            }
    }
    console.log(`Ilość poprawnych haseł wynosi ${result}.`)
    return result;
}

codes2(textByLine);