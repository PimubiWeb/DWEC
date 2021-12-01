//ping pong game
import { bola,barra } from './modules/clases.js';

window.onload = () => {

    //CONSTANT
    const svg = document.getElementById("panel");
    const white = "white";
    const tamanoSVG = svg.getBoundingClientRect();
    const X = tamanoSVG.width;
    const Y = tamanoSVG.height;
    const vel = 7;

    //BALL
    var bolita = new bola(15,X/2,Y/2,vel,vel,"white",svg);
    
    //PADDLES
    //dimensions
    let margen = bolita.radio*2; //30
    const margenIzq = margen;
    const margenDer = tamanoSVG.width - 2*margen;
    const mitadY = tamanoSVG.height/2;
    
    //creating paddles
    var barraP1 = new barra(30,160,margenIzq,mitadY,white,svg);
    var barraP2 = new barra(30,160,margenDer,mitadY,white,svg);

    //NET
    let espaciado = 5;
    while(espaciado < Y){
        let mitad = tamanoSVG.width/2; //cogo la posicion de la mitad respecto al eje x del svg para crear las lineas justo en el 
        var barrita = new barra(20,50,X/2,espaciado,white,svg)
        espaciado += 100;
    }


    function render(){
        setInterval(() => {
            bolita.mueve(X,Y);
            bolita.colisiona(barraP2);
            bolita.dibuja();
        }
        ,10)
    }
    render();
}