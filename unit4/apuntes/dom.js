function saltaAlert(e){
    //e.stopPropagation();  //esto para la propagacion de eventos
    alert(this);
}

document.getElementById("formulario").onclick = saltaAlert;
document.getElementById("div").onclick = saltaAlert;
document.getElementById("parrafo").onclick = saltaAlert;