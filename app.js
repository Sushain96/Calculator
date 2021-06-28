const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserInput(){
    return parseInt(userInput.value)
}

function  outputDscription(operator,initialResult,newNumber){
    const calculationDescription = `${initialResult} ${operator} ${newNumber}`;
    outputResult(currentResult,calculationDescription);//from vendor.js
}

function logEntryledger(operationSign,
    previousResult,
    newNumber,
    newResult){
        const logEntry = {
            operation: operationSign,
            previousResult: previousResult,
            newNumber: newNumber,
            newResult: newResult
        }
    logEntries.push(logEntry);
    console.log(logEntries);

}
function calculation (calculationType){
    const enteredNumber = getUserInput();
    if ( !enteredNumber){ // to eliminate the possibility of entering falsey values like 0.
        return;
    }
    const initialResult = currentResult;
     let  mathOperator;
    if (calculationType === 'ADD'){
      currentResult+= enteredNumber; 
      mathOperator = "+";
    }  else if  ( calculationType === 'SUBTRACT'){
       currentResult-= enteredNumber;    
       mathOperator = "-";
    }  else if  ( calculationType === 'MULTIPLY'){
        currentResult*= enteredNumber;    
        mathOperator = "*";
    }  else if  ( calculationType === 'DIVIDE'){
        currentResult/= enteredNumber;    
        mathOperator = "/";
        }
    outputDscription(mathOperator,initialResult,enteredNumber);
    logEntryledger(calculationType,initialResult,enteredNumber,currentResult);
}
function addition(){
    calculation('ADD');   
}


function subtraction(){
    calculation('SUBTRACT');
}

     
function multiplication(){
    calculation('MULTIPLY')
}
     
function division(){
    calculation('DIVIDE')
}


    addBtn.addEventListener('click',addition);
    subtractBtn.addEventListener('click',subtraction);
    multiplyBtn.addEventListener('click',multiplication);
    divideBtn.addEventListener('click',division); 
