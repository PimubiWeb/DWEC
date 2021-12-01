//ping pong game
import { bola,rectangulo } from './modules/clases.js';

window.onload = () => {
    const svg = document.getElementById("panel");
    const white = "white";
    const tamanoSVG = svg.getBoundingClientRect();

    var bolita = new bola(15,tamanoSVG.width/2,tamanoSVG.height/2,7,7,"white",svg);

    const espacioIzq = bolita.radio;
    const espacioDerecha = tamanoSVG.width - 50; //no se porque pero no pinta bien el ancho si le pongo -bolita.radio
    const espacioAltoMitad = tamanoSVG.height/2;
    const espacioAlto = tamanoSVG.height;
    

    
    var barraP1 = new rectangulo(30,160,espacioIzq,espacioAltoMitad,white,svg);
    var barraP2 = new rectangulo(30,160,espacioDerecha,espacioAltoMitad,white,svg);
    
    let tope = 10;
    while(tope < espacioAlto){
        let mitad = tamanoSVG.width/2;

        var barrita = new rectangulo(20,50,mitad,tope,white,svg)
        
        
        tope += 150;
    }
    
    //for(let i=0;i <= espacioAlto; i++)

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