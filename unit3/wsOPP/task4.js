class Lambdasian {
    constructor(name, age, localitation) { 
        this.name = name;
        this.age = age;
        this.localitation = localitation;
    }

    speak() {
        return `Hello my name is ${this.name} I am from  ${this.localitation}`
    }
}

class Instructor extends Lambdasian {
    constructor(name,age,localitation,specialty,favLanguaje,catchPhrase) {
        super(name,age,localitation);
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

s = new Lambdasian('pablo',20,'Santa Fe');
i = new Instructor('jose',37,'js','english','js is my passion');
