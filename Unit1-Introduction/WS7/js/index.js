'use strict'

function suma(...arrayParametros){
    let result=0;
    for(let num of arrayParametros)
        result+=num;

    return result;
}

let misuma = suma(4,9,10)

console.log(misuma)