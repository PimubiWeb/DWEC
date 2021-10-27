/*
Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.
*/

function aleatorio()
{
    return Math.floor(Math.random() * 6 +1);
}

function lanzamiento()
{
    dados=[aleatorio(),aleatorio()]
    return dados[0]+dados[1]
}


//puntuacion
numeros_veces=[dos=0,tres=0,cuatro=0,cinco=0,seis=0,siete=0,ocho=0,nueve=0,diez=0,once=0,doce=0]

//casos
for(i=0;i<36000;i++)
{
    switch(lanzamiento()){
        case 2:
            dos += 1;
        break;
        case 3:
            tres += 1;
        break;
        case 4:
            cuatro += 1;
        break;
        case 5:
            cinco += 1;
        break;
        case 6:
            seis += 1;
        break;
        case 7:
            siete += 1;
        break;
        case 8:
            ocho += 1;
        break;
        case 9:
            nueve += 1;
        break;
        case 10:
            diez += 1;
        break;
        case 11:
            once += 1;
        break;
        case 12:
            doce += 1;
        break;
        default:
            imprime = "Algo ha ido mal";
        break;
    }
    console.log(dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce);
}