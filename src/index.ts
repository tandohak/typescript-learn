interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "yoon pyo",
    age: 32,
    gender: "male"
}

const sayHi = (person: Human) : string => {
    return `Hi, ${person.name}! you are ${person.age}, you are a ${person.gender}`
}

console.log(sayHi(person));

export {}