// O for of é um loop que percorre os elementos de um array ou objeto.

const fruits = ['apple', 'banana', 'orange', 'grape', 'peach', 'strawberry']

console.log('\nFrutas com for of:')
for (let fruit of fruits) {
    console.log(fruit)
}

// Equivalente ao for normal:
console.log('\nFrutas com for normal:')
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}