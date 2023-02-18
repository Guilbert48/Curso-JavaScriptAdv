const express = require('express')
const app = express()
app.get('/', (req, res) =>{
    res.send(`
    <form action"/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
} )

app.post('/', (req, res) =>{
    res.send('recebi o formulário')
})
app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato conosco')
})
app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
})
//Nesta aula foi instalado o nodemon
//Basicamente ele serve pra monitorar nosso servidor e atualizar em tempo real