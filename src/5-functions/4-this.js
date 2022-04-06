// Existem diferenças entre funções e funções arrow
// O this não é definido em funções arrow
// Mas é definido em funções

// Exemplo
const person = {
    name: 'João',
    age: 20,
    sayName: function () {
        console.log(this.name)
    },
}
person.sayName() // João