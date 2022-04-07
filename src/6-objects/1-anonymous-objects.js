// Objetos anônimos são objetos que não possuem nome.

const person = {
    name: 'Fulano',
    age: 30,
    address: {
        street: 'Rua dos Bobos',
        number: 123
    },
    greet: function () {
        console.log('Olá, meu nome é ' + this.name)
    },
}

// Para acessar os atributos de um objeto, podemos usar o operador de ponto
console.log(person.name) // Fulano
console.log(person.address.street) // Rua dos Bobos

// Para acessar os métodos de um objeto, podemos também usar o operador de ponto
// e chamar o método como se fosse uma função através dos parenteses.
person.greet() // Olá, meu nome é Fulano