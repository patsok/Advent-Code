var fs = require("fs");
var text = fs.readFileSync("./Advent 2021/input.txt").toString('utf-8');
var textByLine = text.split("\n")

function seaMeasure(arr) {
    let inc = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
            inc++
        }
    }
    return inc;
}

console.log(seaMeasure(textByLine));


function seaMeasureSum(arr) {
    let inc = 0;
    let jedn = 0;
    let dzi = 0;
    let set = 0;
    let tys = 0;
    let jedn2 = 0;
    let dzi2 = 0;
    let set2 = 0;
    let tys2 = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let num2 = arr[i + 1];
        jedn = num % 10;
        dzi = (num - jedn) / 10 % 10;
        set = (num - dzi * 10 - jedn) / 100 % 10;
        tys = (num - set * 100 - dzi * 10 - jedn) / 1000 % 10;
        let sum = jedn + dzi + set + tys;
        jedn2 = num2 % 10;
        dzi2 = (num2 - jedn2) / 10 % 10;
        set2 = (num2 - dzi2 * 10 - jedn2) / 100 % 10;
        tys2 = (num2 - set2 * 100 - dzi2 * 10 - jedn2) / 1000 % 10;
        let sum2 = jedn2 + dzi2 + set2 + tys2;
        if (sum < sum2) {
            inc++
        }
    }
    return inc;
}

console.log(seaMeasureSum(textByLine));

function seaMeasureSum3(arr) {
    let incSingle = 0;
    let incTriple = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = parseInt(arr[i]) + parseInt(arr[i + 1]) + parseInt(arr[i + 2]);
        let sum2 = parseInt(arr[i + 1]) + parseInt(arr[i + 2]) + parseInt(arr[i + 3]);
        if (sum < sum2) {
            incTriple++
        }
        if (arr[i - 1] < arr[i]) {
            incSingle++
        }
    }
console.log(incTriple, incSingle);
}

seaMeasureSum3(textByLine);


