'use strict'

columna = prompt("Introduce un número de columnas: ");
alto = prompt("Introduce la altura en pixeles: ");
ancho = prompt("Introduce la anchura en pixeles: ");

document.write('<table border="1" cellspacing="2" bgcolor="black" witdh="200">');
document.write('<tr bgcolor="white" height="'+alto+'">');

for (let i = 1; i <= columna; i++) {
    if (i % 2 == 0) {
        document.write('<td bgcolor = "white" width="' + ancho + '">&nbsp;</td>');
    } else {
        document.write('<td bgcolor = "black" width="' + ancho + '">&nbsp;</td>');
    }
}

document.write('</tr>')
document.write('</table>')