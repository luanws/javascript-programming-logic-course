// O encapsulamento é o processo de restringir o acesso aos
// atributos e métodos de um objeto.

// O encapsulamento não exite em JavaScript,
// mas é possível implementá-lo através de funções.

// Exemplo:
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log('Olá, meu nome é ' + this.name)
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }
}
