function validarMayuscula(frase){ //El parámetro debe contener al menos un carácter en mayúscula
    var regex = new RegExp('[A-Z]+')
    return regex.test(frase)
}

function validarCaracteresEspeciales(frase){ //El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&
    return /[!@#$%^&]+/.test(frase);
}

function validarCorreo(frase){ //El parámetro debe tener el formato correcto de un email
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(frase);
}

function validarTarjetaCredito(frase){ //El parámetro debe tener el formato correcto de una tarjeta de crédito
    return /[0-9]{16}/.test(frase);
}

function validarLongitud(frase){ //El parámetro debe tener al menos 8 caracteres.
    return /.{8}/.test(frase);
}

function validarNumnero(frase){ //El parámetro debe contener al menos un dígito.
    return /[0-9]+/.test(frase)
}