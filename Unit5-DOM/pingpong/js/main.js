//ping pong game

//creamos la bola
class bola
{
    constructor(radio, posicionX, posicionY, velocidadX, velocidadY, color, svgContenedor) {
        this.x = posicionX;
        this.y = posicionY;
        this.color = color;
        this.radio = radio;
        this.vX = velocidadX;
        this.vY = velocidadY;

        // Creación del tag
        this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.tagCircle.setAttribute("fill", this.color);
        this.tagCircle.setAttribute("cx", this.x);
        this.tagCircle.setAttribute("cy", this.y);
        this.tagCircle.setAttribute("r", this.radio);
        svgContenedor.appendChild(this.tagCircle);
    }

    mueve(anchoContenedor, altoContenedor)
    {
        this.posAnteriorX = this.x;
        this.posAnteriorY = this.y;

        this.x += this.vX;
        this.y += this.vY;    
        
        // Comprobamos ahora si está fuera de los límites
        // Eje X
        if (this.x-this.radio<=0 || this.x+this.radio >= anchoContenedor )
        {
            this.vX *= -1;
            this.x  = (this.x-this.radio<=0) ? this.radio: anchoContenedor-this.radio;
        }
        
        // Eje Y
        if (this.y-this.radio <=0 || this.y+this.radio >= altoContenedor )
        {
            this.vY *= -1;
            this.y  = (this.y-this.radio<=0) ? this.radio: altoContenedor-this.radio;
        }
    }

    dibuja()
    {
        this.tagCircle.setAttributeNS(null, "cx", this.x);
        this.tagCircle.setAttributeNS(null, "cy", this.y);
    }




}

window.onload = () => {
    const svg = document.getElementById("panel");
    var bolita = new bola(30,100,100,10,10,"red",svg);
    
    //setInterval(bolita.mueve(tamanoSVG.width, tamanoSVG.height,30));
    elId = window.requestAnimationFrame(loop);

    function loop()
    {
        tamanoSVG = svg.getBoundingClientRect();
        bolita.mueve(tamanoSVG.width, tamanoSVG.height);
        bolita.dibuja();
        
        elId = window.requestAnimationFrame(loop);
    }

}