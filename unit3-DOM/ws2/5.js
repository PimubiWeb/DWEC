/*
Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array.
*/

function aleatorio() {return Math.floor(Math.random() * 1000 + 1);}

function paresImpares(){
    var numeros = [];
    let i = 0;
    while(i<100){
        numeros.push(aleatorio());
        i++;
    }
    console.log(numeros);
    numeros.sort((impar)=>{
        if(impar%2 === 0)
            return 1;
        if(impar%2 != 0)
            return -1;
        //igual
        return 0;
    });
    console.log(numeros);
    return numeros;
}