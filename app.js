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

function addition(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult+= enteredNumber; 
    outputDscription("+",initialResult,enteredNumber);
    logEntryledger("ADD",initialResult,enteredNumber,currentResult);
}


function subtraction(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult-= enteredNumber; 
    outputDscription("-",initialResult,enteredNumber);
    logEntryledger("SUBTRACT",initialResult,enteredNumber,currentResult);
}

     
function multiplication(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult*= enteredNumber; 
    outputDscription("*",initialResult,enteredNumber);
    logEntryledger("MULTIPLY",initialResult,enteredNumber,currentResult);}

     
function division(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult/= enteredNumber; 
    outputDscription("/",initialResult,enteredNumber);
    logEntryledger("DIVIDE",initialResult,enteredNumber,currentResult);
}


    addBtn.addEventListener('click',addition);
    subtractBtn.addEventListener('click',subtraction);
    multiplyBtn.addEventListener('click',multiplication);
    divideBtn.addEventListener('click',division); 
