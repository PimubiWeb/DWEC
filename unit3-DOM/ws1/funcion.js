//declaracion de una funcion
function prueba()
{
    a=prompt("escribe algo");
    return a;
}
//prueba();


function comprueba_edad(edad = 45)
{
    if (edad>=18)
        return true;
    else
        return false;
}

//asginando funcion anonima a una variable (es anonima porque function no tiene nombre)
let a = function(valor){
    return valor*3;
}
b = a;

/*
edad = prompt("edad: ")
if(comprueba_edad(parseInt(edad)))
    console.log("Puedes entrar")
*/

//setInterval imprime a cada 1000 
//setInterval(function(){console.log("a")},1000)

//funcion anonima se puede escribir asi: 
//funcion arrow

//setInterval(()=>console.log("a"),1000);

class persona
{
    constructor(name)
    {
        this.nombre = name;
    }

    despierta()
    {
        setInterval(function(){console.log("Despiertaa "+this.nombre), 1000})
    }
}

pabloo = new persona("pablo")

//funciones recursivas

function factorial(n)
{
    //caso base
    if(n==0)
        return 1;
    else
        return n*factorial(n-1);
}

function fact(n)
{
    if(n>0)
        //caso base
        if(n==0)
            return 1;
        else
            return n*fact(n-1);
    else(n<0)
        //otra vez el caso base
        if(n==0)
            return 1;
        else
            return n*fact(n+1);
}
