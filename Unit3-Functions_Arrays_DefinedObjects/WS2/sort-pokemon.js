/*
crear objeto pokemon
nombre: pikachu, tipo: electrico, salud: 100, ataque:100, velocidad:100
*/
function aleatorio() {
    return Math.floor(Math.random() * 100 + 1);
}


var pokemon =  [
    { nombre: "pikachu", salud: aleatorio(), tipo: "electrico", ataque: aleatorio(), velocidad: aleatorio() },
    { nombre: "piplup", salud: aleatorio(), tipo: "agua", ataque: aleatorio(), velocidad: aleatorio() },
    { nombre: "charmander", salud: aleatorio(), tipo: "fuego", ataque: aleatorio(), velocidad: 100 },
    { nombre: "bulbasaur", salud: aleatorio(), tipo: "planta", ataque: aleatorio(), velocidad: aleatorio() },
    { nombre: "pikachu", salud: aleatorio(), tipo: "electrico", ataque: aleatorio(), velocidad: 100 },
    { nombre: "aaa", salud: aleatorio(), tipo: "electrico", ataque: aleatorio(), velocidad: 100 },
];

pokemon.sort((a, b) => { return b.velocidad - a.velocidad}); //ordeno la velocidad de mayor a menor
console.log(pokemon);

pokemon.sort((a,b)=>{
    var Anombre = a.nombre.toUpperCase
    var Bnombre = b.nombre.toUpperCase
    if(Anombre > Bnombre)
        return 1;
    if(Anombre < Bnombre)
        return -1;
    
    return 0;
})
console.log(pokemon)