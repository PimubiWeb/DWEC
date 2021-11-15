'use strict'

var edad = parseInt(prompt("edad: "));

if(edad <5){
    console.log("estas en el jardin de la infancia");
}
else if(edad >=5 && edad <= 11){
    console.log("estas en primaria");
}
else if(edad >=12 && edad <=16){
    console.log("estas en la ESO");
}
else if(edad >=17 && edad <=21){
    console.log("estas en Bachiller o en Ciclos")
}
else{
    console.log("estas en la Universidad")
}