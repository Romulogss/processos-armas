let FORNECEDORES;
const buscarFornecedores = (nome, processo) => {
    let fornecedores = ''
    FORNECEDORES.forEach(fornecedor => {
        if (fornecedor.nome.includes(nome.toUpperCase())) {
            fornecedores += `
            <li class="list-group-item" onclick="preencherInformacoesFornecedor(${processo},'${fornecedor._id}')">${fornecedor.nome} | ${fornecedor.cnpj}</li>
            `
        }
    })
    return fornecedores
}

const existeFornecedor = cnpj => FORNECEDORES.find(fornecedor => fornecedor.cnpj === cnpj) ? true : false

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
    console.log('criou')
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
        .then(() => {
            popularFornecedores()
            console.log('criou')
        })
}