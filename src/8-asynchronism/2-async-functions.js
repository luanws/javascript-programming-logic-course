// Funções assíncronas sempre retornam uma promessa e também
// são executadas em paralelo e de forma assíncrona.

// A função abaixo é idêntica a do arquivo anterior.
// Ela retorna uma promessa que será resolvida após o tempo informado.
function waitForSeconds(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

// Mas chamaremos a função waitForSeconds através de uma função assíncrona.

async function asyncFunctionExample() {
    console.log('Estou no segundo 0')
    await waitForSeconds(1)
    console.log('Estou no segundo 1')
    await waitForSeconds(1)
    console.log('Estou no segundo 2')
    await waitForSeconds(1)
    console.log('Estou no segundo 3')
}
asyncFunctionExample()

// O await só pode ser usado dentro de funções assíncronas.

async function asyncFunctionExample2() {
    await waitForSeconds(4)
    const result = await new Promise((resolve, reject) => {
        resolve('Promessa resolvida')
    })
    console.log(result)
}
asyncFunctionExample2()