//FOR NORMAL

for (let i=0; i<10; i++)
{
        for(let j=0; j<5; j++)
        {
            console.log(i*j)
        }
    console.log(i)
}



salir = false;
for (let i=8; i<10 && !salir; i++){
    console.log(i)
    if(prompt("deseas continuar?") == "N")
    {
        salir = True;
    }
}

//FOR IN
function dump_props(obj, obj_name) {
    let result = '';
    for (let i in obj) {
      result += obj_name + '.' + i + ' = ' + obj[i] + '<br>';
    }
    result += '<hr>';
    return result;
  }

  const arr = [3, 5, 7];
  arr.foo = 'hola';
  

  //FOR OF
  for (let i in arr) {
     console.log(i); // logs "0", "1", "2", "foo"
  }
  
  for (let i of arr) {
     console.log(i); // logs 3, 5, 7
  }
  
