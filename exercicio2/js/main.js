// Calculo do imc é peso / altura ao quadrado
function global() {
const section = document.querySelector('.countainer')

function calcular(evento){
   evento.preventDefault()
   let alt = document.querySelector('.altura')
   let pes = document.querySelector('.peso')
   
   console.log(`${parseint(alt.value), parseInt(pes.value)}`)
}

section.addEventListener('submit', calcular)

}

global()



