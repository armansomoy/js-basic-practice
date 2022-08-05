const student = {
    name: "Shakib All Hasan",
    job: "crickter"
};

// object constructor 
const person = new Object()

// 
const human = Object.create(student)
console.log(human.job);


// class 
class People {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}

const peop = new People("manus", 12, "student");
console.log(peop);

class Heros {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const heros = new Heros("arman", 22);
console.log(heros);

function Manush(name) {
    this.name = name;
}

const man = new Manush("kader");
console.log(man);