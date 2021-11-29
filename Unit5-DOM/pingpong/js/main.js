//ping pong game

import{bola} from './modules/bola.js';

window.onload = () => {
    const svg = document.getElementById("panel");
    var bolita = new bola(30,100,100,10,10,"red",svg);
    
     var tamanoSVG = svg.getBoundingClientRect();
    bolita.mueve(tamanoSVG.width, tamanoSVG.height)
    setInterval(() => {
        bolita.mueve(tamanoSVG.width, tamanoSVG.height);
        bolita.dibuja();
    }
    ,10); 
    /* elId = window.requestAnimationFrame(loop);

    function loop()
    {
        tamanoSVG = svg.getBoundingClientRect();
        bolita.mueve(tamanoSVG.width, tamanoSVG.height);
        bolita.dibuja();
        elId = window.requestAnimationFrame(loop);
    } */
    
}