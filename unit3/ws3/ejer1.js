/*
Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):

find largest number
find longest string
find even numbers
find odd numbers
find words that contain 'is'
assert all numbers are divisible by three
zip two arrays together
sort joined array from smallest to largest
remove the first word in the array
place a new word at the start of the array
replace some elements
*/

//find largest number
let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];

let maxNota = arrayNotas.reduce((max,nota) => nota > max ? nota : max);

arrayNotas.reduce((n,m) => Math.max(n,m), -Number.POSITIVE_INFINITY);

Math.max.apply(null, arrayNotas);


//find longest string
let arrayString=['hola','adios','Bien','Mal','PepeisTonto']

var longest = arrayString.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);

//find even numbers
var arrayNotas_pares =[];
for (let i = 0; i < arrayNotas.length; i++) {
    if(i % 2 === 0) { // index is even
        arrayNotas_pares.push(arrayNotas[i]);
    }
}

//find odd numbers
var arrayNotas_impares =[];
for (let i = 0; i < arrayNotas.length; i++) {
    if(i % 2 === 1) { // index is odd
        arrayNotas.push(arrayNotas_impares[i]);
    }
}

//find words that contain 'is'
var array_is = arrayString.filter(function(palabra){
    if(palabra.search('is') >= 0){
        return true;
    }
    else {
        return false;
    }
});

var array_is = arrayString.filter;

var pepe = arrayString.indexOf("is");

//zip two arrays together

let concat_array = arrayString.concat(arrayNotas);


//sort joined array from smallest to largest

arrayNotas.sort((a,b)=> a-b);

//remove the first word in the array

arrayNotas.shift();

//place a new word at the start of the array

arrayNotas.unshift('Va perfecto');

//replace some elements

arrayNotas.splice(0,1,"Splicee");