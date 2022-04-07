// Se precisarmos de vários objetos do mesmo formato,
// podemos criar uma função que retorna um objeto.

function createPerson(name, age) {
    return {
        name,
        age,
        greet: function () {
            console.log('Olá, meu nome é ' + this.name)
        }
    }
}

const person1 = createPerson('Fulano', 30)
const person2 = createPerson('Beltrano', 40)

// Para acessar os atributos de um objeto, podemos usar o operador de ponto
console.log(person1.name) // Fulano
console.log(person2.name) // Beltrano

// Para acessar os métodos de um objeto, podemos também usar o operador de ponto
// e chamar o método como se fosse uma função através dos parenteses.
person1.greet() // Olá, meu nome é Fulano
person2.greet() // Olá, meu nome é Beltrano