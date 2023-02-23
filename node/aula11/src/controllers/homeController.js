exports.paginaInicial = (req, res) => {
    console.log(req.flash('info'))
    res.render('index')
}
exports.trataPost = (req, res) =>{
    res.send('Nova rota de POST')
}