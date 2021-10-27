//ej3 hasta que el ususario se quiera ir.

var cateto1 = cateto1 = prompt(parseInt("cateto 1: "));

while (cateto1 != -1){
    let cateto2 = prompt(parseInt("cateto 2: "));

    var hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + (Math.pow(cateto2, 2)));

    console.log(hipotenusa);
}

var cateto1 = prompt(parseInt("cateto 1: "));