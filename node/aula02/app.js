//aqui indicamos onde queremos ter esse arquivo, a partir da pasta q estamos
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')
/* const pessoas = [
    {nome: 'joão'},
    {nome: 'maria'},
    {nome: 'carlos'},
    {nome: 'alice'},
    {nome: 'carla'},
    {nome: 'anne'},
    {nome: 'mateus'},
] 
const json = JSON.stringify(pessoas, '', 2)
escreve(caminhoArquivo, json)
*/
//Converte o arquivo para json
async function lerArquivo(caminho){
    const dados = await ler(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach( val => console.log(val))
}

lerArquivo(caminhoArquivo)