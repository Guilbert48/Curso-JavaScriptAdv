//axios
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))

function carregaElementosNaPagina(json){
    const tabela = document.createElement('table')
    for(let pessoa of json){
        const tr = document.createElement('tr')

        const td1 = document.createElement('td')
        td1.innerHTML = pessoa.nome
        tr.appendChild(td1)
        const td2 = document.createElement('td')
        td2.innerHTML = pessoa.estado
        tr.appendChild(td2)
        const td3 = document.createElement('td')
        td3.innerHTML = pessoa.idade
        tr.appendChild(td3)

        tabela.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(tabela    )
}
