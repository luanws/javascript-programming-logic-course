// Strings em JavaScript são objetos e podem ser manipulados como se fossem arrays.
// Isso significa que você pode acessar os elementos de uma string como se fosse uma matriz.

// Exemplo
const string = 'Hello World'
console.log(string[0]) // 'H'
console.log(string[1]) // 'e'
console.log(string[5]) // ' '
console.log(string[6]) // 'W'

// Métodos importantes de strings

// length - Retorna o tamanho da string
string.length // 11

// split - Divide a string em um array de strings,
// separando-a pelo caractere passado como parâmetro
string.split(' ') // ['Hello', 'World']

// replace - Substitui todas as ocorrências do caractere passado como
// primeiro parâmetro pelo caractere passado como segundo parâmetro
string.replace('World', 'Universe') // 'Hello Universe'