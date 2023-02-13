class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} esta falando`)
    }
}

const p1 = new Pessoa('Guil', 'Silva')
const p2 = new Pessoa('as', 'Silvaas')
const p3 = new Pessoa('Gqw', 'Siqweqlva')
const p4 = new Pessoa('qwrl', 'qwe')
const p5 = new Pessoa('Gqwel', 'Silva')
p1.falar()
p2.falar()
p3.falar()
p4.falar()
p5.falar()