//comentario para probar github
class Person {

    constructor(name, age){
        this.name = name;
        this.age = age;
        this.stomach = []
    }
    
    eat(someFood) {
        (this.stomach.length > 10) ? this.stomach : this.stomach.push(someFood); 
    }

    poop(){
        this.stomach.splice(0,this.stomach.length);
    }

    toString(){
        return this.name + ", " + this.age;
    }

    }