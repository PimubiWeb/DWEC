

function addOnlyNums(...array){
    let result = 0;
    for(let num of array){
        if(typeof num == 'number')
            result += num
    }
    return result
}

let misuma = addOnlyNums(4,5,'cat',5)

console.log(misuma)