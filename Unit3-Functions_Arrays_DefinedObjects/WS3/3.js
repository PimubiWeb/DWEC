/*
Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure.
The values in the array are clues.Each cell contains an integer between 11 and 55;
for each value the ten's digit represents the row number and the unit's digit represents the column number of
the cell containing the next clue.Starting in the upper left corner (at 1,1), use the clues to guide your search of the array.
(The first three clues are 11, 34, 42).The treasure is a cell whose value is the same as its coordinates.
Your program must first read in the treasure map data into a 5 by 5 array.
Your program should output the cells it visits during its search, and a message indicating where you found the treasure.
*/

var matriz = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
];

let tesoro = matriz.find(function(valor,indice){
    let i = valor.toString();
    let fila = i[0]
    let columna = i[1]
    //if(fila == indice)

});

//another one

arr = [
    ['34', '21', '32', '41', '25'],
    ['14', '42', '43', '14', '31'],
    ['54', '45', '52', '42', '23'],
    ['33', '15', '51', '31', '35'],
    ['21', '52', '33', '13', '23']
]
celda = arr[0][0];
fila = 0;
columna = 0;
while (parseInt(celda[0]) != parseInt(fila)){ 
    fila = celda[0];
    columna = celda[1];   
    celda = arr[parseInt(fila)-1][parseInt(columna)-1]

}

//document.write(`El tesoro está en ${celda}`);
