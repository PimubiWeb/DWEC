window.onload = () => {
    document.getElementById("crear").addEventListener("click",crear_cookie);
    document.getElementById("borrar").onclick=borrar_cookie; //distinta sintaxis pero hace lo mismo
    //addEventListener("click",borrar_cookie);
    document.getElementById("mostrar").addEventListener("click",mostrar_cookie);

    function crear_cookie(){
        document.cookie = "usuario=pablito";
    }

    function borrar_cookie(){
        document.cookie = "usuario=pablito; max-age=0";
    }

    function mostrar_cookie(){
        console.log(document.cookie);
    }
    
}