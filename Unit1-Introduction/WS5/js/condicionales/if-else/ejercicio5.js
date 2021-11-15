'use strict'

var exam1 = parseInt(prompt("dime un numero: "));
var exam2 = parseInt(prompt("dime un numero: "));
var trabajo1 = parseInt(prompt("dime un numero: "));
var trabajo2 = parseInt(prompt("dime un numero: "));

var media = ((exam1 + exam2)/2) * 0.75 + ((trabajo1 + trabajo2)/2) * 0.25

if(media >=5 && exam1>=4.5 && exam2>=4.5 && trabajo1 >= 4.5 && trabajo2 >= 4.5){
    alert("Has aprobado picha")
}
else{alert("Has suspendido, efe que flipas")}