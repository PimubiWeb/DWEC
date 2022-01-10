let parrafo = $('div p').css("font-size","20px");

var titulo = $('div h2')
for(i=0;i<titulo.length;i++){
    let mititulo= $('div h2').eq(i).click(function(){
        alert('pelele');
    })
}