//Métodos estáticos

class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume(){
        this.volume += 2 
    }
    diminuirVolume(){
        this.volume -= 2 
    }

    static soma(x, y){
        return x + y
    }
}
console.log(ControleRemoto.soma(2, 4))
const controle1 = new ControleRemoto('Lg')
