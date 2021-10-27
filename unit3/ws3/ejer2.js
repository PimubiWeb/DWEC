/*
Over an array with names, find all entries whose firstname starts with 'J',
create projection combined of only the initials of the name and then sort alphabetically
*/

let nombres=['Ana','Javi','Fernando','Antonio','Alonsfo'];

let backUp_Nombres = nombres.slice()

let encontrar_jota = nombres.find(nombre => nombre[0] == 'J');


nuevos_nombres = []
nombres.forEach(nombre => nuevos_nombres.push(encontrar_jota));



//otra manera
arr = ['Juan', 'José', 'Paco', 'David', 'Javi', 'Aarón'];
llevaJ = [];

arr.forEach(element => {
    if (element[0] == 'J') {
        llevaJ.push(element);
    }
});
console.log(llevaJ);