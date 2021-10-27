class Lambdasian {
    constructor(objDatos) { 
        this.name = objDatos.name;
        this.age = objDatos.age;
        this.location = objDatos.location;
    }

    speak() {
        return `Hello my name is ${this.name} I am from  ${this.location}`
    }
}

datos = {
    name: "Pablo",
    age: 20,
    location: "IES Ayala"
}


var miLamb = new Lambdasian(datos);
document.write(miLamb.name + " "+ miLamb.age + " " + miLamb.location);