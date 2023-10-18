const defaultResult = 0;
let currenctResult = 0;
let logEntries = new Array();

function createAndWriteOutput(operator, resultBeforeCalc, calcNunber) {
  const calcDescription = `${resultBeforeCalc} ${operator}  ${calcNunber}`;
  outputResult(currenctResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    cisloPridane: operationNumber,
    newResult: newResult,
    time: Date.now(),
    prdel: function () {
      return "moja Prdel ma cislo " + currenctResult + " !!";
    },
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const initValue = currenctResult;
  const enteredValue = parseInt(userInput.value);
  currenctResult += enteredValue;
  createAndWriteOutput("+", initValue, enteredValue);
  writeToLog('ADD',initValue,enteredValue,currenctResult);

}

function substract() {
  const initValue = currenctResult;
  const enteredValue = parseInt(userInput.value);
  currenctResult -= enteredValue;
  createAndWriteOutput("-", initValue, enteredValue);
  writeToLog('SUBSTRACT',initValue,enteredValue,currenctResult);
}

function multiply() {
  const initValue = currenctResult;
  const enteredValue = parseInt(userInput.value);
  currenctResult *= enteredValue;
  createAndWriteOutput("*", initValue, enteredValue);
  writeToLog('MUSTIPLY',initValue,enteredValue,currenctResult);
}

function divide() {
  const initValue = currenctResult;
  const enteredValue = parseInt(userInput.value);
  currenctResult /= enteredValue;
  createAndWriteOutput("/", initValue, enteredValue);
  writeToLog('DIVIDE',initValue,enteredValue,currenctResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

// ukazat syntax zavolat metody s parametrama bez parametru, ukazat return
// premenne a funkcie sa budu davat na zacatek.
