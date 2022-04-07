// O JavaScript não permite lançar exceções através do throw.

// Exemplo:
// throw new Error('Error')

// Exemplo de caso de uso:
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero')
    }
    return a / b
}
console.log(divide(10, 2)) // 5
console.log(divide(10, 0)) // Error: Division by zero