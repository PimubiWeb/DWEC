
function saddlepoint(arr)
{
    //sacamos el max de las filas y el min de las columnas
    for(i = 0; i<arr.length;i++)
    {
        for(j=0; j<arr[i].length;j++)
        {
            //console.log(arr[i][j])

            //calculo max de la fila
            max = Math.max(...arr[i]);

            //calculo min de la comlumna
            for(k=0;k<arr[i].length;k++){
                columna = [];
                columna.push(arr[k][j]);
            }
            min = Math.min(...columna);

            //lo imprimo en la consola
            if(arr[i][j]>= max && arr[i][j]<=min)
                console.log(i+", "+j)
        }
    }
}

a = [[1,3,2,7],[1,3,2,8],[1,3,2,9],[1,3,2,7]]
saddlepoint(a);


