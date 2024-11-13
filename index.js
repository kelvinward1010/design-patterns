class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    setName(name){
        this.name = name;
    }

    setAge(age){
        this.age = age;
    }
}

class Kelvin extends Person{
    constructor(name, age, height) {
        super(name, age);
        this.height = height;
    }
}

class Kilo extends Kelvin {
    constructor(name, age, height){
        super(name, age, height);
        console.log(name, age, height)
    }
}

const kelvin = new Kilo('Kelvin', 30, 181);
console.log(kelvin)
