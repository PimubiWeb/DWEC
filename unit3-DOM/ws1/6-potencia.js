/* Crea una función para calcular potencias de un modo recursivo. */

function potencia(numero,exponente)
{
    //caso base
    if(exponente==0)
        return 1;
    else
        return numero*potencia(numero,exponente-1);
}