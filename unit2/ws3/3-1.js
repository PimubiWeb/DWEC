/*
1. Crea las siguientes funciones y llamalas desde una pagina XHTML para mostrar para
su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
*/

function invierteCadena(cad_arg){
    //funcion que invierte un string

    //split() separa cada caracter de la cadena y lo convierte en un array
    //reverse() tomara esa lista e invierte los elementos dentro de ella
    //join() unira los caracteres
    return cad_arg.split("").reverse().join("");
}

var nombre_invertido = invierteCadena("hola me llamo pablo");
console.log(nombre_invertido);

//b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la cadena.