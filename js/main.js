'use strict';

var result = '0';
var curruntOperation = '';
var calcutationFinished = false;
var emptyInput = true;
document.getElementById('calculateBtn').addEventListener("click", calculate);

function calculate() {
    var a, b, operation;
    var list = result.split(' ');
    if (list.length !== 3) {
        alert('Something wrong with input');
    } else {
        a = +list[0];
        operation = list[1];
        b = +list[2];
    };
    result = operationsBinary[operation](a, b);
    result = +result.toFixed(7);
    updateResultText(result);
    curruntOperation = '';
    calcutationFinished = true;
};


for (var i = 0; i < btns.length; i++) { //input numbers
    btns[i].onclick = function() {
        var inputValue = this.innerHTML;
        if (result === "0" && emptyInput) {
            result = inputValue;
            emptyInput = false;
        } else {
        	if(calcutationFinished && curruntOperation === ''){
        		result = '';
        	};
        	calcutationFinished = false;
            result = result + inputValue;
            //result = +parseFloat(result).toFixed(7);
        };
        updateResultText(result);
    };
};


for (var i = 0; i < operationsBinaryBtn.length; i++) {
    operationsBinaryBtn[i].onclick = function() {
        var inputOp = this.innerHTML;
        if (curruntOperation !== '' && isValidBinaryInput(result)) {
            calculate();
        };
        curruntOperation = inputOp;
        result = result + ' ' + curruntOperation + ' ';
        updateResultText(result);
    }
};

function isValidBinaryInput(str) {
    var list = str.split(' ');
    if (list.length === 3) {
        if (list[1] in operationsBinary) {
            return true;
        };
    };
    return false;
};