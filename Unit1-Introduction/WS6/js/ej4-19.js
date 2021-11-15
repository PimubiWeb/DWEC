

var ancho = prompt("Dime el ancho del tablero: ");
var columnas = 8;

for (let i = 1; i <= columnas; i++) {
    document.write('<td bgcolor = "white" width="' + ancho + '">&nbsp;</td>');
    for (let j = 1; j <= columnas; j++) {
        document.write('<td bgcolor = "black" width="' + ancho + '">&nbsp;</td>');
    }
}