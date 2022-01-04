function sumame(n1,n2,muestra,muestrapordos){

    var sumar = n1+n2;

    muestra(sumar);
    muestrapordos(sumar);
    
    return sumar;
    
}

sumame(
    2,
    3,
    dato => console.log("la suma es:" + dato),
    dato => console.log("la suma por dos es:" + dato*2)
    );
