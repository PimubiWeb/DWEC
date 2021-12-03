window.onload = () => { 

    window.addEventListener("click",Gato.contarimg)
    class Gato {
        cont = 0;
        constructor(nombre){
            this.tag = document.createElement("img");
            this.tag.src="pika.png";
            this.tag.id ="pika" + cont
            this.nombre = nombre;
            this.click = 0;
            cont++;
        }

        contarimg(){

            this.click++;
            console.log(this.click, this.nombre);
        }
    }

}