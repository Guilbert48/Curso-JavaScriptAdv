// Async e Await

function rand(min=0, max=3){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof msg !== 'string') {
                reject('Caí no erro')
                return
            }
            resolve(msg.toUpperCase() + ' Passei na promise')
        }, tempo)
    })
}

// Esse tipo de código é bem verboso
//podemos melhorar usando async e await

/* esperaAi('fase 1', rand())
.then(resp => {
    console.log(resp)
    return(esperaAi('fase 2', rand()))
})
.then(resp => {
    console.log(resp)
    return(esperaAi('fase 3', rand()))
})
.then(resp => console.log(resp))
.catch(e => console.log(e)) ]
*/

async function executa(){
    try{
        const fase1 = await esperaAi('fase 1', rand())
        console.log(fase1)
        const fase2 = await esperaAi( 2, rand())
        console.log(fase2)
        const fase3 = await esperaAi('fase 3', rand())
        console.log(fase3)
        const fase4 = await esperaAi('fase 4', rand())
        console.log(fase4)
    } catch(e){
        console.log(e)
    }
}
executa()