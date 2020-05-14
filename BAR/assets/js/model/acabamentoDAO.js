let ACABAMENTOS = [];

const getAcabamentos = () => {
    const query = `
        {
            acabamentos {
                _id
                nome
            }
        }
    `
    return Graphql.exec(query)
}

const popularAcabamentos = () => getAcabamentos().then(({ data: { acabamentos } }) => ACABAMENTOS = acabamentos)

const buscarAcabamento = (acabamentoBusca, processo) => {
    let acabamentos = ''
    ACABAMENTOS.forEach(acabamento => {
        if (acabamento.nome.toLowerCase().startsWith(acabamentoBusca.toLowerCase())) {
            acabamentos += `
            <li class="list-group-item" onclick="preencherInformacoesAcabamento(${processo},'${acabamento._id}')">${acabamento.nome}</li>
            `
        }
    })
    return acabamentos;
}

const existeAcabamento = id => ACABAMENTOS.find(acabamento => acabamento._id === id) ? true : false

const createAcabamento = novoAcabemento => {
    const query = `
        mutation($nome: String!) {
            createAcabamento(data: {
                nome: $nome
            }) {
                _id
            }
        }
    `
    Graphql.exec(query, novoAcabemento).then(result => console.log(result))
}