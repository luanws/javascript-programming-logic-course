// Existem 3 maneiras de declarar funções em JavaScript
// função, função arrow e função anônima

// função
function sumFunction(a, b) {
    return a + b
}

// função arrow
const sumArrowFunction = (a, b) => a + b

// função anônima
const sumAnonymousFunction = function (a, b) {
    return a + b
}

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
console.log(person.sayName()) // João