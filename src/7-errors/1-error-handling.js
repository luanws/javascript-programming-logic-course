// Algumas operações podem ocasionar erros.

// Exemplo de código com erro:
// const x = 1
// x = 2

// O erro ocorre porque a variável x é declarada como constante e não pode ser alterada.
// Mas existe uma forma de tratar esse erro.

// Exemplo de código com erro:
console.log('Exemplo 1:')
try {
    const x = 1
    x = 2
    console.log('Deu tudo certo!') // Não vai aparecer, pois o erro ocorreu antes e o bloco try foi ignorado.
} catch (e) {
    console.log('Deu erro, mas foi tratado.') // Vai aparecer, pois quando ocorre um erro, o bloco catch é executado.
} finally {
    console.log('Sempre executa no final.') // Vai aparecer, pois o bloco finally sempre é executado independente do erro ou não.
}

// Exemplo de código sem erro:
console.log('\nExemplo 2:')
try {
    let x = 1
    x = 2
    console.log('Deu tudo certo!') // Vai aparecer, pois o bloco try foi executado com sucesso.
} catch (e) {
    console.log('Deu erro, mas foi tratado.') // Não vai aparecer, pois o bloco catch é executado apenas quando ocorre um erro.
} finally {
    console.log('Sempre executa no final.') // Vai aparecer, pois o bloco finally sempre é executado independente do erro ou não.
}