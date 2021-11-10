/*
Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.
*/

miarray = [1,1,1,1,1,1,1,1,1,1];

function establecer_array(a){ 
    //a es una array
    i=0;
    for(i=0; i<10; i++){
        a[i]=0;
    }
    return a;
}

function sumar_uno(a){ 
    //a es una array
    i=0;
    for(i=0; i<10; i++){
        a[i]+=1;
    }
    return a;
}

function mostrar_array(a){
    let texto = '';
    for (const i of a) {
        texto += ' '+i+' ';
    }
    console.log(texto);
}