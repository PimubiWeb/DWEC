'use strict'

columna = prompt("Introduce un número de columnas: ");
fila = prompt("Introduce el número de filas: ");
alto = prompt("Introduce la altura en pixeles: ");
ancho = prompt("Introduce la anchura en pixeles: ");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');

for (let i = 1; i <= fila; i++) {
    document.write('<tr bgcolor = "white" width="' + ancho + '">&nbsp;</td>');
    for (let j = 1; j <= columna; j++) {
        document.write('<td width="' + ancho + '">&nbsp;</td>');
    }
}

document.write("</tr>");
document.write("</table>");