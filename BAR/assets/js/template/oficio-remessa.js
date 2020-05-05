const formOf = () => {
    let tbody = document.getElementById('dados-adquirentes')
    const dados = JSON.parse(localStorage.listaProcessos)
    let linhaTabela = '';
    dados.forEach(dado => {
        linhaTabela += `<tr><td style="width: 25%;">${dado.nome}</td>`
        linhaTabela += `<td style="width: 15%;">${dado.cpf}</td>`
        linhaTabela += `<td style="width: 10%;">${dado.rg}</td>`
        linhaTabela += `<td style="width: 10%;">${dado.numSerie}</td>`
        linhaTabela += `<td style="width: 10%;">${dado.calibre}</td>`
        linhaTabela += `<td style="width: 10%;">${dado.fabricante}</td>`
        linhaTabela += `<td style="width: 20%;">${dado.bar}</td></tr>`
    })
    tbody.innerHTML += linhaTabela
}