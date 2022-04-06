// Arrays em JavaScript são objetos e podem ser manipulados como se fossem arrays.
// Isso significa que você pode acessar os elementos de um array como se fosse uma matriz
// e também pode acessar os métodos de um array como se fosse um objeto.

// Existem várias maneiras de declarar arrays em JavaScript:

// Com colchetes
const array = [1, 2, 3, 4, 5]

// Com o construtor Array
const array2 = new Array(1, 2, 3, 4, 5)

// Com o método Array.of
const array3 = Array.of(1, 2, 3, 4, 5)

// Com o método Array.from
const array4 = Array.from([1, 2, 3, 4, 5])

// Caso de uso de Array.from
Array.from('teste') // ['t', 'e', 's', 't', 'e']

// Para acessar os elementos de um array, você pode usar os índices.

// Para acessar o primeiro elemento, você pode usar o índice 0.
const firstElement = array[0]

// Para acessar o último elemento, você pode usar o índice length - 1.
const lastElement = array[array.length - 1]

// Métodos importantes de um array

// length - Retorna o tamanho do array
array.length // 5

// push - Adiciona um elemento no final do array
array.push(6) // 6
console.log(array) // [1, 2, 3, 4, 5, 6]

// pop - Remove o último elemento do array
array.pop() // 6
console.log(array) // [1, 2, 3, 4, 5]

// unshift - Adiciona um elemento no início do array
array.unshift(0) // 6
console.log(array) // [0, 1, 2, 3, 4, 5]

// shift - Remove o primeiro elemento do array
array.shift() // 0
console.log(array) // [1, 2, 3, 4, 5]

// indexOf - Retorna o índice do elemento passado como parâmetro
array.indexOf(2) // 1

// lastIndexOf - Retorna o índice do elemento passado como parâmetro,
// mas procura do último para o primeiro
array.lastIndexOf(2) // 1

// slice - Retorna uma cópia do array, começando pelo índice passado como
// primeiro parâmetro até o índice passado como segundo parâmetro (excluindo o
// índice passado como segundo parâmetro).
array.slice(1, 3) // [2, 3]

// splice - Remove elementos do array, começando pelo índice passado como parâmetro
// contando com o número de elementos passado como segundo parâmetro
array.splice(1, 3) // [2, 3]
console.log(array) // [1, 4, 5]

// reverse - Inverte a ordem dos elementos do array
array.reverse() // [5, 4, 1]

// sort - Ordena os elementos do array
array.sort() // [1, 4, 5]

// join - Retorna uma string com os elementos do array separados por um caractere
array.join('-') // "1-4-5"