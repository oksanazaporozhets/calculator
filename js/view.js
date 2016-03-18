'use strict';

var btns = document.querySelectorAll('#calculator button.digit');
var operationsBinaryBtn = document.querySelectorAll('#calculator .binary-operator');

document.getElementById('clean-all').addEventListener("click", resetAll);
document.getElementById('clean-last-arg').addEventListener("click", resetAll);

document.getElementById('sqrt-btn').addEventListener("click", sqrtCalculate);
document.getElementById('fraction1').addEventListener("click", fraction1Calculate);
document.getElementById('change-sign').addEventListener("click", ChangeSignCalculate);

function updateResultText(newResult){
    var resultBlock = document.getElementById('resultText');
    resultBlock.innerHTML = newResult;
};