import readlineSync from 'readline-sync'

const name = readlineSync.question('Digite seu nome: ')
console.log(`Oi, ${name}!`)