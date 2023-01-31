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

   if(!pesoValue){
      alert('Peso inválido, digite novamente')
      return
   }
   if(!alturaValue){
      alert('Altura inválida, digite novamente')
      return
   }
   const nivel = [
      'Abaixo do peso',
      'Peso normal',
      'Sobrepeso',
      'Obesidade grau 1',
      'Obesidade grau 2',
      'Obesidade grau 3'
   ]

   if (res >= 39.9){
      diagnostico = nivel[5]
   } else if( res >= 34.9){
      diagnostico = nivel[4]
   } else if( res >= 29.9){
      diagnostico = nivel[3]
   } else if( res >= 24.9){
      diagnostico = nivel[2]
   } else if( res >= 18.5){
      diagnostico = nivel[1]
   } else if( res < 18.5){
      diagnostico = nivel[0]
   }

   resultado.innerHTML = `Seu resultado é: ${res} (${diagnostico})`
}


section.addEventListener('submit', calcular)
}

global()



