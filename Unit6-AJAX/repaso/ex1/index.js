//crea objeto ajax
a = new XMLHttpRequest();

//define una callback
a.onload = function() {
    //data html
    document.getElementById("ajax").innerHTML = this.responseText
    
}

//enviar una peticion al servidor
a.open("GET","texto.txt");
a.send()