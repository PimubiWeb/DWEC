/*
Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.
*/

function main(){

    document.write('<table border="solid 1px">');
    
    for(i=0;i<100;i++){
        document.write('<tr>')
        for(j=0;j<100;j++){
            document.write('<td onmousemouve=colorear></td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

}

window.addEventListener("load",main)