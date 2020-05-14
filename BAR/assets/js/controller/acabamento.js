const procurarAcabamento = (nome, processo) => {
    let listaAcabamento = document.getElementById('lista-acabamento-' + processo);
    listaAcabamento.innerHTML = '';
    if(nome.trim().length) {
        listaAcabamento.innerHTML += buscarAcabamento(nome, processo);
    }
}

const preencherInformacoesAcabamento = (processo, id) => {
    try {
        document.getElementById('lista-acabamento-' + processo).innerHTML = ''
    } catch (error) {
        console.log(erro)
    }
    const ACABAMENTO = ACABAMENTOS.find(acabamento => acabamento._id === id)
    document.getElementById(`acabamento-${processo}`).value = ACABAMENTO.nome;
}