//Herança nas classes
class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado) {
            console.log('Dispositivo já ligado')
            return
        } 
        this.ligado = true
        console.log(`${this.nome} já ligadob`)
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} desligado`)
        }
        this.ligado = false
    }

}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

const d1 = new Smartphone('Celular', 'preto', '13 pro')
d1.ligar()
console.log(d1)