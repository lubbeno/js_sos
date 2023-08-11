const defaultResult= 0;
let currenctResult = 0;


function add(){
   currenctResult = currenctResult + userInput.value;
   outputResult(currenctResult, '');
}

addBtn.addEventListener('click', add);


// ukazat syntax zavolat metody s parametrama bez parametru, ukazat return 
// premenne a funkcie sa budu davat na zacatek. 
