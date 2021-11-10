/*
Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays
bidimensionales).
*/

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
numeros_veces=[dos=[],tres=[],cuatro=[],cinco=[],seis=[],siete=[],ocho=[],nueve=[],diez=[],once=[],doce=[]]

//casos
for(i=0;i<60;i++)
{
    switch(lanzamiento()){
        case 2:
            dos.push([dados[0],dados[1],dados[0]+dados[1]]);
        break;
        case 3:
            tres.push([dados[0],dados[1],dados[0]+dados[1]]);
        break;
        case 4:
            cuatro.push([dados[0],dados[1],dados[0]+dados[1]]);
        break;
        case 5:
            cinco.push([dados[0],dados[1],dados[0]+dados[1]]);
        break;
        case 6:
            seis.push([dados[0],dados[1],dados[0]+dados[1]]);
        break;
        case 7:
            siete.push([dados[0],dados[1],dados[0]+dados[1]]);
        break;
        case 8:
            ocho.push([dados[0],dados[1],dados[0]+dados[1]]);
        break;
        case 9:
            nueve.push([dados[0],dados[1],dados[0]+dados[1]]);
        break;
        case 10:
            diez.push([dados[0],dados[1],dados[0]+dados[1]]);
        break;
        case 11:
            once.push([dados[0],dados[1],dados[0]+dados[1]]);
        break;
        case 12:
            doce.push([dados[0],dados[1],dados[0]+dados[1]]);
        break;
        default:
            imprime = "Algo ha ido mal";
        break;
    }
}
console.log(numeros_veces)