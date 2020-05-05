const procurarFornecedor = (nome, processo) => {
    let listaFornecedores = document.getElementById(`lista-fornecedores-${processo}`);
    listaFornecedores.innerHTML = ''
    if (nome.trim().length) {
        listaFornecedores.innerHTML += buscarFornecedores(nome, processo)
    }
}

const preencherInformacoesFornecedor = (processo, id) => {
    document.getElementById(`lista-fornecedores-${processo}`).innerHTML = '';
    const FORNECEDOR = FORNECEDORES.find(forne => forne._id === id)
    document.getElementById('fornecedor-' + processo).value = FORNECEDOR.nome
    document.getElementById('end-fornecedor-' + processo).value = FORNECEDOR.endereco
    document.getElementById('cnpj-' + processo).value = FORNECEDOR.cnpj
}

const criarFornecedor = processo => {
    const fornecedor = pegar('fornecedor', processo).toUpperCase()
    if (!existeFornecedor(fornecedor) && fornecedor.length) {
        const FORNECEDOR = {
            nome: fornecedor,
            endereco: pegar('end-fornecedor', processo),
            cnpj: pegar('cnpj', processo)
        }

        createFornecedor(FORNECEDOR)
    }
}
