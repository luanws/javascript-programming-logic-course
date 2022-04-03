// Conversão de tipos em JavaScript
// O JavaScript possui uma série de funções para converter tipos de dados.
// Para converter um valor de um tipo para outro, basta usar a função correspondente.

// Converter para string
console.log(String(1000)) // "1000"
console.log(String(true)) // "true"
console.log(String(false)) // "false"
console.log(String(null)) // "null"
console.log(String(undefined)) // "undefined"

// Converter para número
console.log(Number('1000')) // 1000
console.log(Number(true)) // 1
console.log(Number(false)) // 0

// Converter para número inteiro
console.log(parseInt('1000')) // 1000
console.log(parseInt('1000.00')) // 1000
console.log(parseInt('1000.50')) // 1000

// Converter para boolean
console.log(Boolean(1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean('')) // false
console.log(Boolean(' ')) // true
console.log(Boolean('0')) // true
console.log(Boolean('false')) // true

// Conversões especiais para formatação de números

// Converter um número para string com duas casas decimais
console.log((1000).toFixed(2)) // "1000.00"

// Converter um número para string com duas casas decimais com separador de milhar
console.log((1000).toLocaleString('pt-BR')) // "1.000,00"

// Converter um número para string com duas casas decimais com separador de milhar e moeda
console.log((1000).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })) // "R$ 1.000,00"