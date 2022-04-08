// Promessas são objetos que representam uma operação assíncrona.
// O construtor da promessa recebe uma função como parâmetro cujos parâmetros são resolve e reject.
// resolve é chamado quando a operação é concluída com sucesso.
// reject é chamado quando a operação é cancelada ou falhou.

new Promise((resolve, reject) => {
    resolve('Promessa resolvida')
    reject('Promessa rejeitada')
}).then(result => {
    console.log('Estou no then')
    console.log(result)
}).catch(error => {
    console.log('Estou no catch')
    console.log(error)
}).finally(() => {
    console.log('Estou no finally')
})

// Exemplo de uso:

// A função waitForSeconds retorna uma promessa que será resolvida
// após o tempo informado.
function waitForSeconds(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

waitForSeconds(3).then(() => {
    console.log('Estou depois de 3 segundos')
})

// Mesmo sendo invocada depois, a função abaixo é executada primeiro,
// pois as funções são executadas paralelamente.
waitForSeconds(2).then(() => {
    console.log('Estou depois de 2 segundos')
})

waitForSeconds(1).then(() => {
    console.log('Estou depois de 1 segundos')
})