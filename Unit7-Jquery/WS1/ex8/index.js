$(document).ready(function(){


    let parrafo = $('div p').css("font-size","15px");

    var titulo = $('div h2');

    for(i=0;i<titulo.length;i++){
        let p = $('div p').eq(i);
        titulo.eq(i).click(function(){
            if(p.is(':hidden')){
                p.show();
            }else{
                p.hide();
            }
        });
        p
        .mouseover(function(){
            p.css("background-color","#FF0000");
        })
        .mouseout(function(){
            p.css("background-color","white");
        })
//         $( "div.overout" )
//   .mouseover(function() {
//     i += 1;
//     $( this ).find( "span" ).text( "mouse over x " + i );
//   })
//   .mouseout(function() {
//     $( this ).find( "span" ).text( "mouse out " );
//   });
    }
});

