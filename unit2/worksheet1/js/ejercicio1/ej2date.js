/* Función que suma o resta días a una fecha, si el parámetro
días es negativo restará los días*/

var fechaHoy = new Date();
//console.log(fechaHoy)

function sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
}

var fechaHoy = new Date();
var fecha85 = sumarDias(fechaHoy, 85);
//console.log(fecha85)
var fecha187 = sumarDias(fecha85,-187)
//console.log(fecha187);

function sumarAnios(fecha, anios){
    fecha.setFullYear(fecha.getFullYear() + anios);
    return fecha;
}

var fechaHoy = new Date();
//console.log(sumarAnios(fechaHoy, 2));

function restaFechas(fecha1, fecha2){
    var fechanueva = fecha1- fecha2
    return fechanueva
}

console.log(restaFechas(fecha187,fecha85));
console.log(fecha85-fechaHoy);
