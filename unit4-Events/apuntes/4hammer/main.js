function main(){
    let nunimg = 1;
    let src = nunimg + '.jpg';
    body = document.querySelector('body');
    var hummertime = new Hammer(body);

    body.appendChild(document.createElement('img'));
    document.querySelector('img').src = src;

    hummertime.on('panend', (e)=>{
        if(e.direction == 2){
            if(numimg <3){
                numimg++;
                src = nunimg + '.jpg';
                body.appendChild(document.createElement('img'));
            }else{
                numimg = 1;
                src = nunimg + '.jpg';
                document.querySelector('img').src = src;
            }
        }
    });
    


}

window.addEventListener("load",main);