function updateResultText(newResult){
	var resultBlock = document.getElementById('resultText');
	resultBlock.innerHTML = newResult.toString();
};

function sqrtCalculate() {
	var a = +result;
	result = Math.sqrt(a);
	updateResultText(result);
	curruntOperation = '';
};

function fraction1Calculate() {
	var a = +result;
	result = 1/a;
	updateResultText(result);
	curruntOperation = '';
};

function ChangeSignCalculate(){
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