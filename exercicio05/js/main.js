
function relogioGlobal(){

    function criarHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    
    const relogio = document.querySelector('.timer')
    let segundos = 0
    let timer
    
    //Função responsável por iniciar o timer
    
    function iniciaRelogio (){
           timer = setInterval(() =>{
            segundos++
            relogio.innerHTML = criarHoraDosSegundos(segundos)
        }, 1000)
    }
    
    //Adiciona um evento de click dentro do próprio documento 
    //Com isso capturamos todos os clicks dos botões com apenas uma função 
    
    document.addEventListener('click', (e) =>{
        const element = e.target
    
        if(element.classList.contains('zerar')){
            relogio.classList.remove('pausado')
            clearInterval(timer)
            segundos = 0
            relogio.innerHTML = '00:00:00'
        }
        if(element.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio()
        }
        if(element.classList.contains('pausar')){
            relogio.classList.add('pausado')
            clearInterval(timer)
        }
    })
}

relogioGlobal()