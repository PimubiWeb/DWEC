/*
Crea una página web con al menos tres párrafos de texto y dentro de ellos un númeroindeterminado
 de enlaces (al menos uno debe enlazar a google). Haciendo tan sólo uso del DOM muestra los siguientes datos:
 •Número de enlaces de la página 
 •Dirección a la que enlaza el penúltimo enlace
 •Numero de enlaces que enlazan a google
 •Número de enlaces del tercer párrafo
*/

window.onload = () => {
    
    a = document.getElementsByTagName("a").length
    console.log(a)
}