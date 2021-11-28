window.onload = () => {
    document.getElementById("crearImg").addEventListener("click",creaImagen);
    document.getElementById("crearLi").addEventListener("click",crearLi);


    }   

    function borraEntrada(e) {
        document.getElementById("lista").removeChild(e.target);
    }


    function creaImagen () {
        let imagenNueva = document.createElement("img");
        imagenNueva.src = "pika.png";
        imagenNueva.style.border = '1px solid black';
        imagenNueva.style.height = '100px';
        imagenNueva.style.width = '100px';
        imagenNueva.addEventListener("click",borraImg);
        document.body.appendChild(imagenNueva);
    }

    function borraImg (event) {
        document.body.removeChild(event.target)
        console.log("borrado")
    }

    function crearLi() {
        let nuevaEntrada = document.createElement("li");
        let texto = document.getElementById("textoLi").value;
        document.getElementById("textoLi").value = "";
        nuevaEntrada.innerHTML = texto;
        nuevaEntrada.addEventListener("click",borraEntrada)
        nuevaEntrada.id = "entradaLi" + numeroLi;
        numeroLi++;

        document.querySelector("#lista").appendChild(nuevaEntrada);
    }


    var numeroLi = 1;