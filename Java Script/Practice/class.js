class Student  {
    #name 
    #age
    constructor(name , age ) {
        this.#name = name ; 
        this.#age = age ;        
    }
    getName() {
        return this.#name ; 
    }

    setName (newName) {
        this.#name = newName
    }
    

}


// undertstnding Inheritance 

class Animal {
    constructor() {}

    makeSound() {
        console.log("I am Animal")
    }
};

class Dog extends Animal {
    constructor() {
        super()
    }
    makeSound() {
        console.log("I am Dog")
    }
}

const myDog = new Dog() ;

Animal.prototype.makeSound.call(myDog);




