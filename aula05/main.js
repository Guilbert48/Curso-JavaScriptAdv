//Mostra a hora atual

function mostraHora (){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {hour12: false})
}

//Pega a hora capturada e executa a cada segundo

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)

//Define o tempo de parada do seu contador

setTimeout(function(){
    clearInterval(timer)
    console.log('Fim dos 3 segundos')
}, 3000)

//Podemos definir tempos especícos para mostrar algo

setTimeout(function(){
    console.log('Olá Mundo!')
}, 5000)