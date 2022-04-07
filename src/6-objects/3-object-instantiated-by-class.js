// Outra forma de criar objetos é através de uma classe.
// A classe também possibilita definir um formato padrão para os objetos que serão criados.

class Person {
    // O construtor é um método que é executado quando um objeto é criado.
    // O construtor não pode ser chamado diretamente,
    // apenas através do operador new.
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log('Olá, meu nome é ' + this.name)
    }
}

// Para criar uma instância de uma classe, usamos o operador new.
const person1 = new Person('Fulano', 30)
const person2 = new Person('Beltrano', 40)

// Para acessar os atributos de um objeto, podemos usar o operador de ponto
console.log(person1.name) // Fulano
console.log(person2.name) // Beltrano

// Para acessar os métodos de um objeto, podemos também usar o operador de ponto
// e chamar o método como se fosse uma função através dos parenteses.
person1.greet() // Olá, meu nome é Fulano
person2.greet() // Olá, meu nome é Beltrano