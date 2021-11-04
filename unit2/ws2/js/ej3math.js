//programa que te da la hipotenusa

var cateto1 = prompt(parseInt("cateto 1: "));

var cateto2 = prompt(parseInt("cateto 2: "));

var hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + (Math.pow(cateto2, 2)));

console.log(hipotenusa);