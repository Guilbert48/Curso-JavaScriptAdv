//Prototypes
/* const objA ={
    chaveA: 'A'
}
const objB ={
    chaveB: 'B'
}

const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.log(objC.chaveB)
*/

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

//Usando prototype, não precisamos carregar nosso objeto, criando métodos dentro dele

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual /100))
}

const p1 = new Produto('Camiseta', 100)
p1.desconto(10)
console.log(p1.preco)

//Podemos criar um novo objeto e usar as funcionalidades do anterior

const p2 = {
    nome: 'caneca',
    preco: 18
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)
console.log(p2.preco)