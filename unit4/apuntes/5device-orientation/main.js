window.addEventListener('deviceorientation',trataOrientacion);

function trataOrientacion(e)
{
    console.log(e.alpha);
    document.getElementById('miimagen').style.transform = 'rotateX('+e.alpha+'deg) rotateY('+e.beta+'deg)';
}