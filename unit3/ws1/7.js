/*
Crea una función que calcule el factorial de un número dado. Para comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.
*/
 
function factorial(n)
{
    //caso base
    if(n==0)
        return 1;
    else
        return n*factorial(n-1);
}

while(i<10)
{
    document.write("<td><tr>"+i+"</tr><tr>"+factorial(i)+"</tr></td>")
}

