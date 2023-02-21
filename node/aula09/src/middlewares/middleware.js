module.exports = (req, res, next) => {
    if(req.body.cliente){
        console.log(`VI que você postou ${req.body.cliente}`)
    }
    next()
}