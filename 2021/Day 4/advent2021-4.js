var fs = require("fs");
var text = fs.readFileSync("./Advent/Advent 2021/input4.txt").toString('utf-8');
var textByLine = text.split("\n")
var drawn = textByLine[0];
var drawnNumbers = drawn.split(",");
var temporaryBingoBoards = [];
var bingoBoards = [];
var bingoBoardsSingle = [];
var bingoBoardsAll = [];
var justcheck = [];
var justcheck2 = [];
var numberofboards = 0;
var winningBoard = [];

function drawnBingo(arr) {

    for (let i = 2; i < arr.length; i++) {
        temporaryBingoBoards.push(arr[i]);
    }
    bingoBoards = temporaryBingoBoards.filter((a) => a);
    for (let i = 0; i < bingoBoards.length; i++) {
        justcheck[i] = bingoBoards[i].split(' ');
    }
    for (let i = 0; i < bingoBoards.length; i++) {
        justcheck2[i] = justcheck[i].filter((a) => a);
    }
    numberofboards = bingoBoards.length / 5;
    for (let i = 0; i < numberofboards; i++) {
        bingoBoardsSingle[i] = new Array();
        for (let j = 0; j < numberofboards * 5; j++) {
            if (j % 5 == 0 && j != 0) {
                ++i;
                bingoBoardsSingle[i] = new Array();
                bingoBoardsSingle[i].push(justcheck2[j]);
            }
            else {
                bingoBoardsSingle[i].push(justcheck2[j]);
            }
        }
    }
    refreshBingoBoard(bingoBoardsSingle);
}

function winCondition(arr) {
    let limit = arr[0][0].length;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < limit; j++) {
            let numberofXrow = 0;
            for (let k = 0; k < limit; k++) {
                if (arr[i][j][k] == "x") {
                    ++numberofXrow
                    if (numberofXrow == 5) {
                        return true;
                    }
                }

            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < limit; j++) {
            let numberofXcol = 0;
            for (let k = 0; k < limit; k++) {
                if (arr[i][k][j] == "x") {
                    numberofXcol++
                    if (numberofXcol == 5) {
                        return true;
                    }

                }
            }
        }
    }
    return false;
}

function refreshBingoBoard(arr) {
    let newArr = arr;
    let limitBig = newArr.length;
    let limit = 5;
    for (let k = 0; k < drawnNumbers.length; k++) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < limit; j++) {
                for (let l = 0; l < limit; l++) {
                    if (drawnNumbers[k] == newArr[i][j][l]) {
                        newArr[i][j][l] = "x";
                        if (winCondition(newArr) === true) {
                            let check = drawnNumbers[k];
                            bingoBoardsAll.push(newArr[i]);
                            newArr.splice(i, 1);
                            i = 0;
                            if (bingoBoardsAll.length == limitBig - 1) {
                                winningBoard.push(newArr[i]);
                            }
                            if (bingoBoardsAll.length == limitBig) {
                                let sum = sumofunmarked(winningBoard, i, j)
                                let multiply = drawnNumbers[k] * sum;
                                console.log(`Wynik mnożenia wylosowanej liczby ${drawnNumbers[k]} (${k} wylosowana liczba) i sumy ${sum} wynosi: ${multiply}`);
                                console.log(winningBoard, check);
                                return winningBoard;
                            }
                        }
                    }
                }

            }
        }
    }
}


function sumofunmarked(arr, i, j) {
    let sum = 0;
    let limit = 5;
    for (let k = 0; k < arr.length; k++) {
        if (k == i) {
            for (let m = 0; m < limit; m++) {
                for (let n = 0; n < limit; n++) {
                    if (arr[k][n][m] != 'x') {
                        sum += parseInt(arr[k][n][m]);
                    }
                }
            }
        }
    }
    return sum;
}

drawnBingo(textByLine);