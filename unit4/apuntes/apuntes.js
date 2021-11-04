const btn = document.querySelector('button');
const dv = document.querySelector('div');
const ig = document.querySelector('img');
const h = document.querySelector('h2');
function random(number) {
  return Math.floor(Math.random() * (number+1));
}

/* function cambiafondo() {
  //  alert("ESTA SALTANDO UN ALERT")
   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
   document.body.style.backgroundColor = rndCol;
} */

function cambiafondo(e) {
  //  alert("ESTA SALTANDO UN ALERT")
   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
   e.target.style.backgroundColor = rndCol;
}

//btn.onclick = cambiafondo(); esto lo que hace es llamar a la funcion y irse, es decir, no hace la funcionalidad que queremos porque es como en el setinterval si le pones parentesis js interpreta que la quieres llamar 
//y no hacerle una referencia que es lo que queremos y para eso se le quita el parentesis:
//btn.onclick = cambiafondo;
dv.onclick = cambiafondo;
ig.onclick = cambiafondo;
h.onclick = cambiafondo;

btn.addEventListener("click",cambiafondo); //la manera mas moderna en js de hacer events
btn.addEventListener("focus",cambiafondo); //cuando pasa por el button tabulando ejecuta cambia fondo