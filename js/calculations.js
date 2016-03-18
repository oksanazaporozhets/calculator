'use strict';

function sqrtCalculate() {
    var a = +result;
    result = Math.sqrt(a);
    updateResultText(result);
    curruntOperation = '';
};

function deleteLastDigit() {
    console.log("Work");
    if (!isNaN(result[result.lenght - 1])) {
        result = result.slice(0, -1);
    };
    updateResultText(result);
    return result;
}

function fraction1Calculate() {
    var a = +result;
    result = 1 / a;
    updateResultText(result);
    curruntOperation = '';
};

function ChangeSignCalculate() {
    var a = +result;
    result = -a;
    updateResultText(result);
    curruntOperation = '';
};

var operationsBinary = {
    "+": function(a, b) {
        return a + b;
    },
    "-": function(a, b) {
        return a - b;
    },
    "*": function(a, b) {
        return a * b;
    },
    "/": function(a, b) {
        return a / b;
    },
    "%": function(a, b) {
        return a % b;
    }
};

function resetAll() {
    result = '0';
    updateResultText(result);
    curruntOperation = '';
};