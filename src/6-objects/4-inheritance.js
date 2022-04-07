// Herança é a capacidade de criar classes que herdam propriedades e métodos de outras classes.

// Exemplo de herança:

// A classe Person é a classe base.
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log('Olá, meu nome é ' + this.name)
    }
}

// A classe Student herda as propriedades e métodos da classe Person.
// Ou seja, as instâncias de Student também podem usar o método greet()
// mesmo que não tenha sido declarado na classe Student.
class Student extends Person {
    constructor(name, age, school) {
        super(name, age)
        this.school = school
    }
}

const student = new Student('Fulano', 30, 'Udemy')
student.greet() // Olá, meu nome é Fulano

// Na classe Student2, o método greet() foi sobrescrito.
// Ou seja, as instâncias de Student2 não podem usar o método greet()
// da classe Person, mas sim o método greet() da classe Student2.
class Student2 extends Person {
    constructor(name, age, school) {
        super(name, age)
        this.school = school
    }

    greet() {
        console.log('Olá, meu nome é ' + this.name + ' e estou estudando em ' + this.school)
    }
}

const student2 = new Student2('Fulano', 30, 'Udemy')
student2.greet() // Olá, meu nome é Fulano e estou estudando em Udemy

// Na classe Student3, o método greet() foi sobrescrito, mas
// ainda é possível usar o método greet() da classe Person
// dentro do método sobrescrito na classe Student3 com o super.
class Student3 extends Person {
    constructor(name, age, school) {
        super(name, age)
        this.school = school
    }

    greet() {
        super.greet()
        console.log('Estou estudando em ' + this.school)
    }
}

const student3 = new Student3('Fulano', 30, 'Udemy')
student3.greet() // Olá, meu nome é Fulano \n Estou estudando em Udemy