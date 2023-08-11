const task3Element = document.getElementById('task-3');

ukazAlert();
ukazAlertDva('Filuta');


alert(mujTest('jedna','dva', 'tri'));

function ukazAlert(){
    alert('muj Alert');
}

function ukazAlertDva(meno){
    alert('Alert s ' + meno);
}

function mujTest ( jedna, dva, tri){
    return jedna + dva+ tri; 
}

task3Element.addEventListener('click', ukazAlert);

