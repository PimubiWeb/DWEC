columna = prompt("Introduce un número de columnas: ");
alto = prompt("Introduce la altura en pixeles: ");
ancho = prompt("Introduce la anchura en pixeles: ");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor = "white" height = "' + altura + '">');

do {
    if (contador % 2 == 0) {
        document.write('<td bgcolor = "white" width="' + ancho + '">&nbsp;</td>');
    } else {
        document.write('<td bgcolor = "black" width="' + ancho + '">&nbsp;</td>');
    }
    columna--;
} while (columna != 0);


document.write("</tr>");
document.write("</table>");