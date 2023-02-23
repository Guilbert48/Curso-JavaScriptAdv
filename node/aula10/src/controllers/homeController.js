const HomeModel = require('../models/HomeModel')
HomeModel.create({
    titulo: 'Segundo teste',
    descrição: 'Segundo teste na base dados'
}) .then(dados => console.log(dados))
.catch( e => console.log(e))

HomeModel.find()
.then(dados => console.log(dados))

exports.paginaInicial = (req, res) => {
    res.render('index')
}
exports.trataPost = (req, res) =>{
    res.send('Nova rota de POST')
}