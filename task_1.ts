enum Gender {
    MALE = "Мужчина",
    FEMALE = "Женщина"
}

interface Person {
    name: string,
    age: number,
    hobbies: string[],
    genser: Gender
}

function personToString(person: Person): string {
    return `${person.name}, ${person.age} лет, любит: ${person.hobbies.join(", ")}. Пол: ${person.genser}`
}


// test
const test: Person = {
    name: "test",
    age: 10,
    hobbies: ["test1", "test2"],
    genser: Gender.MALE
}

console.log(personToString(test))