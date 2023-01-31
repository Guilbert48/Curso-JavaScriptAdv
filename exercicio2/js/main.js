// Calculo do imc é peso / altura ao quadrado
function global() {
const section = document.querySelector('.countainer')
const resultado = document.querySelector('.resultado')
function calcular(evento){
   evento.preventDefault()
   let alt = document.querySelector('.altura')
   let pes = document.querySelector('.peso')
   let alturaValue = parseFloat(alt.value) 
   let pesoValue = parseFloat(pes.value)
   let res = ((pesoValue) / alturaValue ** 2).toFixed(1)
   let diagnostico = ''

   if(res < 18.5){
      diagnostico = 'Você está abaixo do peso'
   } else if( res >= 18.5 && res <= 24.9){
      diagnostico = 'Você está no peso normal'
   } else if( res >= 25 && res <= 29.9){
      diagnostico = 'Você está com um Sobrepeso'
   } else if( res >= 30 && res <= 34.9){
      diagnostico = 'Você está com obesidade grau 1'
   } else if( res >= 35 && res <= 39.9){
      diagnostico = 'Você está com obesidade grau 2'
   } else if( res > 40){
      diagnostico = 'Você está com obesidade grau 3'
   }

   resultado.innerHTML = `Seu resultado é: ${res}, ${diagnostico}`
}


section.addEventListener('submit', calcular)
}

global()



