class Human {
    public name: string;
    public gender: string;
    public age: number;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

}

const yoonPyo = new Human("yoon pyo", 23, "male");


const sayHi = (person: Human) : string => {
    return `Hi, ${person.name}! you are ${person.age}, you are a ${person.gender}`
}

console.log(sayHi(yoonPyo));

export {}