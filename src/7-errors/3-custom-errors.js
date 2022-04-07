// Em JavaScript, podemos criar nossos próprios erros
// caso não existam na biblioteca padrão.

// Por exemplo, podemos criar um erro para validar se um CPF tem 11 dígitos.
// Caso o CPF não tenha 11 dígitos, o erro será lançado.

// A classe CpfError abaixo representa um erro que será lançado quando o CPF
// não possuir 11 dígitos.
class CpfError extends Error {
    constructor(message) {
        super(message)
        this.name = 'CpfError'
    }
}

// A função validateCpf abaixo recebe um CPF e verifica se ele possui 11 dígitos.
// Caso não possua, o erro CpfError será lançado.
// Se o CPF possuir 11 dígitos, a função exibe uma mensagem de sucesso.
function validateCpf(cpf) {
    if (cpf.length !== 11) {
        throw new CpfError(`O CPF ${cpf} deve ter 11 dígitos`)
    }
    console.log(`O CPF ${cpf} é válido`)
}

const correctCpf = '12345678901'
const incorrectCpf = '123456789'

validateCpf(correctCpf)
validateCpf(incorrectCpf)