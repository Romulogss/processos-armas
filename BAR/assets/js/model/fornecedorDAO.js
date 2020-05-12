let FORNECEDORES;
const buscarFornecedores = (nome, processo) => {
    let fornecedores = ''
    FORNECEDORES.forEach(fornecedor => {
        if (fornecedor.nome.startsWith(nome.toUpperCase())) {
            fornecedores += `
            <li class="list-group-item" onclick="preencherInformacoesFornecedor(${processo},'${fornecedor._id}')">${fornecedor.nome} | ${fornecedor.cnpj}</li>
            `
        }
    })
    return fornecedores
}

const existeFornecedor = cnpj => {
    let result = false;
    FORNECEDORES.forEach(fornecedor => {
        if (fornecedor.cnpj === cnpj) result = true
    })
    return result
}

const getFornecedores = () => {
    const query = `
        query {
            fornecedores {
                _id
                nome
                endereco
                cnpj
            }
        }
    `
    return Graphql.exec(query)
}

const popularFornecedores = () => getFornecedores().then(({ data: { fornecedores } }) => FORNECEDORES = fornecedores)

const createFornecedor = novoFornecedor => {
    const query = `
        mutation(
            $nome: String!,
            $endereco: String!,
            $cnpj: String!
        ) {
            createFornecedor(data: {
                nome: $nome,
                endereco: $endereco,
                cnpj: $cnpj
            }) {
                _id
            }
        }
    `
    Graphql.exec(query, novoFornecedor)
        .then(() => popularFornecedores())
}