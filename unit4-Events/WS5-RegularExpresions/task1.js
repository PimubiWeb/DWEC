function validarMayuscula(frase){
    var reg = new RegExp('[A-Z]+')

    if(frase.match(reg)){
        return true;
    }else{
        return false;
    }
}

function validarCaracteresEspeciales(frase){
    regex = Pattern.compile("[^A-Za-z0-9]");

    if(frase.match(regex)){
        return true;
    }else{
        return false;
    }
}