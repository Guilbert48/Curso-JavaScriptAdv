//utilizando o express
const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))
//Nossos proprios middlewares
app.use(meuMiddleware)
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine','ejs')

app.use(routes)

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
})
