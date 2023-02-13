//Factory functions + prototypes

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}
const falar = {
    falar(){
        console.log(`${this.nome} está falar`)
    }
}
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}

const pessoaPrototype = {...falar, ...comer, ...beber}

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('luiz', 'otavio')
const p2 = criaPessoa('Anne', 'Kyone')

p2.falar()
