//Polimorfismo

function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
function ContaP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaP.prototype = Object.create(Conta.prototype)
ContaP.prototype.constructor = ContaP


ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}


Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

const conta = new Conta(221, 1082012, 2500)
conta.sacar(2000)
conta.depositar(3000)
conta.sacar(4000)
console.log(conta)

const cc = new ContaCorrente(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(110)

const cp = new ContaP(12, 33, 0)
cp.depositar(10)
cp.sacar(110)