'use strict'

columna = prompt("Introduce un número de columnas: ");
altura = prompt("Introduce la altura en pixeles: ");
anchura = prompt("Introduce la anchura en pixeles: ");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor = "white" height = "' + altura + '">');

do {
    document.write('<td width="' + anchura + '">&nbsp;</td>');
    columna--;
} while (columna != 0);

document.write("</tr>");
document.write("</table>");