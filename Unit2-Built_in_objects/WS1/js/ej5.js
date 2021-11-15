var segundos = 60;
for(let i=segundos,j=0; i>0; i--,j++)
    setTimeout(muestraSeg, j*1000);

function muestraSeg(){
    document.write(segundos--);
    document.write("<br>");

    if(segundos>=0)
    setTimeout(muestraSeg, 1000);
}


function clock(){
    let horaActual = new Date();
    document.body.innerHTML=''};