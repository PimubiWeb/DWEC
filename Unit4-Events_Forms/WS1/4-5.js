/*
4. Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.

5. Añade las siguientes funcionalidades al ejercicio anterior:
◦ Borrado de lineas con el ratón (mediante la pulsación del botón que tú
decidas)
◦ Borrar por completo el canvas (con un botón).

*/


function main(){
    document.write('<table style="border:solid 1px black;">');  //creacion de la tabla
    for(let i = 0 ; i < 21 ; i++){
        document.write('<tr>');
        for(let j = 0 ; j < 45 ; j++){
            document.write('<td width=30 height=30></td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

    document.addEventListener("mouseover", (e)=>{   //evento que detecta un mouseover
        if(e.target.tagName == "TD"){   //actua solo para los td
            if(e.ctrlKey && e.shiftKey){
                e.target.style.backgroundColor = "purple";
            }else if(e.ctrlKey){
                e.target.style.backgroundColor = "blue";
            }else if(e.shiftKey){
                e.target.style.backgroundColor = "red";
            }else if(e.altKey){
                e.target.style.backgroundColor = "white";
            }
        }
    });

    document.addEventListener("keypress", (e)=>{ //evento que detecta la entrada de teclado
        if(e.key == 'e'){
            celdas = document.querySelectorAll("td");
            celdas.forEach(element => {
                element.style.backgroundColor = "white";
            });
        }
    });
}

window.addEventListener("load", main);
//lo hice con mi compañero Fernando