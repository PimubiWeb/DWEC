class Lambdasian {
    constructor(objDatos) { //le paso objeto JSON
        this.name = objDatos.name;
        this.age = objDatos.age;
        this.location = objDatos.location;
    }

    speak() {
        return `Hello my name is ${this.name} I am from ${this.location}`
    }
}

datos_alumno = { //objeto JSON que es como los diccionarios en Python ==> clave : valor
    name : "Pablo",
    age : 20,
    location : "Santa Fe"
}

var miLamb = new Lambdasian(datos_alumno); //creo mi objeto lambdasian

console.log(miLamb.speak());

class Instructor extends Lambdasian {
    constructor(objDatos) {
        super(objDatos.lamb);
        this.specialty = objDatos.specialty;
        this.languaje = objDatos.favLanguaje;
        this.phrase = objDatos.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grades(student,subject){
        return `${student.name} receives a perfect score in ${subject}`;
    }

    afterExam(student){
        student.grade = Math.floor((Math.random() * 101));
    }
}

datos_instructor = {
    lamb: miLamb,
    specialty: "redux",
    favLanguaje: "Python",
    catchPhrase: "Dont forget the homies"
}

miIns = new Instructor(datos_instructor);
console.log(miIns.demo(miIns.languaje));
console.log(miIns.grades(miLamb,miIns.languaje));

class Student extends Lambdasian{
    constructor(datos){
        super(datos.lamb);
        this.previousBackground = datos.previousBackground;
        this.className = datos.className;
        this.favSubject = datos.favSubject;
        this.grade = 70;
    }

    listSubjects(){
        return `Loving ${this.favSubject}`;
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    graduate(){
        if(this.grade >= 70){
            return `${this.name} has graduated with ${this.grade}`;
        }else{
            return `${this.name} has filled with ${this.grade}`;
        }
    }
}

datos_estudiante = {
    lamb: miLamb,
    previousBackground: "Black",
    className: "CS132",
    favSubject: ['HTML', 'CSS', 'JS']
}

miStd = new Student(datos_estudiante);

class ProjectManager extends Instructor{
    constructor(datos){
        super(datos);
        this.gradClassName = datos.gradClassName;
        this.favInstructor = datos.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!"`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name} s code on ${subject}`;
    }
}