//utilizando o express
require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('pronto')
    }).catch(e => console.log(e) )

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const { Store } = require('express-session')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'jaishjuahd93849234+08923841=-9983',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash())
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine','ejs')

app.use(routes)
app.on('pronto', () =>{
    app.listen(3000, () =>{
        console.log('Acessar http://localhost:3000')
        console.log('servidor executando na porta 3000')
    })
})
