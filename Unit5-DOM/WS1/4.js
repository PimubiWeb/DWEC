document.getElementById("entrada").addEventListener("click",nuevaLi);

function nuevaLi(){
    //seleccionamos la lista por su id
    let lista = document.querySelector("#lista");
    //creamos una nueva li
    let nuevaEntrada = document.createElement("li");
    //le escribimos un texto a la nueva lista
    let texto = "nueva entrada";
    nuevaEntrada.innerHTML = "nueva entrada";
    //metemos dentro en la ul
    lista.appendChild(nuevaEntrada);
}