/*
9. Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
el botón).

10. Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes
*/


function main(){

    document.write('<img width="450" height="300" src="pika.png" draggable="true" style="position: fixed;">');
    document.write('<img width="100" height="100" src="pika.png" draggable="true" style="position: fixed;">');

    window.addEventListener("dragend", (e) =>{
        let img = e.target;//document.querySelector("img");
        img.style.left = e.clientX - (img.width / 2);
        img.style.top = e.clientY - (img.height / 2);
    });
}
window.addEventListener("load", main);
//me ayudo Fernando