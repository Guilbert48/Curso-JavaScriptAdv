const express = require('express')
const app = express()

// Essas são as operações que tendemos a usar em uma API
//         CRIAR    LER  ATUALIZAR  APAGAR
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST     GET  PUT        DELETE

//Primeiro parametro é a rota, segundo parametro é uma função a ser executada
app.get('/', (req, res) =>{
    res.send(`
    <form action"/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
} )

//O verbo post seria para criar alguma coisa
//Geralmente mandar dados no corpo da requisição
app.post('/', (req, res) =>{
    res.send('recebi o formulário')
})
app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato conosco')
})
//Indicamos em qual porta queremos que o express escute e responda
app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
})
