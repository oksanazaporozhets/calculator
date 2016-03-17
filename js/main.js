var result = '0';
var curruntOperation = '';
var btns = document.querySelectorAll('#calculator button.digit');
var operationsBinaryBtn = document.querySelectorAll('#calculator .binary-operator');

document.getElementById('calculateBtn').addEventListener("click", calculate);

document.getElementById('clean-all').addEventListener("click", resetAll);
document.getElementById('clean-last-arg').addEventListener("click", resetAll);

document.getElementById('sqrt-btn').addEventListener("click", sqrtCalculate);
document.getElementById('fraction1').addEventListener("click", fraction1Calculate);
document.getElementById('change-sign').addEventListener("click", ChangeSignCalculate);

function resetAll(){
	document.getElementById('resultText').innerHTML = '0';
	result = '0';
	curruntOperation = '';
};


function calculate(){
	var list = result.split(' ');
	if(list.length !== 3){
		alert('Something wrong with input');
	} else {
		a = +list[0];
    	operation = list[1];
    	b = +list[2];
	};
	result = operationsBinary[operation](a, b);
	updateResultText(result);
	curruntOperation = '';
};


for( var i=0; i< btns.length; i++){ //input numbers
	btns[i].onclick = function() {
		console.log(this.innerHTML);
		var inputValue = this.innerHTML;
		if (result === "0"){
			result = inputValue;
		} else {
			result = result + inputValue;
		};
		curruntOperation = '';
		updateResultText(result);		
	};
};


for( var i=0; i< operationsBinaryBtn.length; i++){
	operationsBinaryBtn[i].onclick = function(){
		var inputOp = this.innerHTML;
		var a = result;
		if (curruntOperation !== ''){
			if(isValidBinaryInput(result)){
				calculate();
			}
			else{
				a = result.split(' ')[0];
			};
		};
		curruntOperation = inputOp;
		result = a + ' ' + curruntOperation + ' ';
		updateResultText(result);
	}
};


for( var i=0; i< operationsBinaryBtn.length; i++){
	operationsBinaryBtn[i].onclick = function(){
		var inputOp = this.innerHTML;
		var a = result;
		if (curruntOperation !== ''){
			if(isValidBinaryInput(result)){
				calculate();
			}
			else{
				a = result.split(' ')[0];
			};
		};
		curruntOperation = inputOp;
		result = a + ' ' + curruntOperation + ' ';
		updateResultText(result);
	}
};