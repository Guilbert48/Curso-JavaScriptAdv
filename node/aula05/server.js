//utilizando o express
const express = require('express')
const app = express()
//basicamente estamos falando que queremos receber o rec.body
//com essa expressão nós conseguimos fazer isso
app.use(express.urlencoded({ extended: true }))

//Função get que basicamente só redireciona para alguma rota
app.get('/', (req, res) =>{
    res.send(`
    <form action"/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
} )

//Post já pega algo dentro do corpo do documento
app.post('/', (req, res) =>{
    //È o que vem pro post ao enviar
    console.log(req.body)
    res.send(`O que você me enviou foi ${req.body.nome}`)
})
//Aqui vemos a utilização de parâmetros
//Os que contem interrogação no fim são opcionais

app.get('/testes/:idUsuarios?/:Parametro?', (req, res) =>{
    //o query mostra as chaves que estão sendo digitadas
    //res.send(req.query)
    //res.send é o que vai ser mostrado
    //O .params é basicamente os parametros que estão sendo enviados
    res.send(req.params)
 }) 
app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
})
//Nesta aula foi instalado o nodemon
//Basicamente ele serve pra monitorar nosso servidor e atualizar em tempo real