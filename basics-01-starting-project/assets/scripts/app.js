const defaultResult= 0;
let currenctResult = 0;


function createAndWriteOutput(operator, resultBeforeCalc, calcNunber){
   const calcDescription = `${resultBeforeCalc} ${operator}  ${calcNunber}`;
   outputResult(currenctResult, calcDescription);
}

function add(){
   const initValue = currenctResult;
   const enteredValue = parseInt(userInput.value);
   currenctResult = currenctResult + enteredValue;
   createAndWriteOutput('+' , initValue , enteredValue);
}


function substract(){
   const initValue = currenctResult;
   const enteredValue = parseInt(userInput.value);
   currenctResult = currenctResult - enteredValue;
   createAndWriteOutput('-' , initValue , enteredValue);
}

function multiply(){
   const initValue = currenctResult;
   const enteredValue = parseInt(userInput.value);
   currenctResult = currenctResult * enteredValue;
   createAndWriteOutput('*' , initValue , enteredValue);
}

function divide(){
   const initValue = currenctResult;
   const enteredValue = parseInt(userInput.value);
   currenctResult = currenctResult / enteredValue;
   createAndWriteOutput('/' , initValue , enteredValue);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



// ukazat syntax zavolat metody s parametrama bez parametru, ukazat return 
// premenne a funkcie sa budu davat na zacatek. 
