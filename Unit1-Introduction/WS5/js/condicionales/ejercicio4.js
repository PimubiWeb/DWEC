'use strict'

var numero = parseInt(prompt("dime un numero: "));

if(numero > 100){
    alert("tiene un descuento del 15% por ser superior a 100, tu precio "+ numero+ " ahora sera "+ (numero-numero*0.15));
}