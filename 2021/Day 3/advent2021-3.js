var fs = require("fs");
var text = fs.readFileSync("./Advent/Advent 2021/input3.txt").toString('utf-8');
var textByLine = text.split("\n")
var textByLine2 = text.split("\n")

function binaryDiagnostic(arr) {
    let zeros
    let ones
    let gamma = '';
    for (let i = 0; i < arr[i].length; i++) {
        zeros = 0;
        ones = 0;
        for (let j = 0; j < arr.length; j++) {
            let check = arr[j][i];
            if (check == 1) {
                ones++;
            }
            else {
                zeros++;
            }
        }
        if (ones > zeros) {
            gamma += '1';
        }
        else {
            gamma += '0';
        }
    }
    let epsilon = '';
    for (let i = 0; i < gamma.length; i++) {
        if (gamma[i] == 1) {
            epsilon += '0'
        }
        else {
            epsilon += '1'
        }
    }
    let gamma10 = parseInt(gamma, 2);
    let epsilon10 = parseInt(epsilon, 2);
    let power = gamma10 * epsilon10;
    console.log(`${gamma}, ${gamma10}, ${epsilon}, ${epsilon10}, ${power}`)
}

binaryDiagnostic(textByLine);



function lifeSupportOxygen(arr) {
    let zeros
    let ones
    let check;
    for (let i = 0; i < arr[0].length; i++) {
        zeros = 0;
        ones = 0;
        for (let j = 0; j < arr.length; j++) {
            check = arr[j][i];
            if (check == 1) {
                ones++;
            }
            else {
                zeros++;
            }
        }
        if (ones >= zeros) {
            for (let j = 0; j < arr.length; j++) {
                check = arr[j][i]
                if (check == 0 && arr.length != 1) {
                    arr.splice(j, 1);
                    if (j !== arr.length) {
                        j--;
                    }
                    else {
                        console.log(arr);
                    }
                }
            }
        }
        else {
            for (let j = 0; j < arr.length; j++) {
                check = arr[j][i]
                if (check == 1 && arr.length != 1) {
                    arr.splice(j, 1);
                    if (j !== arr.length) {
                        j--;
                    }
                    else {
                        console.log(arr);
                    }
                }
            }
        }
    }
    let oxygen = parseInt(arr,2);
    return oxygen;
}

function lifeSupportCO2(arr) {
    let zeros
    let ones
    let check;
    for (let i = 0; i < arr[0].length; i++) {
        zeros = 0;
        ones = 0;
        for (let j = 0; j < arr.length; j++) {
            check = arr[j][i];
            if (check == 1) {
                ones++;
            }
            else {
                zeros++;
            }
        }
        if (ones >= zeros) {
            for (let j = 0; j < arr.length; j++) {
                check = arr[j][i]
                if (check == 1 && arr.length != 1) {
                    arr.splice(j, 1);
                    if (j !== arr.length) {
                        j--;
                    }
                    else {
                        console.log(arr);
                    }

                }
            }
        }
        else {
            for (let j = 0; j < arr.length; j++) {
                check = arr[j][i]
                if (check == 0 && arr.length != 1) {
                    arr.splice(j, 1);
                    if (j !== arr.length) {
                        j--;
                    }
                    else {
                        console.log(arr);
                    }
                }
            }
        }
    }
    let CO2 = parseInt(arr[0], 2);
    return CO2;
}

console.log(lifeSupportOxygen(textByLine));
console.log(lifeSupportCO2(textByLine2));

let a = lifeSupportOxygen(textByLine)
let b = lifeSupportCO2(textByLine2);
let multiply = a * b;
console.log(multiply);