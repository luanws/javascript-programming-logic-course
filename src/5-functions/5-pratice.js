// Recrie a função map que recebe um array e uma função de callback,
// e retorna um novo array com os resultados das chamadas da função de callback.

// Exemplo:
[1, 2, 3].map(x => x * 2) // [2, 4, 6]

// Crie uma função customMap e adicione ao seu objeto Array.prototype
// através do prototype.
// Array.prototype.customMap = customMap

function customMap(callback) {
    // Implementar essa função
}

Array.prototype.customMap = customMap

const array = [1, 2, 3]
const x = array.customMap(x => x * 2)
console.log(x) // [2, 4, 6]