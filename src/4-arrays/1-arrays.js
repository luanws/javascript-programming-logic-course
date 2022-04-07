// Arrays em JavaScript são objetos e podem ser manipulados como se fossem arrays.
// Isso significa que você pode acessar os elementos de um array como se fosse uma matriz
// e também pode acessar os métodos de um array como se fosse um objeto.

// Existem várias maneiras de declarar arrays em JavaScript:

// Com colchetes
const array = ['banana', 'maçã', 'laranja', 'uva', 'pera']

// Com o construtor Array
const array2 = new Array('banana', 'maçã', 'laranja', 'uva', 'pera')

// Com o método Array.of
const array3 = Array.of('banana', 'maçã', 'laranja', 'uva', 'pera')

// Com o método Array.from
const array4 = Array.from(['banana', 'maçã', 'laranja', 'uva', 'pera'])

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
array.push('melancia') // 6
console.log(array) // ['banana', 'maçã', 'laranja', 'uva', 'pera', 'melancia']

// pop - Remove o último elemento do array
array.pop() // 'melancia'
console.log(array) // ['banana', 'maçã', 'laranja', 'uva', 'pera']

// unshift - Adiciona um elemento no início do array
array.unshift('abacaxi') // 7
console.log(array) // ['abacaxi', 'banana', 'maçã', 'laranja', 'uva', 'pera']

// shift - Remove o primeiro elemento do array
array.shift() // 'abacaxi'
console.log(array) // ['banana', 'maçã', 'laranja', 'uva', 'pera']

// indexOf - Retorna o índice do elemento passado como parâmetro
array.indexOf('maçã') // 1

// lastIndexOf - Retorna o índice do elemento passado como parâmetro,
// mas procura do último para o primeiro
array.lastIndexOf('laranja') // 2

// slice - Retorna uma cópia do array, começando pelo índice passado como
// primeiro parâmetro até o índice passado como segundo parâmetro (excluindo o
// índice passado como segundo parâmetro).
array.slice(1, 3) // ['maçã', 'laranja']

// splice - Remove elementos do array, começando pelo índice passado como primeiro parâmetro
// contando com o número de elementos passado como segundo parâmetro.
// Os elementos removidos são retornados.
array.splice(1, 3) // ['maçã', 'laranja', 'uva']
console.log(array) // ['banana', 'pera']

// reverse - Inverte a ordem dos elementos do array
array.reverse() // ['pera', 'banana']

// sort - Ordena os elementos do array
array.sort() // ['banana', 'pera']

// join - Retorna uma string com os elementos do array separados por um caractere
array.join(', ') // 'banana, pera'