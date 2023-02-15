//Métodos úteis para promises

function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof msg !== 'string') {
                reject('Valor inválido')
                return
            }
            resolve(msg.toUpperCase() + 'Passei na promise')
        }, tempo)
    })
}
const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi( 'promise 3', rand(1, 5)),
    esperaAi(9 , rand(1, 5)),
]

//Pega todas as promessas e entrega resolvidas
Promise.all(promises)
.then(valor =>{
    console.log(valor)
})
.catch(erro =>{
    console.log(erro)
})

//Entrega a promise que for resolvida primeiro
Promise.race(promises)
.then( valor =>{
    console.log(valor)
})
.catch(erro =>{
    console.log(erro)
})