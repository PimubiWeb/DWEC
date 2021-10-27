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

arr_favSubject =['HTML','CSS','JS'];

class Student extends Lambdasian {
    constructor(name, age, localitation, previousBackground,classname,favSubjects){
        super(name,age,localitation);
        this.ground = previousBackground;
        this.classname = classname;
        this.favSubjects = favSubjects;
    }

    listSubject(){
        return `loving ${arr_favSubject}`
    }
    
}

