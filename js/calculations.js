'use strict';

function sqrtCalculate() {
    result = Math.sqrt(+result);
    result = +result.toFixed(7);
    updateResultText(result);
    curruntOperation = '';
};

function deleteLastDigit() {
    if (!isNaN(result[result.lenght - 1])) {
        result = result.slice(0, -1);
    };
    result = +result.toFixed(7);
    updateResultText(result);
    return result;
}

function fraction1Calculate() {
    result = 1 / result;
    result = +result.toFixed(7);
    updateResultText(result);
    curruntOperation = '';
};

function changeSignCalculate() {
    result = -result;
    result = +result.toFixed(7);
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
    emptyInput = true;
    calcutationFinished = false;
    updateResultText(result);
    curruntOperation = '';
};

function isNumeric(a) {
  return !isNaN(parseFloat(a)) && isFinite(a);
};