// O polimorfismo é o princípio pelo qual duas ou mais classes podem ser
// herdadas de uma mesma classe base e invocar métodos com a mesma assinatura,
// mas comportamentos diferentes.

// Exemplo:

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log('Olá, meu nome é ' + this.name)
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }

    greet() {
        super.greet()
        console.log('Eu estou estudando em ' + this.grade)
    }
}

class Teacher extends Person {
    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary
    }

    greet() {
        super.greet()
        console.log('Eu ganho ' + this.salary)
    }
}