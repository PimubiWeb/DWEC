function lanzamiento()
{
    return Math.floor(Math.random() * 6 +1);
}

console.log(lanzamiento());
i=0;
numeros=[uno=0,dos=0,tres=0,cuatro=0,cinco=0,seis=0];
while(i<6000)
{
    switch(lanzamiento()){
        case 1:
            uno += 1;
        break;
        case 2:
            dos += 1;
        break;
        case 3:
            tres += 1;
        break;
        case 4:
            cuatro += 1;
        break;
        case 5:
            cinco += 1;
        break;
        case 6:
            seis += 1;
        break;
        default:
            imprime = "Algo ha ido mal";
        break;
    }
    i++;
    console.log(uno, dos, tres, cuatro, cinco, seis);
}