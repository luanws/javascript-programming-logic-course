// O reduce retorna um valor com o resultado da função passada como parâmetro
// para cada elemento do array (começando pelo primeiro elemento).
// A função passada como parâmetro é composta de dois parâmetros:
// Um acumulador e o elemento atual.
// O acumulador é o valor que será retornado pela função reduce.
// O elemento atual é o elemento que está sendo processado atualmente.

const array = [1, 2, 3, 4, 5]
array.reduce((accumulator, element) => accumulator + element, 0) // 15

// Como segundo parâmetro podemos adicionar um valor inicial para o acumulador
array.reduce((accumulator, element) => accumulator + element, 1) // 16