const express = require('express')
const route = express.Router()
//Import dos controllers
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')
const sobreController = require('./controllers/sobreController')

//Rotas da home
route.get('/', homeController.paginaInicial )
route.post('/', homeController.trataPost)

//Rotas de contato
route.get('/contato', contatoController.paginaInicial)

//Rotas de sobre
route.get('/sobre', sobreController.paginaInicial)

module.exports = route