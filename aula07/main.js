//Constructor functions

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = () => console.log(`${this.nome}: sou um método`)
}

const p1 = new Pessoa('André', 'Carlos')
console.log(p1.metodo())