'use strict'

var numero_adivinar = prompt("Introduce el número a adivinar: ");
num = prompt("Introduce un número: ");

while (num != numero_adivinar) {
    if (num < numero_adivinar) {
        alert("El número es mayor.");
        num = prompt("Introduce un número: ");
    } else if (num > numero_adivinar) {
        alert("El número es menor.");
        num = prompt("Introduce un número: ");
    }
}
alert("Lo has adivinado.");