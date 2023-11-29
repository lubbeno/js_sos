//mojaPrvaFunkcia();
mojaPrvaFunkciaSParametrom("toto je vstupny parameter");

let nejakyText = 'toto je text v premennej nejakyText';

mojaPrvaFunkciaSParametrom(nejakyText);
/*
mojaAdresa.toLowerCase();
mojaAdresa.toUpperCase();
mojaAdresa.substring();
mojaAdresa.endsWith();
mojaAdresa.repeat();
mojaAdresa.replace();
*/

mojaToLowerCase("SOME text");

mojRepeate("")

function mojaPrvaFunkcia() {
  alert("toto je moja prva funkcia");
  console.log("TOTO JE MOJA PRVA FUNKCIA!!!!");
  
}

function mojaPrvaFunkciaSParametrom(lokalnaPremenna) {
  console.log(lokalnaPremenna);
}

function mojaToUpperCase(vstupnyText){
  let upravenyText = vstupnyText.toUpperCase();
  console.log(upravenyText);
  return upravenyText;
  }

function mojaToUpperCaseSReturn(vstupnyText){
let upravenyText = vstupnyText.toUpperCase();
console.log(upravenyText);
return upravenyText;
}

function mojaToUpperCaseBezReturn(vstupnyText){
  let upravenyText = vstupnyText.toUpperCase();
  console.log(upravenyText);
  // return tu chyba
  }

function mojaToLowerCase(vstupnyText){
    let upravenyText = vstupnyText.toLowerCase();
console.log(upravenyText);
}

mojRepeate("tex na opakovanie", 4);
mojRepeate("tex na opakovanie", 40);

function mojRepeate(vstupnyText , cisloOpakovania){
    let upravenyText = vstupnyText.repeat(cisloOpakovania);
console.log(upravenyText);
}

console.log(mojaToUpperCase('nejakyString').repeat(3));

let a = mojaToUpperCaseSReturn('Snad je to jasne');
let b = mojaToUpperCaseBezReturn('Snad je to jasne');
console.log(a);
console.log(b);


console.log(sucetCiselvDatumeNarodenia());
