// Os operadores aritméticos do JavaScript são:
// + Adição
// - Subtração
// * Multiplicação
// / Divisão
// % Resto da divisão
// = Atribuição
// += Atribuição aditiva
// -= Atribuição subtrativa
// *= Atribuição multiplicativa
// /= Atribuição divisiva
// %= Atribuição resto da divisão
// ++ Incremento
// -- Decremento
// ++i Incremento
// --i Decremento

let a = 1
let b = 2

console.table([
    {
        'Código': 'a + b',
        'Operação': `${a} + ${b}`,
        'Resultado': a + b,
        'a': a,
        'b': b
    },
    {
        'Código': 'a - b',
        'Operação': `${a} - ${b}`,
        'Resultado': a - b,
        'a': a,
        'b': b
    },
    {
        'Código': 'a * b',
        'Operação': `${a} * ${b}`,
        'Resultado': a * b,
        'a': a,
        'b': b
    },
    {
        'Código': 'a / b',
        'Operação': `${a} / ${b}`,
        'Resultado': a / b,
        'a': a,
        'b': b
    },
    {
        'Código': 'a % b',
        'Operação': `${a} % ${b}`,
        'Resultado': a % b,
        'a': a,
        'b': b
    },
    {
        'Código': 'a = b',
        'Operação': `a = ${b}`,
        'Resultado': a = b,
        'a': a,
        'b': b
    },
    {
        'Código': 'a += b',
        'Operação': `a = ${a} + ${b}`,
        'Resultado': a += b,
        'a': a,
        'b': b
    },
    {
        'Código': 'a -= b',
        'Operação': `a = ${a} - ${b}`,
        'Resultado': a -= b,
        'a': a,
        'b': b
    },
    {
        'Código': 'a *= b',
        'Operação': `a = ${a} * ${b}`,
        'Resultado': a *= b,
        'a': a,
        'b': b
    },
    {
        'Código': 'a /= b',
        'Operação': `a = ${a} / ${b}`,
        'Resultado': a /= b,
        'a': a,
        'b': b
    },
    {
        'Código': 'a %= b',
        'Operação': `a = ${a} % ${b}`,
        'Resultado': a %= b,
        'a': a,
        'b': b
    },
    {
        'Código': 'a++',
        'Operação': `a = ${a} + 1`,
        'Resultado': a++,
        'a': a,
        'b': b
    },
    {
        'Código': 'a--',
        'Operação': `a = ${a} - 1`,
        'Resultado': a--,
        'a': a,
        'b': b
    },
    {
        'Código': '++a',
        'Operação': `a = ${a} + 1`,
        'Resultado': ++a,
        'a': a,
        'b': b
    },
    {
        'Código': '--a',
        'Operação': `a = ${a} - 1`,
        'Resultado': --a,
        'a': a,
        'b': b
    }
])