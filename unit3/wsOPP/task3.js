class Lambdasian {
    constructor(objDatos) { //le paso objeto JSON
        this.name = objDatos.name;
        this.age = objDatos.age;
        this.location = objDatos.location;
    }

    speak() {
        return `Hello my name is ${this.name} I am from  ${this.location}`
    }
}

datos_alumno = { //objeto JSON que es como los diccionarios en Python ==> clave : valor
    name: "Pablo",
    age: 20,
    location: "IES Ayala"
}

var miLamb = new Lambdasian(datos_alumno); //creo mi objeto lambdasian

document.write("Esta es miLamb: "+ miLamb.name + " "+ miLamb.age + " " + miLamb.location+"\n");

class Instructor extends Lambdasian {
    constructor(objDados) {
        super(objDados.name,objDados.age,objDados.location);
        this.specialty = specialty;
        this.languaje = favLanguaje;
        this.phrase = catchPhrase;
    }

    demo(subject) {
        return`Today we are learning about ${subject}`
    }

    grades(student,subject) {
        return `${student.name} receives a perfect score in ${subject}`
    }
}

datos_instructor = {
    lamb : miLamb,
    specialty : "redux",
    favLanguaje : ["JS","Python","Elm"],
    catchPhrase : "Dont forget the homies"
}