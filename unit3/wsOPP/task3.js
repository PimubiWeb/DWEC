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