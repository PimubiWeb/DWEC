/*
Crea una página web con un botón, que haciendo uso de AJAX al pulsarlo se llame a
otra página del servidor y se muestre su contenido.
*/

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
    }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

function loadPage() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {

        if(this.readyState === 4 && this.status === 200){
            
        }
    }

    xhttp.open("GET","otherpage.html",true);
    xhttp.send();
}