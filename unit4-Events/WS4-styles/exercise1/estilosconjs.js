"tema normal"

document.getElementById("1").style.backgroundColor = "skyblue";
document.getElementById("1").style.fontWeight = "bold";
document.getElementById("1").style.border = "1px solid black";

document.body.style.background = "#FFFFE0";
document.getElementById("marco").style.backgroundColor = "yellow";
document.getElementById("marco").style.border = "1px solid black";

newp = document.createElement("p");
contentp = document.createTextNode("hola q ase");
newp.appendChild(newContent);

var currentpar = document.getElementById("2");
document.body.insertBefore(newp, currentpar);