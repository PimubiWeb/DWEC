/*
Diseña una web que hará uso de cookies para guardar el nombre del usuario. 
En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre del usuario y 
almacenarlo en una cookie que caducará en 5 minutos. Tras esto saludará al usuario mediante un mensaje en pantalla.
En caso de tener ya creada la cookie deberá leerla y mostrar el mensaje anterior directamente.
Deberá proporcionar también un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').
Nota: Asegúrate de que tu cookie acepta todo tipo de caracteres (como ñ, espacio en blanco, acentos, etc....)
*/

window.onload = () => {
    document.getElementById("borrar").addEventListener("click",borrar_cookie);
    nombre = crear_cookie();

    //saludo al usuario

    function crear_cookie(){
        console.log('yeii');
        if(document.cookie == ''){ //si no hay cookie le pido un nombre
            cookie = prompt('introduce tu nombre jefe: ')
            //creo la cookie
            document.cookie = `usuario=${cookie}; max-age= 300`;
            
        }
        else{ //si esta creada pues la recojo y yasta picha
            cookie = document.cookie
        }
        return cookie;
        
    }

    function borrar_cookie(){
        document.cookie = `${nombre}; max-age=0`;
    }
}