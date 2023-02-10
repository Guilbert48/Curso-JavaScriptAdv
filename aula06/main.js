
//Factory function
//Chamando funções de dentro de objetos

function criaPessoa(nome, a, p) {
    return {
        nome,
        fala: function(assunto){
            return `${this.nome} está ${assunto}`
        },
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso / (this.altura**2)
            return `${this.nome} tem o imc: ${indice.toFixed(2)}`
        }
    }
}

const p1 = criaPessoa('Guilbert', 1.89, 92)
console.log(p1.fala('falando de js'))
const p2 = criaPessoa('Maria', 1.5, 70)

console.log(p1.imc())
console.log(p2.imc())