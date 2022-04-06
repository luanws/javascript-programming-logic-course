// Existem 3 maneiras de declarar funções em JavaScript
// função, função arrow e função anônima

// Função
function sum(a, b) {
    return a + b
}

// Funções podem receber um parâmetro com valor padrão
function sumWithDefault(a, b = 1) {
    return a + b
}

sumWithDefault(2, 9) // 11
sumWithDefault(2) // 3