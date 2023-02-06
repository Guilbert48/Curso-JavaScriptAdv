// Exercícios básicos de lógica de programação

// 01 - Criar uma função que recebe dois números e retorna o maior deles

const retornaMaior = (n1, n2) => n1 > n2 ? n1 : n2

console.log(retornaMaior(1010, 100))

// 02 - escrever uma função que recebe altura e largura
// retorne true se a imagem estiver no modo paisagem

const ePaisagem = (altura, largura) => largura > altura 
console.log(ePaisagem(100, 5000))

//03 - Escreva uma função que recebe um número e retorna o seguinte
// numero divisivel por 3 = Fizz 
// numero divisivel por 5 = Buzz 
// numero divisivel por 3 e 5 = FizzBuzz
// numero não divisivel por 3 e 5 = NaN
// checar se realmente é um número 
// usar uma função de 0 a 100

function fizzBuzz (numero){
    if(typeof numero !== 'number') return numero
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if(numero % 3 === 0) return 'Fizz'
    if(numero % 5 === 0) return 'Buzz'
    return numero
}

for( let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}