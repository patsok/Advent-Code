var fs = require("fs");
var text = fs.readFileSync("./Advent/Advent 2021/input5.txt").toString('utf-8');
var textByLine = text.split("\n")
var separated = text.split("\n").join("->").split("->").join(",").split(",").join(" ").split(" ");
var loadedArr = separated.filter(function (str) {
    return /\S/.test(str);
});
var assignedValueArr = [];
var diagram = [];

function loadArr(arr) {
    for (let i = 0; i < arr.length / 4; i++) {
        assignedValueArr[i] = new Array();
        for (let j = 0; j < arr.length; j++) {
            if (j % 4 == 0 && j != 0) {
                ++i
                assignedValueArr[i] = new Array();
                assignedValueArr[i].push(arr[j]);
            }
            else {
                assignedValueArr[i].push(arr[j]);
            }
        }
    }
    return assignedValueArr;
}
function assignValues(arr) {
    let x1;
    let x2;
    let y1;
    let y2;
    size = whatSize(loadedArr);
    drawEmptyDiagram(size);
    for (let i = 0; i < arr.length; i++) {
        x1 = parseInt(arr[i][0]);
        x2 = parseInt(arr[i][2]);
        y1 = parseInt(arr[i][1]);
        y2 = parseInt(arr[i][3]);
        if (x1 == x2 || y1 == y2) {
            drawDiagram(diagram, x1, x2, y1, y2, size);
        }
        else {
            drawnDiagramDiagonal(diagram, x1, x2, y1, y2, size);
        }
    }
    return diagram;
}

function drawDiagram(diagram, x1, x2, y1, y2, size) {
    if (y1 == y2) {
        let numberofsteps = Math.abs(x1 - x2) + 1;
        for (let i = 0; i < numberofsteps; i++) {
            if (x1 > x2) {
                let temporaryx1 = x1
                x1 = x2;
                x2 = temporaryx1;
            }
            let position = parseInt(x1 + i);
            diagram[y1][position] += 1;
        }
    }
    if (x1 == x2) {
        let numberofsteps = Math.abs(y1 - y2) + 1;
        for (let i = 0; i < numberofsteps; i++) {
            if (y1 > y2) {
                let temporaryy1 = y1
                y1 = parseInt(y2);
                y2 = parseInt(temporaryy1);
            }
            let position = parseInt(y1 + i);
            diagram[position][x1] += 1;
        }
    }
}
function drawnDiagramDiagonal(diagram, x1, x2, y1, y2, size) {
    let numberofstepsHorizontal = Math.abs(y1 - y2) + 1;
    let positionHorizontal;
    let positionVertical;
    if (x1 > x2 && y1 < y2) {
        for (let i = 0; i < numberofstepsHorizontal; i++) {
            positionHorizontal = x1 - i;
            positionVertical = y1 + i;
            diagram[positionHorizontal][positionVertical] += 1;
        }
    }
    else if (x1 < x2 && y1 < y2) {
        for (let i = 0; i < numberofstepsHorizontal; i++) {
            positionHorizontal = x1 + i;
            positionVertical = y1 + i;
            diagram[positionHorizontal][positionVertical] += 1;
        }
    }
    else if (x1 > x2 && y1 > y2) {
        for (let i = 0; i < numberofstepsHorizontal; i++) {
            positionHorizontal = y1 - i;
            positionVertical = x1 - i;
            diagram[positionHorizontal][positionVertical] += 1;
        }
    }
    else if (x1 < x2 && y1 > y2) {
        for (let i = 0; i < numberofstepsHorizontal; i++) {
            positionHorizontal = y1 - i;
            positionVertical = x1 + i;
            diagram[positionHorizontal][positionVertical] += 1;
        }
    }
    return diagram;
}


function drawEmptyDiagram(size) {
    for (let i = 0; i < size; i++) {
        diagram[i] = new Array();
        for (let j = 0; j < size; j++) {
            diagram[i].push(0);
        }
    }
    console.log(diagram);
    return diagram;
}

function whatSize(arr) {
    let max = 0;
    for (let i in arr) {
        if (parseInt(arr[i]) > max) {
            max = arr[i];
        }
    }
    max++
    return max;
}


function makeAll(arr) {
    loadArr(arr);
    assignValues(assignedValueArr);
    // printDiagram(diagram);
    countRoutes(diagram);
}

function printDiagram(arr) {
    let board = '';
    for (let i = 0; i < arr.length; i++) {
        let row = '';
        for (let j = 0; j < arr[i].length; j++) {
            row += ` ${arr[i][j]}`
        }
        board += row + '\n';
    }
    console.log("Ostateczny diagram\n" + board);
}

function countRoutes(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] > 1) {
                count++
            }
        }
    }
    console.log("Lines overlaped: " + count);
    return count;
}

makeAll(loadedArr);