var fs = require("fs");
var text = fs.readFileSync("./Advent 2021/input2.txt").toString('utf-8');
var textByLine = text.split("\n")

function seaMeasure(arr) {
    let depth = 0;
    let horizontal = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split(' ');
        if (word[0] === 'forward') {
            horizontal += parseInt(word[1]);
        }
        else if (word[0] === 'down') {
            depth += parseInt(word[1]);
        }
        else if (word[0] === 'up') {
            depth -= parseInt(word[1]);
        }
    }
    result = depth * horizontal;
    console.log(`Głębokość wynosi ${depth}, pozycja wynosi ${horizontal}, mnożenie wartości wynosi ${result}.`)
    return result;
}

seaMeasure(textByLine);


function seaMeasureAim(arr) {
    let depth = 0;
    let horizontal = 0;
    let aim = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split(' ');
        if (word[0] === 'forward') {
            horizontal += parseInt(word[1]);
            depth += aim * parseInt(word[1])
        }
        else if (word[0] === 'down') {
            aim += parseInt(word[1]);
        }
        else if (word[0] === 'up') {
            aim -= parseInt(word[1]);
        }
    }
    result = depth * horizontal;
    console.log(`Głębokość wynosi ${depth}, pozycja wynosi ${horizontal}, mnożenie wartości wynosi ${result}.`)
    return result;
}

seaMeasureAim(textByLine);