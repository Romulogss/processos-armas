const procurarFornecedor = (nome, processo) => {
    let listaFornecedores = document.getElementById(`lista-fornecedores-${processo}`);
    listaFornecedores.innerHTML = ''
    if (nome.trim().length) {
        listaFornecedores.innerHTML += buscarFornecedores(nome, processo)
    }
}

const preencherInformacoesFornecedor = (processo, id) => {
    try {
        document.getElementById(`lista-fornecedores-${processo}`).innerHTML = '';
        const FORNECEDOR = FORNECEDORES.find(forne => forne._id === id)
        document.getElementById('fornecedor-' + processo).value = FORNECEDOR.nome
        document.getElementById('end-fornecedor-' + processo).value = FORNECEDOR.endereco
        document.getElementById('cnpj-' + processo).value = FORNECEDOR.cnpj
    } catch (error) {
        console.log(error)
    }
}
/**
 * Função ira verificar se o cnpj naquele processo já está no banco,
 * se não estive será criado um novo forncedor com os dados do processo
 * @param {number} processo Número no final do id do elemento
 */
const criarFornecedor = processo => {
    const cnpj = pegar('cnpj', processo).toUpperCase()
    if (!existeFornecedor(cnpj) && cnpj.length) {
        const FORNECEDOR = {
            nome: pegar('fornecedor', processo),
            endereco: pegar('end-fornecedor', processo),
            cnpj
        }

        createFornecedor(FORNECEDOR)
    }
}
