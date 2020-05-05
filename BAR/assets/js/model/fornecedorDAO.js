let FORNECEDORES;
const buscarFornecedores = (nome, processo) => {
    let fornecedores = ''
    console.log(FORNECEDORES)
    FORNECEDORES.forEach(fornecedor => {
        if (fornecedor.nome.startsWith(nome.toUpperCase())) {
            fornecedores += `
            <li class="list-group-item" onclick="preencherInformacoesFornecedor(${processo},'${fornecedor._id}')">${fornecedor.nome}</li>
            `
        }
    })
    return fornecedores
}

const existeFornecedor = fornecedor => {
    let result = false;
    FORNECEDORES.forEach(f => {
        if (f.nome.toUpperCase() === fornecedor.toUpperCase()) result = true
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