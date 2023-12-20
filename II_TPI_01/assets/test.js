let meno = "lubos"
let priez = "sukup";
let vek = 38;

let dospelost = 18 - vek;

let celeMeno = meno + " " + priez;

let v = mojeDelenie(6,3);
console.log(v);

function mojeDelenie(x, y) {
   let vys;
   if(y != 0) {
 vys = x/y;
   }
   else{
      vys = NaN;
   }
return vys;

}

function fubc (param){

   console.log( param.repeat(3));

}