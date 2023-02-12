//Herança 

//Objeto generico com tudo que os outros precisam
//Evita de ter a necessidade de criar várias coisas iguais
function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia 
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia 
}

//Produto.call serve justamente para chamar os atributos do proto de Produto

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}

function Caneca(nome, preco, estampa){
    Produto.call(this, nome, preco)
    this.estampa = estampa
}

function Pc(nome, preco, ram){
    Produto.call(this, nome, preco)
    this.ram = ram
}

Pc.prototype = Object.create(Produto.prototype)
Pc.prototype.constructor = Pc

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

//Podemos adicionar métodos com uma precedencia de execução maior
//Fazendo assim com que execute a que tem mais paternidade na cadeia

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}


const pc = new Pc('Gamer', 3200,'16')
pc.desconto(1000)
console.log(pc)

const caneca = new Caneca('caneca', '18', 'Branca')
console.log(caneca)

const camiseta = new Camiseta('regata', 75, 'Preta')
camiseta.aumento(100)
console.log(camiseta)