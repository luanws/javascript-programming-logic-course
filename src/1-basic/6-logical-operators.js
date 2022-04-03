// Os operadores lógicos do JavaScript são:
// && E
// || OU
// ! NÃO
// > MAIOR
// < MENOR
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL
// == IGUAL
// != DIFERENTE
// === EXATAMENTE IGUAL
// !== EXATAMENTE DIFERENTE

// &&
// && é um operador lógico que retorna verdadeiro se ambas as expressões forem verdadeiras.

console.log(false && false) // false
console.log(false && true) // false
console.log(true && false) // false
console.log(true && true) // true

// ||
// || é um operador lógico que retorna verdadeiro se uma das expressões forem verdadeiras.

console.log(false || false) // false
console.log(false || true) // true
console.log(true || false) // true
console.log(true || true) // true

// !
// ! é um operador lógico que retorna verdadeiro se a expressão for falsa.

console.log(!false) // true
console.log(!true) // false

// >
// > é um operador lógico que retorna verdadeiro se o primeiro valor for maior que o segundo.

console.log(1 > 2) // false
console.log(2 > 1) // true
console.log(2 > 2) // false

// <
// < é um operador lógico que retorna verdadeiro se o primeiro valor for menor que o segundo.

console.log(1 < 2) // true
console.log(2 < 1) // false
console.log(2 < 2) // false

// >=
// >= é um operador lógico que retorna verdadeiro se o primeiro valor for maior ou igual ao segundo.

console.log(1 >= 2) // false
console.log(2 >= 1) // true
console.log(2 >= 2) // true

// <=
// <= é um operador lógico que retorna verdadeiro se o primeiro valor for menor ou igual ao segundo.

console.log(1 <= 2) // true
console.log(2 <= 1) // false
console.log(2 <= 2) // true

// ==
// == é um operador lógico que retorna verdadeiro se os dois valores forem iguais.

console.log(1 == 2) // false
console.log(2 == 2) // true
console.log(2 == '2') // true

// !=
// != é um operador lógico que retorna verdadeiro se os dois valores forem diferentes.

console.log(1 != 2) // true
console.log(2 != 2) // false
console.log(2 != '2') // false

// ===
// === é um operador lógico que retorna verdadeiro se os dois valores forem iguais e do mesmo tipo.

console.log(1 === 2) // false
console.log(2 === 2) // true
console.log(2 === '2') // false

// !==
// !== é um operador lógico que retorna verdadeiro se os dois valores forem diferentes ou do tipo diferente.

console.log(1 !== 2) // true
console.log(2 !== 2) // false
console.log(2 !== '2') // true