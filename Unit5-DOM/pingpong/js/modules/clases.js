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
        this.tagCircle.setAttribute("cx", this.x);
        this.tagCircle.setAttribute("cy", this.y);
    }

}

class rectangulo {
    constructor(ancho,alto,posicionX,posicionY,color,svgContenedor) {
        this.ancho = ancho;
        this.alto = alto;
        this.x = posicionX;
        this.y = posicionY;
        this.color = color;

        // Creación del tag
        this.tagRect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.tagRect.setAttribute("fill", this.color);
        this.tagRect.setAttribute("width", this.ancho);
        this.tagRect.setAttribute("height", this.alto);
        this.tagRect.setAttribute("x", this.x);
        this.tagRect.setAttribute("y", this.y);
        svgContenedor.appendChild(this.tagRect);
    }
}
export{bola, rectangulo};